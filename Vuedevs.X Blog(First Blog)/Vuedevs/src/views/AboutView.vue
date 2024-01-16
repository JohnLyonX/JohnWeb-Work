<template>
  <div class="about">
    <div class="aboutcontent">
      <div class="aboutbodytitle">About</div>
      <hr />
      <div class="aboutbodytext">关于Vtook工作室</div>
      <div class="aboutbodytext2">
        我们Vtook工作室是由Vuedevs.X创立,我们工作室主要提供校园服务以及校外服务,
        校园服务主要提供给住宿生帮助计划,（例如:冬日计划）目的是为了给在校的同学们提供一些帮助;校外服务所提供的服务有:Web前端开发、Applets开发、App开发等等代做服务。
      </div>
      <button class="introduce-btn" @click="clickreturn">
        <div class="introduce-btnan">返回</div>
      </button>
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
    clickreturn() {
      this.$router.push({
        path: "/",
      });
    },
  },
  components: {
    footerblog,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.about {
  height: 900px;
  width: 100%;
  background: white;
  background-size: 100%;
}

.aboutcontent {
  width: 100%;
  height: 100%;
  text-align: center;
}
.aboutcontent hr {
  margin: 25px auto;
  margin-bottom: 30px;
  width: 60%;
}
.aboutbodytitle {
  padding-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 70px;
  font-weight: 700;
  /* 当指针放上去时变正常 */
  cursor: default;
  /* 禁止选中 */
  user-select: none;
}
.aboutbodytext {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 15px;
}
.aboutbodytext2 {
  font-family: Arial, Helvetica, sans-serif;
  width: 60%;
  margin: 0 auto;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 300;
}
.introduce-btn {
  width: 160px;
  height: 50px;
  background-color: #3e7ee6;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease;
  display: inline;
  overflow: hidden;
  border-radius: 1rem;
  margin-top: 60px;
  transition: 0.2s ease;
}
.introduce-btn:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 15px 0px#3e7ee6;
}
.introduce-btnan {
  font-size: 25px;
  font-weight: 900;
  line-height: 50px;
  transition: 0.3s ease;
}
</style>