# Flex 布局

## 示例

- direction（主轴方向）

默认情况下，row 表示从左向右排列

```html
<veer-flex :direction="wrap" :gutter="10">
  <veer-flex-item v-for="(item, index) in content" :key="index" :span="8">
    <div class="flex-content">{{ item }}</div>
  </veer-flex-item>
</veer-flex>
```

```js
export default {
  data() {
    return {
      direction: 'row',  // row | row-reverse | column | column-reverse
      content: [1, 2, 3],
    }
  }
}
```

- wrap（是否换行）

默认情况下，nowrap 表示所有 Flex 项目单行排列

```html
<veer-flex :wrap="wrap" :gutter="10">
  <veer-flex-item v-for="(item, index) in content" :key="index" :span="8">
    <div class="flex-content">{{ item }}</div>
  </veer-flex-item>
</veer-flex>
```

```js
export default {
  data() {
    return {
      wrap: 'wrap',  // nowrap | wrap | wrap-reverse
      content: [1, 2, 3, 4, 5, 6],
    }
  }
}
```

- justify（主轴对齐方式及额外空间分配）

默认情况下，flex-start 表示从起点线开始顺序排列

```html
<veer-flex :justify="justify">
  <veer-flex-item v-for="(item, index) in content1" :key="index" :span="6">
    <div class="flex-content">center</div>
  </veer-flex-item>
</veer-flex>
```

```js
export default {
  data() {
    return {
      justify: 'center',  // flex-start | flex-end | center | space-between | space-around
      content: [1, 2, 3, 4, 5, 6],
    }
  }
}
```

- alignItems（侧轴对齐方式）

默认情况下，stretch 表示侧轴方向拉伸显示

```html
<veer-flex gutter="10" :alignItems="alignItems">
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
```

```js
export default {
  data() {
    return {
      alignItems: 'center'  // stretch | flex-start | flex-end | center | baseline
    }
  }
}
```

- alignContent（侧轴对齐方式及额外空间分配）

默认情况下，stretch 表示侧轴方向拉伸显示

> 注：此属性在只有一行的容器上没有效果

```html
<veer-flex gutter="10" :alignContent="alignContent">
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
```

```js
export default {
  data() {
    return {
      alignContent: 'center'  // stretch | flex-start | flex-end | center | space-between | space-around
    }
  }
}
```

- 分栏偏移

```html
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
```

## Prop

### FlexBox

| 字段 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| gutter | Flex 项目之间的间距（单位为px） | String/Number | - | - |
| direction | 项目的排列方向 | String | row / row-reverse / column / column-reverse | row |
| wrap | Flex 项目换行排列 | String | nowrap / wrap / wrap-reverse | nowrap |
| justify | Flex 主轴对齐方式及额外空间分配 | String | flex-start / flex-end / center / space-between / space-around / space-evenly | flex-start |
| alignItems | Flex 交叉轴对齐方式 | String | stretch / flex-start / flex-end / center / baseline | stretch |
| alignContent | Flex 交叉轴对齐方式及额外空间分配 | String | stretch / flex-start / flex-end / center / space-between / space-around | stretch |

### FlexItem

| 字段 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| span | 项目元素宽度（共分为24份，例如设置一行3个，那么span值为8） | String/Number | - | 24 |
| offset | 项目元素偏移距离 | String/Number | - | - |
| grow | 定义项目放大比例 | Number | - | 默认为0，即如果存在额外空间，也不放大，负值无效 |
| shrink | 定义项目缩小比例 | Number | - | 默认为1，即如果空间不足，该项目将缩小。0表示不缩小，负值无效 |
