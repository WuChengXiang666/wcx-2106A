import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router