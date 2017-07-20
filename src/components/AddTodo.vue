
<template>
  <div class="field has-addons">
    <div class="control">
      <input type="text" class="input" v-model="text"/>
    </div>
    <div class="control">
      <button class="button is-primary" v-on:click="handleClick()">Add</button> 
    </div>
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
        this.text = ''
        store.isLoading = false
      })
    }
  }
}
</script>