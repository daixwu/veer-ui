import Video from './src/video.vue'
import './src/video.scss'

Video.install = (Vue) => {
  Vue.component(Video.name, Video)
}

export default Video
