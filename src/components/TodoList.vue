
<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getTodos } from '@/mocks/Todo'

export default {
  mounted () {
    this.loadTodos()
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    loadTodos () {
      getTodos().then((response) => {
        this.todos = response
      })
    }
  }
}
</script>