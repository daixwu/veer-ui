<template>
  <veer-page
    type="switch-view"
    title="Switch">
    <template slot="content">
      <veer-switch v-model="values[0]">Switch</veer-switch>
      <p>switch value: {{values[0]}}</p>
      <veer-switch v-model="values[1]">Switch</veer-switch>
      <p>switch value: {{values[1]}}</p>
      <veer-switch v-model="values[2]" :disabled="disabled">Disbled Switch</veer-switch>
      <p>switch value: {{values[2]}}</p>
      <veer-switch v-model="values[3]" :disabled="disabled">Disbled Switch</veer-switch>
      <p>switch value: {{values[3]}}</p>
    </template>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'

export default {
  data() {
    return {
      values: [true, false, true, false],
      disabled: true
    }
  },
  mounted() {},
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
  .switch-view {
    .content {
      > * {
        margin: 10px 0;
      }
      .veer-switch {
        padding: 10px;
        background-color: white;
      }
    }
  }
</style>
