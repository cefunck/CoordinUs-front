import { createRouter, createWebHistory } from 'vue-router'
import AssignmentView from '@/views/AssignmentView.vue'
import AvailabilityView from '@/views/AvailabilityView.vue'

const routes = [
  {
    path: '/',
    name: 'assignment',
    component: AssignmentView
  },
  {
    path: '/availability',
    name: 'availability',
    component: AvailabilityView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
