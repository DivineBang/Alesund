//preloader
$(document).ready(function() {
    $('#preloader').fadeOut(400);
  }); 

//popup
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelector('.popup__btn');
    const popupBtn2 = document.querySelector('.popup__btn_1');
    const popupBtn3 = document.querySelector('.popup__btn_2');
    const popupClose = document.querySelector('.popup__close');

    popup.addEventListener('click', function(event) {
        if (event.target === this) {
            popup.classList.remove('popup__open');
        }
    });

    popupBtn.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('popup__open');
    });

    popupBtn2.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('popup__open');
    });
    popupBtn3.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('popup__open');
    });

    popupClose.addEventListener('click', function() {
        popup.classList.remove('popup__open');
    });
});

/* function add_custom_js() {
     Подключаем ваш JavaScript-файл
    wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0', true);

     Проверяем, находимся ли мы на определенной странице (замените 'page-id' на ID вашей страницы)
    if (is_page('page-id')) {
         Подключаем ваш JavaScript-файл для этой страницы (если есть)
        wp_enqueue_script('custom-js-page-id', get_template_directory_uri() . '/js/page-id.js', array('jquery'), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'add_custom_js'); */


//form file-upload
document.getElementById('file-input').addEventListener('change', function() {
    var fileName = this.files[0].name;
    document.getElementById('file-name').textContent = fileName;
});

//slider
$(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2500,
      speed: 1500,
      centerPadding: '10px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 993,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },
        
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
          
        },
        {
          breakpoint: 450,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
          
        }
        
      ]
    });
});

/*   Tab */
document.querySelectorAll('.faq__wrapp').forEach(faq => {
    const text = faq.querySelector('.faq__text');
    const img = faq.querySelector('.faq__wrapp_img');
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        if (faq.classList.contains('active')) {
            text.style.maxHeight = text.scrollHeight + 'px';
            img.style.transform = 'translateY(-50%) rotate(-45deg)';
        } else {
            text.style.maxHeight = '0';
            img.style.transform = 'translateY(-50%) rotate(0deg)';
        }
    });
  });

/*   sponsorshipsWrapp */
// Вибираємо контейнер зображень
const sponsorshipsWrapp = document.querySelector('.sponsorships__wrapp');

const cardSet = document.querySelector('.card__set');
// Змінні для зберігання позиції миші під час початку перетягування
let startX = 0;
let scrollLeft = 0;
let isDown = false;

// Додаємо обробники подій для подій миші
sponsorshipsWrapp.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - sponsorshipsWrapp.offsetLeft;
    scrollLeft = sponsorshipsWrapp.scrollLeft;
});
cardSet.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - sponsorshipsWrapp.offsetLeft;
    scrollLeft = sponsorshipsWrapp.scrollLeft;
});

sponsorshipsWrapp.addEventListener('mouseleave', () => {
    isDown = false;
});
cardSet.addEventListener('mouseleave', () => {
    isDown = false;
});

sponsorshipsWrapp.addEventListener('mouseup', () => {
    isDown = false;
});
cardSet.addEventListener('mouseup', () => {
    isDown = false;
});

sponsorshipsWrapp.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sponsorshipsWrapp.offsetLeft;
    const walk = (x - startX) * 2; // Швидкість прокрутки можна налаштувати тут
    sponsorshipsWrapp.scrollLeft = scrollLeft - walk;
});
cardSet.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - cardSet.offsetLeft;
    const walk = (x - startX) * 2; // Швидкість прокрутки можна налаштувати тут
    cardSet.scrollLeft = scrollLeft - walk;
});

// Прокрутка колесиком
/* sponsorshipsWrapp.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    sponsorshipsWrapp.scrollLeft += delta * 40; // Задайте швидкість прокрутки тут
}); */

//кнопка вверх

jQuery(document).ready(function() {
    var btn = $('#arrow-top');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 500) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     });
     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '500');
     });
  });
  var btn = $('#arrow-top');
     $(window).scroll(function() {
       if ($(window).scrollTop() > 500) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     }); 

//burger

$(document).ready(function(){
    $('.header__menu').click(function(event){
      $('.menu').toggleClass('active__menu');
  
    });
  
  });
  $(document).ready(function(){
    $('.header__menu').click(function(event){
      var menuImage = $('.burger__img');
      
      if (menuImage.attr('src') === 'assets/img/burger.png') {
          menuImage.attr('src', 'assets/img/close_burger.png');
      } else {
          menuImage.attr('src', 'assets/img/burger.png');
      }
    });
  });

//burger + logo color
  $(document).ready(function(){
    $('.header__menu').click(function(event){
        $('header').toggleClass('light-mode'); // добавляем/удаляем класс light-mode у header
        
        // Массив с id всех элементов <path>
        var logoPaths = ['#logo-path-1', '#logo-path-2']; // Добавьте сюда id других элементов <path>, если есть
        
        // Проходимся по каждому id в массиве
        logoPaths.forEach(function(id){
            var logoPath = $(id); // Выбираем элемент <path> по его id
            
            var currentFill = logoPath.attr('fill'); // Получаем текущий fill цвет
            
            // Если текущий fill равен '#04003F', меняем его на '#fff', иначе меняем на '#04003F'
            var newFill = (currentFill === '#04003F') ? '#fff' : '#04003F';
            
            // Устанавливаем новое значение fill атрибута
            logoPath.attr('fill', newFill);
        });
    });
});

/* scroll */
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки в меню
    var menuLinks = document.querySelectorAll('.menu__item_a');
    
    // Обходим каждую ссылку в меню
    menuLinks.forEach(function(link) {
        // Добавляем обработчик события клика
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            // Получаем идентификатор целевой секции из атрибута href ссылки
            var targetId = this.getAttribute('href');

            // Получаем элемент целевой секции
            var targetElement = document.querySelector(targetId);

            // Если элемент найден
            if (targetElement) {
                // Выполняем плавную прокрутку к элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Получаем все ссылки в подвале страницы
    var footerLinks = document.querySelectorAll('.footer__list_text');
    
    // Обходим каждую ссылку в подвале страницы
    footerLinks.forEach(function(link) {
        // Добавляем обработчик события клика
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            // Получаем идентификатор целевой секции из атрибута href ссылки
            var targetId = this.getAttribute('href');

            // Получаем элемент целевой секции
            var targetElement = document.querySelector(targetId);

            // Если элемент найден
            if (targetElement) {
                // Выполняем плавную прокрутку к элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
// script.js
gsap.to("#car", {
  scrollTrigger: {
      trigger: "#car",
      start: "top center",
      end: "bottom center",
      scrub: true
  },
  y: -300
});