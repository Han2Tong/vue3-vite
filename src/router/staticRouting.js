const staticRouting = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/login',
        name:'login',
        component:()=>import('./../views/common/Login.vue'),
        meta:{
            title:'登录'
        },
    }
]

export default staticRouting;
