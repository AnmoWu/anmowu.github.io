<!-- 定义一个JavaScript函数，用于切换暗黑模式和正常模式 -->

var toggle = document.getElementById("darkToggle");

function toggleDarkMode() {
   // 如果开关按钮被选中，就将 html 元素的 filter 样式设置为 brightness(85%)
  if (toggle.checked) {
    document.documentElement.style.filter = "brightness(85%)";
  }
  // 否则，就将 html 元素的 filter 样式设置为 none
  else {
    document.documentElement.style.filter = "none";
  }
}





