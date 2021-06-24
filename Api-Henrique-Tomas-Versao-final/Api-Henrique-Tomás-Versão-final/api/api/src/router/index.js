import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Produto.vue'
import AdminInsere from '../views/AdminInsere.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Teste from '../views/Teste.vue'
import Error from '../views/Error.vue'
import Adminpage from '../views/Adminpage.vue'
import Cervejas from '../views/Cervejas.vue'
import HelloWorld from '../views/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Produto', ///:id',
    props : true,
    name: 'Produto',
    component: Produto
  },
  {
    path: '/AdminInsere',
    name: 'AdminInsere',
    component: AdminInsere,
    meta:{
      requireAuth: true,
    },
  },
  {
    path: '/Adminpage',
    name: 'Adminpage',
    component: Adminpage,
    meta:{
      requireAuth: true,
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Teste',
    name: 'Teste',
    component: Teste
  },
  {
    path: '/Cervejas',
    name: 'Cervejas',
    component: Cervejas
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next)=>{

//   const requireAuth = to.matched.some(record => record.meta.requireAuth);
//   if (requireAuth) { next('/Administrador');} else{ next();}
// });

// firebase.auth().signOut().then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

export default router
