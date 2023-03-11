import {createRouter,createWebHashHistory} from 'vue-router'
import staticRouting from './staticRouting'
const routes = staticRouting

const router = createRouter({
    routes:routes,
    history:createWebHashHistory()
})

//挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//     //修改页面title
//     if(to.meta.title){
//         document.title = "后台管理系统-" +to.meta.title
//     }
//     //放行登录页面
//     if(to.path === '/login'){
//         return next
//     }
//     //获取token
//     const token = sessionStorage.getItem('token')
//     if(!token){
//         return next('/login')
//     }else{
//         return next()
//     }
// })

export default router
