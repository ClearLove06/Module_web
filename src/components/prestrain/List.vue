<template>
  <div class="prestrain_list">
    <div class="prestrain_list_text">
      <div class="itemprestrain_text">
        <div class="text_cover"></div>
        <div class="text_info">
          <div class="text_title"></div>
          <div class="text_quarry">
            <div class="doctor_name"></div>
            <div class="mask"></div>
            <div class="doctor_title"></div>
            <div class="doctor_hospital"></div>
          </div>
        </div>
      </div>
      <div class="itemprestrain_text">
        <div class="text_cover"></div>
        <div class="text_info">
          <div class="text_title"></div>
          <div class="text_quarry">
            <div class="doctor_name"></div>
            <div class="mask"></div>
            <div class="doctor_title"></div>
            <div class="doctor_hospital"></div>
          </div>
        </div>
      </div>
      <div class="itemprestrain_text">
        <div class="text_cover"></div>
        <div class="text_info">
          <div class="text_title"></div>
          <div class="text_quarry">
            <div class="doctor_name"></div>
            <div class="mask"></div>
            <div class="doctor_title"></div>
            <div class="doctor_hospital"></div>
          </div>
        </div>
      </div>
      <div class="itemprestrain_text">
        <div class="text_cover"></div>
        <div class="text_info">
          <div class="text_title"></div>
          <div class="text_quarry">
            <div class="doctor_name"></div>
            <div class="mask"></div>
            <div class="doctor_title"></div>
            <div class="doctor_hospital"></div>
          </div>
        </div>
      </div>
      <div class="itemprestrain_text">
        <div class="text_cover"></div>
        <div class="text_info">
          <div class="text_title"></div>
          <div class="text_quarry">
            <div class="doctor_name"></div>
            <div class="mask"></div>
            <div class="doctor_title"></div>
            <div class="doctor_hospital"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List"
  }
</script>
<style lang="stylus" scoped>
  $bgColor = #f0f0f0
  .prestrain_list{
    background: #fff
    .prestrain_list_text{
      margin-bottom 20px
      border-radius:16px 16px 0 0
      background #fff
      .itemprestrain_text{
        padding 30px 0
        margin 0 20px
        display flex
        align-items center
        /*flex-wrap wrap*/
        position relative
        border-bottom 1px solid #eee ;/*px*/
        .text_cover{
          width:250px;
          height:160px;
          background: $bgColor
        }
        .text_info{
          margin-left 20px
          .text_title{
            width: 300px
            height: 32px
            background: $bgColor
          }
          .text_quarry{
            margin-top 34px
            display flex
            align-items center
            .doctor_name{
              font-size:26px;/*px*/
              width 100px
              height: 23px
              background: $bgColor
            }
            .mask{
              width: 1px
              height: 23px
              background $bgColor
              margin 0 11px
            }
            .doctor_title{
              width 120px
              height: 23px
              background: $bgColor
              margin-right 11px
            }
            .doctor_hospital{
              width 120px
              height: 23px
              background: $bgColor
            }
          }
        }
      }
    }
  }

</style>


