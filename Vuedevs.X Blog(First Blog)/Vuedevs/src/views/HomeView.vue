<template>
  <div id="nav">
    <div class="Introduction">
      <div class="introduce-navbar">
        <div class="introduce-navbar-text">Vuedevs.X</div>
        <button class="introduce-navbar-btn" @click="clickabout">关于</button>
      </div>
      <div class="Introduction-centent col-12" align="center">
        <div align="center col-12">
          <img
            src="@/assets/img/homeImg/Hometitle.png"
            class="Introduction-img"
          />
        </div>
        <div class="Introduction-text col-12">
          Hello,Vtook
          <div class="Introduction-text2">
            Welcome to JianBin @ Vtook studio
          </div>
          <div class="Introduction-text3">New: activity(冬日计划)</div>
          <div class="Introduction-text4">
            冬日计划是我们工作室(Vtook)所发起的一个活动,可以让你们能在校的生活中能提升一定的生活质量,在这个计划中你们可以联系我们获得所需要的帮助,同时我们会提供最全面的帮助
          </div>
        </div>
        <button class="introduce-btn" @click="clickjoin">
          <div class="introduce-btnan">加入我们</div>
        </button>
      </div>
    </div>
    <footerblog />
  </div>
</template>

<script>
import footerblog from "../components/layout/footerblog.vue";

export default {
  methods: {
    clickabout() {
      this.$router.push({
        path: "/about",
      });
    },
    clickjoin() {
      this.$router.push({
        path: "/homeblog",
      });
    },
  },
  components: {
    footerblog,
  },
};
</script>

<style scoped>
#nav {
  width: 100%;
  height: 100%;
}
.Introduction {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/homeImg/Homebg.png");
}
.introduce-navbar {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 15px 1px black;
  position: relative;
  top: 0;
}
.introduce-navbar-text {
  width: 180px;
  height: 100%;
  line-height: 80px;
  font-size: 30px;
  font-weight: 900;
  margin-left: 2%;
  color: #ffffff;
}
.introduce-navbar-btn {
  width: 65px;
  height: 35px;
  border-radius: 1.5rem;
  background-color: #3e7ee6;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  margin-right: 5%;
  cursor: pointer;
  transition: 0.1s linear;
}
.introduce-navbar-btn:hover {
  transform: scale(1.1);
  background-color: #4288f8;
}
.Introduction-centent {
  margin: 0 auto;
  width: 700px;
  height: 960px;
}
.Introduction-img {
  padding-top: 60px;
  width: 80%;
  height: 100%;
  animation: Introduction-img 2s linear 0s infinite alternate;
}
.Introduction-text {
  width: 650px;
  text-align: center;
  font-size: 60px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 5%;
}
.Introduction-text2 {
  font-size: 15px;
  font-weight: 300;
  color: #ffffff;
  margin-top: 10px;
}
.Introduction-text3 {
  font-size: 25px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 10px;
}
.Introduction-text4 {
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 15px;
  margin-left: 10%;
  margin-right: 10%;
}
.introduce-btn {
  position: relative;
  width: 180px;
  height: 50px;
  background-color: #3e7ee6;
  top: 50px;
  bottom: -780px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease;
  display: inline;
  overflow: hidden;
  border-radius: 1rem;
}
.introduce-btnan {
  font-size: 25px;
  font-weight: 900;
  line-height: 50px;
  transition: 0.3s ease;
}
@keyframes Introduction-img {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>