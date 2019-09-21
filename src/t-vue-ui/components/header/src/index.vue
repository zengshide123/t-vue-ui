<template>
  <div class="t-header" :style="{height:height+'px'}">
      <slot/>
  </div>
</template>
<script>
export default {
    name:'THeader',
    props:{
        height:{
            type:Number,
            default:60
        }
    }
}
</script>

<style lang='less' scoped>
@import './index.less';
</style>