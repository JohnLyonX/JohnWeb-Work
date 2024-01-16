<template>
  <div>
    <div class="supporterstitle">Supporters</div>
    <div class="supporterstitle-hr"></div>
    <div class="supporterstext">Swipe right→</div>

    <div class="contnt">
      <div class="essaycentent">
        <div class="essaycard middle">
          <div class="top-section">
            <img src="@/assets/img/avatar.jpg" alt="" />
          </div>

          <div class="info-section">
            <h2 class="essaytitle">Vuedevs.X</h2>
            <p class="essaytext">未来的世界是属于开发者们的</p>
            <div class="info-sectionhr"></div>
            <div class="info-section-btncontent">
              <button>Go to Learn!</button>
            </div>
          </div>
        </div>

        <div class="essaycard2 middle">
          <div class="top-section">
            <img src="@/assets/img/avatarlibrary/Liu.jpg" alt="" />
          </div>

          <div class="info-section">
            <h2 class="essaytitle">向明月许愿</h2>
            <p class="essaytext">提前准备 不要提前焦虑</p>
            <div class="info-sectionhr"></div>
            <div class="info-section-btncontent">
              <button>Go to Learn!</button>
            </div>
          </div>
        </div>

        <div class="essaycard middle">
          <div class="top-section">
            <img src="@/assets/img/avatarlibrary/Huang.jpg" alt="" />
          </div>

          <div class="info-section">
            <h2 class="essaytitle">屁Pi</h2>
            <p class="essaytext">萬事勝意</p>
            <div class="info-sectionhr"></div>
            <div class="info-section-btncontent">
              <button>Go to Learn!</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
* {
  cursor: pointer;
}
.supporterstitle {
  font-size: 30px;
}

.supporterstitle-hr {
  margin: 20px auto;
  width: 60%;
  height: 3px;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
}
.supporterstext{
  font-size: 15px;
}
.essaycentent {
  width: 300%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.contnt {
  width: 100%;
  overflow-y: hidden;
  background-color: #ffffff;
  margin-top: 10px;
}

.title {
  font-size: 25px;
  margin-top: 45px;
  margin-bottom: 10px;
}

.essaycard {
  width: 280px;
  height: 400px;
  border-radius: 0.2rem;
  background: #ffffff;
  font-family: "montserrat", sans-serif;
  box-shadow: 0 10px 30px 0px #000000ba;
  transition: 0.2s ease;
  background-image: url(../assets/img/avatarlibrary/supportersbgLiang.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
.essaycard2 {
  width: 280px;
  height: 400px;
  border-radius: 0.2rem;
  background: #ffffff;
  font-family: "montserrat", sans-serif;
  box-shadow: 0 10px 30px 0px #000000ba;
  transition: 0.2s ease;
  background-image: url(../assets/img/avatarlibrary/supportersbgLiu.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}

.top-section {
  width: 100%;
  display: flex;
  justify-content: center;
}
.top-section img {
  width: 65%;
  position: relative;
  top: -50px;
  box-shadow: 0 0 15px 0px #00000064;
  border-radius: 10%;
}

.info-section {
  position: relative;
  z-index: 1;
  top: -20px;
  width: 100%;
  color: #ffffff;
}

.essaytitle {
  width: 100%;
  height: 20px;
  font-size: 20px;
  font-size: 800;
  text-align: center;
  color: #ffffff;
}

.essaytext {
  margin: 0 auto;
  width: 75%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  top: 25px;
  height: 100px;
  color: #ffffff;
}
.info-sectionhr {
  margin: 0px auto;
  width: 80%;
  height: 2px;
  background-color: #00000030;
}
.info-section-btncontent {
  width: 85%;
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
}

.info-section-btncontent button {
  width: 45%;
  height: 38px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 1px #ffffffe5;
  border-radius: .2rem;
  margin-top: 10px;
  color: #000000d2;
  font-size: 15px;
  font-weight: 600;
}
</style>