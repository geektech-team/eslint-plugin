const
    Koa = require('koa'),
    Path = require('path'),
    Views = require('koa-views'),
    koaBody = require('koa-body'),
    Static = require('koa-static'),
    pipe = require('./server/pipe'),
    app = new Koa();

app
    .use(Static(Path.resolve(__dirname, './dist'), {
        maxage: 60 * 60 * 1000 * 24 //one day cache
    }))
    .use(Views(Path.resolve(__dirname, './dist')))
    .use(koaBody())
    .use(async (ctx, next) => {
        if (ctx.originalUrl.includes('/v1', 0)) {
            await pipe(ctx, next);
        } else {
            await ctx.render('/');
        }
    })
    .listen(5000, err => {
        if (err) throw err;
        console.info(`listening on port ${5000}`);
    });