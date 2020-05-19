<template>
  <veer-page
    type="upload-view"
    title="upload">
    <div slot="content">
      <veer-upload></veer-upload>
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
.upload-view {

}
</style>
