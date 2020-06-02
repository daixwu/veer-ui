<template>
  <button
    class="veer-btn"
    :class="btnClass"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'veer-button',
  props: {
    icon: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      return {
        'veer-btn_active': this.active,
        'veer-btn_disabled': this.disabled,
        'veer-btn-inline': this.inline,
        'veer-btn-primary': this.primary,
        'veer-btn-outline': this.outline,
        'veer-btn-outline-primary': this.outline && this.primary,
        'veer-btn-light': this.light
      }
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
  @import "../../common/style/variable.scss";
  @import "../../common/style/mixin.scss";

  @mixin btn-active($bg, $border: null) {
    &.veer-btn_active, &:active {
      background: $bg;
      @if ($border != null) {
        @include border-1px($border)
      }
    }
  }

  .veer-btn {
    display: block;
    margin: 0;
    padding: 17px 16px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    font-size: $fontsize-large;
    line-height: 1;
    color: $btn-color;
    background: $btn-bgc;
    outline: none;
    border: none;
    border-radius: 2px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    @include btn-active($btn-active-bgc);
    > i {
      display: inline-block;
      margin-right: 4px;
      font-size: 100%;
      transform: scale(1.13);
      transform-origin: right center;
    }
  }
  .veer-btn-inline {
    width: auto;
    display: inline-block;
    vertical-align: middle;
    padding: 9px 10px;
    font-size: $fontsize-small;
    > i {
      margin-right: 2px;
      transform: scale(1.14);
    }
  }

  .veer-btn-primary {
    color: $btn-primary-color;
    background: $btn-primary-bgc;
    @include btn-active($btn-primary-active-bgc);
  }

  .veer-btn-light {
    color: $btn-light-color;
    background: $btn-light-bgc;
    box-shadow: $box-shadow-content;
    @include btn-active($btn-light-active-bgc);
  }

  .veer-btn-outline {
    color: $btn-outline-color;
    background: $btn-outline-bgc;
    @include border-1px($btn-outline-bdc);
    @include btn-active($btn-outline-active-bgc, $btn-outline-active-bdc);
  }

  .veer-btn-outline-primary {
    color: $btn-outline-primary-color;
    background: $btn-outline-primary-bgc;
    @include border-1px($btn-outline-primary-bdc);
    @include btn-active($btn-outline-primary-active-bgc, $btn-outline-primary-active-bdc);
  }

  .veer-btn_disabled {
    color: $btn-disabled-color;
    background: $btn-disabled-bgc;
    @include border-1px($btn-disabled-bdc);
    @include btn-active($btn-disabled-bgc, $btn-disabled-bdc);
  }
</style>
