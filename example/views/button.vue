<template>
  <div class="input-demo">
    <veer-input v-model="value" ref="input"></veer-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'input'
    }
  },
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<style scoped lang="scss">

</style>
