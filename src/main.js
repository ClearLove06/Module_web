
import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import router from './router/index'
import api from './api/index'
import 'vant/lib/index.css'
Vue.use(api)

/**
 *  引入video插件 项目中没用到可以删除
 */
import VideoPlayer from 'vue-video-player'
import'video.js/dist/video-js.css'
import'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)


Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
