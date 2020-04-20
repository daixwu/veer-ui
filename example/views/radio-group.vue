<template>
  <div class="radio-demo">
    <veer-radio-group :horizontal="true" :options="options">
    </veer-radio-group>

    <veer-radio-group :horizontal="true" :hollow-style="true" :options="options">
    </veer-radio-group>

    <veer-radio-group :horizontal="true" fill="#000" :button-style="true" :options="options">
    </veer-radio-group>

    <veer-radio-group :button-style="true" fill="#000" :options="options">
    </veer-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
      options: [
        {
          label: '男',
          value: '1'
        },
        {
          label: '女',
          value: '2'
        },
        {
          label: '人妖',
          value: '3',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .radio-demo > div {
    margin: 16px 16px;
  }
</style>
