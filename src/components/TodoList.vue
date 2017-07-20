
<template>
  <div>
    <ul v-bind:style="{opacity: isLoading ? 0.2 : 1}">
      <li v-for="todo in todos" :key="todo.id">
        <Todo :todo="todo"></Todo>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTodos } from '@/mocks/Todo'
import store from '@/store/TodoListStore'
import Todo from './Todo.vue'

export default {
  mounted () {
    this.loadTodos()
  },
  data () {
    return store
  },
  methods: {
    loadTodos () {
      getTodos().then((response) => {
        this.todos = response
      })
    }
  },
  components: {
    Todo
  }
}
</script>