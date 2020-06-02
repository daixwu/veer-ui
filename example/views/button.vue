<template>
  <veer-page
    type="button-view"
    title="Button">
      <div slot="content">
        <veer-button :active="true" @click="btnClick">Active Button</veer-button>
        <veer-button :disabled="true">Disabled Button</veer-button>
        <veer-button icon="veer-icon-magic">Button With Icon</veer-button>
        <veer-button :light="true">Light Button</veer-button>
        <veer-button :inline="true">Inline Button</veer-button>
        <veer-button :outline="true">Outline Button</veer-button>
        <veer-button :primary="true">Primary Button</veer-button>

        <veer-button :inline="false" :outline="true" :primary="true">Demo Button</veer-button>
      </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'

export default {
  data() {
    return {}
  },
  methods: {
    btnClick(event) {
      console.log('event: ', event)
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
.button-view {
  button {
    margin: 10px 0;
  }
}

</style>
