# 我在校园 青龙面板

> **开源项目，不接受任何打赏，谢谢！**

## 🐧企鹅群
> **不懂的可以加交流群问，发现bug也加群说，看到了就会回，群号：[744087145](https://jq.qq.com/?_wv=1027&k=1deSaQ3X)** 

<img src="https://cdn.jsdelivr.net/gh/zhacha222/wozaixiaoyuan@a6bfcc8ca55c2c0a6b22e59c75d12fd8f04395c4/jpg/IMG_1344.JPG" width="375px" height="667px" alt="daka" align=center>


## 📌须知：

* 1.只支持青龙面板（推荐使用青龙版本2.10.13），部署教程 ==> [点击查看](https://github.com/whyour/qinglong#%E9%83%A8%E7%BD%B2)

* 2.本库脚本通用 `wzxy`这一个变量

* 3.脚本变量只推荐在青龙的【环境变量】页添加，有强迫症在【配置文件】`config.sh`中添加的如果出现问题自己解决

* 4.支持多用户，每一用户在【环境变量】单独新建变量`wzxy`，切勿一个变量内填写多个用户的参数

* 5.脚本通知方式采用`青龙面板默认通知`，请在【配置文件】`config.sh`里配置

* 6.关于各脚本的具体使用方法，请仔细阅读各脚本内的注释！

 <img src="https://ghproxy.com/https://github.com/zhacha222/wozaixiaoyuan/raw/a6bfcc8ca55c2c0a6b22e59c75d12fd8f04395c4/jpg/C1F26C7C1B84EA696F2F50C5B3AE58FC.png" alt="daka" align=center>


## 📍拉库：

- 2.12.1之前版本青龙拉库:   

```
定时任务——新建任务
名称：我在校园拉库
命令：ql repo https://ghproxy.com/https://github.com/zhacha222/wozaixiaoyuan.git  "wzxy_|sendNotify" "" "sendNotify"
定时：0 0 * * *
```

- 2.12.1之后版本青龙拉库:

```
订阅管理——新建订阅
名称：我在校园拉库
类型：公开仓库
链接：https://ghproxy.com/https://github.com/zhacha222/wozaixiaoyuan.git
白名单：wzxy_|sendNotify
定时类型：crontab
定时：0 0 * * * 
其他不填
```

	
 <img src="https://ghproxy.com/https://github.com/zhacha222/wozaixiaoyuan/blob/c4b7b5bafc9c5e9b346193927512d2dba37a6578/jpg/laku.png" width="949px" height="460px" alt="daka" align=center>
 

## 🔎环境变量：

**变量名称：**
```
wzxy
```
**变量值：**
```
{
    "username": "手机号",
    "password": "密码",
    "qd_location": "133.333333,33.333333",
    "rjrb_answers": ["0","0"],
    "rjrb_location": "133.333333,33.333333",
    "jkdk_answers": ["0","无","1","0","36.2","没有","1","1","2"],
    "jkdk_location": "133.333333,33.333333",
    "mark": "用户昵称"
        }
```

	
 <img src="https://ghproxy.com/https://github.com/zhacha222/wozaixiaoyuan/blob/c4b7b5bafc9c5e9b346193927512d2dba37a6578/jpg/hjbl.png" width="951px" height="460px" alt="daka" align=center>



**关于变量值中各参数的说明：**

 * `username` —— “我在校园”的账号，一般是你的手机号码
 
 * `password` —— “我在校园”的密码，忘记了打开小程序重新设置就行（推荐四个英文+四个数字，例如“wzxy1234”，改完密码后，在运行脚本前不要再登录小程序）

 * `qd_location` —— 签到位置的经纬度（wzxy_qd.js)

 * `rjrb_answers` —— 日检日报的 填空参数（wzxy_rjrb.js） 看下面`一些踩坑以及经验`的第6条
 
 * `rjrb_location` —— 日检日报位置的经纬度（wzxy_rjrb.js）

 * `jkdk_answers` —— 健康打卡的 填空参数（wzxy_jkdk.js） 
 
 * `jkdk_location` —— 健康打卡位置的经纬度（wzxy_jkdk.js） 参考下面`一些踩坑以及经验`的第6条

 * `mark` —— 用户昵称（不一定要真名，随便填都行,便于自己区分打卡用户）

## 📝一些踩坑以及经验：

* 1.我在校园密码不能太复杂，也不能太简单，推荐使用四个英文+四个数字，例如我用是`wzxy1234`

* 2.如果第一次使用，即使密码没问题，但是运行脚本时提示密码错误，请去小程序修改密码后重新运行脚本（我在校园本身的bug）

* 3.经纬度获取可以去这个网站获取，一般精确到小数点后六位就差不多了 
https://jingweidu.bmcx.com/

* 4.脚本运行时间采用Cron表达式，对此不太熟练的可以去这个在线网站一键生成 http://cron.ciding.cc/

* 5.可以去这个网站对你的变量值进行格式化检验 https://www.bejson.com/

* 6.这里对这个填空参数说明一下：

	> 对于 **旧版日检日报和旧版健康打卡**，
	如果是填空题，那么参数就是要填空的内容；
	如果是选择题，选项一 参数是`0`,选项二 参数是`1`，以此类推····
	
	> 但是，对于**新版的健康打卡**，不管选择还是填空题，参数都是选项的 **文字内容**，具体看下面截图演示
 
	每一题的参数都要填入`""`内，两两之间用`,`隔开，最终的参数再用`[]`括起来（另外，日检日报的体温体温已内置为36.0不用另填，但是健康打卡的体温需要自己填进填空参数里）
 
 
 <img src="https://cdn.jsdelivr.net/gh/zhacha222/wozaixiaoyuan@0269fa5c87a944db638af41782e02d249e151576/jpg/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png"  alt="daka" align=center>
 
 
## 🔔通知方式：

**在下面随便选一个自己喜欢的推送方式，在配置文件`config.sh`中的`通知环境变量（大概第41行到121行）`配置**


 <img src="https://ghproxy.com/https://github.com/zhacha222/wozaixiaoyuan/blob/771f01a6a2228ee16f53ed193a923450624595e4/jpg/tz.png" width="951px" height="460px" alt="daka" align=center>
 
   
 
**右图是本人在用的`企业微信应用`通知截图**
  
 
 <img src="https://cdn.jsdelivr.net/gh/zhacha222/wozaixiaoyuan@e149d21fd4ae3e8cfef8654708c2fbe6fb54a17f/jpg/A97F963D4799767B81EDDD73A763BF19.jpg" width="189px" height="420px" alt="daka" align=right>

|通知名称|通知渠道|推送方式|使用教程|
|:---:|:---:|:---|:---|
|[server酱](https://sct.ftqq.com)|微信（公众号）|一对一||
|[BARK](https://github.com/Finb/Bark)|iOS（APP）|一对一||
|[Telegram](https://core.telegram.org/bots/api)|TG（tg机器人）|一对一，一对多||
|[dingtalk](https://developers.dingtalk.com/document/app/custom-robot-access)|钉钉（群聊机器人）|一对一，一对多||
|[企业微信群机器人](https://work.weixin.qq.com/api/doc/90000/90136/91770)|企业微信（群聊机器人）|一对多||
|[企业微信应用消息](http://note.youdao.com/s/HMiudGkb)|企业微信（类似公众号）|一对多|[查看](https://www.zc4g.cn/658.html)|
|[iGot聚合](https://wahao.github.io/Bark-MP-helper)|Bark（ios），邮箱，微信|一对一，一对多||
|[pushplus](http://www.pushplus.plus)|微信（公众号）|一对一||
|[go-cqhttp](https://github.com/Mrs4s/go-cqhttp)|QQ（QQ机器人）|一对一，一对多||
|[gotify](https://gotify.net/docs/)|自建消息推送服务（ws）|一对一，一对多||






## 🎉特别鸣谢：

* [@bean661：wozaixiaoyuanjkdkql](https://github.com/bean661/wozaixiaoyuanjkdkql)
* [@whyour：qinglong](https://github.com/whyour/qinglong)




