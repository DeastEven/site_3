new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoHeight: true,
    spaceBetween: 5000,
    loop: true,
});

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')

})





const tabsBtn = document.querySelectorAll('.My-info__item')
const tabsItems = document.querySelectorAll('.My-info__block')


tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        event.preventDefault()

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active')
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active')
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');

        }



    });

});


document.querySelector('.My-info__item:nth-child(2)').click();
