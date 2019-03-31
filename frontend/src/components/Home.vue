<template>
  <div>
    <h4>无境书茶2019日历工具</h4>
    <canvas id='canvas' width="300" height="300"></canvas>
    <div style="padding: 10vw;">
      <b-button v-bind:disabled='!canDownload' block variant='success' @click='download'>下载图片</b-button>
      <b-button block variant='primary' @click='open'>打开相机</b-button>
      <input id="takepicture" type="file" accept="image/*" style="display: none" @change="setImagePreview">
      <a id='a' style="display: none"/>
      <div :style='canDownload ? "display: block":"display: none"' style="margin-top: 10px;">
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <vue-slider style="margin-top: 20px;" v-model="value" @change='change'/>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Jimp from 'jimp'
export default {
  name: 'Home',

  data () {
    return {
      qrPath: '/static/pic/qr.jpeg',
      logoPath: '/static/pic/logo.png',
      canDownload: false,
      value: 50, // slider value
      photo: null, // 选择的图片
      selected: 'brightness', // 选项
      options: [
        { value: 'brightness', text: '亮度' },
        { value: 'contrast', text: '对比度' }
      ],
      timeoutId: null
    }
  },

  mounted () {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    var devicePixelRatio = window.devicePixelRatio || 1
    var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1
    var ratio = devicePixelRatio / backingStoreRatio
    var oldWidth = canvas.width
    var oldHeight = canvas.height
    canvas.width = oldWidth * ratio
    canvas.height = oldHeight * ratio
    canvas.style.width = oldWidth + 'px'
    canvas.style.height = oldHeight + 'px'
    context.scale(ratio, ratio)
    this.drawRound(context)
    this.drawLogo(context)
  },

  methods: {
    // when slider change
    change () {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
      }
      this.timeoutId = setTimeout(() => {
        Jimp.read(this.photo.src)
          .then(image => {
            const value = this.value / 100 - 0.5
            if (this.selected === 'brightness') {
              image.brightness(value)
                .getBase64Async(Jimp.MIME_PNG)
                .then(imgSrc => {
                  this.photo.src = imgSrc
                })
            } else {
              image.contrast(value)
                .getBase64Async(Jimp.MIME_PNG)
                .then(imgSrc => {
                  this.photo.src = imgSrc
                })
            }
          })
          .catch(err => {
            console.error(err)
          })
      }, 500)
    },

    //  下载图片
    download () {
      const src = document.getElementById('canvas').toDataURL('image/jpg')
      const context = document.getElementById('canvas').getContext('2d')
      context.clearRect(0, 0, 300, 300)
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, 300, 300)
      context.fill()
      const img = new Image()
      img.onload = () => {
        const {dx, dy, dWidth, dHeight} = this.getCanvasInfo(img, 300, 300)
        context.drawImage(img, -dx, -dy, dWidth, dHeight)
        //  直接createElement('a')有时没有反应，不知道为什么
        let link = document.getElementById('a')
        link.href = document.getElementById('canvas').toDataURL('image/png')
        link.download = `${moment().unix()}.png`
        link.click()
      }
      img.src = src
    },

    drawBack (context) {
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, 300, 300)
    },

    drawRound (context) {
      context.fillStyle = '#ececec'
      context.arc(150, 145, 130, 0, 360)
      context.fill()
    },

    drawLogo (context) {
      context.globalCompositeOperation = 'source-over'
      const qrImg = new Image()
      qrImg.onload = () => {
        context.drawImage(qrImg, 250, 250, 40, 40)
      }
      qrImg.src = this.qrPath
      const logoImg = new Image()
      logoImg.onload = () => {
        context.drawImage(logoImg, 10, 260, logoImg.width / 50, logoImg.height / 50)
      }
      logoImg.src = this.logoPath
    },

    //  打开本地相机相册
    open () {
      const takePicture = document.getElementById('takepicture')
      takePicture.click()
    },

    //  预览
    setImagePreview (e) {
      const URL = window.URL || window.webkitURL
      const src = URL.createObjectURL(e.target.files[0])
      this.reDrawPhoto(src)
    },

    // 重新绘制图片
    reDrawPhoto (src) {
      this.photo = new Image()
      this.photo.onload = () => {
        const context = document.getElementById('canvas').getContext('2d')
        context.clearRect(0, 0, 300, 300)
        this.drawRound(context)
        context.globalCompositeOperation = 'source-atop'
        const {dx, dy, dWidth, dHeight} = this.getCanvasInfo(this.photo, 300, 300)
        context.drawImage(this.photo, -dx, -dy, dWidth, dHeight)
        this.drawLogo(context)
        this.canDownload = true
      }
      this.photo.src = src
    },

    //  重新调整选择图片
    getCanvasInfo (headImg, canvW, canH) {
      const imgX = headImg.width
      const imgY = headImg.height
      let dWidth = 0
      let dHeight = 0
      if (imgX > imgY) {
        dHeight = canH
        dWidth = imgX / (imgY / canH)
        if (dWidth < canvW) {
          dWidth = canvW
          dHeight = imgY / (imgX / canvW)
        }
      } else {
        dWidth = canvW
        dHeight = imgY / (imgX / canvW)
        if (dHeight < canH) {
          dHeight = canH
          dWidth = imgX / (imgY / canH)
        }
      }
      const dx = (dWidth - canvW) / 2
      const dy = (dHeight - canH) / 2
      return {
        dx, dy, dWidth, dHeight
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas{
  border:1px solid #ececec;
  /*background-color: red;*/
}
</style>
