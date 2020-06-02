<template>
  <veer-page
    type="upload-view"
    title="Upload">
    <template slot="content">
      <p>Normal upload(File max size 1MB): </p>
      <div>
        <veer-upload ref="upload" :action="action" :simultaneous-uploads="1" @files-added="filesAdded" />
        <veer-button @click="upload" v-if="!isUploading">Upload</veer-button>
        <veer-button @click="pause" v-else>Pause</veer-button>
        <veer-button @click="retry">Retry</veer-button>
      </div>
    </template>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'
export default {
  data() {
    return {
      action: {
        target: '//jsonplaceholder.typicode.com/photos/'
      },
      isUploading: true
    }
  },
  methods: {
    upload() {
      this.isUploading = true
      this.$refs.upload.start()
    },
    pause() {
      this.isUploading = false
      this.$refs.upload.pause()
    },
    retry() {
      this.$refs.upload.retry()
    },
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      // eslint-disable-next-line no-unused-vars
      for (const k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: 'You selected >1M files'
      }).show()
    }
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
.upload-view {
  .content {
    >
      p, div {
        margin: 20px 0;
      }
      div {
        .cube-btn, .cube-upload {
          margin: 10px 0;
        }
      }
  }
  button {
    margin: 10px 0;
  }
}
</style>
