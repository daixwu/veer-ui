import Upload from './upload.vue'
import './upload.scss'

Upload.install = (Vue) => {
  Vue.component(Upload.name, Upload)
}

export default Upload
