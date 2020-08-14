import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Videos from '../views/Videos.vue'

import VideoView from '@/components/Videos/VideoView'
import VideoList from '@/components/Videos/VideoList'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'Video',
    component: Videos,
    children:[
      { path:'view/:id', component: VideoView },
      { path:'search/:name', component: VideoList },
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
