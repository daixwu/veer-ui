# Video 视频

用于移动端视频播放配置

## 基本用法

```html
<veer-video :video="video"></veer-video>
```

```js
export default {
  data() {
    return {
      video: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4',
      }
    }
  }
}
```

## 视频封面海报设置

```html
<veer-video :video="video"></veer-video>
```

```js
export default {
  data() {
    return {
      video: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4',
        cover: 'https://img1.doubanio.com/view/photo/raw/public/p2594828319.jpg',
      }
    }
  }
}
```

## 视频背景图

当设置视频为背景图时需要将 `muted` 静音、`loop` 循环播放、`autoplay` 自动播放设置为 `true`

```html
<veer-video :video="video"></veer-video>
```

```js
export default {
  data() {
    return {
      video: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4',
        cover: 'https://img1.doubanio.com/view/photo/raw/public/p2594828319.jpg',
        muted: true,
        loop: true,
        autoplay: true
      }
    }
  }
}
```

## Props 配置

使用 video 对象来对视频进行相关设置和属性配置，组件中通过 `Object.assign` 来合并到 `options`

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| - | - | - | - | - |
| url | 视频地址 | String | - | - |
| cover | 初始图片填充 | String | - | - |
| poster | 海报设置 | String | 等于cover | - |
| autoplay | 是否自动播放 | Boolean | false | true/false |
| loop | 是否循环播放 | Boolean | false | true/false |
| controls | 是否展示操作栏 | Boolean | false | true/false |
| controls | 是否展示操作栏 | Boolean | false | true/false |
| muted | 是否静音 | Boolean | false | true/false |
| volume | 音量控制 | Number | 0.75 | 0~1之间的数字 |
| objectFit | 视频如何填充 | String | contain | contain/cover/fill/none/scale-down |

## 插槽

| 名字 | 说明 |
| - | - |
| prepend | 前置内容 |
| append | 后置内容 |

## 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象
