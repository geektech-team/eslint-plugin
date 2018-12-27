const http = require('http');

module.exports = async ctx => {
    return new Promise((resolve, reject) => {
        const {
            request,
        } = ctx;
        const options = {
            host: 'localhost',
            port: 5500,
            path: request.url,
            method: request.method,
            headers: request.header
        };
        const data = JSON.stringify(request.body || {});
        options.headers['Content-Length'] = new Buffer.from(data).length;
        const req = http.request(options, resolve);
        if (data) {
            req.write(data);
        }
        req.on('error', reject);
        req.end();
    }).then(async res=>{
        return new Promise((resolve,reject)=>{
            res.on('data', async (data)=>{
                resolve({res,data:JSON.parse(data)})
            })
            res.on('error', reject);
        })
    }).then(({res,data}) => {
        if (data.redirect) {
            ctx.redirect(data.redirect);
        }else{
            Object.keys(res.headers).forEach((key) => {
                ctx.response.set(key, res.headers[key]);
            });
            ctx.body = data;
        }
    }).catch(e => {
        ctx.body = {
            status: 0,
            message: 'Remote Server Error'
        }
        throw e;
    });
};