import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from './util/cookies'

Vue.use(VueRouter)

let routers = new VueRouter({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      // meta: {
      //   auth: true
      // }
      beforeEnter(to, from, next) {
        // react to route changes...
        // don't forget to call next()
        if (Cookies.getCookie('token')) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
});

// routers.beforeResolve((to, from, next) => {
//   //根据字段判断是否路由过滤
//   console.log(to, from)
//   if (to.meta.auth) {
//     if (Cookies.getCookie('token')) {
//       next()
//     } else {
//       //防止无限循环
//       if (to.name === 'login') {
//         next();
//         return
//       }
//       next('/login');
//     }
//   } else {
//     next() //若点击的是不需要验证的页面,则进行正常的路由跳转
//   }
// });

export default routers;