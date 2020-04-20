import Style from '../packages/components/Style'
import Button from '../packages/components/button'
import Radio from '../packages/components/radio'
import RadioGroup from '../packages/components/radio-group'
import Input from '../packages/components/input'

// 组件库导入
const components = [Button, Radio, RadioGroup, Input]

const install = function(Vue) {
  // 判断是否安装
  if (install.installed) {
    return
  }
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '1.0.0',
  total: components.length,
  install,
  Style,
  Button,
  Radio,
  RadioGroup,
  Input
}

// 单个组件可以直接这样导出
// export default Button;
