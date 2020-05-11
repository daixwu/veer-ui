<template>
  <veer-page
    title="Video">
    <div slot="content">
      <veer-video class="video-content" ref="videoCom" :sources="sources" :options="options" @play="play" @pause="pause">
      </veer-video>
      <div @click="changeVideo">切换视频</div>
    </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'
export default {
  data() {
    return {
      sources: [
        {
          src: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4'
        }
      ],
      options: {
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/lunker.jpg'
      }
    }
  },
  mounted() {
    // this.$refs.input.focus()
  },
  methods: {
    play(el) {
      console.log(el)
    },
    pause(el) {
      console.log('el.currentTime: ', el.currentTime)
    },
    goPlay() {
      this.$refs.videoCom.play()
      this.$refs.videoCom.getPlayTime()
    },
    changeVideo() {
      this.sources = [
        {
          src: 'https://api.dogecloud.com/player/get.mp4?vcode=69b285b0de630daf&userId=1296&ext=.mp4'
        }
      ]
      this.options = {
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/monkey.jpg',
        objectFit: 'cover'
      }
    }
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
  .video-content {
    width: 100%;
    height: 160px;
  }
</style>
