
//==============БУРГЕР МЕНЮ====================
$('.burger__button, .block').click(function (event) {
	$('.burger__item, .menu__list, .block').toggleClass('active');
	$('body').toggleClass('lock');
});
$("nav li a").click(function () {
	$('.burger__item, .menu__list, .block').toggleClass('active');
	$('body').removeClass('lock');
	// плавное перемещение страницы к нужному блоку
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	$("body,html").animate({ scrollTop: destination }, 600);
});


//===================СПОЙЛЕРЫ===================
if ($('.spoiler').hasClass('one')) {
	$('.spoiler__title').removeClass('active');
	$('.experience').slideUp(300);
}
$('.spoiler__title').click(function (event) {
	$(this).toggleClass('active').next().slideToggle(300);
});
//===========ВЫБОР ЧАСТИ ПОРТФОЛИО===============
//при загрузке
let id = $("#nav-radio input:checked").val();
$('.block-portfolio > div').hide();
$('.block-portfolio > #' + id + '').show();
$('label.text1').addClass('activelabel');

//при изменении
$("#nav-radio").on("change", "input[type=radio]", function () {

	let id = $(this).val();
	$('.block-portfolio > div').hide();
	$('.block-portfolio > #' + id + '').show();
	if (id == 'cardview') {
		$('label.text1').addClass('activelabel');
		$('label.text2').removeClass('activelabel');
	}
	else {
		$('label.text2').addClass('activelabel');
		$('label.text1').removeClass('activelabel');
	}
});
//================ФОТОГАЛЕРЕЯ===================
lightbox.option({
	'resizeDuration': 300,
	'wrapAround': true,
	albumLabel: "Открытка %1 of %2",
	disableScrolling: true,
});




