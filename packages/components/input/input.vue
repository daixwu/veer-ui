<template>
  <div class="veer-input" :class="{'veer-input_active': isFocus}">
    <div class="veer-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="veer-input-field"
      ref="input"
      v-model="inputValue"
      v-bind="$props"
      :type="_type"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <div class="veer-input-append" v-if="$slots.append  || _showClear">
      <div class="veer-input-clear" v-if="_showClear" @touchend="handleClear">
        <i class="veer-icon-close"></i>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import inputMixin from '../../common/mixins/input'
const EVENT_INPUT = 'input'
const EVENT_BLUR = 'blur'
const EVENT_FOCUS = 'focus'

export default {
  name: 'veer-input',
  mixins: [inputMixin],
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    name: String,
    id: String,
    form: String,
    minlength: Number,
    maxlength: Number,
    resize: String,
    min: Number,
    max: Number,
    step: Number,
    tabindex: String,
    clearable: {
      type: [Boolean, Object],
      default: false
    }
  },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      formatedClearable: {
        visible: false,
        blurHidden: true
      }
    }
  },
  computed: {
    _type() {
      const type = this.type
      if (type === 'password') {
        return 'text'
      }
      return type
    },
    _showClear() {
      let visible = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled
      if (this.formatedClearable.blurHidden && !this.isFocus) {
        visible = false
      }
      return visible
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue
    },
    inputValue(newValue) {
      this.$emit(EVENT_INPUT, newValue)
    },
    clearable: {
      handler() {
        this.formatClearable()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    formatClearable() {
      if (typeof this.clearable === 'boolean') {
        this.formatedClearable.visible = this.clearable
      } else {
        Object.assign(this.formatedClearable, this.clearable)
      }
    },
    handleFocus(e) {
      this.$emit(EVENT_FOCUS, e)
      this.isFocus = true
    },
    handleBlur(e) {
      this.$emit(EVENT_BLUR, e)
      this.isFocus = false
    },
    handleClear(e) {
      this.inputValue = ''
      this.$refs.input.focus()
    }
  }
}
</script>
