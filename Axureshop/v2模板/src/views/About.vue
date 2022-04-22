<template>
  <div class="residents">
    <div class="header">
      <img src="../assets/xitongfanhui.png" alt="" />
      <span> 新建居民档案 </span>
      <span></span>
    </div>
    <div class="box">
      <h1>居民基本信息</h1>
      <ul>
        <li>
          真实姓名
          <input type="text" placeholder="请填写居民的真实姓名" />
        </li>
        <li>
          身份证号
          <input type="text" placeholder="请填写居民的身份证号" />
        </li>
        <li>
          性别&emsp;&emsp;
          <input type="text" placeholder="请选择居民的性别" />
          <img src="../assets/31fanhui2.png" alt="" />
        </li>
        <li>
          出生日期
          <input type="text" placeholder="请选择居民的出生日期" />
          <img src="../assets/31fanhui2.png" alt="" />
        </li>
        <li>
          手机号码
          <input type="text" placeholder="居民登录账号，请正确填写" />
        </li>
        <li>
          登录密码
          <input type="text" placeholder="8位以上的数字和字母组合" />
        </li>
        <li class="xjd">
          现居地
          <input type="text" placeholder="请填写现居地" />
        </li>
        <li>
          居民标签
          <input type="text" placeholder="点击选择居民标签" />
        </li>
        <div class="bq">
          <span>高血压</span>
          <span>冠心病</span>
          <span>高血病</span>
          <span>高血脂</span>
        </div>
        <div class="bq">
          <span>高血压</span>
          <span>冠心病</span>
          <span>高血病</span>
          <span>高血脂</span>
        </div>
        <li>
          关联家人
          <input type="text" placeholder="请选择居民家人信息" />
          <img src="../assets/31fanhui2.png" alt="" />
        </li>
        <li>立即签约</li>
      </ul>
      <button class="btn">下一步</button>
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
  font-family: "微软雅黑";
  background-color: #f7fafd;
}

.residents {
  .header {
    // width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    // margin: 0 10px;
    padding-top: 10px;
    background-color: #fff;
    margin-bottom: 20px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .box {
    padding: 0 20px;

    h1 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    ul {
      background-color: #fff;

      li {
        list-style: none;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
        line-height: 45px;
        background-color: #fff;

        input {
          padding-left: 20px;
          border: 0;
          font-size: 16px;
          color: rgb(236, 223, 223);
        }

        img {
          width: 20px;
          height: 20px;
          vertical-align: middle;
          // float: right;
        }
      }

      .xjd {
        margin-bottom: 20px;
        border: 0;
      }
      .bq {
        margin-top: 10px;
        span {
          margin: 5px;
          border-radius: 5px;
          width: 100px;
          border: 1px solid #ccc;
          padding: 3px;
          color: rgb(134, 129, 129);
          margin-bottom: 5px;
        }
      }
    }
    .btn {
      // display: inline-block;
      background-color: #40d4ab;
      color: #fff;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: 0;
      border-radius: 5px;
    }
  }
}
</style>
