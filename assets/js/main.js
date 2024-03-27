//preloader
$(document).ready(function() {
    $('#preloader').fadeOut(400);
  }); 

//popup
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelector('.popup__btn');
    /* const popupBtn2 = document.querySelector('.popup__btn_1');
    const popupBtn3 = document.querySelector('.popup__btn_2'); */
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

    /* popupBtn2.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('popup__open');
    });
    popupBtn3.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('popup__open');
    });
 */
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
