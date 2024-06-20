/*
 * Handles mobile nav
 */

function toggleMobileNavState() {
  const body = document.querySelector("body");
  body.classList.toggle("nav--active");
}

/*
 * Initializes burger functionality
 */

function initBurger() {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", toggleMobileNavState);
}

initBurger();

// 声明一个变量保存原始的标题
var normal_title = document.title;

// 添加 visibilitychange 事件监听器
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        // 当页面被隐藏时修改标题
        document.title = '不要打喷嚏🤧';
    } else {
        // 当页面从隐藏状态恢复时恢复原始标题
        document.title = normal_title;
    }
});


