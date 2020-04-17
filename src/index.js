import Button from '../packages/components/button'

import Style from '../packages/components/style'

// 组件库导入
const components = [Style, Button]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '1.0.0',
  total: components.length,
  install,
  Style,
  Button
}

// 单个组件可以直接这样导出
// export default Button;
