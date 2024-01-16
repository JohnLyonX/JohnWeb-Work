<template>
  <div class="content">
    <div class="card middle">
      <div class="top-section">
        <img src="@/assets/img/mgImg/mg8.gif" alt="" />
        <div class="name">Hi!Vtook <br /></div>
      </div>

      <div class="info-section">
        <h2>
          About
          <div class="border"></div>
        </h2>
        <p>
          准备好进入建斌的频道了吗？不过在进入前你需要注意以下的规定:<br />
          1.请各位交流时能文明用语,不要吵架<br />
          2.聊天时禁止聊有关色情、政治、以及违法的话题;<br />
          3.请勿在里面打广告、若有要打广告之类的需求联系开发者向开发者申请;<br />
          4.进去请把ID改成自己的姓名和班级<br />
          <br />
          <span style="font-weight:600">Devs: Finally, welcome to our 建斌 campus channel</span>
        </p>

        <div class="s-m">
          <a href="https://pd.qq.com/s/lp6t54" class="fab fa-facebook-f">Join!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  width: 100%;
  height: 600px;
}
.card {
  width: 340px;
  background: #f1f1f1;
  overflow: hidden;
  font-family: "montserrat", sans-serif;
  box-shadow: 0 0 20px #00000070;
}

.middle {
  margin: 30px auto;
}

.top-section {
  position: relative;
}

.top-section img {
  width: 100%;
}

.menuicon:hover span {
  left: 0;
}

.name {
  position: absolute;
  bottom: 0px;
  left: 20px;
  font-size: 40px;
  font-weight: 900;
  opacity: 0.5;
}

.info-section {
  padding: 40px;
  padding-top: 0;
  color: #333;
}

h2 {
  margin-top: 15px;
  margin-bottom: 10px;
  position: relative;
  font-size: 16px;
}

.border {
  width: 36px;
  height: 3px;
  background: #778beb;
  position: absolute;
  left: 110px;
  bottom: -2px;
}

p {
  text-align: justify;
  font-size: 14px;
}

.info-text {
  font-size: 15px;
  font-weight: 500;
}

.s-m {
  text-align: center;
  margin-top: 20px;
}

.s-m a {
  text-decoration: none;
  font-size: 20px;
  color: #333;
  padding: 0 14px;
  transition: 0.4s;
  font-weight: 600;
}

.s-m a:hover {
  color: #778beb;
}
</style>