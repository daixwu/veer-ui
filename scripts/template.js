module.exports = {
  vueTemplate: (componentName) => {
    return `<template>
  <div class="veer-${componentName}">
    ${componentName}组件
  </div>
</template>

<script>
export default {
  name: 'veer-${componentName}'
}
</script>
`
  },
  vueTsTemplate: (componentName) => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ${componentName} extends Vue {
  @Prop() private msg!: string;
}
</script>
`
  },
  cssTemplate: (componentName) => {
    return `.veer-${componentName} { background-color: #fff }`
  },
  entryTemplate: (componentName, inputName) => {
    console.log('inputName: ', inputName)

    return `import ${componentName} from './src/${inputName}.vue'
import './src/style.scss'

${componentName}.install = (Vue) => {
  Vue.component(${componentName}.name, ${componentName})
}

export default ${componentName}
`
  },
  storiesTemplate: (componentName, inputName) => {
    return `import ${componentName} from '../src/${inputName}.vue'
import '../src/style.scss'

export const Default = () => ({
  components: { ${componentName} },
  template: '<${componentName}>默认</${componentName}>',
})

export default {
  title: '基础组件 | ${componentName}',
  component: ${componentName}
}
`
  },
  readmeTemplate: (componentName) => {
    return `# ${componentName} 组件

按钮用于开始一个即时操作。

## 基本用法

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## Props 配置

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| - | - | - | - | - |
| disabled | 按钮失效状态 | Boolean | false | true/false |

## 插槽

| 名字 | 说明 |
| - | - |
| prepend | 前置内容 |
| append | 后置内容 |

## 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象
`
  }
}
