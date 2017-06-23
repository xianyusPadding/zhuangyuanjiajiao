window.onload = function() {
	var tab = document.getElementsByClassName("r_center")[0];
	var lis = tab.getElementsByClassName("tab");
	var items = tab.getElementsByClassName("item");
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i; // 将当前循环变量的值，赋值给对应li的索引
		lis[i].onmouseover = function() {
			//要解决的事情
			// 先将所有li中在 id="active" 属性  移除
			for (var j = 0; j < lis.length; j++) {
				lis[j].removeAttribute("id"); // 将id属性移除
				
				items[j].style.display = "none"; // 将所有在div隐藏
			}
			// 给当前在 li添加一个  id： 设置一个id属性
			this.setAttribute("id", "active");
			items[this.index].style.display = "block"; // 将当前li所在的索引 的div显示！
		}
	}
}