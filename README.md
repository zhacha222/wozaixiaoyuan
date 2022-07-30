# 我在校园 青龙面板

本人QQ1483081359，欢迎前来提交bug

## 前言：

1.只支持青龙面板

2.本库脚本通用 `wzxy`这一个变量

3.脚本变量只推荐在青龙的【环境变量】页添加，有强迫症在【配置文件】`config.sh`中添加的如果出现问题自己解决

4.脚本通知方式采用`青龙面板默认通知`，请在【配置文件】`config.sh`里配置


## 拉库：

```
ql repo https://github.com/zhacha222/wozaixiaoyuan.git  "wzxy_|sendNotify" "" "sendNotify"
```
如果网络不好拉库失败，请自行添加拉库代理 `https://ghproxy.com/`

## 环境变量：

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


**关于变量值中各参数的说明：**

 * `username` —— “我在校园”的账号，一般是你的手机号码
 * `password` —— “我在校园”的密码，忘记了打开小程序重新设置就行（建议四个英文+四个数字 类似“wzxy1234” 复杂了简单了可能都不行,改完密码运行脚本前不要再登录小程序）

 * `qd_location` —— 签到位置的经纬度（wzxy_qd.js)

 * `rjrb_answers` —— 日检日报的 填空参数（wzxy_rjrb.js） 看下面`一些踩坑以及经验`的第5条
 
 * `rjrb_location` —— 日检日报位置的经纬度（wzxy_rjrb.js）

 * `jkdk_answers` —— 健康打卡的 填空参数（wzxy_jkdk.js） 
 
 * `jkdk_location` —— 健康打卡位置的经纬度（wzxy_jkdk.js） 参考下面`一些踩坑以及经验`的第5条

 * `mark` —— 用户昵称（不一定要真名，随便填都行,便于自己区分打卡用户）

## 一些踩坑以及经验：

1.我在校园密码不能太复杂，也不能太简单，推荐使用四个英文+四个数字，例如我用是`wzxy1234`

2.如果第一次使用，即使密码没问题，但是运行脚本时提示密码错误，请去小程序修改密码后重新运行脚本（我在校园本身的bug）

3.经纬度获取可以去这个网站获取，一般精确到小数点后六位就差不多了 
https://jingweidu.bmcx.com/

4.脚本运行时间采用正则表达式，对此不太熟练的可以去这个在线网站一键生成 http://cron.ciding.cc/

5.这里对这个填空参数说明一下，如果是填空，那么参数就是填空内容；如果是选择题，那么 选项一 参数是`0`,选项二 参数是`1`，以此类推····
 
  最终的参数用`[]`括起来，每一单独选项参数填入`""`内，再用`,`隔开
 
  ***举个例子，我这的日检日报参数就是 ["0","0"]***
 
 <img src="https://ghproxy.com/https://raw.githubusercontent.com/zhacha222/wozaixiaoyuan/main/jpg/Screenshot_2022_0730_200049.jpg" width="270px" height="600px" alt="daka" align=center>
 
## 通知方式：

**在下面随便选一个自己喜欢的推送方式**

* Server酱  https://sct.ftqq.com
* BARK 
* Telegram 
* 钉钉  https://developers.dingtalk.com/document/app/custom-robot-access
* 企业微信机器人  https://work.weixin.qq.com/api/doc/90000/90136/91770
* 企业微信应用  http://note.youdao.com/s/HMiudGkb
* iGot聚合  https://wahao.github.io/Bark-MP-helper
* Push Plus  http://www.pushplus.plus
* go-cqhttp 
* gotify


**由于本人目前用的是企业微信通知，只写了这一个教程，其他通知的教程有空再写吧**

**企业微信应用通知教程：https://www.zc4g.cn/658.html**

<img src="https://cdn.jsdelivr.net/gh/zhacha222/wozaixiaoyuan@e149d21fd4ae3e8cfef8654708c2fbe6fb54a17f/jpg/A97F963D4799767B81EDDD73A763BF19.jpg" width="270px" height="600px" alt="daka" align=center>



