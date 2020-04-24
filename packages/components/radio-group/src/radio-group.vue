<template>
  <div class="veer-radio-group" ref="group" :class="_groupClass" :data-horz="horizontal">
    <slot>
      <veer-radio
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :button-style="buttonStyle"
        :hollow-style="hollowStyle"
        :fill="fill"
        v-model="radioValue">
      </veer-radio>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
import veerRadio from '../../radio/src/radio.vue'

const EVENT_INPUT = 'input'

export default {
  name: 'veer-radio-group',
  props: {
    value: [String, Number],
    options: {
      type: Array,
      default() {
        return []
      }
    },
    buttonStyle: {
      type: Boolean,
      default: false
    },
    horizontal: {
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
      this.$emit(EVENT_INPUT, newV)
    }
  },
  computed: {
    _groupClass() {
      if (!this.horizontal) {
        return 'border-top-1px border-bottom-1px'
      } else {
        return ''
      }
    }
  },
  components: {
    veerRadio
  }
}
</script>
