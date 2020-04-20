import Input from './src/input.vue'
import './src/style.scss'

Input.install = (Vue) => {
  Vue.component(Input.name, Input)
}

export default Input
