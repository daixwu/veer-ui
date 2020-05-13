import Input from './src/input.vue'
import './src/input.scss'

Input.install = (Vue) => {
  Vue.component(Input.name, Input)
}

export default Input
