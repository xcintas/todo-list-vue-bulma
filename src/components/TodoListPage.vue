
<template>
  <div>
    <h1 class="title">Todo list</h1>
    <div class="columns">
      <div class="column is-4">
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList.vue'
import AddTodo from './AddTodo.vue'

export default {
  components: {
    TodoList,
    AddTodo
  }
}
</script>