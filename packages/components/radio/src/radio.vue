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
  inject: {
    radioGroup: {
      default: null
    }
  },
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
  created() {
    const radioGroup = this.radioGroup
    if (radioGroup && radioGroup.radioValue) {
      this.radioValue = radioGroup.radioValue
      this._cancelWatchGroup = this.$watch(
        () => {
          return radioGroup.radioValue
        },
        newValue => {
          this.radioValue = newValue
        }
      )
    }
  },
  beforeDestroy() {
    this._cancelWatchGroup && this._cancelWatchGroup()
    this._cancelWatchGroup = null
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
      if (this.radioGroup) {
        this.radioGroup.radioValue = newV
      }
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
