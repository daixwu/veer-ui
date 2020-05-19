import Flex from './flex.vue'
import './flex.scss'

Flex.install = (Vue) => {
  Vue.component(Flex.name, Flex)
}

export default Flex
