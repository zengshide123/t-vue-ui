<template>
    <div class="t-row formatter-block" :style="style" :class="dynmaicClass">
        <slot/>
    </div> 
</template>
<script>
export default {
    name:'TRow',
    componentName:'TRow',
    props:{
        gutter:Number,
        type:String,
        justify:{
            type:String,
            default:'start'
        },
        align:{
            type:String,
            default:'top'
        }
    },
    computed:{
    //将 gutter 配置 映射为左右两侧的外边距
        style(){
            const ret = {};
            if(this.gutter){
                ret.marginLeft = `-${this.gutter/2}px`;
                ret.marginRight = ret.marginLeft;
            }
            return ret
        },
    // 映射 flex 布局样式配置
        dynmaicClass(){
            const ret = [];
            if(this.type === 'flex'){
                ret.push('t-row-flex');
                ret.push(`${this.justify==='start'?'':'t-justify-'+this.justify}`);
                ret.push(`${this.align==='top'?'':'t-align-'+this.align}`);
            }
            return ret
        }
    }
}
</script>
<style lang='less' scoped>
    @import '../../../asset/style/mixins.less';
    @import './index.less';
</style>