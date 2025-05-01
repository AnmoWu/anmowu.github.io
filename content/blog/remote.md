---
title: " Win安装Oracle19c INS-30014 hosts解决方法无效的一种提案"
date: 2025-04-10T17:10:54+08:00
description: "CSDN滚好吗？好的。"
keywords: 
- Windows
- Oracle19c
draft: false
tags: 
- Bug
- Archive
math: false
toc: true
audio:
  type: song
  id: 451376031
---
## 前情提要
刷到CSDN在无告知无许可的情况下将用户文章转成VIP可见的帖子，赶紧查了一下。
果然我这唯一一篇实质内容还不如Markdown语法含量高的水文也变成VIP文章了，什么nt网站。

在这里存档一下。

## 一句话总结

连手机热点，填对应IP试试看

按步骤安装，但出现以下问题窗口

<p><img src="/img/error2.png" alt="错误">

忽略INS-30011，让我们来看解决`INS-30014`的方法
  
## 重点

修改hosts文件（**C:\Windows\System32\drivers\etc**）

添加代码如下
```css
格式：IP地址 oracle
举例：192.168.10.1 oracle
```
具体截图如下 
<p><img src="/img/host2.png" alt="截图">

保存文件，进行安装

*个人结果：*

第一次尝试失败。反思问题，既然要填IP地址[^1]，那会不会是因为连接校园网IP地址不固定？于是**将网络连接改为手机热点**，更新hosts文件中的IP，保存后再次尝试

第二次尝试成功。

❌关闭防火墙，禁用网络，解决问题后再继续联网安装
 
✅返回第一项选择仅设置软件，再用DBCA配置

>没钱的时候感觉一切都好烦人。 ——2025.05.01


[^1]:查看方法：网络和Internet设置 -> 点击Wifi或热点名 -> 属性 -> IPv4地址



