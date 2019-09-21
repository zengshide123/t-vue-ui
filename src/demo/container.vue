<template>
    <TContainer direction="vertical">
        <THeader :height="30" style="background:orange">
            theader
        </THeader>
        <TContainer>
            <TAside :width="100">taside</TAside>
            <TMain>
                tmain
            </TMain>
        </TContainer>
        <TFooter :height="20" style="background:pink">
            tfooter
        </TFooter>
    </TContainer>
</template>

<script>
export default {
    name:'Container'
}
</script>

<style lang='less' scoped>

</style>