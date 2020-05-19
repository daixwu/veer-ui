<template>
  <div class="veer-switch">
    <input class="veer-switch-input" type="checkbox" v-model="checkboxValue" :disabled="disabled">
    <i class="veer-switch-ui"></i>
    <span class="veer-switch-label"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'veer-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkboxValue: this.value
    }
  },
  watch: {
    value (newVal) {
      this.checkboxValue = newVal
    },
    checkboxValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>
