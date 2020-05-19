<template>
  <veer-page
    type="flex-view"
    title="Flex">
    <div slot="content">
      <H2>wrap（是否换行）</H2>
      <div class="box-item">
        <veer-flex direction="row">
          <veer-flex-item v-for="(item, index) in content1" :key="index" :span="8">
            <div class="flex-content">{{ item }}</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex direction="column">
          <veer-flex-item v-for="(item, index) in content1" :key="index" :span="8">
            <div class="flex-content">{{ item }}</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <H2>wrap（是否换行）</H2>
      <div class="box-item">
        <veer-flex wrap="nowrap" :gutter="10">
          <veer-flex-item v-for="(item, index) in content" :key="index" :span="8">
            <div class="flex-content">{{ item }}</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex wrap="wrap" :gutter="10">
          <veer-flex-item v-for="(item, index) in content" :key="index" :span="8">
            <div class="flex-content">{{ item }}</div>
          </veer-flex-item>
        </veer-flex>
      </div>

      <h2>justify（主轴方向）</h2>
      <div class="box-item">
        <veer-flex>
          <veer-flex-item v-for="(item, index) in content1" :key="index" :span="6">
            <div class="flex-content">start</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex justify="center">
          <veer-flex-item v-for="(item, index) in content1" :key="index" :span="6">
            <div class="flex-content">center</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex justify="flex-end">
          <veer-flex-item v-for="(item, index) in content1" :key="index" :span="6">
            <div class="flex-content">end</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex justify="space-between">
          <veer-flex-item v-for="(item, index) in content1" :key="index" :span="6">
            <div class="flex-content">between</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex justify="space-around">
          <veer-flex-item v-for="(item, index) in content1" :key="index" :span="6">
            <div class="flex-content">around</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <h2>align（侧轴方向）</h2>
      <div class="box-item">
        <veer-flex gutter="10" alignItems="flex-start">
          <veer-flex-item  :span="6">
            <div class="flex-content">flex-start</div>
          </veer-flex-item>
          <veer-flex-item  :span="12">
            <div class="flex-content flex-content-height">flex-start</div>
          </veer-flex-item>
          <veer-flex-item  :span="6">
            <div class="flex-content">flex-start</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex gutter="10" alignItems="center">
          <veer-flex-item  :span="6">
            <div class="flex-content">center</div>
          </veer-flex-item>
          <veer-flex-item  :span="12">
            <div class="flex-content flex-content-height">center</div>
          </veer-flex-item>
          <veer-flex-item  :span="6">
            <div class="flex-content">center</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex gutter="10" alignItems="flex-end">
          <veer-flex-item  :span="6">
            <div class="flex-content">flex-end</div>
          </veer-flex-item>
          <veer-flex-item  :span="12">
            <div class="flex-content flex-content-height">flex-end</div>
          </veer-flex-item>
          <veer-flex-item  :span="6">
            <div class="flex-content">flex-end</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex gutter="10" alignItems="baseline">
          <veer-flex-item  :span="6">
            <div class="flex-content">baseline</div>
          </veer-flex-item>
          <veer-flex-item  :span="12">
            <div class="flex-content flex-content-height">baseline</div>
          </veer-flex-item>
          <veer-flex-item  :span="6">
            <div class="flex-content">baseline</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <h2>分栏偏移</h2>
      <div class="box-item">
        <veer-flex>
          <veer-flex-item :offset="6"  :span="6">
            <div class="flex-content">offset:6</div>
          </veer-flex-item>
          <veer-flex-item :span="6">
            <div class="flex-content">span:6</div>
          </veer-flex-item>
          <veer-flex-item :span="6">
            <div class="flex-content">span:6</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex>
          <veer-flex-item :span="6">
            <div class="flex-content">span:6</div>
          </veer-flex-item>
          <veer-flex-item :offset="8" :span="6">
            <div class="flex-content flex-content-light">offset:8</div>
          </veer-flex-item>
          <veer-flex-item :span="6">
            <div class="flex-content">span:6</div>
          </veer-flex-item>
        </veer-flex>
      </div>
      <div class="box-item">
        <veer-flex>
          <veer-flex-item :span="6" :offset="6">
            <div class="flex-content">offset:6</div>
          </veer-flex-item>
          <veer-flex-item :span="6" :offset="6">
            <div class="flex-content" ref="ball">offset:6</div>
          </veer-flex-item>
        </veer-flex>
      </div>
    </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'
import anime from 'animejs/lib/anime.es.js'
export default {
  data() {
    return {
      direction: 'row',
      wrap: 'wrap',
      justify: 'center',
      alignItems: 'center',
      alignContent: 'center',
      content: [1, 2, 3, 4, 5, 6],
      content1: [1, 2, 3]
    }
  },
  methods: {
    move() {
      return anime({
        targets: this.$refs.ball,
        translateY: [0, 10],
        duration: 800,
        direction: 'alternate',
        easing: 'linear',
        loop: true
      })
    }
  },
  mounted() {
    this.move()
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
.flex-view {
  width: 100%;
  height: 100%;
  .box-item {
    background: #fff;
    margin-bottom: 20px;
    padding: 20px 20px 10px;
    border: 1px solid #ddd;
  }
  .veer-flex-item {
    margin-bottom: 10px;
    &:nth-of-type(2n)
    .flex-content {
      background: #ff64a8;
    }
  }
  .flex-content {
      line-height: 30px;
      color: #fff;
      text-align: center;
      background: #e62579;
      &.flex-content-height {
        height: 50px;
      }
  }
}
</style>
