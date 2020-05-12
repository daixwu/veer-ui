<template>
  <div class="veer-page" :class="type">
    <header class="header">
      <h1>{{title}}</h1>
      <i @click="back" class="veer-icon-left veer-back"></i>
    </header>
    <div class="wrapper">
      <section v-show="desc" class="desc"><slot name="desc">{{desc}}</slot></section>
      <main class="content">
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">

  .veer-page {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #efeff4;
    .header {
      position: relative;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background-color: #edf0f4;
      box-shadow: 0 1px 6px #ccc;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      z-index: 5;
      h1{
        font-size: 16px;
        font-weight: 700;
      }
      .veer-back {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        color: #ff64a8;
      }
    }
    >.wrapper {
      height: calc(100% - 44px);
      overflow-x: hidden;
      overflow-y: auto;
      color: #444;
      text-align: left;
      // -webkit-overflow-scrolling: touch;
      .desc {
        padding: 10px;
        margin: 10px 0;
        line-height: 20px;
        font-size: 14px;
      }
      .content {
        margin: 10px;
        h2 {
          font-size: 16px;
          font-weight: 600;
          text-align: left;
          padding: 20px 0 10px;
        }
        p {
          font-size: 14px;
          line-height: 18px;
          padding-bottom: 10px;
        }
      }
    }
    &.option-demo {
      .wrapper {
        background-color: #fff;
      }
      .title {
        font-size: 16px;
        font-weight: 500;
        color: #333;
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        margin-bottom: 15px;
      }
      .options {
        margin-bottom: 15px;
      }
      .option-list {
        .group {
          margin-bottom: 15px;
          border: 1px solid rgba(0, 0, 0, .1);
          border-radius: 14px;
        }
        .item {
          height: 52px;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          &.sub {
            font-size: 14px;
            background-color: rgba(74, 76, 91, 0.8);
            &.first {
              box-shadow: 0 1px 1px 1px #eee inset;
            }
            &.last {
              border-bottom: none;
            }
          }
        }
      }
      .demo {
        margin-bottom: 15px;
      }
      // .methods {
      //   .method-list {
      //     .group {
      //       margin-bottom: 15px;
      //       border: 1px solid rgba(0, 0, 0, .1);
      //       border-radius: $radius-size-medium;
      //     }
      //     .item
      //     button {
      //       height: 40px;
      //       font-size: $fontsize-large;
      //     }
      //     .item {
      //       background-color: $color-active-light-gray;
      //       border-bottom: 1px solid rgba(0, 0, 0, .1);
      //     }
      //     button {
      //       width: 100%;
      //       border-bottom-left-radius: $radius-size-medium;
      //       border-bottom-right-radius: $radius-size-medium;
      //       background-color: $color-orange;
      //       box-shadow: 0 0 0 1px $color-orange;
      //       border: none;
      //       outline: none;
      //       color: $color-white;
      //     }
      //   }
      // }
    }
  }
</style>
