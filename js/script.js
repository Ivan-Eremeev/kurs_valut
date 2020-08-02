$(function() {
	$( "#datepicker" ).datepicker({
		closeText: "Закрыть",
		prevText: "&#x3C;Пред",
		nextText: "След&#x3E;",
		currentText: "Сегодня",
		monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
		"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
		monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
		"Июл","Авг","Сен","Окт","Ноя","Дек" ],
		dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
		dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
		dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
		weekHeader: "Нед",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "",
		constrainInput: true,
        minDate: "-4",
        maxDate: "0",
		onSelect : function(dateText, inst){
        	var selectDate = dateText;
        	usdBy.text(currencyValue[selectDate].usdByVal);
		eurBy.text(currencyValue[selectDate].eurByVal);
		usdSale.text(currencyValue[selectDate].usdSaleVal);
		eurSale.text(currencyValue[selectDate].eurSaleVal);
    	}
	});

	var nowDate = resDate();
	function resDate() {
	var dateObj = new Date(),
		dd = dateObj.getDate(),
		mm = dateObj.getMonth() + 1,
		yy = dateObj.getFullYear();
	if(dd < 10) {dd = '0' + dd};
	if(mm < 10) {mm = '0' + mm};
	return dd + '.' + mm + '.' + yy;
	};

	var currencyValue = {
		'02.08.2018' : {
			usdByVal : 60.46,
			eurByVal : 70.23,
			usdSaleVal : 60.46,
			eurSaleVal : 70.23
		},
		'03.08.2018' : {
			usdByVal : 62.46,
			eurByVal : 72.23,
			usdSaleVal : 61.46,
			eurSaleVal : 71.23
		},
		'04.08.2018' : {
			usdByVal : 62.38,
			eurByVal : 72.87,
			usdSaleVal : 61.35,
			eurSaleVal : 71.90
		},
		'05.08.2018' : {
			usdByVal : 63.46,
			eurByVal : 73.23,
			usdSaleVal : 62.46,
			eurSaleVal : 72.23
		},
		'06.08.2018' : {
			usdByVal : 63.53,
			eurByVal : 73.44,
			usdSaleVal : 62.53,
			eurSaleVal : 72.53
		}
	};

	var usdBy = $('#usdBy'),
		eurBy = $('#eurBy'),
		usdSale = $('#usdSale'),
		eurSale = $('#eurSale');

	function dateFunc() {
		usdBy.text(currencyValue[nowDate].usdByVal);
		eurBy.text(currencyValue[nowDate].eurByVal);
		usdSale.text(currencyValue[nowDate].usdSaleVal);
		eurSale.text(currencyValue[nowDate].eurSaleVal);
	};
	dateFunc();

	function selectBorder() {
		var select = $('#trade-select'),
			selectOpt = $('#trade-select option:selected');
		if (selectOpt.val('disabled')) {
			select.css('border-color','#d4d5d7');
		}
		select.change(function() {
			select.css('border-color','#00a28a');
		});
	};
	selectBorder();

	$('#form').on('submit', function() {
		alert('форма отправлена');
		return false;
	});

});