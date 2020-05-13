# Input 组件

输入框组件。支持使用`v-model`对数据双向绑定，支持一键清空内容。

## 示例

- 基本用法

  使用`v-model`对输入内容双向绑定。

  ```html
  <cube-input v-model="value" ></cube-input>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
  ```

- 控制最大长度

  通过 watch 组件的 value 值的长度可实现手工控制值长度。

  ```html
  <cube-input v-model="value"></cube-input>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: ''
      }
    },
    watch: {
      value(newV) {
        if (newV.length > 10) {
          newV = newV.slice(0, 10)
          this.$nextTick(() => {
            this.value = newV
          })
        }
      }
    }
  }
  ```

  上述代码就是控制输入内容长度不得超过10位。

- 清空按钮

  可通过`clearable`配置清空按钮。

  ```html
  <cube-input
    v-model="value"
    :clearable="clearable"
  ></cube-input>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: '',
        clearable: {
          visible: true,
          blurHidden: true
        }
      }
    }
  }
  ```

  `clearable` 配置的对象可以包含两个 key 值：`visible` 和 `blurHidden` 分别代表是否展示以及当 Input 元素离焦的时候是否隐藏。

## Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | input类型 | String | text/number/password/date | text |
| v-model | 绑定的值 | String | - | 空 |
| disabled | 禁用状态 | Boolean | true/false | false |
| readonly | 只读状态 | Boolean | true/false | false |
| maxlength | 最大输入长度 | Number | - | 60 |
| placeholder | 占位文本 | String | - | 空 |
| autofocus | 自动对焦 | Boolean | true/false | false |
| autocomplete | 自动补全 | Boolean | true/false | false |
| clearable | 是否使用清空按钮，可配置为对象形式 `{visible: true, blurHidden: true}`，其中 `visible` 控制是否显示，`blurHidden` 控制离焦后是否隐藏 | Boolean/Object | true/false/{visible: true, blurHidden: true} | false |

## 插槽

| 名字 | 说明 |
| - | - |
| prepend | 前置内容 |
| append | 后置内容 |

## 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
| blur | 输入框失焦后触发此事件 | e - 事件对象 |
| input | 绑定值变化时触发 | 更新后的绑定值 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| focus | 获得焦点 |
| blur | 离焦 |
