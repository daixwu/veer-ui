import Radio from './radio.vue'
import './radio.scss'

Radio.install = (Vue) => {
  Vue.component(Radio.name, Radio)
}

export default Radio
