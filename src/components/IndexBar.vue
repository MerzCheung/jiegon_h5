<template>
  <van-index-bar :index-list="indexList">
    <div v-for="value in data">
      <van-index-anchor :index="value.layerModel"/>
      <van-grid square>
        <van-grid-item :to="{path: '/carClass',query: {id: obj.id}}" v-for="obj in value.carListEntitys" :key="obj.id" icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0128dd5568b40500000127163893ba.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622273997&t=6372468d3dd093a0bcacd941cedf04f3" :text="obj.name" />
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
