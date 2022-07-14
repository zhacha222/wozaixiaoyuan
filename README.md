# 我在校园 青龙面板

## 前言


1.务必将变量填在【环境变量】中！！！如果填在【配置文件】里会报错！


2.本库所有脚本共用下方这一个变量。


3.通知方式采用青龙面板默认通知，请自行配置。



## 拉库

```
ql repo https://github.com/zhacha222/wozaixiaoyuan.git
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
    "qd_location": "118.911429,64.376742",
    "rjrb_answers": ["0","0"],
    "rjrb_location": "118.911429,64.376742",
    "jkdk_answers": ["0","无","1","0","36.2","没有","1","1","2"],
    "jkdk_location": "118.911429,64.376742",
    "mark": "用户昵称"
            }
```


**关于变量值中各值的说明：**
```
     username —— 手机号
     password —— 密码

     qd_location —— 签到 的经纬度（qd.js)

     rjrb_answers —— 日检日报 的 填空内容（rjrb.js）
     rjrb_location —— 日检日报 的 经纬度（rjrb.js）

     jkdk_answers —— 健康打卡 的 填空内容（jkdk.js）
     jkdk_location —— 健康打卡 的 经纬度（jkdk.js）

     mark —— 用户昵称（不一定要真名，随便填都行,便于自己区分）
```
