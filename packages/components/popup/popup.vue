<template>
  <div class="veer-popup" :style="{'z-index': zIndex}" :class="rootClass" v-show="isVisible">
    <div class="veer-popup-mask" @touchmove.prevent @click="maskClick">
      <slot name="mask"></slot>
    </div>
    <div class="veer-popup-container" @touchmove.prevent :class="containerClass">
      <div class="veer-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="veer-popup-content" v-else v-html="content">
      </div>
    </div>
  </div>
</template>

<script>
import visibilityMixin from '../../common/mixins/visibility'
import popupMixin from '../../common/mixins/popup'

const EVENT_MASK_CLICK = 'mask-click'

export default {
  name: 'veer-popup',
  mixins: [visibilityMixin, popupMixin],
  props: {
    type: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    rootClass() {
      const cls = {
        'veer-popup_mask': this.mask
      }
      if (this.type) {
        cls[`veer-${this.type}`] = true
      }
      return cls
    },
    containerClass() {
      const center = this.center
      const position = this.position
      if (position) {
        return {
          [`veer-popup-${position}`]: true
        }
      } else if (center) {
        return {
          'veer-popup-center': true
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(EVENT_MASK_CLICK, e)
      if (this.maskClosable) {
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../../common/style/variable.scss";
  .veer-popup {
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    bottom: 0;
    z-index: 100;
    pointer-events: none;
  }
  .veer-popup_mask {
    pointer-events: auto;
    .veer-popup-mask {
      display: block;
    }
  }
  .veer-popup-mask, .veer-popup-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .veer-popup-mask {
    display: none;
    overflow: hidden;
    background-color: $popup-mask-bgc;
    opacity: $popup-mask-opacity;
    pointer-events: auto;
    // fix some android webview opacity render bug
    &::before {
      content: ".";
      display: block;
      width: 1px;
      height: 1px;
      background-color: rgba(0, 0, 0, .1);
      margin-left: -10px;
    }
  }
  .veer-popup-container {
    transform: translate(100%, 100%);
  }
  .veer-popup-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    transform: translate(-100%, -100%);
    pointer-events: auto;
  }
  .veer-popup-center,
  .veer-popup-right,
  .veer-popup-left {
    .veer-popup-content {
      top: -50%;
      left: -50%;
      width: auto;
      max-width: 100%;
      transform: translate(0, 0);
    }
  }
  .veer-popup-right,
  .veer-popup-left {
    .veer-popup-content {
      height: 100%;
      top: -100%;
    }
  }
  .veer-popup-center {
    .veer-popup-content {
      transform: translate(-50%, -50%);
    }
  }
  .veer-popup-top {
    .veer-popup-content {
      top: -100%;
      left: -100%;
      transform: translate(0, 0);
    }
  }
  .veer-popup-right {
    .veer-popup-content {
      top: -100%;
      right: 100%;
    }
  }
  .veer-popup-left {
    .veer-popup-content {
      left: -100%;
    }
  }
</style>
