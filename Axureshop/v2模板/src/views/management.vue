<template>
  <div class="management">
    <div class="header">
      <img src="../assets/xitongfanhui.png" alt="" />
      <span> 签约管理 </span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {},
};
</script>

<style lang='scss'>
* {
  padding-top: 0 !important;
  padding: 0;
  margin: 0;
  font-family: "微软雅黑";
  background-color: #f7fafd;
}
.header {
  // width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  // margin: 0 10px;
  padding-top: 10px;
  background-color: #fff;
  margin-bottom: 20px;

  img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: 10px;
  }
}
</style>
