// [rule: 我在校园 ] 
// [disable: false] 是否禁用
// [admin: false] 是否只允许管理员使用


let su = []
let str = ""
let msg = ""
let msg1 = ""
let menutext = ""
let j = ""
let n = ""
let h = ""
let username=""
let password=""
let rjrb_answers=""
let rjrb_location=""
let jkdk_answers=""
let jkdk_location=""
let qd_location=""
let mark=""
let delstr = []
let data = ""
let getToken = ""
let wzxy_disablenum = ""
let wzxy_num=""


var user = GetUserID()
var isAdmin = isAdmin()

try{
var wzxy = bucketGet("wzxy", user) 
str=JSON.parse(wzxy)}catch(e){str=[]}
try{var QL=JSON.parse(bucketGet("wzxy", `QL`))}catch(e){var QL=[]}
try{var ql_host=QL[0].ql_host}catch(e){var ql_host = ``}
try{var ql_client_id=QL[0].ql_client_id}catch(e){var ql_client_id=``}
try{var ql_client_secret=QL[0].ql_client_secret}catch(e){var ql_client_secret=``}
var ql_token=GetToken()

function mian() {
    
    if (isAdmin) {
        sendText("请在10s内从中选择你要进行的操作：(输入“q”随时退出会话。)\n\n=======用户菜单=======\n\n1 . 账号管理\n2 . 修改密码\n3 . 教程\n\n======管理员菜单======\n\n4 . 青龙绑定"+getToken+"\n5 . 账号统计")
	    }else{
        sendText("请在10s内从中选择你要进行的操作：(输入“q”随时退出会话。)\n\n=======用户菜单=======\n\n1 . 账号管理\n2 . 修改密码\n3 . 教程")
	    }
    
    
    iii = input(10000)
    if (iii == 1) { //账号管理
        myaccount()
		return;
    }else if (iii == 2) { //修改密码
        changePassword()
		return;
    }else if (iii == 3) { //教程
    var jiaocheng = request({url: "https://ghproxy.com/https://github.com/zhacha222/wozaixiaoyuan/blob/main/%E5%AF%B9%E6%8E%A5%E5%82%BB%E5%A6%9E/%E6%95%99%E7%A8%8B.txt"})
        sendText(jiaocheng)
		return;
    }else if (iii == 4) { //青龙绑定
        if (isAdmin) {
    	    qinglong()
    	    return;
	    }else {
       var iii = "qq"
    }
		
    }else if (iii == 5) { //账号统计
        if (isAdmin) {
    	    WZXY_NUM()
            return;
	    }else {
       var iii = "qq"
    }
    }else {
       var iii = "q"
    }
    
    if (iii == "q" || iii == "Q" || iii == "" ) {
        sendText("已退出设置。")
        return;
    }else {
        sendText('指令错误，请重新输入：')
        sleep(300)
        return mian()
    } 
}


//青龙绑定
function qinglong() {
    
    WZXYQL ={"ql_host": ql_host,"ql_client_id": ql_client_id,"ql_client_secret": ql_client_secret}
    
    sendText("请选择要编辑的属性(q退出,wq保存)：\n\n1 . 面板地址 -"+ql_host+`\n\n2 . ClientID -`+ql_client_id+ `\n\n3 . ClientSecret -`+ql_client_secret)
    
    msg=input()
    if(msg==1){
     sendText("请输入青龙面板地址：")
     ql_host = input()
     return qinglong()
    }else if(msg==2){
     sendText("请输入ClientID：")
     ql_client_id = input()
     return qinglong()
    }else if(msg==3){
     sendText("请输入ClientSecret：")
     ql_client_secret = input()
     return qinglong()
    }else if (msg == "q" || msg == "Q" || msg == "" ) {
        sendText("已退出设置。")
        return;
    }else if (msg == "wq" ) {
         QL.splice(0,1,WZXYQL)
         //QL.push(WZXYQL)
         bucketSet("wzxy", `QL`,JSON.stringify(QL))
         sendText("已保存")
        return;
    }else {
        sendText('指令错误，请重新输入：')
        sleep(300)
        menutext = ""
        return qinglong()
    }
    
}  


