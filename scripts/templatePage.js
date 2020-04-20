module.exports = {
  vueTemplate: (componentName) => {
    return `<template>
  <div class="${componentName}-demo">
    <veer-${componentName}></veer-${componentName}>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
`
  }
}
