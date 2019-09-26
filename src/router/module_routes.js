import AUTHO from '../services/auth'
let beforeEnter = (to, from, next) => {
// //TODO Redirect if no token when token is required in meta.tokenRequired
// AUTHO.currentPath = to.path
// let userID = parseInt(localStorage.getItem('account_id'))
// let token = localStorage.getItem('usertoken')
// if(token !== null && userID > 0){
//     if(to.path === '/' || to.path === '/'){}
// }
next()
}
var devRoutes = []
let app = require('router/app.js')
devRoutes = devRoutes.concat(app.default.routes) 
for (let x = 0; x < devRoutes.length; x++){
    devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    {
        path: '/',
        name: 'home',
        component: resolve =>require(['../modules/basic/Login.vue'],resolve),
        beforeEnter:beforeEnter
    }
]
routes = routes.concat(devRoutes)
export default{
    routes: routes
}