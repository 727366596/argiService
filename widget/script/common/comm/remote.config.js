//const BASE_URL = "http://doclever.cn:；8080/mock/597f470ce550c4121bbe101e"


(function(window) {
  var host = 'http://dev.znphjf.com/'
  //var host = 'http://zb.znphjf.com:8082/zb/'
  // var host = "http://zb.znphjf.com:8082/zb"//祝贺硕-植保线上
  //var host = 'http://zb.znphjf.com:8082/zb'
  //var host = 'http://101.200.53.55:8082/zb/'


    // var basePath = '/app'

    var debug =false; // 打印错误信息，false不打印

    var url = function(path) {
        var u = host + path
        if (debug){
          console.log(u);
        }
        return u
    }
    window.remote = {
        url: url,
        debug: function(){
          return debug;
        },
        debugUserId: function(){
          return 1875
        }
    }
})(window)
