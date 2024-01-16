<template>
  <div class="textcontent">
    <div class="text-title">One sentence a day</div>
      <hr class="Plan-title-hr" />
    <div class="text">The future belongs to those who believe in the beauty of their dreams.
        <br>未来属于那些相信梦想之美好的⼈.</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .textcontent{
        margin: 10px auto;
        width: 80%;
        height: 200px;
    }
    .Plan-title-hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  height: 6px;
  width: 45%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #778beb, #23d5ab);
    background-size: 600% 600%;
    animation: gradientBG 2s ease infinite;
}
    .text-title{
        font-size: 25px;
        font-weight: 600;
    }
    .text{
        width: 85%;
        margin: 10px auto;
        font-size: 15px;
        font-weight: 300;
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