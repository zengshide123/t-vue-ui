<template>
  <div class="t-container" :class="{'is-vertical':isVertical}">
      <slot/>
  </div>
</template>

<script>
export default {
  name: "TContainer",
  componentName:'TContainer',
  props:{
      direction:String
  },
  computed:{
      isVertical(){
          if(this.direction==='vertical'){
              return true
          }else if(this.direction==='horizontal'){
              return false
          };
        //   当子组件中含有 THeader 或者 TFooter 组件时
        //   主轴方向改成 column
          return this.$slots && this.$slots.default?this.$slots.default.some(vIns=>{
              const insTag = vIns.componentOptions && vIns.componentOptions.tag;
              return insTag === 'THeader' || insTag === 'TFooter'
          }):false
      }
  }
};
</script>

<style lang='less' scoped>
@import './index.less';
</style>