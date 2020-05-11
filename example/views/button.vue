<template>
  <veer-page
    title="Button">
      <div slot="content">
        <veer-input v-model="value" ref="input"></veer-input>
      </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'

export default {
  data() {
    return {
      value: 'input'
    }
  },
  mounted() {
    // this.$refs.input.focus()
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">

</style>
