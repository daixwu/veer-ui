import Video from './video.vue'
import './video.scss'

Video.install = (Vue) => {
  Vue.component(Video.name, Video)
}

export default Video
