<template>
  <div id="app">
    <Contianer/>
  </div>
</template>

<script>
import Layout from './demo/layout';
import Contianer from './demo/container'
export default {
  name: 'app',
  components:{
    Layout,
    Contianer
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
