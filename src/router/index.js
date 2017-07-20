import Vue from 'vue'
import Router from 'vue-router'
import TodoListPage from '@/components/TodoListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoListPage',
      component: TodoListPage
    }
  ]
})
