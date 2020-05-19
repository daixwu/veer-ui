<template>
  <div class="veer-flex"
  :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'veer-flex',
  props: {
    gutter: {
      type: [String, Number],
      default: ''
    },
    direction: String,
    wrap: String,
    justify: String,
    alignItems: String,
    alignContent: String
  },
  computed: {
    styles () {
      const styles = {
        'flex-direction': this.direction,
        'flex-wrap': this.wrap,
        'justify-content': this.justify,
        'align-items': this.alignItems,
        'align-content': this.alignContent,
        'margin-left': `${-this.gutter}px`,
        'margin-right': `${-this.gutter}px`
      }
      return styles
    }
  },
  methods: {
    initItem(slot) {
      for (let i = 0; i < slot.length; i++) {
        const tag = slot[i].tag
        if (typeof tag === 'string') {
          if (tag.indexOf('veer-flex-item') !== -1) {
            const slotElm = slot[i].elm
            slotElm.style.paddingLeft = `${this.gutter}px`
            slotElm.style.paddingRight = `${this.gutter}px`
          }
        }
      }
    }
  },
  mounted() {
    const slot = [...this.$slots.default]
    this.initItem(slot)
  }
}
</script>
