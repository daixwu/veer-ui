import Button from '../src/button.vue'
import '../src/style.scss'

export const Default = () => ({
  components: { Button },
  template: '<Button>默认</Button>',
})

export default {
  title: '基础组件 | Button',
  component: Button
}
