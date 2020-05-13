<template>
  <veer-page
    type="icon-view"
    title="Icon">
    <div slot="content">
      <table>
        <tr>
            <td class="copy-box"><veer-icon name="info"></veer-icon><span>top</span></td>
            <td class="copy-box"><veer-icon name="question"></veer-icon><span>down</span></td>
            <td class="copy-box"><veer-icon name="round-add"></veer-icon><span>right</span></td>
            <td class="copy-box"><veer-icon name="round-close"></veer-icon><span>action</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="round-check"></veer-icon><span>more</span></td>
            <td class="copy-box"><veer-icon name="round-right"></veer-icon><span>trolley</span></td>
            <td class="copy-box"><veer-icon name="time"></veer-icon><span>search</span></td>
            <td class="copy-box"><veer-icon name="play"></veer-icon><span>tick</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="load"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="smiling"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="crown"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="hot"></veer-icon><span>circle-cross</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="location"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="qrcode"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="press"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="picture"></veer-icon><span>circle-cross</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="magic"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="huadong"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="home"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="add"></veer-icon><span>circle-cross</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="praise"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="left"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="check"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="comment"></veer-icon><span>circle-cross</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="close"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="favor"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="down"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="more"></veer-icon><span>circle-cross</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="music-on"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="music-off"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="sound-on"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="sound-off"></veer-icon><span>circle-cross</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="full"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="right"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="round"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="scan"></veer-icon><span>circle-cross</span></td>
        </tr>
        <tr>
            <td class="copy-box"><veer-icon name="sort"></veer-icon><span>plus</span></td>
            <td class="copy-box"><veer-icon name="stop"></veer-icon><span>minus</span></td>
            <td class="copy-box"><veer-icon name="tag"></veer-icon><span>cross</span></td>
            <td class="copy-box"><veer-icon name="voice"></veer-icon><span>circle-cross</span></td>
        </tr>
      </table>
    </div>
  </veer-page>
</template>

<script>
import VeerPage from '../components/veer-page.vue'

export default {
  data() {
    return {
      value: ''
    }
  },
  components: {
    VeerPage
  }
}
</script>

<style scoped lang="scss">
.icon-view {
  table{
    width:100%;
    border-collapse:collapse;
    td{
        width:25%;
        text-align:center;
        vertical-align: middle;
        height:100px;
        border:1px solid #ebebeb;
        font-size:12px;
        &:hover{
            background: #f2f2f2;
            cursor: pointer;
        }
    }
    i {
      font-size: 36px;
    }
    span{
        display:block;
    }
  }
}
</style>
