import { createRouter, createWebHistory } from 'vue-router'
import BuDrill1 from '@/drills/buf/BuDrill1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'drill1',
      component: BuDrill1
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    }
  ]
})

export default router
