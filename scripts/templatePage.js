module.exports = {
  vueTemplate: (componentName) => {
    return `<template>
  <veer-page
    type="${componentName}-view"
    title="${componentName}">
    <div slot="content">
      <veer-${componentName}></veer-${componentName}>
    </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'
export default {
  data() {
    return {
      value: ''
    }
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
.${componentName}-view {

}
</style>
`
  }
}
