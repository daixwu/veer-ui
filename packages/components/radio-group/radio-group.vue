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
import veerRadio from '../radio/radio.vue'

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

<style lang="scss">
@import "../../common/style/variable.scss";
@import "../../common/style/mixin.scss";

.veer-radio-group {
  z-index: 1;
  overflow: hidden;
  background-color: $radio-group-bgc;
}

.veer-radio-group[data-horz="true"] {
  display: flex;
  padding-left: 0;
  @include border-1px($radio-group-horizontal-bdc, 4px);
  border-radius: 4px;
  .veer-radio {
    @include flex-fix();
    text-align: center;
    &::after {
      border-color: $radio-group-horizontal-bdc;
    }
    &:last-child {
      @include border-none();
    }
  }
  .veer-radio-button {
    padding: 0;
    .veer-radio-wrap {
      @include border-none();
      border-radius: 0;
    }
  }
  .veer-radio-wrap {
    justify-content: center;
  }
}
</style>
