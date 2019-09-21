<template>
  <div class="t-footer" :style="{height:height+'px'}">
      <slot/>
  </div>
</template>

<script>
export default {
    name:'TFooter',
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