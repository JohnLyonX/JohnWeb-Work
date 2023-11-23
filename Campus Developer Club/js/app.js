 //响应式
 $(document).ready(function(){
     $(window).resize(function(){
         if($(window).width() <= 1170){
             $('.more_developers').addClass('col-md-6').removeClass('col-lg-3');
         }
         if($(window).width() >= 1170){
             $('.more_developers').addClass('col-lg-3').removeClass('col-md-6');

         }
     })

     $(window).scroll(function () {
         var top = $(window).scrollTop();
         if (top >= 783) {
             $('.introduce_title').addClass('introduce_title_active');
         }
         if (top <= 432) {
             $('.introduce_title').removeClass('introduce_title_active');
         }
     })
     $(window).scroll(function () {
         var top = $(window).scrollTop();
         if (top >= 1600) {
             $('.developer_banner_title2').addClass('developers_active');
         }
         if (top <= 1200) {
             $('.developer_banner_title2').removeClass('developers_active');
         }
     })
     $(window).scroll(function () {
         var top = $(window).scrollTop();
         if (top >= 2346) {
             $('.more_developers_people').addClass('more_developers_active');
         }
         if (top <= 2470) {
             $('.more_developers_people').removeClass('more_developers_active');
         }
     })


 })
    




        // 轮播图
        var BannerPage = 0;

            $('.banner_next').click(function(){
                BannerPage++;
                if(BannerPage == 1){
                    $('.developer_banner_content').css('transform', 'translateX(-100%)');
                    $('.banner_page').html('2 / 3');
                }
                if (BannerPage >= 2){
                    $('.developer_banner_content').css('transform', 'translateX(-200%)');
                    $('.banner_page').html('3 / 3');
                    BannerPage = 2;
                }
            })

            $('.banner_return').click(function(){
                BannerPage--;
                if(BannerPage == 1){
                    $('.developer_banner_content').css('transform', 'translateX(-100%)');
                    $('.banner_page').html('2 / 3');
                }
                if(BannerPage <= 0){
                    $('.developer_banner_content').css('transform', 'translateX(0)');
                    $('.banner_page').html('1 / 3');
                    BannerPage = 0;
                }

             })


    // 侧边栏
    $(window).scroll(()=>{
        var top = $(window).scrollTop();
        if(top > 200){
            $('.sidebar').fadeIn(100)
        }else{
            $('.sidebar').fadeOut(100)
        }
    })
    $('.sidebar').click(()=>{
        $(window).scrollTop(0)
    })

    

$("#seeall").click(function() {
    if($("#seeall").text() == "See all"){
        $("#seeall").html("Close See")
        $("#SeeAll").addClass("active");
    }else{
        $("#seeall").html("See all")
        $("#SeeAll").removeClass("active");
    }
    
    
    });

