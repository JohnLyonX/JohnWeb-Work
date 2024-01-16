<template>
  <div id="content">
    <!--封面 -->
    <div class="Homeblodtitle">
      <about />
      <img src="@/assets/img/mgImg/mg5.gif" />
    </div>

    <!--主题 -->
    <div class="Homeblod-content">
      <div class="Homeblodtitle-content">
        <div class="Homeblodtitle-avatar-box">
          <img
            src="@/assets/img/avatar.jpg"
            alt=""
            class="Homeblodtitle-avatar"
          />
        </div>

        <div class="Homeblodtitle-name">Vuedevs.X</div>
        <div class="Homeblodtitle-identity">
          订阅数: {{ subscribeNum
          }}<span class="Homeblodtitle-identity-Columns">|</span>
          <div class="identity">开发者</div>
        </div>

        <hr />
        <div class="Homeblodtitle-signature">未来的世界是属于开发者的</div>
        <div class="Homeblodtitle-signature2">开发者VX:xuanyidaozhang8</div>
        <button
          v-show="!subscribeFlag"
          class="Homesubscribe"
          @click="handleSubscribe"
        >
          订阅+
        </button>
        <button
          v-show="subscribeFlag"
          class="Homesubscribe unHomesubscribe"
          @click="handleSubscribe"
        >
          取消订阅
        </button>
      </div>

      <!--主题选项 -->
      <options />
      <!--活动-->
      <div class="Plan-title">Special events!</div>
      <hr class="Plan-title-hr" />
      敬请期待!
      <div class="Planrcard">
          <div class="wintercard-content">
            <div class="wintercard-title">Winter Plan</div>
            <div class="wintercard-text">Start time:2022.11.20</div>
          </div>

          <div class="summercard-content">
            <div class="summercard-title">Summer Plan</div>
            <div class="summercard-text">Start time:2023.5.5</div>
          </div>

          <div class="morecard-content">
            <div class="morecard-title">More Plan</div>
            <div class="morecard-text">Stay tuned</div>
          </div>
      </div>
      <footerblog />
    </div>
  </div>
</template>

<script>
import options from "../components/options.vue";
import footerblog from "../components/layout/footerblog.vue";
import about from "../components/about.vue";
export default {
  components: {
    options,
    footerblog,
    about,
  },
  data() {
    return {
      // 订阅状态
      subscribeFlag: false,
      //订阅人数
      subscribeNum: 0,
    };
  },
  //   在进入页面时获取订阅状态和订阅人数
  mounted() {
    //localStorage本地存储 get获取存储值，set设置存储值
    this.subscribeFlag = JSON.parse(localStorage.getItem("user1Flag"));
    this.subscribeNum = JSON.parse(localStorage.getItem("user1Num"))
      ? localStorage.getItem("user1Num")
      : 8930;
    console.log("this.subscribe===>", this.subscribeFlag, this.subscribeNum);
  },
  methods: {
    handleSubscribe() {
      // 如果已经订阅则取消订阅
      if (this.subscribeFlag) {
        //取消订阅
        this.subscribeFlag = false;

        this.subscribeNum--;
        localStorage.setItem("user1Flag", false);
        localStorage.setItem("user1Num", this.subscribeNum);
      } else {
        //订阅
        this.subscribeFlag = true;
        this.subscribeNum++;
        localStorage.setItem("user1Flag", true);
        localStorage.setItem("user1Num", this.subscribeNum);
      }
    },
  },
};
</script>

<style scoped>
body,
html {
  height: 100vh;
  width: 100%;
  background-color: white;
}

li {
  list-style-type: none;
}

#content {
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow-x: hidden;
  position: absolute;
  z-index: 2;
}

.Homeblodtitle {
  width: 100%;
  height: 500px;
  background-color: #000000;
  background-size: cover;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: -2;
}

.Homeblodtitle img {
  width: 550px;
  height: 280px;
  pointer-events: none;
}

.Homeblod-content {
  position: absolute;
  top: 300px;
  width: 100%;
  background-color: white;
}

.Homeblodtitle-content {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.Homeblodtitle-avatar-box {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}

.Homeblodtitle-avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.459);
  pointer-events: none;
  display: flex;
}

.Homeblodtitle-name {
  color: #000000;
  font-size: 30px;
  font-weight: 600;
  user-select: none;
  margin-top: -90px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.Homeblodtitle-identity {
  margin-top: 2px;
  margin-bottom: 2px;
  color: #000000;
  font-size: 15px;
  font-weight: 300;
}

.Homeblodtitle-identity .Homeblodtitle-identity-Columns {
  padding: 0px 10px;
}

.identity {
  display: inline-block;
  position: relative;
  border-radius: 0.1rem;
  width: 55px;
  height: 22px;
  line-height: 22px;
  background-color: #e91e1e;
  color: #ffffff;
  font-weight: 900;
  font-size: 14px;
}
.Homeblodtitle-content hr {
  margin-top: 10px;
  margin-bottom: 30px;
  width: 60%;
}
.Homeblodtitle-signature {
  position: relative;
  top: -25px;
}
.Homeblodtitle-signature2{
  position: relative;
  top: -25px;
}
.unHomesubscribe {
  background-color: white !important;
  color: #808080 !important;
  border: #000000 solid 1px !important;
}
.Homesubscribe {
  width: 80px;
  height: 35px;
  border: none;
  margin: 0px auto;
  margin-bottom: 20px;
  background-color: #ec4585;
  color: #ffffff;
  border-radius: 0.2rem;
  font-size: 15px;
  font-weight: 600;
}

.Plan-title {
  font-size: 30px;
  font-family: "montserrat", sans-serif;
  margin-top: 30px;
}

.Plan-title-hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  height: 6px;
  width: 35%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #778beb, #23d5ab);
    background-size: 600% 600%;
    animation: gradientBG 2s ease infinite;
}
.Planrcard{
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
}
/* 冬日 */
.wintercard-content{
  border: 1.5px solid #309ef8d2;
  border-radius: 10px;
  width: 90%;
  height: 80px;
  margin: 50px auto;
  animation: winter 3s ease 0s infinite forwards;
}
.wintercard-content{
  box-shadow: 0px 0px 20px 0px #309ef8;
}
.wintercard-title{
  padding-top: 12px;
  font-size: 20px;
  font-weight:500;
}
.wintercard-text{
  font-size: 15px;
  font-weight: 400;
}
/* 夏日 */
.summercard-content{
  border: 1.5px solid #309ef8d2;
  border-radius: 10px;
  margin-top: 20px;
  width: 90%;
  height: 80px;
  margin: 50px auto;
}
.summercard-content{
  box-shadow: 0px 0px 20px 0px #309ef8;
}
.summercard-title{
  padding-top: 12px;
  font-size: 20px;
  font-weight:500;
}
.summercard-text{
  font-size: 15px;
  font-weight: 400;
}
/* 更多 */
.morecard-content{
  border: 1.5px solid #309ef8d2;
  border-radius: 10px;
  width: 90%;
  height: 80px;
  margin: 50px auto;
}
.morecard-content{
  box-shadow: 0px 0px 20px 0px #309ef8;
}
.morecard-title{
  padding-top: 12px;
  font-size: 20px;
  font-weight:500;
}
.morecard-text{
  font-size: 15px;
  font-weight: 400;
}
@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }

</style>