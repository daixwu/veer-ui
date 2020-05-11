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
      <source v-for="source in sources" :src="source.src" :type="source.type ? source.type : 'video/mp4'" :key="source.src" />
    </video>
    <slot>
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
    sources: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: true,
      default() {
        return {
          cover: '',
          autoplay: false,
          poster: '',
          loop: false,
          controls: false,
          muted: false,
          disabled: true,
          playsinline: false,
          objectFit: ''
        }
      }
    }
  },
  data() {
    return {
      $video: null,
      currentTime: 0,
      isStart: false,
      isPlaying: false,
      isError: false
    }
  },
  watch: {
    sources: {
      handler(newValue, oldValue) {
        if (newValue && oldValue && newValue !== oldValue) {
          this.$nextTick(() => {
            this.$video.load()
            this.isPlaying = false
          })
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    play() {
      this.isPlaying = !this.isPlaying
      this._togglePlay()
    },
    retry() {
      this.isError = false
      this.init()
    },
    init() {
      this.$video = this.$refs.video

      if (this.options.autoplay) {
        this.play()
      }

      if (this.options.playsinline) {
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
      this.$emit('playend', this.videoElm)
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
  width: 66px;
  height: 79px;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, .8);
  img {
      width: 100%;
  }
}

.veer-video-error {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #000;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content : center;
  align-items : center;
  p{
    color: #fff;
    padding: 10px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
