<template>
  <div class="veer-video">
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
      x-webkit-airplay="allow"
      :controls="options.controls"
      :loop="options.loop"
      :poster="options.cover"
      :style="{objectFit:`${options.objectFit}`}">
      <source v-for="(item, index) in vUrl" :src="item" :type="`video/${getUrlType(item)}`" :key="index" />
    </video>
    <slot name="knob">
      <div class="playing-mask" @click="play" v-show="options.disabled"></div>
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
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        poster: '',
        autoplay: false,
        loop: false,
        controls: false,
        muted: false,
        disabled: true,
        playsInline: false,
        objectFit: 'cover'
      },
      $video: null,
      currentTime: 0,
      isStart: false,
      isPlaying: false,
      isError: false
    }
  },
  watch: {
    vUrl: {
      handler(newValue, oldValue) {
        if (newValue && oldValue && newValue !== oldValue) {
          this.$nextTick(() => {
            this.$video.load()
            this.isPlaying = false
            this.isStart = false
          })
        }
      },
      immediate: true
    }
  },
  computed: {
    vUrl() {
      let url = this.options.url || []
      if (typeof url === 'string') {
        url = [url]
      } else if (Object.prototype.toString.call(url) === '[object Object]') {
        console.warn(new Error('视频URL只接受String或者Array'))
        return []
      }
      return url
    },
    options() {
      return Object.assign({}, this.baseVideo, this.video)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    getUrlType(url) {
      return url.match(/[^\\.]+$/)
    },
    init() {
      this.$video = this.$refs.video

      if (this.options.autoplay) {
        this.play()
      }

      if (this.options.playsInline) {
        this._playInline()
      }

      this.$video.addEventListener('canplay', () => {
        this.width = this.$video.videoWidth
        this.height = this.$video.videoHeight
      })
      this.$video.addEventListener('play', () => {
        this.$emit('play', this.$video)
      })
      this.$video.addEventListener('pause', () => {
        this.$emit('pause', this.$video)
      })
    },
    play() {
      this.isPlaying = !this.isPlaying
      this._togglePlay()
    },
    retry() {
      this.isError = false
      this.init()
    },
    getPlayTime() {
      const currentTime = this.$video.currentTime
      const duration = this.$video.duration
      const percent = currentTime / duration
      return { currentTime, duration, percent }
    },
    getLoadTime() {
      const buffered = this.$video.buffered.end(0)
      const duration = this.$video.duration
      const loaded = buffered / duration
      return { buffered, duration, loaded }
    },
    _playInline() {
      this.$video.setAttribute('playsinline', this.options.playsinline)
      this.$video.setAttribute('webkit-playsinline', this.options.playsinline)
      this.$video.setAttribute('x5-playsinline', this.options.playsinline)
      this.$video.setAttribute('x5-video-player-type', 'h5')
      this.$video.setAttribute('x5-video-player-fullscreen', false)
    },
    _togglePlay() {
      if (this.$video) {
        if (this.isPlaying) {
          try {
            this.$video.play()
            if (!this.isStart) {
              this._isStartFn()
            }
            this.$video.addEventListener('ended', this._playEndFn)
          } catch (e) {
            this._handleError()
          }
        } else {
          this.$video.pause()
        }
      }
    },
    _isStartFn() {
      const _this = this
      this.$video.addEventListener('timeupdate', () => {
        _this.currentTime = _this.$video.currentTime
        if (_this.currentTime > 0.1) {
          _this.isStart = true
        }
      })
    },
    _playEndFn() {
      this.$video.currentTime = 0
      this.isStart = false
      this.isPlaying = false
      this.$emit('playEnd', this.videoElm)
    },
    _handleError() {
      this.isError = true
    }
  },
  updated() {},
  beforeDestroy() {},
  destroyed() {}
}
</script>

<style lang="scss">
.veer-video {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
}

.veer-video-poster {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.veer-video-player {
  background: #000;
  width: 100%;
  height: 100%;
  object-fit: fill;
  // &::-webkit-media-controls,
  // &::-webkit-media-controls-enclosure {
  //   display: none !important;
  // }
}

.playing-mask {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 20%;
}

.veer-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5em;
  color: rgba(255, 255, 255, .8);
}

.veer-video-error {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 111111;
  background: #000;
  color: #fff;
  text-align: center;
  p{
      color: #fff;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
