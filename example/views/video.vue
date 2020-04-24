<template>
  <div class="input-demo">
    <i class="veer-icon-play" @click="goPlay"></i>
    <div class="video-content">
      <veer-video ref="videoCom" :video="video" @play="play" @pause="pause">
        <div></div>
      </veer-video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4',
        cover: 'https://img1.doubanio.com/view/photo/raw/public/p2594828319.jpg',
        autoplay: true,
        muted: true,
        loop: true
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
    }
  }
}
</script>

<style scoped lang="scss">
  .video-content {
    width: 100%;
    height: 160px;
  }
</style>
