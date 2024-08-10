import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import Beer from '@/components/Beer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/CategoriesView.vue'),
      children: [
        {
          path: ':category',
          component: TheWelcome
        }
      ]
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/games/:game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/beer',
      name: 'beer',
      component: () => import('../views/BeerListView.vue'),
    },
    {
      path: '/beer/:beer',
      name: 'single',
      component: () => import('../views/BeerView.vue'),
    },

    {
      path: '/drinks',
      name: 'drinks',
      component: () => import('../views/BeerListView.vue'),
      children: [
        {
          path: '/drinks/:beer',
          name: 'drink',
          component: Beer
        }
      ]
    }

  ]
})

export default router
