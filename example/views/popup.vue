<template>
  <veer-page
    type="popup-view"
    title="Popup">
    <template slot="content">
      <div>
        <veer-popup type="my-popup1" v-model="visible1">My Popup Content 1</veer-popup>
        <veer-button @click="showPopup(1)">Show Popup</veer-button>
      </div>
      <div>
        <veer-popup type="my-popup2" v-model="visible2" :mask="false">My Popup Content 2</veer-popup>
        <veer-button @click="showPopup(2)">Show Popup - no mask</veer-button>
      </div>
      <div>
        <veer-popup type="my-popup3" v-model="visible3" :mask="false" content="<i>My Popup Content 3</i>" ref="myPopup3"></veer-popup>
        <veer-button @click="showPopup(3)">Show Popup - with content</veer-button>
      </div>
      <div>
        <veer-popup type="my-popup4" v-model="visible4" :position="position" :mask-closable="true" ref="myPopup4">My Popup Content 4</veer-popup>
        <veer-button @click="showPopup(4)">top/right/bottom/left/center</veer-button>
      </div>
      <div>
        <veer-popup type="my-popup5" content="click here hide" ref="myPopup5">
          <div class="cube-extend-content" @click="hide">
            <slot>click here hide</slot>
          </div>
        </veer-popup>
        <veer-button @click="show">Show Extend Popup</veer-button>
      </div>
    </template>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'

const positions = ['top', 'right', 'bottom', 'left', 'center']
let cur = 0
export default {
  data() {
    return {
      mask: true,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      position: ''
    }
  },
  methods: {
    showPopup(i) {
      if (i === 4) {
        this.position = positions[cur++]
        if (cur === positions.length) {
          cur = 0
        }
      }
      this['visible' + i] = true
      setTimeout(() => {
        this['visible' + i] = false
      }, 1000)
    },
    show() {
      this.$refs.myPopup5.show()
      this.$emit('hide')
    },
    hide() {
      this.$refs.myPopup5.hide()
      this.$emit('hide')
    }
  },
  components: {
    VeerPage
  }
}
</script>

<style lang="scss">
.popup-view {
  .content>div {
    margin: 10px 0;
  }
  .veer-my-popup4 {
    .veer-popup-center {
      .veer-popup-content {
        padding: 20px;
      }
    }
    .veer-popup-content {
      padding: 80px 20px;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
    }
  }
  .veer-my-popup5 {
    .cube-extend-content {
      padding: 20px;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
    }
  }
}
</style>
