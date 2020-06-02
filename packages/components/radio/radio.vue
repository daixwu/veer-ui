<template>
  <div class="veer-radio" :class="_containerClass">
    <label class="veer-radio-wrap" :style="_activeStyle">
      <input
        class="veer-radio-input"
        type="radio"
        :disabled="option.disabled"
        v-model="radioValue"
        :value="computedOption.value"
      />
      <span class="veer-radio-ui" v-show="!buttonStyle">
        <i></i>
      </span>
      <slot>
        <span class="veer-radio-label">{{ computedOption.label }}</span>
      </slot>
    </label>
  </div>
</template>

<script type="text/ecmascript-6">
const EVENT_INPUT = 'input'

export default {
  name: 'veer-radio',
  props: {
    value: [String, Number],
    option: {
      type: [String, Object],
      required: true
    },
    buttonStyle: {
      type: Boolean,
      default: false
    },
    hollowStyle: {
      type: Boolean,
      default: false
    },
    fill: String,
    textColor: String
  },
  data() {
    return {
      radioValue: this.value
    }
  },
  watch: {
    value(newV) {
      this.radioValue = newV
    },
    radioValue(newV) {
      if (typeof this.value === 'number') {
        newV = Number(newV)
      }
      this.$emit(EVENT_INPUT, newV)
    }
  },
  computed: {
    computedOption() {
      const option = this.option
      if (typeof option === 'string') {
        return {
          value: option,
          label: option
        }
      }
      return option
    },
    _containerClass() {
      const option = this.computedOption
      return {
        'veer-radio-button': this.buttonStyle,
        'veer-radio-hollow': this.hollowStyle,
        'veer-radio_selected': this.radioValue === option.value,
        'veer-radio_disabled': option.disabled,
        'border-right-1px': this.$parent.horizontal
      }
    },
    _activeStyle() {
      const option = this.computedOption
      if (this.radioValue === option.value) {
        return {
          backgroundColor: this.fill || '',
          color: this.textColor || ''
        }
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../common/style/variable.scss";
@import "../../common/style/mixin.scss";

.veer-radio {
  position: relative;
  text-align: left;
  font-size: 100%;
  color: $radio-color;
}

.veer-radio-wrap {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 11px 0;
  line-height: 1.5;
  word-break: break-word;
  word-wrap: break-word ;
}

.veer-radio-input {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.veer-radio-ui {
  position: relative;
  width: 1em;
  height: 1em;
  margin-right: .42em;
  line-height: 1;
  color: transparent;
  background-color: transparent;
  border-radius: 50%;
  @include border-1px($radio-border-color, 50%);
  i {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: scale(.4);
    transition: all .2s;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      transform: translate(-50%, -50%) scale(.8);
      border-radius: 50%;
    }
  }
}

.veer-radio_selected {
  .veer-radio-ui {
    background-color: $radio-selected-bgc;
    i {
      transform: scale(1);
      &::before {
        background-color: $radio-selected-ibgc;
      }
    }
  }
}

.veer-radio_disabled {
  .veer-radio-wrap {
    color: $radio-disabled-color;
  }
  .veer-radio-ui {
    background-color: $radio-disabled-bgc;
    i {
      transform: scale(1);
      &::before {
        background-color: $radio-disabled-ibgc;
      }
    }
  }
}

.veer-radio-button {
  padding: 11px 0;
  .veer-radio-wrap {
    justify-content: center;
    @include border-1px($radio-border-color, 4px);
    border-radius: 4px;
  }
  &.veer-radio_selected {
    .veer-radio-wrap {
      color: $radio-button-selected-color;
      background-color: $radio-button-selected-bgc;
    }
  }
}

.veer-radio-hollow {
  &.veer-radio_selected, &.veer-radio_disabled {
    .veer-radio-ui {
      background-color: transparent;
      i::before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  &.veer-radio_selected {
    .veer-radio-ui {
      @include border-1px($radio-hollow-selected-color, 50%);
      i {
        &::before {
          background-color: $radio-hollow-selected-color;
        }
      }
    }
  }
  &.veer-radio_disabled {
    .veer-radio-ui {
      i {
        transform: scale(1);
        &::before {
          background-color: $radio-hollow-disabled-color;
        }
      }
    }
  }
}
</style>
