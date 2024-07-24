import { createRouter, createWebHistory } from 'vue-router'
import DrillsPage from '../pages/DrillsPage.vue'
import DrillSetPage from '../pages/DrillSetPage.vue'
import MainMenuPage from '../pages/MainMenuPage.vue'
import ResultsPage from '../pages/ResultsPage.vue'
import TableComponent from '../components/TableComponent.vue'
import DummyPage from '../pages/DummyPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import UserAuth from '../pages/UserAuth.vue'
import ScoreHistory from '../pages/ScoreHistory.vue'

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
      path: '/auth',
      name: 'auth',
      component: UserAuth
    },
    {
      path: '/history',
      name: 'history',
      component: ScoreHistory
    },
    {
      path: '/table',
      name: 'pooltable',
      component: TableComponent
    },
    {
      path: '/dummy',
      name: 'dummy',
      component: DummyPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/:notFound(.*)',
      name: 'not-found',
      component: NotFoundPage
    }
  ]
})
export default router
