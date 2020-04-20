import RadioGroup from './src/radio-group.vue'
import './src/style.scss'

RadioGroup.install = (Vue) => {
  Vue.component(RadioGroup.name, RadioGroup)
}

export default RadioGroup