//修改密码
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


//账号管理
function myaccount() {
    //var n = str.length
    for (var i=0,j=1;i<str.length;i++,j++) {
            
            menutext += j+'.' + str[i].mark+`\n`
        }

    sendText("请选择账号进行编辑：(-删除账号，0增加账号，q退出, wq保存)\n"+menutext)
    msg=input()
    if(msg==0){
     add()
     //return myaccount()
    }else if (0<msg&&msg<j){
    h = msg-1
    username=str[h].username
    password=str[h].password
    rjrb_answers=str[h].rjrb_answers
    rjrb_location=str[h].rjrb_location
    jkdk_answers=str[h].jkdk_answers
    jkdk_location=str[h].jkdk_location
    qd_location=str[h].qd_location
    mark=str[h].mark
    edit()
    }else if (0>msg&&msg>-j){
        
     n = msg.split(`-`)[1] -1
     del()  
     return myaccount()
        
    }else if (msg == "q" || msg == "Q" || msg == "" ) {
        sendText("已退出设置。")
        return;
    }else if (msg == "wq" ) {
        bucketSet("wzxy", user, JSON.stringify(str))
        sendText("已保存修改")
        post()
        return;
    }else {
        sendText('指令错误，请重新输入：')
        sleep(300)
        menutext = ""
        return myaccount()
    }
 
}  


//添加账号
function add() {
    
    data ={"username": username,"password": password,"qd_location": qd_location,"rjrb_answers":rjrb_answers,"rjrb_location": rjrb_location,"jkdk_answers": jkdk_answers,"jkdk_location": jkdk_location,"mark": mark}
    
    sendText(`请选择要编辑的属性(u返回,q退出,wq保存)：` + `\n\n1. 姓名 --`+data.mark+`\n\n2. 手机号 --` +data.username+`\n\n3. 密码 --`+data.password+`\n\n4. 日检日报Answers \n-- `+data.rjrb_answers+`\n\n5. 日检日报Location \n-- `+data.rjrb_location+`\n\n6. 健康打卡Answers \n-- `+data.jkdk_answers+`\n\n7. 健康打卡Location \n-- `+data.jkdk_location+`\n\n8. 签到Location \n-- `+data.qd_location)
    
    msg1=input()
    if(msg1==1){
     sendText(`请输入姓名：`) 
     mark=input()
     return add()
    }else if(msg1==2){
     sendText(`请输入手机号：`) 
     username=input()
     return add()
    }else if(msg1==3){
     sendText(`请输入密码：`) 
     password=input()
     return add()
    }else if(msg1==4){
     sendText(`请输入日检日报Answers：`)
     sendText(`正确格式示例：["0","0"]`)
     //bucketSet("wzxy", user, JSON.stringify(data))
     rjrb_answers=JSON.parse(input())
     return add()
    }else if(msg1==5){
     sendText(`请输入日检日报Location：`)
     sendText(`正确格式示例：133.333333,33.333333`)
     rjrb_location=input()
     return add()
    }else if(msg1==6){
     sendText(`请输入健康打卡Answers：`) 
     sendText(`正确格式示例：["0","0"]`)
     jkdk_answers=JSON.parse(input())
     return add()
    }else if(msg1==7){
     sendText(`请输入健康打卡Location：`)
     sendText(`正确格式示例：133.333333,33.333333`)
     jkdk_location=input()
     return add()
    }else if(msg1==8){
     sendText(`请输入签到Location：`)
     sendText(`正确格式示例：133.333333,33.333333`)
     qd_location=input()
     return add()
    }else if (msg1 == "q" || msg1== "Q" || msg1 == "" ) {
        sendText("已退出设置。")
        return;
    }else if (msg1 == "wq" ) {
        str.push(data)
        bucketSet("wzxy", user, JSON.stringify(str))
        sendText("已保存修改")
        //sendText(JSON.stringify(bucketGet("wzxy", user)))
        post()
        return;
    }else if (msg1 == "u"||msg1 == "U") {
        str.push(data)
        menutext = ""
        username=""
        password=""
        rjrb_answers=""
        rjrb_location=""
        jkdk_answers=""
        jkdk_location=""
        qd_location=""
        mark=""
        return myaccount()
    }else {
        sendText('指令错误，请重新输入：')
        sleep(300)
        return add()
    }
    
    
}


