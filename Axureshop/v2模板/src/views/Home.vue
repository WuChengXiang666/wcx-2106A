<template>
  <div class="home">
    <div class="box">
      <!-- 头部 -->
      <div class="header">
        <div>
       <!-- <img src="../assets/IMG_6453.JPG" alt=""> -->
          <span class="name">王医生</span>
        </div>
    <img src="../assets/Snipaste_2022-04-18_19-28-24.png" alt="">
      </div>
      <div class="green">
        <ul>
          <li>
            <p class="p1">已签约人数</p>
            <p class="p2">1000</p>
          </li>
          <li>
            <p class="p1">已签约人数</p>
            <p class="p2">1000</p>
          </li>
          <li>
            <p class="p1">已签约人数</p>
            <p class="p2">1000</p>
          </li>
          <li>
            <p class="p1">已签约人数</p>
            <p class="p2">1000</p>
          </li>
          <li>
            <p class="p1">已签约人数</p>
            <p class="p2">1000</p>
          </li>
          <li>
            <p class="p1">已签约人数</p>
            <p class="p2">1000</p>
          </li>
        </ul>
      </div>
      <div class="da">
        <ul>
          <li>
        <img src="../assets/lan.png" alt=""><br/>
            新建档案
          </li>
          <li>
            <img src="../assets/huang.png" alt=""><br/>
            签约管理
          </li>
          <li>
            <img src="../assets/hong.png" alt=""><br/>
            服务管理
          </li>
        </ul>
      </div>
    </div>
    <div class="bot">
      <div class="qdsq">
        <span class="q"> 签约申请 (3) </span>
        <span class="qq"> 查看全部 > </span>
      </div>
      <div class="card">
        <div>
          <span>王小明</span>
          <span>58岁</span>
          <span>待审核</span>
        </div>
        <p>身份证号 411329********1010</p>
        <p>签约团队 李明明团队</p>
        <p>服务包 老年人服务包</p>
      </div>
      <div class="card">
        <div>
          <span>王小明</span>
          <span>58岁</span>
          <span>待审核</span>
        </div>
        <p>身份证号 411329********1010</p>
        <p>签约团队 李明明团队</p>
        <p>服务包 老年人服务包</p>
      </div>
      <div class="card">
        <div>
          <span>王小明</span>
          <span>58岁</span>
          <span>待审核</span>
        </div>
        <p>身份证号 411329********1010</p>
        <p>签约团队 李明明团队</p>
        <p>服务包 老年人服务包</p>
      </div>
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
  padding: 0;
  margin: 0;
  background-color: #fff;
  list-style: none;
}

.box {
  margin-bottom: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  .img1 {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
    align-items: center;
    margin-right: 5px;
  }

  .name {
    font-family: "黑体";
  }

  .img2 {
    width: 35px;
    height: 35px;
  }
}

.green {
  // width: 100%;
  height: 140px;
  background-color: #43d4af;
  overflow: auto;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  margin: 0 10px;

  ul {
    // width: 100%;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    background-color: #43d4af;

    li {
      margin-bottom: 10px;
      width: 100px;
      text-align: center;
      background-color: #43d4af;

      .p1 {
        color: #f7fafd;
        font-size: 13px;
        background-color: #43d4af;
      }

      .p2 {
        font-weight: 700;
        font-size: 17px;
        color: #fff;
        background-color: #43d4af;
      }
    }
  }
}

.da {
  margin: 0 10px;
  margin-top: 20px;
  padding: 10px;
  // width: 100%;
  height: 60px;
  position: relative;
  top: 130px;
  left: 0px;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  padding-bottom: 35px;
  box-shadow: -7px 7px 10px -10px #5e5e5e;
  margin-bottom: 160px;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 10px;
    background-color: #fff;

    li {
      background-color: #fff;
      font-size: 15px;

      img {
        width: 45px;
        height: 45px;
      }
    }
  }
}

.bot {
  font-family: "黑体";

  .qdsq {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;

    .q {
      font-size: 20px;
    }
    .qq {
      color: #5e5e5e;
      font-size: 17px;
    }
  }
  .card {
    // width: 80%;
    height: 160px;
    line-height: 40px;
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #6692c4;
    color: #5e5e5e;
    :nth-child(1) {
      display: flex;
      justify-content: space-between;
      :nth-child(2) {
        margin-left: -170px;
      }
    }
  }
}
</style>
