
<template>
  <div>
    <input type="text" v-model="text"/>
    <button v-on:click="handleClick()">Add</button> 
  </div>
</template>

<script>
import { addTodo } from '@/mocks/Todo'

export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    handleClick () {
      addTodo(this.text)
    }
  }
}
</script>