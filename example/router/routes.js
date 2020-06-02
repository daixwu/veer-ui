import Icon from '../views/icon.vue'
import Button from '../views/button.vue'
import Input from '../views/input.vue'
import Switch from '../views/switch.vue'
import Radio from '../views/radio.vue'
import RadioGroup from '../views/radio-group.vue'
import Video from '../views/video.vue'
import Flex from '../views/flex.vue'
import Upload from '../views/upload.vue'
import Popup from '../views/popup.vue'

const routes = [
  {
    path: '/icon',
    name: 'Icon',
    component: Icon
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/switch',
    name: 'Switch',
    component: Switch
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio
  },
  {
    path: '/radioGroup',
    name: 'RadioGroup',
    component: RadioGroup
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/flex',
    name: 'Flex',
    component: Flex
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup
  }
]

export default routes
