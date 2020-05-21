<template>
  <veer-page
    type="icon-view"
    title="Icon">
    <div slot="content">
      <ul>
        <li
          v-for="(item, index) in icons"
          :key="index"
          @touchstart="touchstart(index)"
          @touchend="touchend(index)"
          :class="{'touch': index === touchIndex}">
          <veer-icon :name="item"></veer-icon><span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'

export default {
  data() {
    return {
      touchIndex: '',
      icons: ['home', 'sort', 'full', 'more', 'add', 'wrong', 'correct', 'info', 'question', 'time', 'smiling', 'play', 'stop', 'location', 'load', 'crown', 'hot', 'press', 'slide', 'qrcode', 'picture', 'magic', 'plus', 'praise', 'favor', 'comment', 'down', 'left', 'right', 'check', 'close', 'music-on', 'music-off', 'volume', 'mute', 'voice', 'tag', 'round', 'scan']
    }
  },
  methods: {
    touchstart(index) {
      this.touchIndex = index
    },
    touchend(index) {
      this.touchIndex = index
    }
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
.icon-view {
  ul {
    width:100%;
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    align-items: center;
    color: #666;
  }
  li {
    width: 25%;
    height: 100px;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    &.touch {
      background: #f2f2f2;
      color: #ff64a8;
      cursor: pointer;
    }
    i {
      flex-basis: 100%;
      font-size: 38px;
    }
    span {
      flex-basis: 100%;
    }
  }
}
</style>
