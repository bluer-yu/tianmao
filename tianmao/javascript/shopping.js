define(["jquery", "jquery-cookie"], function ($) {
  function downloadio() {
    $.ajax({
      url: "../data/shouye.json",
      success: function (arr) {
        var cookieStr = $.cookie("goods");
        // console.log(cookieStr)
        if (cookieStr) {
          //将我们的 数据 提取出来转换成数组
          var cookieArr = JSON.parse(cookieStr);
          var newArr = []; //用来存放符合条件的数据

          for (var h = 0; h < arr.length; h++) {
            var Shopcartdata = arr[h].Shopcartdata;
          }
          // console.log(Shopcartdata);

          // 将我们外层的arr 拿到
          for (var i = 0; i < Shopcartdata.length; i++) {
            //在拿到我们的 转换成数组的 数据
            for (var j = 0; j < cookieArr.length; j++) {
              //如果我们的 arr当中的id 跟我们的 cookie当中的id 一样的话 说明这个数据在 cookie中添加过
              if (Shopcartdata[i].id == cookieArr[j].id) {
                //把我们cookie的个数 赋值给我们的 arr的个数
                Shopcartdata[i].num = cookieArr[j].num;

                //如果在cookie中添加过 那么 就把这个数据 插入到我们的新的数组中 ，由于每一次只是提取一次 数据 所以我们可以直接 break 下一次的时候还是从头开始寻找
                newArr.push(Shopcartdata[i]);
                break;
              }
            }
          }
          // console.log(newArr) 购物车显示的数据 把数据 插入购物车
          var str = ``;
          //循环我们的 新的数组 就是循环 找到的 cookie中存在的并且 服务器也存在的数据
          for (var i = 0; i < newArr.length; i++) {
            //用字符串拼接的方式 创建一个元素 这个元素 就是我们的 购物车显示的内容
            str += `
                                <div id="${newArr[i].id}" class="newArr_div1">
                                <a href="" id="selfadaption_div2_2_a">
                                <img src="${newArr[i].img}" alt="">
                                </a>
                                <!-- 文字描述 -->
                                <span>
                                    <em class="selfadaption_div2_2_em">${newArr[i].writing}</em>
                                </span>
                            </div>
                                `;
          }
          //把数据导入我们的  右侧购物车中
          $(".selfadaption_div2_2").html(str);

          var str = ``;
          for (var k = 0; k < newArr.length; k++) {
            str += `
                <a  class="item-amount_a">-</a>
                <input type="text" value="${newArr[k].num}" id="item-amount_input">
                <a  class="item-amount_a">+</a>
                `;
            // $("#settleaccounts_div4_em").html(`${newArr[k].num}`)
            // var numsd = $("#selfadaption_div2_4_em").html()
            $("#klokk").html(`${newArr[k].num}` * `${newArr[k].univalence}`)
            $("#qwsde").html(`${newArr[k].num}` * `${newArr[k].univalence}`)
            $("#qwedccd").html(`${newArr[k].num}` * `${newArr[k].univalence}`)

            console.log($("#qwsde"))
          }
          $(".item-amount").html(str);

          var str = ``;
          for (var j = 0; j < newArr.length; j++) {
            str += `
                <em>￥</em>
                <em id="selfadaption_div2_4_em">${newArr[j].univalence}</em>
                `;
          }
          $(".selfadaption_div2_4").html(str);
        }

        $(".2_7_a1").on("click", function () {
          $(".selfadaption").remove()
          // $("#newArr_div1").attr("id")
          $.cookie("goods", null);
        });

        // var numsd = $("#selfadaption_div2_4_em").html()
        // console.log(numsd)

        $(".item-amount").on("click", ".item-amount_a", function () {
          var numsd = $("#selfadaption_div2_4_em").html();
          // console.log(numsd)
          var id = $(".newArr_div1").attr("id");
          var cookieArr = JSON.parse($.cookie("goods"));
          var res = cookieArr.find((item) => item.id == id);
          //找到当前商品的 id

          $("#settleaccounts_div4_em").html(`${res.num}`);

          if (this.innerHTML == "+") {
            res.num++;
            $("#settleaccounts_div4_em").html(`${res.num}`);
            // console.log(`${res.num}` * numsd)
            $("#klokk").html(`${res.num}` * numsd);
            $("#qwsde").html(`${res.num}` * numsd);
            $("#qwedccd").html(`${res.num}` * numsd);
          } else {
            //否则的话 如果我们的 数量为1 了那么就显示 这个 不然的话 就可以 --
            res.num == 1 ? alert("数量为1 不能减少") : res.num--;
            $("#settleaccounts_div4_em").html(`${res.num}`);
            $("#klokk").html(`${res.num}` * numsd);
            $("#qwsde").html(`${res.num}` * numsd);
            $("#qwedccd").html(`${res.num}` * numsd);
          }
          //让兄弟节点中的 span 节点来显示 这个
          //   $(this).siblings("span").html(`商品数量:${res.num}`);
          $("#item-amount_input").val(`${res.num}`);
          //再把这个 数值 存回去
          $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7,
          });
        });

        
          var cookieStr = $.cookie("goods"); //将我们的 这个数值给取出来，但是这数值不一定有 所以要进行判断

          if (!cookieStr) {
            //如果说 购物车什么也没有 那么 就是 0
            // $(".sc_right .sc_num").html(0);
            $("#qwsde").html("");
            $("#settleaccounts_div4_em").html(0)
            $(".selfadaption").remove()
          } else {
            //否则的话 就将 我们的数据 转换成数组
            var cookieArr = JSON.parse(cookieStr);
            var sum = 0;
            for (var i = 0; i < cookieArr.length; i++) {
              sum += cookieArr[i].num;
              //这样是将 我们的数组中的每一个 数据 进行累加
            }
            // $("#qwsde").html(sum);
            //这就是最后的 购物车里面的物品总数
            $("#settleaccounts_div4_em").html(sum)
          }
        
      },
      error: function (msg) {
        console.log(msg);
      },
    });
  }

  function downloadiosqd() {
    // $("#li1").mouseenter(function () {
    //     $("#hear_hide1").css("display", "block");
    //     $("#hear_hide1").css("backgroundColor", "#fff");
    //     $("#li1").css("backgroundColor", "#fff");
    //     $("#li1_a").css("color", "#ff0036");
    //     $("#li1_a").css("text-decoration", "underline");
    //   });
    //   $("#hear_hide1").mouseleave(function () {
    //     $("#hear_hide1").css("display", "none");
    //     $("#li1").css("backgroundColor", "#f2f2f2");
    //     $("#li1_a").css("color", "#999");
    //     $("#li1_a").css("text-decoration", "none");
    //   });
    //   // 第二个隐藏
    //   $("#li2").mouseenter(function () {
    //     $("#hear_hide2").css("display", "block");
    //     $("#hear_hide2").css("backgroundColor", "#fff");
    //     $("#li2").css("backgroundColor", "#fff");
    //     $("#li2 a").css("color", "#ff0036");
    //     $("#li2 a").css("text-decoration", "underline");
    //   });
    //   $("#hear_hide2").mouseleave(function () {
    //     $("#hear_hide2").css("display", "none");
    //     $("#li2").css("backgroundColor", "#f2f2f2");
    //     $("#li2 a").css("color", "#999");
    //     $("#li2 a").css("text-decoration", "none");
    //   });
    //   // 第三个隐藏
    //   $("#li3").mouseenter(function () {
    //     $("#hear_hide3").css("display", "block");
    //   });
    //   $("#hear_hide3").mouseleave(function () {
    //     $("#hear_hide3").css("display", "none");
    //   });
    //   // 第四个隐藏
    //   $("#li4").mouseenter(function () {
    //     $(".hear_hide4").css("display", "block");
    //     $(".hear_hide4").css("backgroundColor", "#fff");
    //     $("#li4").css("backgroundColor", "#fff");
    //     $("#li4 a").css("color", "#ff0036");
    //     $("#li4 a").css("text-decoration", "underline");
    //   });
    //   $(".hear_hide4").mouseleave(function () {
    //     $(".hear_hide4").css("display", "none");
    //     $("#li4").css("backgroundColor", "#f2f2f2");
    //     $("#li4 a").css("color", "#999");
    //     $("#li4 a").css("text-decoration", "none");
    //   });
    //   // 第五个导航
    //   $("#li5").mouseenter(function () {
    //     $(".hear_hide5").css("display", "block");
    //     $(".hear_hide5").css("backgroundColor", "#fff");
    //     $("#li5").css("backgroundColor", "#fff");
    //     $("#li5 a").css("color", "#ff0036");
    //     $("#li5 a").css("text-decoration", "underline");
    //   });
    //   $(".hear_hide5").mouseleave(function () {
    //     $(".hear_hide5").css("display", "none");
    //   });
  }
  return {
    downloadiosqd: downloadiosqd,
    downloadio: downloadio,
  };
});
