define(["jquery"],function ($) {
  function enroll() {
    // $("#userName").on("focus",function(){
    //     $("#userName_span").css("display","block")
    //     $("#userName_span").css("color","gray")
    //     $("#userName_span").html('6～18个字符，可使用字母、数字、下划线，需要以字母开头')
    //     console.log($("#userName"))
    // })

    // var ousername = $("#userName").html;
    // alert(ousername)
    // var oValues = this.value
    // var ousername_span = document.getElementById("userName_span");
    // $("#userName").onfocus = function () {
    //     alert(oValues)
    //   ousername_span.style.display = "block";
    //   ousername_span.style.color = "gray";
    //   ousername_span.innerHTML =
    //     "6～18个字符，可使用字母、数字、下划线，需要以字母开头";
    // };
    // $("#userName").onblur = function (e) {
    //   e = e || window.event;
    //   alert(oValues)
    //   var ovalue = ousername.value;
    //   if (!ovalue) {
    //     ousername_span.style.display = "none";
    //   } else {
    //     if (ovalue.length > 18 || ovalue.length < 6) {
    //       ousername_span.innerHTML = "!长度应为6-18个字符";
    //       ousername_span.style.color = "red";
    //     } else if (!/[a-zA-Z]/.test(ovalue[0])) {
    //       ousername_span.innerHTML = "邮箱地址需要一字母开头";
    //       ousername_span.style.color = "red";
    //     } else if (/\W/.test(ovalue)) {
    //       ousername_span.innerHTML = "！只能输入字母，数字，下划线";
    //       ousername_span.style.color = "red";
    //     } else {
    //       ousername_span.innerHTML = "恭喜你可以使用";
    //       ousername_span.style.color = "green";
    //     }
    //   }
    // };

    // jq方法
    var oValues = this.value
    $("#userName").on("focus",function(){
        var oValues = this.value
        $("#userName_span").css("display","block")
        $("#userName_span").css("color","gray")
        $("#userName_span").html("6～18个字符，可使用字母、数字、下划线，需要以字母开头")
    })
    $("#userName").on("blur",function(){
        var oValues = this.value
        // e = e || window.event;
        if(!oValues){
            $("#userName_span").css("display","none")
        }else{
            if(oValues.length > 18 || oValues.length < 6){
                $("#userName_span").html("!长度应为6-18个字符")
                $("#userName_span").css("color","red")
            }else if(!/[a-zA-Z]/.test(oValues[0])){
                $("#userName_span").html("邮箱地址需要一字母开头")
                $("#userName_span").css("color","red")
            }else if(/\W/.test(oValues)){
                $("#userName_span").html("！只能输入字母，数字，下划线")
                $("#userName_span").css("color","red")
            }else{
                $("#userName_span").html("恭喜你可以使用")
                $("#userName_span").css("color","green")
            }
        }
    })
    // 上面是第一个 

    // var passWname = document.getElementById("passW");
    // var passWname_span = document.getElementById("passWspan");

    // passWname.onfocus = function () {
    //   passWname_span.style.display = "block";
    //   passWname_span.style.color = "gray";
    //   passWname_span.innerHTML = "6～16个字符，区分大小写";
    // };

    // var panduans = /[a-zA-Z]\d/;
    // var qwedas = /[`~!@#$%^&*]/;
    // passWname.onblur = function () {
    //   var pasvalue = passWname.value;
    //   if (!pasvalue) {
    //     passWname_span.style.display = "none";
    //   } else if (pasvalue.length > 16 || pasvalue.length < 6) {
    //     passWname_span.innerHTML = "!密码长度应为6~16个字符";
    //     passWname_span.style.color = "red";
    //   } else if (!panduans.test(pasvalue)) {
    //     passWname_span.innerHTML = "!密码过于简单，请尝试”数字 + 字母“的组合";
    //     passWname_span.style.color = "red";
    //   } else if (qwedas.test(pasvalue)) {
    //     passWname_span.innerHTML = "输入错误请重写";
    //     passWname_span.style.color = "red";
    //   } else {
    //     passWname_span.style.display = "none";
    //   }
    // };

// 第二个判断

var panduans = /[a-zA-Z]\d/;
var qwedas = /[`~!@#$%^&*]/;
var oValues = this.value
    $("#passW").on("focus",function(){
        var oValues = this.value
        $("#passWspan").css("display","block")
        $("#passWspan").css("color","gray")
        $("#passWspan").html("6～16个字符，区分大小写")
    })
    $("#passW").on("blur",function(){
        var oValues = this.value
        // e = e || window.event;
        if(!oValues){
            $("#passWspan").css("display","none")
        }else{
            if(oValues.length > 16 || oValues.length < 6){
                $("#passWspan").html("!密码长度应为6~16个字符")
                $("#passWspan").css("color","red")
            }else if(!panduans.test(oValues)){
                $("#passWspan").html("密码过于简单，请尝试'数组+字母'的组合")
                $("#passWspan").css("color","red")
            }else{
                $("#passWspan").css("display","none")
            }
        }
    })



        // 第三个判断
    // var numbertname = document.getElementById("numbert");
    // var numbertname_span = document.getElementById("numbert_span");

    // numbertname.onfocus = function () {
    //   numbertname_span.style.display = "block";
    //   numbertname_span.style.color = "gray";
    //   numbertname_span.innerHTML = "可通过该手机找回密码";
    // };
    // 

    // numbertname.onblur = function () {
    //   var numvalue = numbertname.value;
    //   if (!numvalue) {
    //     numbertname_span.style.display = "none";
    //   } else if (numvalue.length > 11 || numvalue.length < 11) {
    //     numbertname_span.innerHTML =
    //       "请正确填写大陆手机号码,其他地区手机号请点击此处";
    //     numbertname_span.style.color = "red";
    //   } else if (!panduana.test(numvalue)) {
    //     numbertname_span.innerHTML =
    //       "请正确填写大陆手机号码,其他地区手机号请点击此处";
    //     numbertname_span.style.color = "red";
    //   } else {
    //     numbertname_span.style.display = "none";
    //   }
    // };
var oValues = this.value
    $("#numbert").on("focus",function(){
        var oValues = this.value
        $("#numbert_span").css("display","block")
        $("#numbert_span").css("color","gray")
        $("#numbert_span").html("通过手机找回密码")
    })
    $("#numbert").on("blur",function(){
        var oValues = this.value
        var panduana = /^\d{11}$/;
        // e = e || window.event;
        if(!oValues){
            $("#numbert_span").css("display","none")
        }else{
            if(oValues.length > 11 || oValues.length < 11){
                $("#numbert_span").html("!请正确填写大陆手机号码")
                $("#numbert_span").css("color","red")
            }else if(!panduana.test(oValues)){
                $("#numbert_span").html("请正确填写大陆手机号码")
                $("#numbert_span").css("color","red")
            }else{
                $("#numbert_span").css("display","none")
            }
        }
    })











  }
  return {
    enroll: enroll,
  };
});
