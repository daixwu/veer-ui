import Button from './src/button.vue'
import './src/button.scss'

Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button
