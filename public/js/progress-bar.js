 // 获取进度条元素
const progressBar = document.getElementById('progress-bar');

// 定义一个颜色数组，存储渐变色的值 
//const colors = ['#5E71FF', '#1CB0FF', '#53FF54', '#FB3A7E'];

// 监听页面滚动事件
window.addEventListener('scroll', () => {
    // 计算页面滚动位置的百分比
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    // 更新进度条的宽度
    progressBar.style.width = `${scrollPercentage}%`;
	
	// 根据百分比计算颜色数组的索引
    //const colorIndex = Math.floor(scrollPercentage / 25);
    
    // 获取当前的颜色值
    //const currentColor = colors[colorIndex];
    
    // 设置进度条的背景颜色
    //progressBar.style.backgroundColor = currentColor;
});