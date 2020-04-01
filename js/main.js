$(document).ready(function () {
  let modal = $(".modal"); //помещаем модальное окно
  modalBtn = $("[data-toggle = modal]"); //
  closeBtn = $(".modal__close"); //

  modalBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    //присваееваем класс
    modal.toggleClass("modal--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modal").removeClass("modal--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".modal")) {
      modal.toggleClass("modal--visible");
    }
  });

  //открытие модального окна ПОДПИСКИ
  $(".modalSend-btn").on("click", function (event) {
    event.preventDefault();
    $(".modalSend").fadeIn();
  });
  //открытие модального окна подписки по крестику
  $(".modalSend-close").on("click", function (event) {
    event.preventDefault();
    $(".modalSend").fadeOut();
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".modalSend").fadeOut();
    }
  });
  // закрытие по клику вне окна
  $(document).on("click", function (e) {
    $(".modalSend").fadeOut();
  });


  //Слайдер 
  var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiperprev = document.querySelector('.swiper-button-prev');
  var swipernext = document.querySelector('.swiper-button-next');

  //валидация форм
  $(".price__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userMessage: {
        required: true,
        minlength: 10,
        maxlength: 30
      },
      // правило- обьект
      userEmail: {
        required: true,
        email: true
      },
      userWebSayt: {
        required: true,
        email: true
      }
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },

      userWebSayt: {
        required: "Обязательно укажите Веб-сайт",
        email: "Введите в формате: tatsianapavlenko.ru"
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: ivanov@gmail.com"
      },
      userMessage: {
        required: "Сообщение обязателено",
        minlength: "Сообщение не короче 10 символов",
        maxlength: "Сообщение не длиньше 30 символов"
      }
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendPrice.php",
        data: $(".price__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          //modal.on('.modalSend');
          $(form)[0].reset(); // чистит поля после отправки формы
          modal.removeClass("modal--visible");
          $(".modalSend").fadeIn();
        }
      });
    }
  });

  $(".control__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      checkBoxControl: {
        required: true
      }
      // правило- обьект
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },
      userPhone: "Телефон обязателен",
      checkBoxControl: "Подтвердите свое согласие"
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendControl.php",
        data: $(".control__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          //control.on('.modalSend');
          $(form)[0].reset(); // чистит поля после отправки формы
          $(".modalSend").fadeIn();
        }
      });
    }
  });

  $(".footer__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      checkBoxFooter: "required",
      userQuestion: {
        required: true,
        minlength: 10,
        maxlength: 30
      }
      // правило- обьект
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов"
      },
      userPhone: "Телефон обязателен",
      checkBoxFooter: "Подтвердите свое согласие",

      userQuestion: {
        required: "Вопрос обязателен",
        minlength: "Вопрос не короче 10 символов",
        maxlength: "Вопрос не длиньше 30 символов"
      }
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "sendFooter.php",
        data: $(".footer__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          //footer.on('.modalSend');
          $(form)[0].reset(); // чистит поля после отправки формы
          $(".modalSend").fadeIn();
        }
      });
    }
  });

  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Ваш номер телефона:"
  });

  //плавный якорь
  $(function () {
    $('a[href^="#"]').on("click", function (event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $("html, body").animate({
          scrollTop: dn
        },
        1000
      );

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });
});


[].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function () {
    img.removeAttribute("data-src");
  };
});