
define(["jquery"], function ($) {
  function download() {
    // console.log("我是下载")
    $.ajax({
      url: "../data/shouye.json",
      success: function (arr) {
        // console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          var node = $(`<div>
                    <article class="hear_hide5_article">
                            <ul id="hear_hide5_article1_ul">

                            </ul>
                   </article>
                   <article class="hear_hide5_article">
                        <ul id="hear_hide5_article1_ul1">

                        </ul>
                   </article>
                   <article class="hear_hide5_article">
                            <ul id="hear_hide5_article1_ul2">

                            </ul>
                   </article>
                   </div>

                    `);
          node.appendTo($(".hear_hide5"));

          var subTitles = arr[i].subTitles;

          for (let j = 0; j < subTitles.length; j++) {
            $(`<h3>${subTitles[j]}</h3>`).prependTo(
              node.find(".hear_hide5_article")[j]
            );
          }

          var hotpints = arr[i].hotpints;
          for (let k = 0; k < hotpints.length; k++) {
            $(`<li>${hotpints[k]}</li>`).appendTo(
              node.find("#hear_hide5_article1_ul")
            );
          }

          var hotpints2 = arr[i].hotpints2;
          for (let k = 0; k < hotpints2.length; k++) {
            $(`<li>${hotpints2[k]}</li>`).appendTo(
              node.find("#hear_hide5_article1_ul1")
            );
          }

          var hotpints3 = arr[i].hotpints3;
          for (let k = 0; k < hotpints3.length; k++) {
            $(`<li>${hotpints3[k]}</li>`).appendTo(
              node.find("#hear_hide5_article1_ul2")
            );
          }
          //   var navigation = arr[i].navigation
          //   console.log(navigation)
          //   for(let k = 0; k < navigation.length; k++){
          //     $(`<span>${navigation[k]}</span>`).appendTo(
          //         node.find($(".small_box_1_div1"))
          //       );
          //   }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <div class="small_box_1">
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2" id="small_box_1_div21">
                            <div class="small_box_1_div3"></div>
                        </div>

                    </div>
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2"
                        id="small_box_1_div22">
                            <div class="small_box_1_div3"></div>
                        </div>
                    </div>
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2"
                        id="small_box_1_div23">
                            <div class="small_box_1_div3"></div>
                        </div>
                    </div>
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2"
                        id="small_box_1_div24">
                            <div class="small_box_1_div3"></div>
                        </div>
                    </div>
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2"
                        id="small_box_1_div25">
                            <div class="small_box_1_div3"></div>
                        </div>
                    </div>
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2"
                        id="small_box_1_div26">
                            <div class="small_box_1_div3"></div>
                        </div>
                    </div>
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2"
                        id="small_box_1_div27">
                            <div class="small_box_1_div3"></div>
                        </div>
                    </div>
                    <div class="small_box_1_div">
                        <div class="small_box_1_div1"></div>
                        <div class="small_box_1_div2"
                        id="small_box_1_div28">
                            <div class="small_box_1_div3"></div>
                        </div>
                    </div>
                </div>
            `);
          node.appendTo($(".hide_box3_1_1"));

          var navigation = arr[i].navigation;
          for (var k = 0; k < navigation.length; k++) {
            $(`<span>${navigation[k]}</span>`).prependTo(
              node.find(".small_box_1_div1")[k]
            );
          }

          var Chevalier = arr[i].Chevalier;
          for (var k = 0; k < Chevalier.length; k++) {
            $(`<a href="">${Chevalier[k]}</a>`).prependTo(
              node.find("#small_box_1_div21")
            );
          }

          var Zinif = arr[i].Zinif;
          for (var k = 0; k < Zinif.length; k++) {
            $(`<a href="">${Zinif[k]}</a>`).prependTo(
              node.find("#small_box_1_div22")
            );
          }

          var adidas = arr[i].adidas;
          for (var k = 0; k < adidas.length; k++) {
            $(`<a href="">${adidas[k]}</a>`).prependTo(
              node.find("#small_box_1_div23")
            );
          }

          var BOTTOMS = arr[i].BOTTOMS;
          for (var k = 0; k < BOTTOMS.length; k++) {
            $(`<a href="">${BOTTOMS[k]}</a>`).prependTo(
              node.find("#small_box_1_div24")
            );
          }

          var featureadidas = arr[i].featureadidas;
          for (var k = 0; k < featureadidas.length; k++) {
            $(`<a href="">${featureadidas[k]}</a>`).prependTo(
              node.find("#small_box_1_div25")
            );
          }

          var brassiere = arr[i].brassiere;
          for (var k = 0; k < brassiere.length; k++) {
            $(`<a href="">${brassiere[k]}</a>`).prependTo(
              node.find("#small_box_1_div26")
            );
          }

          var leisurewear = arr[i].leisurewear;
          for (var k = 0; k < leisurewear.length; k++) {
            $(`<a href="">${leisurewear[k]}</a>`).prependTo(
              node.find("#small_box_1_div27")
            );
          }

          var briefs = arr[i].briefs;
          for (var k = 0; k < briefs.length; k++) {
            $(`<a href="">${briefs[k]}</a>`).prependTo(
              node.find("#small_box_1_div28")
            );
          }
        }

        // 女鞋隐藏
        for (var i = 0; i < arr.length; i++) {
          var node = $(`<div class="small_box_2">
            <div class="small_box_2_div">
                <div class="small_box_2_div1"></div>
                <div class="small_box_2_div2" id="small_box_1_div31">
                    <div class="small_box_2_div3"></div>
                </div>

            </div>
            <div class="small_box_2_div">
                <div class="small_box_2_div1"></div>
                <div class="small_box_2_div2" id="small_box_1_div32">
                    <div class="small_box_2_div3"></div>
                </div>
            </div>
            <div class="small_box_2_div">
                <div class="small_box_2_div1"></div>
                <div class="small_box_2_div2" id="small_box_1_div33">
                    <div class="small_box_2_div3"></div>
                </div>
            </div>
            <div class="small_box_2_div">
                <div class="small_box_2_div1"></div>
                <div class="small_box_2_div2" id="small_box_1_div34">
                    <div class="small_box_2_div3"></div>
                </div>
            </div>
            <div class="small_box_2_div">
                <div class="small_box_2_div1"></div>
                <div class="small_box_2_div2" id="small_box_1_div35">
                    <div class="small_box_2_div3"></div>
                </div>
            </div>
            <div class="small_box_2_div">
                <div class="small_box_2_div1"></div>
                <div class="small_box_2_div2" id="small_box_1_div36">
                    <div class="small_box_2_div3"></div>
                </div>
            </div>
            <div class="small_box_2_div">
                <div class="small_box_2_div1"></div>
                <div class="small_box_2_div2" id="small_box_1_div37">
                    <div class="small_box_2_div3"></div>
                </div>
            </div>
        </div>
            `);
          node.prependTo($(".hide_box3_1_2"));

          var recommend = arr[i].recommend;
          for (var k = 0; k < recommend.length; k++) {
            $(`<span>${recommend[k]}</span>`).prependTo(
              node.find(".small_box_2_div1")[k]
            );
          }

          var recommendshouse = arr[i].recommendshouse;
          for (var k = 0; k < recommendshouse.length; k++) {
            $(`<a href="">${recommendshouse[k]}</a>`).prependTo(
              node.find("#small_box_1_div31")
            );
          }

          var recommendyearcon = arr[i].recommendyearcon;
          for (var k = 0; k < recommendyearcon.length; k++) {
            $(`<a href="">${recommendyearcon[k]}</a>`).prependTo(
              node.find("#small_box_1_div32")
            );
          }

          var staccato = arr[i].staccato;
          for (var k = 0; k < staccato.length; k++) {
            $(`<a href="">${staccato[k]}</a>`).prependTo(
              node.find("#small_box_1_div33")
            );
          }

          var tideway = arr[i].tideway;
          for (var k = 0; k < tideway.length; k++) {
            $(`<a href="">${tideway[k]}</a>`).prependTo(
              node.find("#small_box_1_div34")
            );
          }

          var Boutique = arr[i].Boutique;
          for (var k = 0; k < Boutique.length; k++) {
            $(`<a href="">${Boutique[k]}</a>`).prependTo(
              node.find("#small_box_1_div35")
            );
          }

          var suitcase = arr[i].suitcase;
          for (var k = 0; k < suitcase.length; k++) {
            $(`<a href="">${suitcase[k]}</a>`).prependTo(
              node.find("#small_box_1_div36")
            );
          }
          var miracle = arr[i].miracle;
          for (var k = 0; k < miracle.length; k++) {
            $(`<a href="">${miracle[k]}</a>`).prependTo(
              node.find("#small_box_1_div37")
            );
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <div class="small_box_3_div">
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
                        <a href="" class="small_box_3_div_a"></a>
            </div>
            `);
          node.appendTo($(".small_box_3"));

          var sixteen = arr[i].sixteen;
          for (var k = 0; k < sixteen.length; k++) {
            $(`<img src="${sixteen[k].img}" alt="">`).appendTo(
              node.find(".small_box_3_div_a")[k]
            );
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <div class="box4_1">
            <div class="box4_1_div1">
                <a href="" class="box4_1_div2_a"></a>
            </div>
            <div class="box4_1_div2">
                <a href="" class="box4_1_div2_a"></a>
                <a href="" class="box4_1_div2_a"></a>
                <a href="" class="box4_1_div2_a"></a>
                <a href="" class="box4_1_div2_a"></a>
                <a href="" class="box4_1_div2_a"></a>
            </div>
        </div>
            `);
          node.appendTo($(".box4"));

          var cosmetics = arr[i].cosmetics;
          for (var k = 0; k < cosmetics.length; k++) {
            $(`<img src="${cosmetics[k].img}" alt="">`).appendTo(
              node.find(".box4_1_div2_a")[k]
            );
          }
        }

        // 中间三块
        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <div class="box5_1">
            <div class="box5_1_div">
                <article class="box5_1_div_article1">
                    <span>品牌闪购</span>
                    <span>BRAND SALE</span>
                    <i class="iconfont">
                        &#xe84f;
                    </i>
                </article>
                <article class="box5_1_div_article2 show">

                </article>
            </div>
        

        
            <div class="box5_2_div">
                <article class="box5_2_div_article1">
                    <span>聚名品</span>
                    <span>BRAND SALE</span>
                    <i class="iconfont">
                        &#xe84f;
                    </i>
                </article>
                <article class="show box5_2_div_article2">
                    
                </article>
            </div>
        

        
            <div class="box5_3_div">
                <article class="box5_3_div_article1">
                    <span>品牌活动</span>
                    <span>BRAND SALE</span>
                    <i class="iconfont">
                        &#xe84f;
                    </i>
                </article>
                <article class="show box5_3_div_article2">
                    
                </article>
            </div>
            `);
          node.appendTo($(".box5"));

          var threepieces = arr[i].threepieces;
          for (var k = 0; k < threepieces.length; k++) {
            $(`<img src="${threepieces[k].img}" alt="">`).appendTo(
              node.find(".show")[k]
            );
          }
        }

        for (var i = 0; i < arr.length; i++) {
          var node = $(`
            <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>

                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="box6_center_box_div1">
                        
                    </div>
                    <a href="" class="box6_center_box_a">
                        <div class="box6_center_box_a_div1">
                            <span>优惠券￥65</span>
                        </div>
                        <div class="box6_center_box_a_div2">
                            <span>点击进入</span>
                        </div>
                    </a>
                </li>
                <div class="smass_div">
                <a href="" class="refresh-btn">
                    <i class="iconfont rotate-icon">
                        &#xe62c;
                    </i>
                    <span class="btn-text">换一批</span>
                </a>
            </div>
            `);
          node.appendTo($(".box6_1_ul"));

          var thirty = arr[i].thirty;
          for (var k = 0; k < thirty.length; k++) {
            $(`<img src="${thirty[k].img}" alt="">`).appendTo(
              node.find(".box6_center_box_div1")[k]
            );
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
                <div class="box7_1">
                <div class="box7_center_aside_div1">
                    <img src="images/lvselogo.png" alt="">
                </div>
    
                <div class="box7_center_aside_div2">
                    <!-- 放图 -->
                    <!-- maotai -->
                    <a href="" class="box7_center_aside_div2_a1 six_1">
                        <div class="maotai_div1">
                            <div class="ssmall_div1">
                                <span>天猫超市</span>
                            </div>
                            <div class="ssmall_div2">
                                <span>1499抢</span>
                                <span>飞天茅台</span>
                            </div>
                        </div>
                    </a>
                    <!-- 一堆小图 -->
                    <div class="box7_center_aside_div2_a2">
                        <div class="xiaotu_div2">
                            <div class="small_carousel_center">
                                <ul class="small_carousel_center_ul">
                                    <li class="active_write lisd1">
                                        <p>今日疯抢</p>
                                    </li>
                                    <li class="lisd1">
                                        <p>量贩装</p>
                                    </li>
                                </ul>
    
                                <div class="small_carousel_center_div">
                                    <div class="write_sanjiao1">
                                        <div class="left_detail_1">
                                            <img src="images/duihao.png" alt="">
                                            <span>精选推荐</span>
                                        </div>
                                        <div class="left_detail_2">
                                            <span>第二件0元</span>
                                        </div>
                                        <img src="images/nai.jpg" alt="" class="small_img_1niunai">
                                    </div>
    
                                    <div class="write_sanjiao2">
                                        <div class="left_detail_1">
                                            <img src="images/duihao.png" alt="">
                                            <span>进口牛奶</span>
                                        </div>
                                        <div class="left_detail_2">
                                            <span>第二件0元</span>
                                        </div>
                                        <img src="images/jianguo.jpg" alt="" class="small_img_1niunai">
                                    </div>
                                        
                                        
                                </div>
                            </div>
                           
                        </div>
                        <a href="" class="div_six six_1 id="whiteness">
                            <div class="div_six_div1">
                                <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                            </div>
                            <div class="div_six_div2">
                                <span>￥59.8</span>
                            </div>
                        </a>
                        <a href="" class="div_six six_1 id="whiteness"">
                            <div class="div_six_div1">
                                <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                            </div>
                            <div class="div_six_div2">
                                <span>￥59.8</span>
                            </div>
                        </a>
                        <a href="" class="div_six six_1 id="whiteness"">
                            <div class="div_six_div1">
                                <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                            </div>
                            <div class="div_six_div2">
                                <span>￥59.8</span>
                            </div>
                        </a>
                        <a href="" class="div_six six_1 id="whiteness"">
                            <div class="div_six_div1">
                                <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                            </div>
                            <div class="div_six_div2">
                                <span>￥59.8</span>
                            </div>
                        </a>
                        <a href="" class="div_six six_1 id="whiteness"">
                            <div class="div_six_div1">
                                <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                            </div>
                            <div class="div_six_div2">
                                <span>￥59.8</span>
                            </div>
                        </a>
                        <a href="" class="div_six six_1 id="whiteness"">
                            <div class="div_six_div1">
                                <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                            </div>
                            <div class="div_six_div2">
                                <span>￥59.8</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
                `);
            node.appendTo($(".box7"));

            var sixsmall = arr[i].sixsmall;
            for (var k = 0; k < sixsmall.length; k++) {
              $(`<img src="${sixsmall[k].img}" alt="">`).prependTo(
                node.find(".six_1")[k]
              );
            }
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
            
            <div class="box8_1">
            <div class="box7_center_aside_div1">
                <img src="images/ziselogo.png" alt="">
            </div>

            <div class="box8_1_2">
                <a href="" class="div_six six_2">
                    <div class="maotai_div1">
                        <div class="ssmall_div1">
                            <span>奢享人生</span>
                        </div>
                        <div class="ssmall_div2">
                            <span>极速发货</span>
                            <span>全球低价</span>
                        </div>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="maotai_div1">
                        <div class="ssmall_div1">
                            <span>直营品质</span>
                        </div>
                        <div class="ssmall_div2">
                            <span>放心体验</span>
                            <span>畅享全球</span>
                        </div>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_2">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
            </div>
        </div>`);
            node.appendTo($(".box8"));

            var Ganliang = arr[i].Ganliang;
            for (var k = 0; k < Ganliang.length; k++) {
              $(`<img src="${Ganliang[k].img}" alt="">`).prependTo(
                node.find(".six_2")[k]
              );
            }
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
                <div class="box10_1">
                <i class="box10_center_div_small"></i>
                <div class="box10_center_div_small1">
                    <span>美丽人生</span>
                    <span>FASHION & BEAUTY</span>
                </div>
    
                <div class="box7_center_aside_div2">
                    <a href="" class="box7_center_aside_div2_a1 six_3">
                        <div class="maotai_div1">
                            <div class="ssmall_div1">
                                <span>箱包服配</span>
                            </div>
                            <div class="ssmall_div2">
                                <span>时尚女包</span>
                                <span>不止5折</span>
                            </div>
                        </div>
                    </a>
                    
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
    
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
                    <a href="" class="div_six six_3">
                        <div class="div_six_div1">
                            <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                        </div>
                        <div class="div_six_div2">
                            <span>￥59.8</span>
                        </div>
                    </a>
                </div>
            </div>
                `);
            node.appendTo($(".box10"));

            var Beautiful = arr[i].Beautiful;
            for (var k = 0; k < Beautiful.length; k++) {
              $(`<img src="${Beautiful[k].img}" alt="">`).prependTo(
                node.find(".six_3")[k]
              );
            }
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
                <div class="box11_1">
            <i class="box10_center_div_small"></i>
            <div class="box10_center_div_small1">
                <span>潮电酷玩</span>
                <span>FASHION & BEAUTY</span>
            </div>

            <div class="box7_center_aside_div2">
                <a href="" class="box7_center_aside_div2_a1 six_5">
                    <div class="maotai_div1">
                        <div class="ssmall_div1">
                            <span>明星同款</span>
                        </div>
                        <div class="ssmall_div2">
                            <span>畅享音乐</span>
                            <span>耳机发烧友</span>
                        </div>
                    </div>
                </a>
                
                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>

                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_5">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
            </div>
                `);
            node.appendTo($(".box11"));

            var damp = arr[i].damp;
            for (var k = 0; k < damp.length; k++) {
              $(`<img src="${damp[k].img}" alt="">`).prependTo(
                node.find(".six_5")[k]
              );
            }
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
                <div class="box12_1">
            <i class="box10_center_div_small"></i>
            <div class="box10_center_div_small1">
                <span>居家生活</span>
                <span>FASHION & BEAUTY</span>
            </div>

            <div class="box7_center_aside_div2">
                <a href="" class="box7_center_aside_div2_a1 six_6">
                    <div class="maotai_div1">
                        <div class="ssmall_div1">
                            <span>原厂直供</span>
                        </div>
                        <div class="ssmall_div2">
                            <span>源头好品</span>
                            <span>工厂直销</span>
                        </div>
                    </div>
                </a>
                
                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>

                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_6">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
            </div>
                `);
            node.appendTo($(".box12"));

            var furniture = arr[i].furniture;
            for (var k = 0; k < furniture.length; k++) {
              $(`<img src="${furniture[k].img}" alt="">`).prependTo(
                node.find(".six_6")[k]
              );
            }
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
                <div class="box13_1">
            <i class="box10_center_div_small"></i>
            <div class="box10_center_div_small1">
                <span>打造爱巢</span>
                <span>FASHION & BEAUTY</span>
            </div>

            <div class="box7_center_aside_div2">
                <a href="" class="box7_center_aside_div2_a1 six_7">
                    <div class="maotai_div1">
                        <div class="ssmall_div1">
                            <span>轻松生活</span>
                        </div>
                        <div class="ssmall_div2">
                            <span>温文尔雅</span>
                            <span>极致条纹感</span>
                        </div>
                    </div>
                </a>
                
                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>

                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_7">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
            </div>
                `);
            node.appendTo($(".box13"));

            var sweethome = arr[i].sweethome;
            for (var k = 0; k < sweethome.length; k++) {
              $(`<img src="${sweethome[k].img}" alt="">`).prependTo(
                node.find(".six_7")[k]
              );
            }
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
                <div class="box14_1">
            <i class="box10_center_div_small"></i>
            <div class="box10_center_div_small1">
                <span>户外出行</span>
                <span>FASHION & BEAUTY</span>
            </div>

            <div class="box7_center_aside_div2">
                <a href="" class="box7_center_aside_div2_a1 six_8">
                    <div class="maotai_div1">
                        <div class="ssmall_div1">
                            <span>汽车养护</span>
                        </div>
                        <div class="ssmall_div2">
                            <span>精选好物</span>
                            <span>爆款好货</span>
                        </div>
                    </div>
                </a>
                
                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>

                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
                <a href="" class="div_six six_8">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>
            </div>
                `);
            node.appendTo($(".box14"));

            var outdoors = arr[i].outdoors;
            for (var k = 0; k < outdoors.length; k++) {
              $(`<img src="${outdoors[k].img}" alt="">`).prependTo(
                node.find(".six_8")[k]
              );
            }
          }

          for (var i = 0; i < arr.length; i++) {
            var node = $(`
                <div class="box16_div1">

                </div>
                `);
            node.appendTo($(".box16"));
            var onehundred = arr[i].onehundred;
            for (var k = 0; k < onehundred.length; k++) {
              $(`<a href="chanpin.html" class="div_six six_10">
                    <img src="${onehundred[k].img}" alt="">
                    <div class="div_six_div1">
                        <span>三只松鼠手撕面包1kg整箱网红零食礼包早餐全麦食品蛋糕点心吐司</span>
                    </div>
                    <div class="div_six_div2">
                        <span>￥59.8</span>
                    </div>
                </a>`).appendTo(node.filter(".box16_div1"));
            }
          }
        }
      },
      error: function (msg) {
        console.log(msg);
      },
    });
  }

  // 在这写心得方法
  function showDownload() {
    // 第一个隐藏
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

    //划入字体变色
    $(".font_color1").mouseenter(function () {
      $("#li_a_11").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color1").mouseleave(function () {
      $("#li_a_11").css("color", "black");
      // console.log(this)
    });

    $(".font_color2").mouseenter(function () {
      $("#li_a_12").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color2").mouseleave(function () {
      $("#li_a_12").css("color", "black");
      // console.log(this)
    });

    $(".font_color3").mouseenter(function () {
      $("#li_a_13").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color3").mouseleave(function () {
      $("#li_a_13").css("color", "black");
      // console.log(this)
    });

    $(".font_color4").mouseenter(function () {
      $("#li_a_14").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color4").mouseleave(function () {
      $("#li_a_14").css("color", "black");
      // console.log(this)
    });

    $(".font_color5").mouseenter(function () {
      $("#li_a_15").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color5").mouseleave(function () {
      $("#li_a_15").css("color", "black");
      // console.log(this)
    });

    $(".font_color6").mouseenter(function () {
      $("#li_a_16").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color6").mouseleave(function () {
      $("#li_a_16").css("color", "black");
      // console.log(this)
    });

    $(".font_color7").mouseenter(function () {
      $("#li_a_17").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color7").mouseleave(function () {
      $("#li_a_17").css("color", "black");
      // console.log(this)
    });

    $(".font_color8").mouseenter(function () {
      $("#li_a_18").css("color", "#ff0036");
      // console.log(this)
    });
    $(".font_color8").mouseleave(function () {
      $("#li_a_18").css("color", "black");
      // console.log(this)
    });

    // 轮播图区域
    $("#box3_1_li1").mouseenter(function () {
      $(".iconfont1").css("color", "#ff0036");
      $("#box3_1_a").css("color", "#ff0036");
      $("#box3_1_li1").css("backgroundColor", "#fff");
      $(".hide_box3_1_2 ").css("display", "none");
      $(".hide_box3_1_1").css("display", "block");
    });
    $(".hide_box3_1_1").mouseenter(function () {
      $(".iconfont1").css("color", "#ff0036");
      $("#box3_1_a").css("color", "#ff0036");
      $("#box3_1_li1").css("backgroundColor", "#fff");
    });
    // 第一个隐藏结束
    $(".hide_box3_1_1").mouseleave(function () {
      $(".iconfont1").css("color", "black");
      $("#box3_1_a").css("color", "black");
      $("#box3_1_li1").css("backgroundColor", "rgba(0, 0, 0, 0.55")
        $(".hide_box3_1_1").css("display","none")
    });

    // 划出一隐藏区域隐藏
    $(".hide_box3_1_1").mouseleave(function () {
      $(".hide_box3_1_1").css("display", "none");
    });

    // 第二个隐藏
    $("#box3_1_li2").mouseenter(function () {
      $(".hide_box3_1_1").css("display", "none");
      $(".hide_box3_1_2 ").css("display", "block");
      $("#box3_1_li2").css("backgroundColor", "#fff");
      $(".iconfont2").css("color", "#ff0036");
      $("#box3_1_a1").css("color", "#ff0036");
    });
    // 划入右边隐藏左边还亮着
    $(".hide_box3_1_2 ").mouseenter(function () {
      $("#box3_1_li2").css("backgroundColor", "#fff");
      $(".iconfont2").css("color", "#ff0036");
      $("#box3_1_a1").css("color", "#ff0036");
    });

    $("#box3_1_li2").mouseleave(function () {
      $(".iconfont2").css("color", "black");
      $("#box3_1_a1").css("color", "black");
      $("#box3_1_li2").css("backgroundColor", "rgba(0, 0, 0, 0.55")
    });

    $(".hide_box3_1_2 ").mouseleave(function () {
      $(".hide_box3_1_2 ").css("display", "none");
      $(".iconfont2").css("color", "black");
      $("#box3_1_a1").css("color", "black");
      $("#box3_1_li2").css("backgroundColor", "rgba(0, 0, 0, 0.55);");
    });

    $(".six_1").mouseenter(function(){
        $("#whiteness").fadeTo(200,0.2)})

    //     $(".small_carousel_center_ul").length
    // console.log($(".small_carousel_center_ul").on(.lisd1).length)
    $(window).scroll(function(){
        if(document.documentElement.scrollTop > 700){
            $("#fixed_div").css("display","block")
        }else{
            $("#fixed_div").css("display","none")
        }
    })

    $(window).scroll(function(){
        if(document.documentElement.scrollTop > 700){
            $("#seek").slideDown(500,function(){
                $("#seek").css("display","block")
            });
    
        }else{
            $("#seek").slideUp(500,function(){
                $("#seek").css("display","none")
            });
            
        }
    })
    

    var arr = ["timg1.jpg", "timg2.jpg", "timg3.jpg", "timg4.jpg", "timg5.jpg"];
    var ord = 0;//代表当前图片的序号，从0开始。
    var myTimer = null;
    //1、自动播放
        myTimer = setInterval(function () {
            //一、改变数据
            // 1、记录当前序号（淡出的图片序号）
            var outOrd = ord;
            //2、改变要显示的图片的序号（淡出图片序号加一）
            ord++;
            if (ord > arr.length - 1) {
                ord = 0;
            }
            //二、改变外观
            var $img = $("#box img");
            // console.log($img)
            //1、淡入淡出效果
            //上一张淡出 当前消失
            $img.eq(outOrd).animate({ "opacity": 0 }, 2000);
            //这一张淡入
            $img.eq(ord).animate({ "opacity": 1 }, 2000);
            
            $("#box li").eq(ord).css({ "backgroundColor": "red" }).siblings().css({ "backgroundColor": "orange" });
        }, 3000);

        $("#box li").mouseenter(function(){
            clearInterval(myTimer)
            var outOrd = ord;
            //2、改变要显示的图片的序号（淡出图片序号加一）
            ord++;
            if (ord > arr.length - 1) {
                ord = 0;
            }
            var $img = $("#box img");
            $img.eq(outOrd).animate({ "opacity": 0 }, 2000);
            //这一张淡入
            $img.eq(ord).animate({ "opacity": 1 }, 2000);
            $(this).css({ "backgroundColor": "red" }).siblings().css({ "backgroundColor": "orange" });
        })

        



        // window.onscroll = function(){
        //     if($tops > 700){
        //         $fixed.css("display","block")
        //     }
        //     if($tops < 700){
        //         $fixed.css("display","none")
        //     }
        // }


  }

  return {
    download: download,
    showDownload: showDownload,
  };
});
