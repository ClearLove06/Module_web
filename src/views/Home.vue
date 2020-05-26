<template>
  <div class="home">
    <div class="home_wrap">
      <NavBar
        title="适配引入第三方插件样式正常"
        :fixed="true"
        :placeholder="true"
      ></NavBar>
      <Button @click="findPage" type="primary">发请求看F12</Button>
      <Video :videoUrl=src :videoPoster="poster"></Video>
      <Button @click="cityFlag = !cityFlag" type="primary">三级联动</Button>
      <Popup v-model="cityFlag" position="bottom" round>
        <CityPicker @selectCity="getCity" @CancelCity="canceCity"/>
      </Popup>

    </div>
  </div>
</template>

<script>
  import { NavBar, Toast,Button ,Popup} from 'vant';
  import Video from '../components/video/Index'
  import CityPicker from '../components/picker/CityPicker.vue'
  export default {
    name: "Home",
    components:{
      NavBar,
      Toast,
      Button,
      Video,
      CityPicker,
      Popup,
    },
    data(){
      return {
        src:'http://vjs.zencdn.net/v/oceans.mp4',
        poster:'https://b-gold-cdn.xitu.io/v3/static/img/bg.1f516b3.png',
        cityFlag:false
      }
    },
    methods:{
      findPage(){
        this.$api.home.findPage() .then(()=>{
          this.$toast('请求成功')
        })
      },
      // 获取联动数据
      getCity(value){
        console.log(value);
        this.cityFlag = false
      },
      // 取消联动
      canceCity(value){
        console.log(value);
        this.cityFlag = false
      },
    }
  }
</script>
<style lang="stylus" scoped>
  .home{
    max-width 750px
    margin 0 auto
    .home_wrap{
    }
  }
</style>


