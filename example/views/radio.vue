<template>
  <div class="radio-demo">
    <veer-radio v-model="selected" :option="options[0]"></veer-radio>
    <veer-radio v-model="selected" :option="options[1]"></veer-radio>
    <veer-radio v-model="selected" :option="options[2]"></veer-radio>

    <veer-radio v-model="selected" :hollow-style="true"  :option="options[0]"></veer-radio>
    <veer-radio v-model="selected" :hollow-style="true" :option="options[1]"></veer-radio>
    <veer-radio v-model="selected" :hollow-style="true" :option="options[2]"></veer-radio>

    <veer-radio v-model="selected" :radioButton="true" :hollow-style="true"  :option="options[0]"></veer-radio>
    <veer-radio v-model="selected" :radioButton="true" :hollow-style="true" :option="options[1]"></veer-radio>
    <veer-radio v-model="selected" :radioButton="true" :hollow-style="true" :option="options[2]"></veer-radio>
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

</style>
