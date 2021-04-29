<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="carYearId" :options="yearEntities" @change="changeYear" />
      <van-dropdown-item v-model="carCcId" :options="carCcEntities"  @change="changeCc" />
    </van-dropdown-menu>
    <van-cell-group>
      <van-cell :to="{path: '/accumulator',query: {id: obj.id}}" v-for="obj in data" :key="obj.id"  :title="obj.name" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "CarClass",
  data() {
    return {
      carClassId: '',
      carYearId: 0,
      carCcId: 0,
      data: [],
      carCcEntities: [],
      yearEntities: []
    }
  },
  created(){
    // 取到路由带过来的参数
    this.carClassId = this.$route.query.id;
  },
  mounted() {
    this.getCarConfig();
    this.getCarDetails();
  },
  methods: {
    changeYear() {
      this.getCarDetails();
    },
    changeCc() {
      this.getCarDetails();
    },
    getCarConfig() {
      this.$axios.get("/getCarConfig/" + this.carClassId).then(res => {
        var data = res.data;
        if (data.code == 200) {
          this.carCcEntities = data.data.carCcEntities;
          this.yearEntities = data.data.yearEntities;
        } else {
          console.log(data.msg);
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    getCarDetails() {
      this.$axios.post("/getCarDetails",
        {carClassId: this.carClassId,
          carYearId: this.carYearId,
          carCcId: this.carCcId
        }).then(res => {
        var data = res.data;
        if (data.code == 200) {
          this.data = data.data;
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

</style>
