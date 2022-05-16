import { createRouter, createWebHashHistory } from 'vue-router'

const LoginPanel = () => import('@/views/login/LoginPanel.vue')
const MainView = () => import('@/views/main/MainView.vue')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPanel
  },
  {
    path: '/main',
    component: MainView
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
