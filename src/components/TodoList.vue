
<template>
  <div>
    <div v-if="!isLoading">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todo :todo="todo"></Todo>
      </li>
    </ul>
    </div>
    <div v-else>
        Loading...
    </div>
  </div>
</template>

<script>
import { getTodos } from '@/mocks/Todo'
import Todo from './Todo.vue'

export default {
  mounted () {
    this.loadTodos()
  },
  data () {
    return {
      todos: [],
      isLoading: false
    }
  },
  methods: {
    loadTodos () {
      this.isLoading = true
      getTodos().then((response) => {
        this.todos = response
        this.isLoading = false
      })
    }
  },
  components: {
    Todo
  }
}
</script>