function calc_form() {
	message = document.getElementById('calc');
	prokat_form = document.getElementById('prokat').value;
	switch(prokat_form) {
		case 'prokat_arm':
			var output = "<h3>Введите диаметр арматуры: <input type=\"text\" name=\"\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"dia\" value=\"\"/> мм.<br>\
				И погонные метры: <input type=\"text\" name=\"linear meter\" size=\"20\" maxlength=\"7\" pattern=\"[0-9]{,7}\" placeholder=\"Только цифры\" id=\"linear_meter\" value=\"\"/><br>\
				<input type=\"button\" onclick=\"calculate()\" value=\"Посчитать\"/></h3>\
				<br><p id=\"rezult\"></p>"
			message.innerHTML = output;
			break;
		case 'prokat_square':
			var output = "<h3>Введите толщину квадрата: <input type=\"text\" name=\"\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"dia\" value=\"\"/> мм.<br>\
				И погонные метры: <input type=\"text\" name=\"linear meter\" size=\"20\" maxlength=\"7\" pattern=\"[0-9]{,7}\" placeholder=\"Только цифры\" id=\"linear_meter\" value=\"\"/><br>\
				<input type=\"button\" onclick=\"calculate()\" value=\"Посчитать\"/></h3>\
				<br><p id=\"rezult\"></p>"
			message.innerHTML = output;
			break;
		case 'round_tube':
			var output = "<h3>Введите внешний диаметр: <input type=\"text\" name=\"dia\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"dia\" value=\"\"/> мм.<br>\
				Толщину стенки <input type=\"text\" name=\"esp\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"esp\" value=\"\"/> мм.<br>\
				И погонные метры: <input type=\"text\" name=\"linear meter\" size=\"20\" maxlength=\"7\" pattern=\"[0-9]{,7}\" placeholder=\"Только цифры\" id=\"linear_meter\" value=\"\"/><br>\
				<input type=\"button\" onclick=\"calculate()\" value=\"Посчитать\"/></h3>\
				<br><p id=\"rezult\"></p>"
			message.innerHTML = output;			
			break;
		case 'square_tube':
			var output = "<h3>Введите ширину первой стороны: <input type=\"text\" name=\"dia\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"dia\" value=\"\"/> мм.<br>\
				Второй стороны: <input type=\"text\" name=\"wid\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"wid\" value=\"\"/> мм.<br>\
				Толщину стенки: <input type=\"text\" name=\"esp\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"esp\" value=\"\"/> мм.<br>\
				И погонные метры: <input type=\"text\" name=\"linear meter\" size=\"20\" maxlength=\"7\" pattern=\"[0-9]{,7}\" placeholder=\"Только цифры\" id=\"linear_meter\" value=\"\"/><br>\
				<input type=\"button\" onclick=\"calculate()\" value=\"Посчитать\"/></h3>\
				<br><p id=\"rezult\"></p>"
			message.innerHTML = output;	
			break;
		case 'plate':
		var output = "<h3>Выберите длину листа <input type=\"text\" name=\"esp\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"esp\" value=\"\"/> м.<br>\
				Ширину: <input type=\"text\" name=\"linear meter\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"linear_meter\" value=\"\"/> м.<br>\
				И толщину: <input type=\"text\" name=\"dia\" size=\"20\" maxlength=\"3\" pattern=\"[0-9]{,3}\" placeholder=\"Только цифры\" id=\"dia\" value=\"\"/> мм.<br>\
				<input type=\"button\" onclick=\"calculate()\" value=\"Посчитать\"/></h3>\
				<br><p id=\"rezult\"></p>"
			message.innerHTML = output;			
			break;
	}
}

function calculate() {
	var message = document.getElementById('rezult');
	var dia = document.getElementById('dia').value;
	var linear_meter = document.getElementById('linear_meter').value;
	prokat_form = document.getElementById('prokat').value;
	switch(prokat_form) {
		case 'prokat_arm':
			var rezult = Math.round(Math.PI*Math.pow(dia,2)*linear_meter/(4*1000000)*7856);
			break;
		case 'prokat_square':
			var rezult = Math.round(Math.pow(dia,2)*linear_meter/(1000000)*7856);
			break;
		case 'round_tube':
			var esp = document.getElementById('esp').value;
			var rezult = Math.round(Math.PI*(Math.pow(dia,2)-Math.pow((dia-2*esp),2))*linear_meter/(4*1000000)*7856);
			break;
		case 'square_tube':
			var esp = document.getElementById('esp').value;
			var wid = document.getElementById('wid').value;
			var rezult = Math.round((dia*wid-(dia-2*esp)*(wid-2*esp))*linear_meter/(1000000)*7856);
			break;
		case 'plate':
			var esp = document.getElementById('esp').value;
			var rezult = Math.round(dia*linear_meter*esp/(1000)*7856);
			break;
	}
	var output = "Вам потребуется " + rezult +"кг металла в сумме приблизительно на " + rezult*42 + " рублей. <br><br>Для получения более точной информации свяжитесь с менеджером по телефону +7(812)ХХХ-ХХ-ХХ";
	message.innerHTML = output;
}