// console.log("nihao")
define(["jquery", "jquery-cookie"], function ($) {
  function jnmk(){
    //   console.log($("#btns_img1"))
        $("#btns_img1").on("click",function(){
            $(".denglu_section3_div1").css("display","block")
            $(".denglu_section2_div1").css("display","none")
        })
        $("#btns_img2").on("click",function(){
            $(".denglu_section3_div1").css("display","none")
            $(".denglu_section2_div1").css("display","block")
        })
        
  }
  return {
    // downloadmnkj:downloadmnkj,
    jnmk:jnmk
  }
});