//编辑账号
function edit() {
    
    data ={"username": username,"password": password,"qd_location": qd_location,"rjrb_answers":rjrb_answers,"rjrb_location": rjrb_location,"jkdk_answers": jkdk_answers,"jkdk_location": jkdk_location,"mark": mark}
    
    sendText(`请选择要编辑的属性(u返回,q退出,wq保存)：` + `\n\n1. 姓名 --`+data.mark+`\n\n2. 手机号 --` +data.username+`\n\n3. 密码 --`+data.password+`\n\n4. 日检日报Answers \n-- `+data.rjrb_answers+`\n\n5. 日检日报Location \n-- `+data.rjrb_location+`\n\n6. 健康打卡Answers \n-- `+data.jkdk_answers+`\n\n7. 健康打卡Location \n-- `+data.jkdk_location+`\n\n8. 签到Location \n-- `+data.qd_location)
    
    msg1=input()
    if(msg1==1){
     sendText(`请输入姓名：`) 
     mark=input()
     return edit()
    }else if(msg1==2){
     sendText(`请输入手机号：`) 
     username=input()
     return edit()
    }else if(msg1==3){
     sendText(`请输入密码：`) 
     password=input()
     return edit()
    }else if(msg1==4){
     sendText(`请输入日检日报Answers：`)
     sendText(`正确格式示例：["0","0"]`)
     //bucketSet("wzxy", user, JSON.stringify(data))
     rjrb_answers=JSON.parse(input())
     return edit()
    }else if(msg1==5){
     sendText(`请输入日检日报Location：`)
     sendText(`正确格式示例：133.333333,33.333333`)
     rjrb_location=input()
     return edit()
    }else if(msg1==6){
     sendText(`请输入健康打卡Answers：`) 
     sendText(`正确格式示例：["0","0"]`)
     jkdk_answers=JSON.parse(input())
     return edit()
    }else if(msg1==7){
     sendText(`请输入健康打卡Location：`)
     sendText(`正确格式示例：133.333333,33.333333`)
     jkdk_location=input()
     return edit()
    }else if(msg1==8){
     sendText(`请输入签到Location：`)
     sendText(`正确格式示例：133.333333,33.333333`)
     qd_location=input()
     return edit()
    }else if (msg1 == "q" || msg1== "Q" || msg1 == "" ) {
        sendText("已退出设置。")
        return;
    }else if (msg1 == "wq" ) {
        str.splice(h,1,data)
        bucketSet("wzxy", user, JSON.stringify(str))
        sendText("已保存修改")
        //sendText(JSON.stringify(bucketGet("wzxy", user)))
        post()
        return;
    }else if (msg1 == "u"||msg1 == "U") {
        str.splice(h,1,data)
        menutext = ""
        username=""
        password=""
        rjrb_answers=""
        rjrb_location=""
        jkdk_answers=""
        jkdk_location=""
        qd_location=""
        mark=""
        return myaccount()
    }else {
        sendText('指令错误，请重新输入：')
        sleep(300)
        return edit()
    }
    
    
}


//删除账号
function del(){

    var del = str.splice(n,1)
    menutext = ""
    delstr.push(del[0])
    //sendText(delstr.length)
}


