<template>
  <van-index-bar :index-list="indexList">
    <div v-for="value in data">
      <van-index-anchor :index="value.carType"/>
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item :to="{path: '/carClassList',query: {id: obj.id}}"  v-for="obj in value.classEntityList" :key="obj.id" :text="obj.carStyle" />
      </van-grid>
    </div>
  </van-index-bar>
</template>

<script>
export default {
  name: "CarClass",
  data() {
    return {
      id: '',
      indexList: [],
      data: []
    }
  },
  created(){
    // 取到路由带过来的参数
    this.id = this.$route.query.id;
  },
  mounted() {
    this.$axios.get("/getCarClass/" + this.id).then(res => {
      var data = res.data;
      if (data.code == 200) {
        this.data = data.data;
        // this.indexList = data.data.map(obj => obj.carType)
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
