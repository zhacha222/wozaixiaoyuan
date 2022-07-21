// [rule: 我在校园 ] 
// [disable: false] 是否禁用
// [admin: false] 是否只允许管理员使用

function mian() {//拉黑管理
    sendText("请在10s内从中选择你要进行的操作：(输入“q”随时退出会话。)\n\n1 . 修改密码\n\n\n以下内容待开发...\n------------------------------------------------\n2 . 添加账号\n3 . 删除账号\n4 . 执行签到任务");
    iii = input(10000)
    if (iii == 1) { //拉黑
        changePassword()
		return;
    } else {
       var value = "q"
    }
    if (value == "q" || value == "Q" || value == "" ) {
        sendText("已退出设置。")
        return;
    } 
}

function changePassword() {
    
    sendText("请30秒内输入我在校园11位手机号：\n(输入“q”随时退出会话。)")
    var phone = input(30000)

    if(!phone || phone == "q" || phone == "Q"){
    		    sendText("已退出会话。")
    		    return;
     }
     
     var result = request({
			url: "https://gw.wozaixiaoyuan.com/basicinfo/mobile/login/getCode?phone=" + phone,
			"dataType": "json",
			"timeOut": 30000
		})
    if (result.code == 0) {
        sendText("验证码码获取成功")
    }
    else {
        sendText("验证码获取超时。")
        return;
    }
    
     sendText("请输入验证码：")
     var code = input(30000)
     if(!code || code == "q" || code == "Q"){
    		    sendText("已退出会话。")
    		    return;
     }    
     
     sendText("请输入想要修改成的密码：")
     var newPassword = input(30000)
     if(!code || code == "q" || code == "Q"){
    		    sendText("已退出会话。")
    		    return;
     }
     
     
     var result1 = request({
			url: "https://gw.wozaixiaoyuan.com/basicinfo/mobile/login/changePassword?phone="+phone+"&code="+code+"&password="+newPassword,
			"dataType": "json",
			"timeOut": 30000
		})
		
	if (result1.code == 0) {
        sendText("密码修改成功")
        return;
    }
    else {
        sendText("密码修改失败！")
        return;
    }	
     
}    
mian()