//上传ck
function post() {
try{
 var account= bucketGet("wzxy", user)
 var postdata = JSON.parse(account)
 
    //上传ck
    for(let k=0;k<postdata.length;k++){

         var value = JSON.stringify(postdata[k])
         var remark = postdata[k].mark
         var username = postdata[k].username
         //获取所有为wzxy的环境
    	var WZXY_COOKIES=Find_env("wzxy")
    	//_id
    	var _id = "";
    	var id = "";
    	var nameTemp = "wzxy";
    	
    	//根据username值去找ck
    	var cookie_index=FindCookie(WZXY_COOKIES,username)
    	if(cookie_index==-1){
    		Add_env(nameTemp,value,remark)
    	}else{
    		_id = WZXY_COOKIES[cookie_index]._id;
    		if(_id == undefined || _id == null){
    			id = WZXY_COOKIES[cookie_index].id;
    			Update_env(nameTemp,value,remark,id)
    		}else{
    			Update_env(nameTemp,value,remark,_id)
    		}
    	}
     
    }
    
    //删除
    for(let l=0;l<delstr.length;l++){

         var value1 = delstr[l]
         var remark1 = delstr[l].mark
         var username1 = delstr[l].username
         
         //获取所有为wzxy的环境
    	var WZXY_COOKIES1=Find_env("wzxy")
    	sendText(WZXY_COOKIES1[0].mark)
    	var _id1 = "";
    	var id1 = "";
    	
    	//根据username值去找ck
    	var cookie_index1=FindCookie(WZXY_COOKIES1,username1)
    	
    	if(cookie_index1!=-1){
    	    
    	    _id1 = WZXY_COOKIES1[cookie_index1]._id;
    			Delete_QL_Env(_id1)
        	}
	
     } 
}catch(e){
    sendText(`上传青龙失败，请检查青龙配置`)
}

 }


//获取青龙token
function GetToken(){
    
        if (ql_host==``||ql_client_id==``||ql_client_secret==``){
            getToken = `(未填写)`
         }
		var data2=request({url:ql_host+"/open/auth/token?client_id="+ql_client_id+"&client_secret="+ql_client_secret})
		
		
		try {
		data2=JSON.parse(data2)
		if (data2.code = 200){
		    getToken = `(正常)`
		   return data2.data.token 
		}else {
		   getToken = `(异常)`
		}
		
		}catch(e){
		   getToken = `(异常)`
		}
		
}


//获取CK顺序
function FindCookie(WZXY_COOKIES,username){
	for(let i=0;i<WZXY_COOKIES.length;i++){
		if(WZXY_COOKIES[i].value.indexOf(username)!=-1 || WZXY_COOKIES[i].remarks.match(username)!=null)
			return i
	}
	return -1
}


//查找环境CK
function Find_env(name){
	var Hit=[]
	var all_envs=request({
		url:ql_host+"/open/envs",
		method:"get",
		headers:{
			accept: "application/json",
			Authorization:"Bearer "+ql_token
		},
		dataType: "application/json"
	})
	all_envs=JSON.parse(all_envs).data
	for(var i=0,j=0;i<all_envs.length;i++){
		if(all_envs[i].name==name){
			Hit[j]=all_envs[i]
			j++
		}
	}
	return Hit
}


//新增CK
function Add_env(name,value,remark){
		return request({
		url:ql_host+"/open/envs",
		method:"post",
		headers:{
			accept: "application/json",
			Authorization:"Bearer "+ql_token,
			contentType:"application/json"
		},
		body:[{"value": value,"name": name,"remarks": remark}],
		dataType: "application/json"
	})
}

	
//更新CK	
function Update_env(name,value,remark,_id){
	return request({
		url:ql_host+"/open/envs",
		method:"put",
		headers:{
			accept: "application/json",
			Authorization:"Bearer "+ql_token,
			contentType:"application/json"
		},
		body:{"value": value,"name": name,"remarks": remark,"_id":_id},
		dataType: "application/json"
	})
}


//删除CK
function Delete_QL_Env(_id){
	return request({
		url:ql_host+"/open/envs",
		method:"delete",
		headers:{
			accept: "application/json",
			Authorization:"Bearer "+ql_token,
			contentType:"application/json"
		},
		body:[_id],
		dataType: "application/json"
	})	
}

//账号统计
function WZXY_NUM(){
    try{
    if (!ql_token){
       sendText(`未绑定青龙或配置有误`) 
       return
    }
	var WZXYCOOKIES=Find_env("wzxy")
	wzxy_num=WZXYCOOKIES.length
	for(let i=0,j=1;i<WZXYCOOKIES.length;i++){
		if(WZXYCOOKIES[i].status==1){
			wzxy_disablenum=j
			j++
		}
	}
	sendText(`共`+wzxy_num+`个账号，`+`失效`+wzxy_disablenum+`个`)
	
    }catch(e){
      sendText(`未绑定青龙或配置有误`)  
    }
}

mian()
