<template>
  <div id="app">
    <header class="veer-bar">
      <h1>veer-ui</h1>
    </header>
    <section class="cube-content" ref="mfct">
      <router-link to="/button">Button</router-link>
      <router-link to="/video">Video</router-link>
    </section>
    <veer-view></veer-view>
  </div>
</template>

<script>
import VeerView from './components/veer-view.vue'

export default {

  components: {
    VeerView
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.veer-bar {
  z-index: 10;
  position: absolute;
  right: 0;
  left: 0;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #EDF0F4;
  box-shadow: 0 2px 1px #e9eaea;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  h1 {
    font-size: 18px;
    font-weight: 500;
  }
}
.cube-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
