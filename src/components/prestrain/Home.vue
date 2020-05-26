<template>
  <div class="prestrain">
    <div class="prestrain_wrap">
      <!--轮播-->
      <div class="prestrain_swiper">
        <div class="mask_box"></div>
        <div class="prestrain_wrap">
          <div class="prestrain_-slide"></div>
        </div>
      </div>
      <!--内容区-->
      <div class="prestrain_center">
        <!--疾病百科-->
        <div class="prestrain_box">
          <div class="prestrain_top">
            <div class="prestrain_topLeft"></div>
            <div class="prestrain_topRight">
            </div>
          </div>
          <div class="prestrain_card">
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
          </div>
        </div>
        <!--科普中心-->
        <div class="prestrainexplain_box">
          <div class="prestrainexplain_top">
            <div class="prestrainexplain_topLeft"></div>
          </div>
          <div class="prestrainexplain_card">
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
            <div class="item_card"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="stylus" scoped>
  $bgColor = #f0f0f0
  .prestrain{
    width: 750px
    margin 0 auto
    background: #fff
    .prestrain_wrap{
      width: 100%
      position relative
      .mask_box{
        box-sizing border
        position absolute
        top: -1px
        left: 0
        width: 100%
        height: 105px
        background: #1F8FFF
      }
      .prestrain_-slide{
        width:710px;
        height:300px;
        border-radius:16px;
        background: $bgColor
        margin 0 auto
      }
    }
  }

  // 内容区
  .prestrain_center{
    width: 100%
    margin-top 70px
    /*height: 300px*/
    padding 0 20px
    // 疾病百科
    .prestrain_box{
      .prestrain_top{
        display flex
        justify-content space-between
        margin-bottom 30px
        .prestrain_topLeft{
          width: 149px
          height: 32px
          background: $bgColor
        }
        .prestrain_topRight{
          width: 200px
          height: 30px
          background: $bgColor
        }
      }
      .prestrain_card{
        display flex
        flex-wrap wrap
        .item_card{
          width:220px;
          height:112px;
          border-radius:16px;
          margin-right 25px
          margin-bottom 20px
          background: $bgColor
          &:nth-child(3n){
            margin-right 0
          }
          >div{
            font-size:30px; /*px*/
            color: #2F3032
          }
          >img{
            vertical-align middle
            width: 80px
            height: 80px
          }
        }
      }
    }
    // 科普中心
    .prestrainexplain_box{
      .prestrainexplain_top{
        width: 149px
        height: 32px
        background: $bgColor
        margin-bottom 30px
      }
      .prestrainexplain_card{
        display flex
        flex-wrap wrap
        .item_card{
          width: 345px
          height: 160px
          position relative
          margin-right 20px
          margin-bottom 20px
          background: $bgColor
          border-radius 16px
          &:nth-child(2n){
            margin-right 0
          }
        }
      }
    }
  }
</style>


