import FlexItem from './flex-item.vue'
import './flex-item.scss'

FlexItem.install = (Vue) => {
  Vue.component(FlexItem.name, FlexItem)
}

export default FlexItem
