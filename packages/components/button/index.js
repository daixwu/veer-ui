import Button from './src/button.vue'
import './src/style.scss'

Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button
