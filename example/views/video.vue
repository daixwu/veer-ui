<template>
  <veer-page
    title="Video">
    <div slot="content">
      <h2>基本用法：</h2>
      <veer-video class="video-content" :video="options">
      </veer-video>
      <h2>封面图设置：</h2>
      <veer-video class="video-content" :video="options1">
      </veer-video>
      <h2>行内播放：</h2>
      <p>playsInline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）</p>
      <veer-video class="video-content" :video="options2">
      </veer-video>
      <h2>视频切换：</h2>
      <p>当视频地址发生变化时，重置视频</p>
      <veer-video class="video-content" :video="options3">
      </veer-video>
      <div @click="switchVideo" class="switchBtn">切换视频</div>
    </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'
export default {
  data() {
    return {
      options: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4'
      },
      options1: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4',
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/lunker.jpg'
      },
      options2: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=69b285b0de630daf&userId=1296&ext=.mp4',
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/monkey.jpg',
        playsInline: true
      },
      options3: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4',
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/lunker.jpg',
        playsInline: true
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
    switchVideo() {
      this.options3 = {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=69b285b0de630daf&userId=1296&ext=.mp4',
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/monkey.jpg',
        playsInline: true
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
    height: 180px;
  }
  .switchBtn {
    width: 90px;
    height: 30px;
    margin: 10px auto;
    border: 1px solid #ff64a8;
    border-radius: 4px;
    color: #ff64a8;
    text-align: center;
    line-height: 30px;
  }
</style>
