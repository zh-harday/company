<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from '../src/components/header'
import vFooter from '../src/components/footer'
export default {
  name: 'app',
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style lang="less">
@import '../static/css/normalize.less';

</style>
