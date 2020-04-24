<template>
  <div class="veer-video" ref="container">
    <transition name="fade">
      <div
        class="veer-video-poster"
        v-show="!isStart"
        :style="{backgroundImage:`url(${options.cover})`}">
      </div>
    </transition>
    <video
      ref="video"
      class="veer-video-player"
      v-show="isStart"
      webkit-playsinline
      playsinline
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      :autoplay="options.autoplay"
      :controls="options.controls"
      :muted="options.muted"
      :loop="options.loop"
      :poster="options.cover"
      :style="{objectFit:`${options.objectFit}`}">
      <source
        :src="options.url"
        type="audio/mp4">
        Your browser does not support the video element.
    </video>
    <slot>
      <div class="playing-mask" @click="play"></div>
      <div
        class="veer-play-btn"
        v-show="!isPlaying"
        @click="play">
          <i class="veer-icon-play"></i>
      </div>
    </slot>
    <div class="veer-video-error" v-show="isError">
      <p class="lose">视频加载失败</p>
      <p class="retry" @click="retry">点击重试</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'veer-video',
  props: {
    video: {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        volume: 0.75,
        autoplay: false,
        controls: false,
        loop: false,
        muted: false,
        poster: '',
        objectFit: 'contain'
      },
      $video: null,
      $container: null,
      currentTime: 0,
      isStart: false,
      isPlaying: false,
      isError: true
    }
  },
  watch: {
    isPlaying() {
      this.togglePlay()
    }
  },
  computed: {
    // 合并默认和用户自定义属性配置
    options() {
      return Object.assign({}, this.baseVideo, this.video)
    }
  },
  methods: {
    init() {
      this.$video = this.$refs.video
      this.$container = this.$refs.container
      this.initPlayer()
      if (this.options.autoplay && this.options.muted) {
        this.play()
      }

      this.$video.addEventListener('play', () => {
        this.$emit('play', this.$video)
      })
      this.$video.addEventListener('pause', () => {
        this.$emit('pause', this.$video)
      })
    },
    initPlayer() {
      const vol = this.options.volume
      this.$video.volume = vol
    },
    togglePlay() {
      if (this.isPlaying) {
        try {
          this.$video.play()
          if (!this.isStart) {
            this.isStartFn()
          }
          this.$video.addEventListener('ended', this.playEndFn)
        } catch (e) {
          this.handleError()
        }
      } else {
        this.$video.pause()
      }
    },
    play() {
      this.isPlaying = !this.isPlaying
      console.log('this.isPlaying: ', this.isPlaying)
    },
    isStartFn() {
      const _this = this
      this.$video.addEventListener('timeupdate', function () {
        _this.currentTime = _this.$video.currentTime
        if (_this.currentTime > 0.1) {
          _this.isStart = true
        }
      })
    },
    playEndFn() {
      this.options.isPlaying = false
      this.$video.currentTime = 0
      this.$emit('playend', this.videoElm)
    },
    handleError() {
      this.isError = true
    },
    getPlayTime() {
      const currentTime = this.$video.currentTime
      const duration = this.$video.duration
      const percent = currentTime / duration
      console.log('percent: ', percent)
    },
    getLoadTime() {
      const buffered = this.$video.buffered.end(0)
      const duration = this.$video.duration
      const loaded = buffered / duration
      console.log('loaded: ', loaded)
    },
    retry() {
      this.state.isError = false
      this.init()
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
}
</script>
