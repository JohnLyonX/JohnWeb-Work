<template>
  <div class="content">
    <div class="card middle">
      <div class="top-section">
        <img src="@/assets/img/mgImg/mg.gif" alt="" />
      </div>

      <div class="info-section">
        <h2>
          About
          <div class="border"></div>
        </h2>
        <p>
          这里为你们提供了留言服务,大家在留言的时候需要主要以下的规定:<br />
          1.留言时请不要出现脏话;<br />
          2.禁止出现有关色情、政治、和违法的留言;<br />
          3.请勿在里面打广告、若有要打广告之类的需求联系开发者向开发者申请;<br />
          4.本留言系统可获取到所有人的IP地址,所以请各位好好遵守注意事项哦;<br />
          <br />
          <span style="font-weight:600">Devs: Finally, welcome to the Campus Wall Message website!</span>
        </p>

        <div class="s-m">
          <a href="http://jbschoolwalls.xyz" class="fab fa-facebook-f" target=“_blank”>Go!</a>
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
  height: 620px;
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