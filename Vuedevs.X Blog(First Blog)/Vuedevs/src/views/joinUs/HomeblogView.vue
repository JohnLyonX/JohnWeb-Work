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
      <!-- 音乐 -->
      <div class="Musicblog">
        <Musicblog />
      </div>
      <!-- 每日一句 -->
      <Onesentenceaday />
      <!--主题选项 -->
      <options />
      <!-- 文章卡片 -->
      <featuredarticles />
      <!--支持者 -->
      <supporters :subscribeFlag="subscribeFlag" @subscribe="handleSubscribe" />
      <!--最后关于-->
      <div class="endcontent">
        <div class="end-title">About end</div>
        <hr class="end-title-hr" />
        
        <div class="endtext">本博客皆为开发版,大多交互功能待开发,请见谅</div>
        <div class="endtext2">This blog version is a developer version, and many interactive features have not yet been developed, please forgive me</div>
        <div class="endtext2" style="margin-top:10px">最后一次更新时间:2022.10.14</div>
        
        <div class="endtext3">开发作者:Vuedevs</div>
        <div>联系VX:xuanyidaozhang8</div>
      </div>
    </div>
    <footerblog />
  </div>
</template>

<script>
import options from "../../components/options.vue";
import footerblog from "../../components/layout/footerblog.vue";
import Musicblog from "../../components/Musicblog.vue";
import about from "../../components/about.vue";
import featuredarticles from "../../components/featuredarticles.vue";
import supporters from "../../components/supporters.vue";
import Onesentenceaday from "@/components/Onesentenceaday.vue"

export default {
  components: {
    options,
    footerblog,
    Musicblog,
    about,
    featuredarticles,
    supporters,
    Onesentenceaday
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
img {
  user-select: none;
}

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
  height: 100%;
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
  width: 100%;
  background-color: white;
  margin-top: 300px;
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
  width: 80px;
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
.endcontent{
  margin: 0px auto;
  width: 85%;
  height: 335px;
}
.end-title {
  font-size: 30px;
  font-weight: 500;
  font-family: "montserrat", sans-serif;
  margin-top: 60px;
}

.end-title-hr {
  margin-top: 10px;
  margin-bottom: 30px;
  width: 50%;
  border: 3px solid #778beb;
}
.endtext{
  margin-top: 20px;
  font-size: 18px;
}
.endtext2{
  font-size: 15px;
}
.endtext3{
  margin-top: 30px;
}
</style>