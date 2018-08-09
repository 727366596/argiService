function showMessage(message){
	BootstrapDialog.show({
        title: '消息',
        message: '<div class="mgbody">'+message+'</div>',
        cssClass:'b2bDialog',
        buttons:[{
			label:'确定',
			action:function(dialogRef){
				dialogRef.close();
			}
		}]
    });
};
function alertMessage(message){
	BootstrapDialog.alert({
	    title: '信息提示',
	    message: message,
	    type: BootstrapDialog.TYPE_WARNING,
	    closable: true,
	    draggable: true,
	    buttonLabel: '确定'
	});
};

function successMsg(message){
	BootstrapDialog.show({
	    title: '提示',
	    message: '<div class="mgbody">'+ message +'</div>',
	    cssClass:'success_red_btn',
	    buttons:[{
			label:'确定',
			cssClass:'red_btn',
			action:function(dialogRef){
				dialogRef.close();
			}
		}]
	});
};

function confirmMsg(title, message, callBack){
		var myConfirm = BootstrapDialog.show({
		    title: title,
		    message: '<div class="myText">'+ message +'</div>',
		    cssClass:'myConfirm',
		    buttons:[{
					label:'确定',
					cssClass:'red_btn',
					action:function(dialogRef){
						dialogRef.close();
						callBack();
					}
				},
				{
					label:'取消',
					cssClass:'blue_btn',
					action:function(dialogRef){
						dialogRef.close();
					}
				}]
		});
};
