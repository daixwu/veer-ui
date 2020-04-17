module.exports = {
  vueTemplate: (componentName) => {
    return `<template>
  <div class="${componentName}">
    ${componentName}组件
  </div>
</template>

<script>
export default {
  name: '${componentName}'
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
    return `.${componentName} { background-color: #fff }`
  },
  entryTemplate: (componentName, inputName) => {
    console.log('inputName: ', inputName);

    return `import ${componentName} from './src/${inputName}.vue'
import './src/style.scss'

${componentName}.install = (vue) => {
  vue.component(${componentName}.name, ${componentName})
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

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| - | - | - | - | - |
| disabled | 按钮失效状态 | boolean | false | |
`
  }
}
