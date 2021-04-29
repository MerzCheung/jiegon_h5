<template>
  <div>
    <div class="title">蓄电池</div>
    <van-cell-group>
      <van-cell title="电池种类" :value="configEntity.type" />
      <van-cell title="参考名称" :value="configEntity.name" />
      <van-cell title="电池容量" :value="configEntity.capacity" />
      <van-cell title="规格尺寸" :value="configEntity.specification" />
      <van-cell title="端柱类型" :value="configEntity.pillarType" />
      <van-cell title="极性固定" :value="configEntity.fixedPolarity" />
    </van-cell-group>
    <div class="title">蓄电池列表</div>
    <van-cell-group>
      <van-cell v-for="obj in listEntities" :key="obj.id" :title="obj.name" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Accumulator",
  data() {
    return {
      id: '',
      configEntity: {},
      listEntities: []
    }
  },
  created(){
    // 取到路由带过来的参数
    this.id = this.$route.query.id;
  },
  mounted() {
    this.getAccumulator();
  },
  methods: {
    getAccumulator() {
      this.$axios.get("/getAccumulator/" + this.id).then(res => {
        var data = res.data;
        if (data.code == 200) {
          this.configEntity = data.data.configEntity;
          this.listEntities = data.data.listEntities;
        } else {
          console.log(data.msg);
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #323233;
  font-weight: 500;
  font-size: 14px;
  margin-left: 10px;
  border-left: 3px dodgerblue solid;
  margin-top: 10px;
}
</style>
