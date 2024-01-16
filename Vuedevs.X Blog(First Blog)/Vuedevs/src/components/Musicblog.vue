<template>
  <div class="Musicbolg">
    <div class="Musicbolg-recommend-title">——Daily songs——</div>
    <div class="Musicbolg-recommend-title2">《See You in Life》</div>
    <img src="../assets/music/Music.jpg" alt="" class="Musicimg">
    <audio class="Musicbolg-music" controls="controls" autoplay="autoplay" preload="preload">
      <source src="../assets/music/Music.mp3">
            </audio>
  </div>
 
</template>

<script>
export default {
  data(){
    
  },methods:{
    
  }
}
</script>

<style>
.Musicbolg{
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
}
.Musicbolg-recommend-title{
  font-size: 25px;
  font-weight: 600;
  font: 400;
  cursor: pointer;
  user-select: none;
}
.Musicbolg-recommend-title2{
  margin-top: 20px;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
}
  .Musicimg{
    margin: 30px auto;
    width: 280px;
    height: 280px;
   border-radius: .3rem;
   box-shadow: 0px 0px 25px 0px #000000;
  }
  .Musicbolg-music{
    margin: 10px auto;
    width: 300px;
    border-radius: 2rem;
    
  }
</style>