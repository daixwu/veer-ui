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

<style lang="scss">
@import "../../common/style/variable.scss";
@import "../../common/style/mixin.scss";

.veer-input {
  display: flex;
  align-items: center;
  font-size: $fontsize-medium;
  line-height: 1.429;
  background-color: inherit;
  @include border-1px($input-border-color);
}

.veer-input-field {
  display: block;
  flex: 1;
  width: 100%;
  min-width: 0;
  padding: 10px;
  box-sizing: border-box;
  color: $input-color;
  line-height: inherit;
  background-color: inherit;
  border-radius: 2px;
  outline: none;
  &::-webkit-input-placeholder {
    color: $input-placeholder-color;
    text-overflow: ellipsis;
  }
}

.veer-input_active {
  &::after {
    border-color: $input-focus-border-color;
  }
}

.veer-input-prepend, .veer-input-append {
  display: flex;
  align-items: center;
}

.veer-input-clear {
  width: 1em;
  height: 1em;
  line-height: 1;
  padding: 10px;
  box-sizing: content-box;
  color: $input-clear-icon-color;
  > i {
    display: inline-block;
    transform: scale(1.2);
  }
}
</style>
