<template>
    <div class="t-aside" :style="{width:width+'px'}">
        <slot/>
    </div>
</template>

<script>
export default {
    name:'TAside',
    props:{
        width:{
            type:Number,
            default:300
        }
    }
}
</script>

<style lang='less' scoped>
@import './index.less';
</style>