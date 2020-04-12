  

// Ф-ия для стилизации селекта (выпадающего списка) 
function select() {
  $('.slct').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop');

		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();

			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');

			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop').find('li').click(function(){

				/* Заносим в переменную HTML код элемента
				списка по которому кликнули */
				var selectResult = $(this).find('a').data('value');
				var selectResultName = $(this).find('a').html();

				/* Находим наш скрытый инпут и передаем в него
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult).trigger('change');

				/* Передаем значение переменной selectResult в ссылку которая
				открывает наш выпадающий список и удаляем активность */
				$(this).parent().parent().find('.slct').removeClass('active').html(selectResultName);

				/* Скрываем выпадающий блок */
				dropBlock.slideUp();
			});

		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} 
		else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}

		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
}



// Ф-ия сворачивания и разворота поиска
function search_roll() {

	if ($( window ).width() < 600) {
			$( ".search_roll_up" ).hide();
			$( ".search_div_fieldset" ).slideUp( "slow", function() {
			$( ".search_roll_down" ).show();
		});
		
	}
	else {
		$( ".search_roll_down" ).hide();
		$( ".search_div_fieldset" ).slideDown( "slow", function() {
			$( ".search_roll_up" ).show();
		});
	}
		  
    $( ".search_roll_up" ).click(function() {
      $( this ).hide();

      $( ".search_div_fieldset" ).slideUp( "slow", function() {
		$( ".search_roll_down" ).show();
      });
    });

    $( ".search_roll_down" ).click(function() {
      $( this ).hide();

      $( ".search_div_fieldset" ).slideDown( "slow", function() {
		$( ".search_roll_up" ).show();
      });
	});
}


// Ф-ия корректировки работы input (для label)
function input_filled() {
  $('.input_style input').each(function(){
    $(this).change(function(){
      if ($(this).val().length > 0)
      {
        $(this).addClass("input_filled");
      }
      else
      {
        $(this).removeClass("input_filled");  
      }
    })
  });
}
 
// Ф-ия корректировки работы textarea (для label)
function textarea_filled()
{
  $('textarea').each(function(){
    $(this).change(function(){
      if ($(this).val().length > 0)
      {
        $(this).addClass("textarea_filled");
      }
      else
      {
        $(this).removeClass("textarea_filled");  
      }
    })
  });
}
 
 

// Ф-ия раскрытия списка всех возможных областей (поиск в каталоге)
function areas_more() {
	$( ".areas_more" ).click(function() {

	  if ($( ".all_areas" ).attr('style') == 'display: none;' ) {
		$( ".areas_more" ).html( "свернуть" );
	  }
	  else {
		$( ".areas_more" ).html( "еще..." );
	  }
	  
	  $( ".all_areas" ).slideToggle( 300, function() {
	  });

	});
}
 

// Ф-ия сворачивания формы ответа и отображение кнопки ответа
function comments_form_answer_hide() {
	$(".btn_cancel").click(function() {

		// Скрытие текущей формы ответа
		$(this).parents(".copy_form_answer").hide(500 , function () { 
			$(this).parents(".copy_form_answer").detach();
		});

		// Показ всех кнопок Ответить
		$(".btn_answer").show(500);
		$(".btn_answer_two").show(500);
	});
}






// Ф-ия прорисовки формы ответа в обсуждениях и показ комментариев
function comments_form_answer() {

	$(".btn_answer" ).click( function () {

		// Показ всех кнопок Ответить
		$(".btn_answer").show(500);
		
		// Скрытие текущей нажатой кнопки Отвтеить 
		$(this).hide(500);

		// Скрытие всех форм ответа и уничтожение
		$("[data-rel='single_form_answer']").hide(500, function () { 
			$("[data-rel='single_form_answer']").detach();
		});
  
		// Копирование шаблона формы ответа
		var form = $( "#pattern_form_answer").html();
  
		// Вставка формы ответа
		$(this).parent().append( $(form) );
  
		// Добавление атрибута, по которому потом будет удаляться эта форма
		$($(this).siblings(".copy_form_answer").attr( "data-rel", "single_form_answer" ));
  
		// Показ формы
		$("[data-rel='single_form_answer']").show(500);
  
		comments_form_answer_hide();
	  });
  
	  $( ".btn_answer_two" ).click(function () {
  
	      // Показ всех кнопок Ответить
		  $(".btn_answer_two").show(500);

		  // Скрытие текущей нажатой кнопки Отвтеить 
		  $(this).hide(500);
  
		  // Скрытие всех форм ответа и уничтожение
		  $("[data-rel='single_form_answer']").hide(500);
		  $("[data-rel='single_form_answer']").detach();
  
		  // Копирование шаблона формы ответа
		  var form = $( "#pattern_form_answer").html(); 
  
		  // Вставка формы ответа
		  $(this).parents(".discussion").append( $(form) );

  		  // Добавление атрибута, по которому потом будет удаляться эта форма
		  $($( ".discussion" ).children( ".copy_form_answer" ).attr( "data-rel", "single_form_answer" ));
  
		  // Показ формы
		  $("[data-rel='single_form_answer']").show(500);
  
		  comments_form_answer_hide();
	  });
  
	  // Нажатие кнопки просмотра комментариев 
	  $( ".comment_roll" ).click(function() {
  
		var com_data = $(this).data("target");
  
		// Разворот/сворачивание комментариев
		$( "#"+com_data+" .discussion_comment" ).slideToggle( "slow" );
	  });
  
	  // Нажатие кнопки сворачивания комментариев 
	  $( ".btn_rollup" ).click(function() {
		
		// Разворот/сворачивание комметнариев
		$( this ).parents(".discussion_comment").slideToggle( "slow" );
	  });
}






// Ф-ия управления виджетами, каруселями ПО
function carousel_soft(target) {
	$('#'+target).slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 2000,
		respondTo: 'min',
		
		responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
			},
			{
			breakpoint: 790,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		],
		arrows:true,
		appendArrows: $("#"+target+"_container"),
		prevArrow:'<i class="fa fa-angle-left pos_center widget_arrows" aria-hidden="true" ></i>',
		nextArrow:'<i class="fa fa-angle-right pos_center widget_arrows" aria-hidden="true"></i>',
		
	})
}
  

// Ф-ия инициализации input для даты
function datepicker_init() {
	if ($( window ).width() < 600) {
		$('.search_datepicker').each(function() {
			$( this  ).attr( "type", "date" );
		});
		
	}
	else {
			$('.search_datepicker').datepicker({
				language: 'ru',
				autoClose: true,
				// minDate: new Date() // Now can select only dates, which goes after today
			});
	}
}


//  jQuery(document).ready(function () {
	
// 	select();
// 	input_filled();
// 	textarea_filled();
// 	search_roll();
// 	areas_more();
// 	comments_form_answer();
// 	datepicker_init();
// })
