  
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
			$(this).parent().parent().find('input').val(selectResult);

			/* Передаем значение переменной selectResult в ссылку которая
			открывает наш выпадающий список и удаляем активность */
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResultName);

			/* Скрываем выпадающий блок */
			dropBlock.slideUp();
		});

	/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp();
	}

	/* Предотвращаем обычное поведение ссылки при клике */
	return false;
});

}
 
 function input_file() {
let inputs = document.querySelectorAll('.input__file');
              Array.prototype.forEach.call(inputs, function (input) {
                let label = input.nextElementSibling,
                  labelVal = label.querySelector('.input__file-button-text').innerText;
           
                input.addEventListener('change', function (e) {
                  let countFiles = '';
                  if (this.files && this.files.length >= 1)
                    countFiles = this.files.length;
           
                  if (countFiles)
                    label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
                  else
                    label.querySelector('.input__file-button-text').innerText = labelVal;
                });
              });
 }

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


 
 function input_filled()
{
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
  
 
 jQuery(document).ready(function () {
	
	select();
	input_file();
	input_filled();
	textarea_filled();
	search_roll();
	areas_more();

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
		 

})
