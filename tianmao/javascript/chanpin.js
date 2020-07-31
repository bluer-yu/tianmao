define(["jquery", "jquery-cookie"], function ($) {
  function downloadss() {
    $.ajax({
      url: "../data/shouye.json",
      success: function (arr) {
        for (var i = 0; i < arr.length; i++) {
          var node = $(`
                    <div class="box1_1_div2_1_div id="okl1">
                                       
                    </div>
                    `);
          node.appendTo($(".box1_1_div2_1"));
          // console.log(arr.length)
          var HotCity = arr[i].HotCity;
          // console.log(HotCity)
          for (var k = 0; k < HotCity.length; k++) {
            $(`<span>${HotCity[k]}</span>`).appendTo(".box1_1_div2_1_div");
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
                <div class="div3_A">
                                    
                                    
                </div>
                `);
          node.appendTo($(".box1_1_div2_1_div3"));

          var Acity = arr[i].Acity;
          for (var k = 0; k < Acity.length; k++) {
            $(`<span class="div3_A_span">${Acity[k]}</span>`).appendTo(
              ".div3_A"
            );
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
                <ul class="showproduct_div_div1_img_ul_li">
                            
                </ul>
                `);
          node.appendTo($(".showproduct_div_div1_img"));

          var print = arr[i].print;
          for (var k = 0; k < print.length; k++) {
            $(`<li class="lisdf">
            
            <img src="${print[k].img}" alt="">
            </li>`).appendTo(".showproduct_div_div1_img_ul_li");
          }
        }

        // <img src="${print[k].img}" alt=""></img>

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
                <div class="showproduct_div_div1_div11_center">
                            <span class="div11_center_span"></span>
                            <span class="div11_center_span"></span>
                            <span class="div11_center_span"></span>
                            <span class="div11_center_span"></span>
                            <span class="div11_center_span"></span>
                </div>
                `);
          node.appendTo($(".showproduct_div_div1_div11"));

          var print = arr[i].print;
          for (var k = 0; k < print.length; k++) {
            $(`<img src="${print[k].img}" alt="">`).appendTo(
              node.find(".div11_center_span")[k]
            );
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <ul class="print_box1_ul">

            </ul>
            `);
          node.appendTo($(".print_box1"));
          var print = arr[i].print;
          for (var k = 0; k < print.length; k++) {
            $(`<li class="print_box1_ul_li">
                
                <img src="${print[k].img}" alt="">
                </li>`).appendTo(".print_box1_ul");
          }
        }

        // 产品页右侧的购物篮
        for (var i = 0; i < arr.length; i++) {
          var node = $(`
                    <ul class="showproduct_div_div3_ul">

                    </ul>
                    `);
          node.appendTo($(".divssd"));

          var sweethome = arr[i].sweethome;
          for (var k = 0; k < sweethome.length; k++) {
            $(`<li>
            <a href="">
                <img src="${sweethome[k].img}" alt="">
            </a>
            <span>Vinda/维达 维达卫生纸 蓝色经典140克</span>
        </li>`).appendTo(".showproduct_div_div3_ul");
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <div class="TabControl_div_div1">

            </div>
                    `);
          node.prependTo($(".TabControl_div"));

          var calorie = arr[i].calorie;
          for (var k = 0; k < calorie.length; k++) {
            $(`
                <div>
                    <img src="${calorie[k].img}" alt="">
                </div>
                `).appendTo(".TabControl_div_div1");
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <ul class="play_ul">

            </ul>
                    `);
          node.prependTo($(".play"));

          var photograph = arr[i].photograph;
          for (var k = 0; k < photograph.length; k++) {
            $(`
                <li><a href=""><img src="${photograph[k].img}" alt="广告一" /></a></li>
                `).appendTo(".play_ul");
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <div class="asss">

            </div>
                    `);
          node.appendTo($(".plays_1"));

          var tissue = arr[i].tissue;
          for (var k = 0; k < tissue.length; k++) {
            $(`
                <a href=""><img src="${tissue[k].img}" alt="广告一" /></a>
                `).appendTo(".asss");
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <div class="shoppingcart_center_div2">
            </div>

            <a  class="shoppingcart_center_a">
            </a>
            `);
          node.appendTo($(".shoppingcart"));

          var Shopcartdata = arr[i].Shopcartdata;
          for (var k = 0; k < Shopcartdata.length; k++) {
            $(`
              <img src="${Shopcartdata[k].img}" alt="">
              <span>${Shopcartdata[k].writing}</span>
              `).appendTo(".shoppingcart_center_div2");
          }

          for (var k = 0; k < Shopcartdata.length; k++) {
            $(`
              <button id="${Shopcartdata[k].id}" class="Shopbtnss"><a href="shopping.html" class="axcvbn">加入购物车</a></button>
              `).appendTo(".shoppingcart_center_a");
          }
        }
      },
      error: function (msg) {
        console.log(msg);
      },
    });
  }

  //   其他的方法
  function ProductsHome() {
    $("#li1").mouseenter(function () {
      $("#hear_hide1").css("display", "block");
      $("#hear_hide1").css("backgroundColor", "#fff");
      $("#li1").css("backgroundColor", "#fff");
      $("#li1_a").css("color", "#ff0036");
      $("#li1_a").css("text-decoration", "underline");
    });
    $("#hear_hide1").mouseleave(function () {
      $("#hear_hide1").css("display", "none");
      $("#li1").css("backgroundColor", "#f2f2f2");
      $("#li1_a").css("color", "#999");
      $("#li1_a").css("text-decoration", "none");
    });

    // 第二个隐藏
    $("#li2").mouseenter(function () {
      $("#hear_hide2").css("display", "block");
      $("#hear_hide2").css("backgroundColor", "#fff");
      $("#li2").css("backgroundColor", "#fff");
      $("#li2 a").css("color", "#ff0036");
      $("#li2 a").css("text-decoration", "underline");
    });
    $("#hear_hide2").mouseleave(function () {
      $("#hear_hide2").css("display", "none");
      $("#li2").css("backgroundColor", "#f2f2f2");
      $("#li2 a").css("color", "#999");
      $("#li2 a").css("text-decoration", "none");
    });

    // 第三个隐藏
    $("#li3").mouseenter(function () {
      $("#hear_hide3").css("display", "block");
    });
    $("#hear_hide3").mouseleave(function () {
      $("#hear_hide3").css("display", "none");
    });

    // 第四个隐藏
    $("#li4").mouseenter(function () {
      $(".hear_hide4").css("display", "block");
      $(".hear_hide4").css("backgroundColor", "#fff");
      $("#li4").css("backgroundColor", "#fff");
      $("#li4 a").css("color", "#ff0036");
      $("#li4 a").css("text-decoration", "underline");
    });
    $(".hear_hide4").mouseleave(function () {
      $(".hear_hide4").css("display", "none");
      $("#li4").css("backgroundColor", "#f2f2f2");
      $("#li4 a").css("color", "#999");
      $("#li4 a").css("text-decoration", "none");
    });
    // 第五个导航
    $("#li5").mouseenter(function () {
      $(".hear_hide5").css("display", "block");
      $(".hear_hide5").css("backgroundColor", "#fff");
      $("#li5").css("backgroundColor", "#fff");
      $("#li5 a").css("color", "#ff0036");
      $("#li5 a").css("text-decoration", "underline");
    });
    $(".hear_hide5").mouseleave(function () {
      $(".hear_hide5").css("display", "none");
    });

    $("#h3q").mouseenter(function () {
      $(".box1_1_div2").css("display", "block");
    });
    $("#h3q").mouseleave(function () {
      $(".box1_1_div2").css("display", "none");
    });

    $(".shoppingcart").on("click",".axcvbn",function(){
      alert("加入成功")
    })

   
    // $(".showproduct_div_div1_div11").on(
    //   "mouseenter",
    //   ".div11_center_span",
    //   function () {
    //     // $(this).css("border","1px solid red")
    //     // $(".div11_center_span").find("#ioplk").attr("class","active").eq($(this).index()).css("border","1px solid red")
    //   }
    // );

    $(".showproduct_div_div1_div11").on(
      "mouseenter",
      ".div11_center_span",
      function () {
        // $(".div11_center_span")

        let $lis = $(".div11_center_span");
        // console.log($lis.index())
        for (let i = 0; i < $(".div11_center_span").length; i++) {
          // $(this).index()
          if ($(this).index() == 0) {
            $(".showproduct_div_div1_img_ul_li").css("left", "0");
          }
          if ($(this).index() == 1) {
            $(".showproduct_div_div1_img_ul_li").css("left", "-420px");
          }
          if ($(this).index() == 2) {
            $(".showproduct_div_div1_img_ul_li").css("left", "-840px");
          }
          if ($(this).index() == 3) {
            $(".showproduct_div_div1_img_ul_li").css("left", "-1260px");
          }
          if ($(this).index() == 4) {
            $(".showproduct_div_div1_img_ul_li").css("left", "-1680px");
          }
        }
      }
    );

    // 隐藏的放大镜的框
    $(".showproduct_div_div1_div11").on(
      "mouseenter",
      ".div11_center_span",
      function () {
        // $(".div11_center_span")

        let $lis = $(".div11_center_span");
        // console.log($lis.index())
        for (let i = 0; i < $(".div11_center_span").length; i++) {
          // $(this).index()
          if ($(this).index() == 0) {
            $(".print_box1_ul").css("left", "0");
          }
          if ($(this).index() == 1) {
            $(".print_box1_ul").css("left", "-420px");
          }
          if ($(this).index() == 2) {
            $(".print_box1_ul").css("left", "-840px");
          }
          if ($(this).index() == 3) {
            $(".print_box1_ul").css("left", "-1260px");
          }
          if ($(this).index() == 4) {
            $(".print_box1_ul").css("left", "-1680px");
          }
        }
      }
    );

    $(".showproduct_div_div1_img").on("mouseenter", function () {
      $(".print_box1").css("display", "block");
      $(".magnifyingglass").css("display", "block");
    });
    $(".showproduct_div_div1_img").on("mouseleave", function () {
      $(".print_box1").css("display", "none");
      $(".magnifyingglass").css("display", "none");
    });

    var smalls = document.querySelector(".showproduct_div_div1_img");
    var omark = document.querySelector(".magnifyingglass");
    smalls.onmousemove = function (e) {
      e = e || window.event;
      var l = e.clientX - smalls.offsetLeft - smalls.offsetWidth / 2 - 150;
      // console.log(l)
      if (l <= 0) {
        l = 0;
      }
      if (l >= 220) {
        l = 220;
      }
      var t = e.clientY - smalls.offsetTop - smalls.offsetHeight / 2 - 50;
      if (t <= 0) {
        t = 0;
      }
      if (t >= 220) {
        t = 220;
      }

      omark.style.left = l + "px";
      omark.style.top = t + "px";

      $(".print_box1_ul_li img").css("left", l * -1 + "px");
      $(".print_box1_ul_li img").css("top", t * -1 + "px");
    };

    var num1 = 0;
    $(".footer_divssd_span1").click(function () {
      // $(".showproduct_div_div3_ul").css("top","")

      num1 += -522;
      $(".showproduct_div_div3_ul").css("top", num1 + "px");
    });
    $(".footer_divssd_span2").click(function () {
      // $(".showproduct_div_div3_ul").css("top","")

      num1 += 522;
      $(".showproduct_div_div3_ul").css("top", num1 + "px");
    });

    $(".TabControl_div_div2_table")
      .find("li")
      .click(function () {
        $(".TabControl_div_div2_table").find("li").attr("class", "");
        $(".TabControl_div_div2_table")
          .find(".options")
          .css("display", "none")
          .eq($(this).index())
          .css("display", "block");
        $(this).attr("class", "lisbn");
      });

    // 产品也得伦比图
    var btns = $("#play").find("ol li");

    var plays = $("#play");

    // console.log(uls)
    var iNow = 0;
    var timer = 0;

    btns.mouseenter(function () {
      iNow = $(this).index();
      tab();
    });

    timer = setInterval(function () {
      iNow++;
      tab();
    }, 2000);

    function tab() {
      // $("#play").find(".play_ul")
      // console.log($("#play").find(".play_ul"))
      btns.removeClass("active").eq(iNow).addClass("active");
      if (iNow == btns.length) {
        btns.eq(0).addClass("active");
      }

      $("#play")
        .find(".play_ul")
        .animate({ top: iNow * -305 }, 500, function () {
          if (iNow == btns.length) {
            iNow = 0;
            $("#play").find(".play_ul").css("top", 0);
          }
        });
    }

    plays.mouseenter(function () {
      clearInterval(timer);
    });

    plays.mouseleave(function () {
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 2000);
    });

    // 加入购物车
    $(".shoppingcart").on("click", ".Shopbtnss", function () {
      var id = this.id;
      // console.log(id)
      var first = $.cookie("goods") == null ? true : false;
      if (first) {
        //如果是第一次的话 那么 就要进行下面的判断
        var arr = [{ id: id, num: 1 }]; //如果是第一次的话 那么 就是 id就是我点击的这个物品的这个id  数量就是 1
        $.cookie("goods", JSON.stringify(arr), {
          expires: 7,
        }); //用good来存储 只不过 cookie要的是 字符串 所以 我们要 将数据转换成字符串
      } else {
        var cookieArr = JSON.parse($.cookie("goods")); //否则的话就是在之前已经添加过了 我们要把之前的数据 拿出来 转成数组

        var index = cookieArr.findIndex((item) => item.id == id); //当前的 id 跟上面的 id进行比较 如果一样，namejiubazhegeid拿出来

        if (index >= 0) {
          cookieArr[index].num++; //如果大于等于零 那么这个数字 就加一
        } else {
          //否则就是等于 -1 那就是没有这个东西
          cookieArr.push({ id: id, num: 1 }); //这样就是新增了
        }
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7,
        }); //用good来存储 只不过 cookie要的是 字符串 所以 我们要 将数据转换成字符串
      }
    });


      // 判断数量  
  //   function sc_num() {
  //     var cookieStr = $.cookie("goods")  //将我们的 这个数值给取出来，但是这数值不一定有 所以要进行判断 

  //     if (!cookieStr) {  //如果说 购物车什么也没有 那么 就是 0 
  //         $(".sc_right .sc_num").html(0)
  //     } else {//否则的话 就将 我们的数据 转换成数组 
  //         var cookieArr = JSON.parse(cookieStr)
  //         var sum = 0
  //         for (var i = 0; i < cookieArr.length; i++) {
  //             sum += cookieArr[i].num
  //             //这样是将 我们的数组中的每一个 数据 进行累加 
  //         }
  //         // $(".sc_right .sc_num").html(sum)
  //         //这就是最后的 购物车里面的物品总数 
  //     }
  // }

  }

  return {
    downloadss: downloadss,
    ProductsHome: ProductsHome,
  };
});
