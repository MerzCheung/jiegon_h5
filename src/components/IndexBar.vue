<template>
  <van-index-bar :index-list="indexList">
    <div v-for="value in data">
      <van-index-anchor :index="value.layerModel"/>
      <van-grid square>
        <van-grid-item :to="{path: '/carClass',query: {id: obj.id}}" v-for="obj in value.carListEntitys" :key="obj.id" :icon="require('../assets/'+obj.img)" :text="obj.name" />
      </van-grid>
    </div>
  </van-index-bar>
</template>

<script>
export default {
  name: "IndexBar",
  data() {
    return {
      indexList: [],
      data: []
    }
  },
  created() {

  },
  mounted() {
    this.$axios.get("/getCarList").then(res => {
      var data = res.data;
      if (data.code == 200) {
        this.data = data.data;
        this.indexList = data.data.map(obj => obj.layerModel)
      } else {
        console.log(data.msg);
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style scoped>

</style>
