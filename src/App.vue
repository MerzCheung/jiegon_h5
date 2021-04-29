<template>
  <div id="app">
    <div id="title">
      <van-icon class="icon" name="arrow-left" @click="$router.back(-1)" />
      <span>电池查询</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
#title {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #323233;
  font-weight: 500;
  font-size: 16px;
  border-bottom: #FEFEFE solid 1px;
  background-color: #f1f0f0;
  position: relative;
}
.icon {
  position: absolute;
  left: 10px;
  line-height: 40px;
}
</style>
