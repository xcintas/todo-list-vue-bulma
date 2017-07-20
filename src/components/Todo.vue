
<template>  
  <article class="todo-box media">
    <div class="media-left">
      <figure class="image is-24x24">
        <img src="./../assets/git-icon.png" style="background-color:white">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>{{todo.text}}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style>
  .todo-box {
    margin: 8px
  }
</style>