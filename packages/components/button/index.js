import Button from './button.vue'
import './button.scss'

Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button
