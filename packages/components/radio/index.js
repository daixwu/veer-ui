import Radio from './src/radio.vue'
import './src/style.scss'

Radio.install = (Vue) => {
  Vue.component(Radio.name, Radio)
}

export default Radio
