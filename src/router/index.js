import Vue from 'vue'
import VueRouter from 'vue-router'

import Videos from '../views/Videos.vue'

import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Register from '@/components/Account/Register'
import Report from '@/components/Report'

import VideoView from '@/components/Videos/VideoView'
import VideoList from '@/components/Videos/VideoList'
import VideosFav from '@/components/Videos/VideosFav'

import CGV from '@/views/CGV';

import VideoProposal from '@/components/Account/VideoProposal'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: VideoList
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cgv',
    name: 'cgv',
    component: CGV
  },
  {
    path: '/signin',
    name: 'signin',
    component: Register
  },
  {
    path: '/report/:id',
    name: 'report',
    component: Report
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    children:[
      {path:'proposal', component: VideoProposal},
    ]
  },
  {
    path: '/videos',
    name: 'Video',
    component: Videos,
    children:[
      { path:'view/:id', component: VideoView },
      { path:'search/:key', component: VideoList },
      { path:'trend', component: VideoList },
      { path:'favorites', component: VideosFav },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
