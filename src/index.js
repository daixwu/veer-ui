import Style from '../packages/components/Style'
import Icon from '../packages/components/icon'
import Button from '../packages/components/button'
import Flex from '../packages/components/flex'
import FlexItem from '../packages/components/flex-item'
import Radio from '../packages/components/radio'
import RadioGroup from '../packages/components/radio-group'
import Input from '../packages/components/input'
import Switch from '../packages/components/switch'
import Video from '../packages/components/video'
import Upload from '../packages/components/upload'

import Popup from '../packages/components/popup'

// 组件库导入
const components = [Icon, Button, Flex, FlexItem, Radio, RadioGroup, Input, Switch, Video, Upload, Popup]

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
  Icon,
  Flex,
  FlexItem,
  Button,
  Radio,
  RadioGroup,
  Input,
  Switch,
  Video,
  Upload,
  Popup
}

// 单个组件可以直接这样导出
// export default Button;
