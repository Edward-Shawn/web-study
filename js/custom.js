$(document).ready(function(){
 


    
        var stickyHeader = function(){
        
    
            var headerTop = $(".menu").offset().top;
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
    
                if (scroll >= headerTop){
                    $(".menu").css({"position":"fixed","top":0});
                }else{
                    $(".menu").css({"position":"relative"});
                }
            });
    
           
        }
        stickyHeader(); 
        
        var pageMove = function (){
                $(".gnb li").click(function(){
                    var t = $(this).index();
                    var movePosition = $(".movePage").eq(t).offset().top;
                    //alert(t);
                    var headerHeight = $(".menu").height();
                    
                    $("html,body").animate({scrollTop:movePosition -headerHeight},500)
                });
    
    
        }
        pageMove();
    
    
        var mobileMenu = function(){
            $(".mobile-menu").click(function(){
                $(this).toggleClass("change");
                if($(this).hasClass("change")){
                    $(this).find("i").attr("class", "fa fa-times");
                    $(".gnb").slideDown(200);
                }else{
                    $(this).find("i").attr("class", "fa fa-bars");
                    $(".gnb").slideUp(200);
                }
                // hideshow()
            });
        }
        mobileMenu();
    
    
        //메뉴 클릭시 보이기 / 없애기 방법1
        // function hideshow() {
        //     if($(".gnb li").css("display") == "none"){
        //         $(".gnb li").show();
        //     }else{
        //         $(".gnb li").hide();
        //     }
        // }
    
        // $(".mobile-menu i").click(function(){
        //     $(".mobile-menu i").attr("&times;");
         
        // });
   
 
})

    