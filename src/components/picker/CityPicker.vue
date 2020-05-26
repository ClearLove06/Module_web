
<!--三级联动 一般配合弹窗使用-->
<!--使用如下， 在父组件中调用getCity即可 需接收参数getCity（value）{}-->
<!--   <CityPicker @selectCity="getCity" @CancelCity="canceCity"/> -->

<template>
  <div class="CityPicker">
    <Picker show-toolbar value-key="name" title="地区选择" :columns="columns" ref="checkbox" @confirm="onConfirm" @cancel="onCancel"/>
  </div>
</template>

<script>
  import { Picker } from 'vant';
  import city from '../../common/city'
  export default {
    name: "cityChoose",
    props:{
      selectCity:Function,
      CancelCity:Function,
    },
    components:{
      Picker,
    },
    data() {
      return {
        columns:city,
      }
    },
    methods:{
      onConfirm(value, index){
        this.$emit('selectCity',value)
      },
      onCancel(value, index){
        this.$emit('CancelCity',value)
      },
    },
    mounted() {
    },
  }
</script>
<style lang="stylus" scoped>
  .CityPicker{

  }
</style>


