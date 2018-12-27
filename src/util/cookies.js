class Cookies {

    setCookie(c_name, value, expiredays) { //设置cookie函数
        let exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) +
            ((!expiredays) ? "" : ";expires=" + exdate.toGMTString()); //+ ';domain=' + Cookie_Domain + '; path=/';
    }

    getCookie(name) {
        let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr) return unescape(arr[2]);
        return null;
    }

    deleteCookie(name) { //删除cookie
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.getCookie(name);
        if (cval) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

export default new Cookies;