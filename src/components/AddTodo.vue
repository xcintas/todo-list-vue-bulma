
<template>
  <div>
    <input type="text" v-model="text"/>
    <button v-on:click="handleClick()">Add</button> 
  </div>
</template>

<script>
import { addTodo } from '@/mocks/Todo'
import store from '@/store/TodoListStore'

export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    handleClick () {
      store.isLoading = true
      addTodo(this.text).then(() => {
        store.isLoading = false
      })
    }
  }
}
</script>