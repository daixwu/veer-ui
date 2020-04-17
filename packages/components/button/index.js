import Button from './src/button.vue'
import './src/style.scss'

Button.install = (vue) => {
  vue.component(Button.name, Button)
}

export default Button
