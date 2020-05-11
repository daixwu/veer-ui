import Vue from 'vue'
import VueRouter from 'vue-router'
import Button from '../views/button.vue'
import Radio from '../views/radio.vue'
import RadioGroup from '../views/radio-group.vue'
import Video from '../views/video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/RadioGroup',
    name: 'RadioGroup',
    component: RadioGroup
  },
  {
    path: '/video',
    component: Video
  }
  // {
  //   path: '/Button',
  //   name: 'Button',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
