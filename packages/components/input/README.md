# Input 输入框

## 基本用法

```html
<veer-input v-model="value" placeholder="请输入内容"></veer-input>
```

```js
export default {
  data() {
    return {
      value: ''
    }
  }
}
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 `input` 组件

```html
<veer-input placeholder="请输入内容" v-model="input" :disabled="true"></veer-input>
```

```js
export default {
  data() {
    return {
      value: ''
    }
  }
}
```

## Props 配置

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| - | - | - | - | - |
| type | input类型 | String | text | text/number/password/date |
| v-model | 绑定值 | String | - | - |
| disabled | 禁用状态 | Boolean | false | true/false |
| readonly | 只读状态 | Boolean | false | true/false |
| maxlength | 最大输入长度 | Number | - | - |
| placeholder | 占位文本 | String | - | - |
| autofocus | 自动对焦 | Boolean | false | true/false |
| autocomplete | 自动补全 | Boolean | false | true/false |

## 插槽

| 名字 | 说明 |
| - | - |
| prepend | 前置内容 |
| append | 后置内容 |

## 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象
| blur| 输入框失焦后触发此事件 | e - 事件对象
| change | 绑定值改变且输入框失去焦点后触发 | e - 事件对象
| input | 绑定值变化时触发 | 更新后的绑定值 |

## 实例方法

| 方法名 | 说明 |
| - | - |
| focus | 获得焦点 |
| blur | 离焦 |
