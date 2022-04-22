<template>
  <div class="a7">
    <div class="header">
      <img src="../assets/xitongfanhui.png" alt="" />
      <span> 待处理签约申请 </span>
      <span></span>
    </div>
    <div class="box">
      <ul>
        <li>
          <div class="a">
            <span id="a1">王小明</span>
            <span id="a2">58岁</span>
            <span class="d">待审核</span>
          </div>
          <div>
            <span id="a3"> 身份证号&emsp;</span>
            <span id="a2"> 255329********1528 </span>
          </div>
          <div>
            <span id="a3">签约团队&emsp;</span>
            <span id="a2">李明明团队</span>
          </div>
          <div>
            <span id="a3">服务包&emsp;&emsp;</span>
            <span id="a2">老年人服务包</span>
          </div>
        </li>
         <li>
          <div class="a">
            <span id="a1">王小明</span>
            <span id="a2">58岁</span>
            <span class="d">待审核</span>
          </div>
          <div>
            <span id="a3"> 身份证号&emsp;</span>
            <span id="a2"> 255329********1528 </span>
          </div>
          <div>
            <span id="a3">签约团队&emsp;</span>
            <span id="a2">李明明团队</span>
          </div>
          <div>
            <span id="a3">服务包&emsp;&emsp;</span>
            <span id="a2">老年人服务包</span>
          </div>
        </li>
         <li>
          <div class="a">
            <span id="a1">王小明</span>
            <span id="a2">58岁</span>
            <span class="d">待审核</span>
          </div>
          <div>
            <span id="a3"> 身份证号&emsp;</span>
            <span id="a2"> 255329********1528 </span>
          </div>
          <div>
            <span id="a3">签约团队&emsp;</span>
            <span id="a2">李明明团队</span>
          </div>
          <div>
            <span id="a3">服务包&emsp;&emsp;</span>
            <span id="a2">老年人服务包</span>
          </div>
        </li>
      </ul>
      <p class="p">
        没有更多了o ~
      </p>
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

.box {
  ul {
    li {
      background-color: #fff !important;
      margin: 10px;
      padding: 10px;
      line-height: 30px;
      border-radius: 20px;
      .a {
        display: flex;
        justify-content: space-between;
        #a1 {
          display: inline-block;
          width: 85px;
          font-size: 20px;
        }
        #a2 {
          flex: 1;
        }
        #a3{
          display: inline-block;
          margin-left: 10px !important;
        }
        .d{
          color: red;
        }
      }
    }
  }
  .p{
    text-align: center;
    color: #ccc;
    font-size: 17px;
  }
}
</style>
