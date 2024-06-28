---
title: "New Start🟪"
date: 2023-09-11T14:54:10+08:00
slug: ""
description: "Start"
keywords: []
draft: false
tags: ["Test","Tired","Summer"]
math: false
toc: true
audio:
  type: song
  id: 1404102167


---

**第一篇博客，还没部署到服务器上，搭建好主题就写的。**

**不怎么复杂，只觉得迟。**

## 代办事项

记录框架使用中遇见的问题和想法：

- [ ] 标签不可以加emoji，在blogs界面样式太难看，把计数做成指数样式
- [ ] description不显示
- [ ] cover不显示
- [ ] 标题的触发，离开页面标题产生相应变化 
- [ ] 后台记录博文的阅读次数以及阅读者的IP
- [ ] 博文根据年份和月份分区域，参考PaperMod
- [x] 音乐播放器
- [x] slug、keyword、toc、math分别有什么用？ 
- [x] Markdown转HTML不兼容checkbox，需要重写css加入加入样式
- [x] 图片插入的形式只能依靠图床，文件夹插入目前宣告失败，base64法延后考察 
- [x] 背景加动态效果，紫色心电图？可以根据浏览器的音频播放产生波动
- [x] 鼠标的动态效果  
- [x] 阅读进度条  





## radio测试

<input type="radio"/><label>标题的触发，离开页面标题产生相应变化</label>

## 代码块测试 

```javascript
// 获取进度条元素
const progressBar = document.getElementById('progress-bar');

// 监听页面滚动事件
window.addEventListener('scroll', () => {

    // 计算页面滚动位置的百分比
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    // 更新进度条的宽度
    progressBar.style.width = `${scrollPercentage}%`;
});
```

```html
<div id="darkMode" class="darkMode">
   <input class="darkmode" type="checkbox" id="darkToggle" onchange="toggleDarkMode()">
</div>
```

```css
.toc-container{
  background-color: $frosted;
  padding: 15px 50px 23px 3px;
  border-top-right-radius: 16px;
  //border-bottom-right-radius: 16px;
}
```