require.config({
  paths: {
    jquery: "jquery-3.5.1",
    jquery1:"jquery-1.11.3.js",
    shouye: "shouye",
    chanpin: "chanpin",
    shopping: "shopping",
    denglu: "denglu",
    zhuce:"zhuce",
    "jquery-cookie": "jquery.cookie",
  },
  shim: {
    "jquery-cookie": ["jquery"],
    // 因为ookie是依赖于 jquery开发 所以我们要设置依赖关系
  },
});
// 配置路径

require(["shouye", "chanpin", "shopping", "denglu","zhuce"], function (
  shouye,
  chanpin,
  shopping,
  denglu,
  zhuce
) {
  denglu.jnmk();
  zhuce.enroll();
  
  shouye.download();
  shouye.showDownload();

  shopping.downloadiosqd();
  shopping.downloadio();

  chanpin.downloadss();
  chanpin.ProductsHome();
  
});
