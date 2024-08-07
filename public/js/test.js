// 创建一个 style 标签
var style = document.createElement("style");
// 设置 style 标签的内容为 CSS 代码
style.innerHTML = `
  :not(.music,.tag_link,.post-list__container){
    background-color: rgba(130, 114, 144, 1);
    color: white !important;
  }
`;
// 获取网页的 head 元素
var head = document.head;
var toggle = document.getElementById("darkToggle");

function toggleDarkMode() {
   // 如果开关按钮被选中，就将 html 元素的 filter 样式设置为 brightness(85%)
  if (toggle.checked) {
    // 将 style 标签插入到 head 中
    if (!head.contains(style)) {
      head.appendChild(style);
      console.log("why");
    }
    document.documentElement.style.filter = "brightness(85%)";
    // 使用 localStorage 保存按钮的状态为 "checked"
    localStorage.setItem("toggleStatus", "checked");
  } else {
    // 恢复原状
    if (head.contains(style)) {
      head.removeChild(style);
      console.log("test");
    }
    document.documentElement.style.filter = "none";
    // 使用 localStorage 保存按钮的状态为 "unchecked"
    localStorage.setItem("toggleStatus", "unchecked");
  }
}

// 给开关按钮添加一个事件监听器，用于在用户点击时调用 toggleDarkMode 函数
toggle.addEventListener("click", toggleDarkMode);

// 在页面加载时，获取 localStorage 中保存的按钮状态
var status = localStorage.getItem("toggleStatus");


// 如果状态为 "checked"，就设置按钮的 checked 属性为 true，并调用 toggleDarkMode 函数
if (status === "checked") {
    console.log("暗黑模式开启！");
    toggle.checked = true;
    toggleDarkMode();
}
// 如果状态为 "unchecked"，就设置按钮的 checked 属性为 false，并调用 toggleDarkMode 函数
else if (status === "unchecked") {
	console.log("NO...")
    toggle.checked = false;
    toggleDarkMode();
}
