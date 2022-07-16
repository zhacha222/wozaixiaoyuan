# 我在校园 青龙面板

本人QQ1483081359，欢迎前来提交bug

## 前言：

1.只支持青龙面板

2.本库脚本通用 `wzxy`这一个变量

3.脚本变量只推荐在青龙的【环境变量】页添加，有强迫症在`config.sh`中添加的如果出现问题自己解决

4.脚本通知方式采用`青龙面板默认通知`，请自行配置


## 拉库：

```
ql repo https://github.com/zhacha222/wozaixiaoyuan.git  "" "wzxy|sendNotify" "sendNotify"
```

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


**关于变量值中各值的说明：**
```
 username —— 手机号
 password —— 密码

 qd_location —— 签到 的经纬度（qd.js)

 rjrb_answers —— 日检日报的 填空参数（rjrb.js）
 rjrb_location —— 日检日报的 经纬度（rjrb.js）

 jkdk_answers —— 健康签到的 填空参数（jkdk.js）
 jkdk_location —— 健康签到的 经纬度（jkdk.js）

 mark —— 用户昵称（不一定要真名，随便填都行,便于自己区分打卡用户）
```


## 通知方式：

**本人目前用的是企业微信通知，具体教程有空再写吧，感兴趣的可以看一下下面这个参考文档**

**参考文档：http://note.youdao.com/s/HMiudGkb**

<img src="https://cdn.jsdelivr.net/gh/zhacha222/wozaixiaoyuan@e149d21fd4ae3e8cfef8654708c2fbe6fb54a17f/jpg/A97F963D4799767B81EDDD73A763BF19.jpg" width="270px" height="600px" alt="daka" align=center>
