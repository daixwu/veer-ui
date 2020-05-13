<template>
  <veer-page
    type="input-view"
    title="Input">
    <div slot="content">
      <veer-input
        :type="type"
        placeholder="please type here..."
        :disabled="disabled"
        :readonly="readonly"
        :clearable="clearable"
        v-model="value">
      </veer-input>
      <div class="value">value: {{value}}</div>
      <div class="options">
          <div class="option">
            Disabled
            <veer-switch name="disabled" :value="disabled" @input="updateDisabled"></veer-switch>
          </div>
          <div class="option">
            Readonly
            <veer-switch name="readonly" :value="readonly" @input="updateReadonly"></veer-switch>
          </div>
          <div class="option">
            maxlength10
            <veer-switch name="maxlength:10" :value="maxlength10" @input="updateMaxLength"></veer-switch>
          </div>
          <div class="option">
            UseClear
            <veer-switch name="autofocus" :value="useClear" @input="updateUseClear"></veer-switch>
          </div>
          <div class="option" v-if="useClear">
            useClearBlurHidden
            <veer-switch name="autofocus" :value="useClearBlurHidden" @input="updateUseClearBlurHidden"></veer-switch>
          </div>
      </div>
    </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'

export default {
  data() {
    return {
      type: '',
      value: '',
      disabled: false,
      readonly: false,
      maxlength10: false,
      autofocus: false,
      useClear: false,
      useClearBlurHidden: false
    }
  },
  watch: {
    value(newV) {
      if (this.maxlength10 && newV.length > 10) {
        newV = newV.slice(0, 10)
        this.$nextTick(() => {
          this.value = newV
        })
      }
    }
  },
  computed: {
    clearable() {
      return {
        visible: this.useClear,
        blurHidden: this.useClearBlurHidden
      }
    }
  },
  methods: {
    updateDisabled(val) {
      this.disabled = val
    },
    updateReadonly(val) {
      this.readonly = val
    },
    updateMaxLength(val) {
      this.maxlength10 = val
    },
    updateUseClear(val) {
      this.useClear = val
    },
    updateUseClearBlurHidden(val) {
      this.useClearBlurHidden = val
    }
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
  .input-view {
    .veer-input {
      background-color: #fff;
    }
    .options {
      margin-bottom: 15px;
    }
    .option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      border: 1px solid rgba(0, 0, 0, .1);
      border-radius: 14px;
      padding: 0 15px;
      height: 60px;
      background-color: white;
    }
    .value {
      margin: 15px 5px;
    }
  }
</style>
