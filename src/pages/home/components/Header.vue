<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe622;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe613;</span>
            输入搜索/游玩/城市</div>
       <div class="header-right">城市
           <span class="iconfont arrow-icon">&#xe64a;</span>
       </div>
    </div>
</template>

<script>
export default {
name:'HomeHeader'
}
//make by 李进
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header
  line-height:.86rem 
  display :flex 
  background :#00bcd4 
  color:#fff
  .header-left
    width:.64rem 
    float:left
    text-align :center 
    .back-icon 
     font-size:.44rem 
  .header-right
    width:1.24rem 
    float:right
    text-align :center 
    .arrow-icon 
     font-size:.24rem 
     margin-left:-.02rem 
  .header-input 
    flex:1    
    border-radius:.1rem 
    margin-top :.12rem 
    margin-left:.12rem 
    padding-left:.2rem 
    background :#fff 
    color:#ccc
    height:.64rem 
    line-height :.64rem 
    


</style>
