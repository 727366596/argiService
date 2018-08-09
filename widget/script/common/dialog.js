
(function(window, $) {
    var dialog = {}, dialogBox = null;

    //confirm弹出层
    var myConfirm = function(option, callback){
        var text = {
            title: "提示！",
            content: "确认保存吗？",
            leftBtnTitle: '取消',
            rightBtnTitle: '确认'
        };
        var _text = (option == undefined) ? text : $.extend({}, text, option);
        dialogBox.alert({
            texts: _text,
            tapClose: false,
            styles: {
                bg: '#fff',
                corner: 6,
                w: 300,
                title: {
                    marginT: 15,
                    icon: 'widget://res/gou.png',
                    iconSize: 40,
                    titleSize: 14,
                    titleColor: '#000'
                },
                content: {
                    color: '#000',
                    size: 14,
                    marginB: 30
                },
                left: {
                    marginB: 0,
                    marginL: 0,
                    w: 150,
                    h: 35,
                    corner: 0,
                    bg: '#ededed',
                    color:'#ef8132',
                    size: 12
                },
                right: {
                    marginB: 0,
                    marginL: 0,
                    w: 150,
                    h: 35,
                    corner: 0,
                    bg: '#ef8132',
                    color:'#fff',
                    size: 12
                }
            }
        }, function(ret) {
            if (ret.eventType == 'left') {
                dialogBox.close({
                    dialogName: 'alert'
                });
            }else{
                dialogBox.close({
                  dialogName: 'alert'
                });
                callback();
            }
        });
    };

    //alert弹出层
    var myAlert = function(option, callback){
        var text = {
            content:'保存成功！',
            okBtnTitle: '确定'
        };
        var _text = (option == undefined) ? text : $.extend({}, text, option);
        dialogBox.popupAlert({
            tapClose: false,
            msg: _text,
            styles: {
                bg: '#fff',
                maskBg:'rgba(0,0,0,0.1)',
                h: 120,
                msg :{
                    color : '#000000',
                    size  : 16,
                    maginLR: 20,
                    maginT: 25,
                    align : 'center'
                },
                okBtn :{
                    bg: '#ef8132',
                    highlightBg : '#ededed',
                    color: '#fff',
                    size: 12,
                    maginLR: 10,
                    maginB: 10
                }
            }
        }, function(ret) {
            if (ret.eventType == 'ok') {
                dialogBox.close({
                    dialogName: 'popupAlert'
                });
                callback();
            };
        });

    };

    dialog.init = function(){
        dialogBox = api.require('dialogBox');
        return {
            confirm: myConfirm,
            alert: myAlert
        }
    };

    window.myDialog = dialog;
})(window, jQuery)
