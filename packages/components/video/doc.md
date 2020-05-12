# Video 视频

用于移动端视频播放配置

## 基本用法

```html
<veer-video :video="options"></veer-video>
```

```js
export default {
  data() {
    return {
      options: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4'
      }
    }
  }
}
```

## 封面图设置

```html
<veer-video :video="options1"></veer-video>
```

```js
export default {
  data() {
    return {
      options1: {
        url: '',
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/lunker.jpg'
      }
    }
  }
}
```

## 行内播放

`playsInline` 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）

```html
<veer-video :video="options2"></veer-video>
```

```js
export default {
  data() {
    return {
      options2: {
        url: '',
        cover: '',
        playsInline: true
      }
    }
  }
}
```

## 视频切换

当视频地址发生变化时，重置视频

```html
<veer-video :video="options3"></veer-video>
```

```js
export default {
  data() {
    return {
      options3: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=293961689a045d90&userId=1296&ext=.mp4',
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/lunker.jpg',
        playsInline: true
      }
    }
  },
  methods: {
    switchVideo() {
      this.options3 = {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=69b285b0de630daf&userId=1296&ext=.mp4',
        cover: 'https://s-cd-1296-tiger.oss.dogecdn.com/monkey.jpg',
        playsInline: true
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
| muted | 是否静音 | Boolean | false | true/false |
| playsInline | 是否设置为行内播放元素 | Boolean | false | true/false |
| objectFit | 视频如何填充 | String | cover | contain/cover/fill/none/scale-down |

## 插槽

| 名字 | 说明 |
| - | - |
| knob | 播放按钮自定义配置 |

## 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| play | 播放 | -- |
| pause | 暂停 | -- |
| playEnd | 播放完成回调 | -- |
