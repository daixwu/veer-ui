# Popup 弹层

底层弹层组件，主要用于基于此组件实现上层组件封装，只提供了基础功能：指定类型、是否有背景层、显示内容（HTML）以及是否居中。

## 示例

组件

- 基本用法

  ```html
  <veer-popup type="my-popup1" v-model="visible1">My Popup Content 1</veer-popup>
  <veer-button @click="showPopup()">Show Popup</veer-button>
  ```

  指定类型 `type`，这样方便根据类型做 class 控制，如示例，会在根元素上会增加 `cube-my-popup` 的 class

  ```js
  export default {
    data() {
      return {
        visible1: false
      }
    },
    methods: {
      showPopup() {
        this.visible1 = true
      }
    }
  }
  ```

  组件默认是隐藏的，可以通过修改`v-model`的绑定值来实现显示和隐藏，也可以调用组件实例的 `show()` 方法显示，调用组件实例的 `hide()` 方法隐藏

- 不要背景层

  ```html
  <veer-popup type="my-popup2" v-model="visible2" :mask="false">My Popup Content 2</veer-popup>
  <veer-button @click="showPopup()">Show Popup - no mask</veer-button>
  ```

  设置 `mask` 为 `false`，即不显示背景层

- 显示内容 HTML

  ```html
  <veer-popup type="my-popup3" v-model="visible3" :mask="false" content="<i>My Popup Content 3</i>" ref="myPopup3"></veer-popup>
  <veer-button @click="showPopup()">Show Popup - with content</veer-button>
  ```

  只需要传入 `content`，内容是一段 HTML 片段

- 控制位置 & 蒙层点击隐藏

  ```html
  <veer-popup type="my-popup4" v-model="visible4" :position="position" :mask-closable="true" ref="myPopup4">My Popup Content 4</veer-popup>
  <veer-button @click="showPopup()">top/right/bottom/left/center</veer-button>
  ```

  ```js
  const positions = ['top', 'right', 'bottom', 'left', 'center']
  let cur = 0
  export default {
    data() {
      return {
        position: '',
        visible4: false
      }
    },
    methods: {
      showPopup() {
        this.position = positions[cur++]
        if (cur === positions.length) {
          cur = 0
        }
        this.visible4 = true
        setTimeout(() => {
          this.visible4 = false
        }, 1000)
      }
    }
  }
  ```

  可通过 `position` 控制内容出现位置，通过 `mask-closable` 控制点击蒙层是否关闭。

- 上层封装

  ```html
  <template>
    <veer-popup type="my-popup5" content="click here hide" ref="myPopup5">
      <div class="cube-extend-content" @click="hide">
        <slot>click here hide</slot>
      </div>
    </veer-popup>
    <veer-button @click="show">Show Extend Popup</veer-button>
  </template>
  <script>
    export default {
      methods: {
        show() {
          this.$refs.myPopup5.show()
        },
        hide() {
          this.$refs.myPopup5.hide()
        }
      }
    }
  </script>
  <style lang="scss">
  .veer-my-popup5 {
    .cube-extend-content {
      padding: 20px;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
    }
  }
  </style>
  ```

## Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| visible | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |
| type | 弹层类型 | String | - | '' |
| mask | 是否显示背景层 | Boolean | true/false | true |
| content | 内容，HTML 字符串，在无插槽的时候有效 | String | - | '' |
| center | 是否水平垂直居中的 | Boolean | true/false | true |
| position | 内容展示位置，优先级比 center 高 | String | top/right/bottom/left/center | '' |
| maskClosable | 点击蒙层是否隐藏 | Boolean | true/false | false |
| zIndex | 样式 z-index 的值 | Number | - | 100 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| mask-click | 背景层点击 | 点击事件对象 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示 |
| hide | 隐藏 |
