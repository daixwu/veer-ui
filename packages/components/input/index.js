import Input from './input.vue'
import './input.scss'

Input.install = (Vue) => {
  Vue.component(Input.name, Input)
}

export default Input
