import RadioGroup from './radio-group.vue'
import './radio-group.scss'

RadioGroup.install = (Vue) => {
  Vue.component(RadioGroup.name, RadioGroup)
}

export default RadioGroup
