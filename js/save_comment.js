function print_comment() {
	message = document.getElementById('comments_window');
	var comment_massiv = localStorage.getItem('comment');
	message.innerHTML = comment_massiv;
}

function save_comment() {
	message = document.getElementById('comments_window');
	var input_comment = document.getElementById('input').value;
	var input_name = document.getElementById('input_name').value;
	var d = new Date();
	var month=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
	if (input_comment.length < 10){
		alert("Введите не такое короткое сообщение!")
	}
	else {
	var comment_massiv = localStorage.getItem('comment') + input_comment + "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + input_name + "&nbsp;&nbsp;&nbsp;&nbsp;" 
	+" " +d.getDate()+ " " + month[d.getMonth()] 
	+ " " + d.getFullYear() + " г." + "<br><br>";
	message.innerHTML = comment_massiv;
	localStorage.setItem('comment', comment_massiv);
	}
}

function clear_window() {
	localStorage.clear();
	localStorage.setItem('comment', "");
}