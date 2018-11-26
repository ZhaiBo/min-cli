<template>
  <div class="bar">
    <p>h哈和</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'bar'
      }
    }
  }
</script>

<style lang="sass" scoped>
  $primary-color: #333

  .bar
    width: 100px
    height: 100 / 2 px
    background: $primary-color
    p
      color: red
</style>
