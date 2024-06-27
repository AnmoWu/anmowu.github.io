---
title: "Visualization Test"
date: 2024-06-27T21:40:22+08:00
slug: ""
description: ""
keywords: []
draft: false
tags: ["Test"]
math: false
toc: true
audio:
  type: song
  id: 2107565588
---

## 构思

由于页面太空荡，就萌生了添加点动态效果的想法。之前试图实现音乐全局播放，但遇到css的硬问题，没法解决，除非舍弃模块化。

所以改成一页一首或一列表的主题曲，采用MetingJS+APlayer，封装在`audio.html`里，在页首进行选曲。

在博客建立之初想要在背景加入心电图式样的音频可视化效果，但经过测试，实际与心电图相差甚远，遂试图加入`p5.js`或者`Processing`的码绘效果。

## 弯路

根据教程很快写出了本地mp3的`p5.js`音频可视化，但在MetingJS也就是外链播放源的转接上，走了很多弯路。

首先，我想到了开发者工具里经常使用的网络-媒体下载mp3的功能，希望捕捉当前外链播放器的api链接或者直接获取mp3。

现在看来，这一步就不太聪明。且不说模仿外部抓包很难实现，即使获取了，可视化和音乐源的播放也是两个进程，无法精准同步和控制。

在这里我查询了MetingJS的官方文档，写得很简略，没看懂。于是返回看源代码，做了几个`this.aplayer`的调用输出测试，发现创建语句存在一定问题，输出为`undefined`。

因此修改了`Meting.min.js`对于APlayer的创建语句，直接单起一行，独立出来。现在看控制台，还能追忆当时混乱的测试输出之情状。

那么进入下个阶段，一切操作都基于MetingJS已经加载完APlayer相关组件，所以最后要加一个加载完毕的事件触发`this.dispatchEvent(new Event('aplayerload'))`。

触发后，防止audio标签的跨域问题，需要修改`ap.audio.crossOrigin = "anonymous`。

获取到`audioContext`后，需要添加`audioContext.resume()`以避免浏览器因为自动播放禁令无法加载音频内容。

最后获取音乐源时，设置flag进行单次处理防止反复获取audioContext的冗余操作。

以上基本是 我走过小小弯路。

## 最终效果

PC端点击左下角的播放器按钮就可以看见啦！源代码开控制台，`Visualization.js`。

注意，此处`Meting.min.js`和`APlayer.min.js`都进行了修改。

之后希望引入更多可视化效果，包括`Processing`相关，或者做出理想中的心电图样式！

但其实夜间模式和页面布局的问题还亟待解决呢。

