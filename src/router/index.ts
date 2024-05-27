import { createRouter, createWebHistory } from 'vue-router'
import DrillsPage from '../pages/DrillsPage.vue'
import DrillSetPage from '../pages/DrillSetPage.vue'
import MainMenuPage from '../pages/MainMenuPage.vue'
import ResultsPage from '../pages/ResultsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainMenuPage
    },
    {
      path: '/drill/:id',
      name: 'drills',
      component: DrillsPage
    },
    {
      path: '/set/:setId',
      name: 'DrillSet',
      component: DrillSetPage
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsPage
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
