<template>
    <div class="t-col" :style="gutter" :class="dynmaicClass">
        <slot/>
    </div>
</template>
<script>
export default {
    name:'TCol',
    props:{
        span:{
            type:Number,
            default:24
        },
        offset:Number,
        pull:Number,
        push:Number
    },
    computed:{
        // 父级 row 的 margin 为 [0,-15,0,-15]
        gutter(){
            let parent = this.$parent;
            const ret = {};
            while(parent && parent.$options.componentName !== 'TRow'){
                parent = parent.$parent;
            };
            if(parent&&parent.gutter){
                ret.paddingLeft = parent.gutter/2 + 'px';
                ret.paddingRight = ret.paddingLeft;
            };
            return ret
        },
        // 暂时不考虑 适配不同屏幕
        dynmaicClass(){
            let ret = [];
                ret.push(`${this.span?'t-col-'+this.span:''}`);
                ret.push(`${this.push?'t-push-'+this.push:''}`);
                ret.push(`${this.offset?'t-offset-'+this.offset:''}`);
                ret.push(`${this.pull?'t-pull-'+this.pull:''}`);
            return ret
        }

    }
}
</script>

<style lang="less" scoped>
   @import './index.less';
</style>