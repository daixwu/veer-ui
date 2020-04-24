import Icon from './src/icon.vue'
import './src/style.scss'

Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon)
}

export default Icon
