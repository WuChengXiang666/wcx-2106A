import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/family',
    name: 'family',
    component: () => import('../views/family.vue')
  },
  {
    path: '/associated',
    name: 'associated',
    component: () => import('../views/associated.vue')
  },
  {
    path: '/signing',
    name: 'signing',
    component: () => import('../views/signing.vue')
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import('../views/submit.vue')
  },
  {
    path: '/a7',
    name: 'a7',
    component: () => import('../views/a7.vue')
  },
  {
    path: '/a8',
    name: 'a8',
    component: () => import('../views/a8.vue')
  },{
    path: '/',
    name: 'management',
    component: () => import('../views/management.vue')
  }

]
management
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router