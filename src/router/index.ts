import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MovieHome from '../views/MovieHome.vue'
import MovieDetail from '../views/MovieDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MovieHome
  },
  {
    path:'/movie/:id',
    name: 'movie',
    component: MovieDetail
  }
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
