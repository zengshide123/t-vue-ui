<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from './demo/layout';
export default {
  name: 'app',
  components:{
    Layout
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
