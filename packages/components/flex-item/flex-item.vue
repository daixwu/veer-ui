<template>
  <div class="veer-flex-item" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'veer-flex-item',
  props: {
    span: {
      type: [String, Number],
      default: '24'
    },
    offset: [String, Number],
    grow: Number,
    shrink: Number,
    self: String
  },
  methods: {
    buildSize (value) {
      return 100 / 24 * value
    }
  },
  computed: {
    styles () {
      const styles = {
        'flex-grow': this.grow,
        'flex-shrink': this.shrink,
        'flex-basis': `${this.buildSize(this.span)}%`,
        'align-self': this.self,
        'margin-left': `${this.buildSize(this.offset)}%`
      }
      return styles
    }
  }
}
</script>
