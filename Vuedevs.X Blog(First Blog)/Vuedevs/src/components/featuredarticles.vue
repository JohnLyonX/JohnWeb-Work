<template>
    <div>
        <div class="title">Featured articles</div>
        <div class="row">
                <div class="essaycard-content2 col-xl-4">
                    <div class="essaycard middle col-md-12">
                        <div class="top-section">
                            <img src="../assets/img/Vtookbg.jpg" alt="">
                        </div>

                        <div class="info-section">
                            <h2 class="essaytitle">Vue自学路程
                                <div class="border"></div>
                            </h2>
                            <p class="essaytext">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been
                                the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div class="s-m">
                               —— 2022.10.8
                            </div>
                        </div>
                    </div>
                </div>


                <div class="essaycard-content2 col-xl-4">
                    <div class="essaycard middle col-md-12">
                        <div class="top-section">
                            <img src="@/assets/img/featuredarticles/java.png" alt="">
                        </div>

                        <div class="info-section">
                            <h2 class="essaytitle">About Java
                                <div class="border"></div>
                            </h2>
                            <p class="essaytext">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been
                                the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div class="s-m">
                                —— 2022.10.8
                            </div>
                        </div>
                    </div>
                </div>

                <div class="essaycard-content2 col-xl-4">
                    <div class="essaycard middle col-md-12">
                        <div class="top-section">
                            <img src="../assets/img/Vtookbg.jpg" alt="">
                        </div>

                        <div class="info-section">
                            <h2 class="essaytitle">About Love
                                <div class="border"></div>
                            </h2>
                            <p class="essaytext">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been
                                the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div class="s-m">
                                —— 2022.10.8
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="featuredarticles-btn">
                Read More
            </button>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    cursor: pointer;
}
.title{
    font-size: 30px;
    margin-top: 45px;
    margin-bottom: 20px;
}
.essaycard-content {
    width: 100%;
}
.essaycard-content2{
    width: 100%;
}
.essaycard {
    margin-top: 5%;
    margin-bottom: 5%;
    width: 80%;
    border-radius: .1rem;
    margin-left:10%;
    margin-right: 10%;
    background: #f1f1f1;
    font-family: "montserrat", sans-serif;
    box-shadow: 0 0 15px 2px #000000ba;
    transition: .2s ease;
}
.essaycard:hover{
    transform: translateY(-5px) scale(1.02);
}
.top-section {
    width: 100%;
}

.top-section img {
    border-radius: .1rem .1rem 0rem 0rem;
    width: 100%;
}

.info-section {
    padding: 40px;
    padding-top: 0;
    color: #333;
}

.essaytitle{
    position: relative;
    font-size: 16px;
    text-align: left;
    top: 16px;
}

.border {
    width: 50px;
    height: 4px;
    background: #778beb;
    position: absolute;
    left: 0;
    bottom: -6px;
}

.essaytext {
    text-align: justify;
    font-size: 14px;
    position: relative;
    top: 25px;
    height: 100px;
}

.s-m {
    text-align: right;
    font-size: 20px;
    color: #333;
    padding: 20px 10px;
    transition: .4s;
}
.Musicbolg{
    position: relative;
    margin-top: 50px;
}
.featuredarticles-btn{
    width: 120px;
    height: 40px;
    border-radius: 1.2rem;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    border: none;
    background-color: #4283ea;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>