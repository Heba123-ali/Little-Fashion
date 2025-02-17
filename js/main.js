const links = document.querySelectorAll('nav ul li a');
links.forEach(e => {
    e.addEventListener('click', function () {
        links.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
    })  
});
const closeIcon = document.getElementById('close-icon');
const mobileIcon = document.getElementById('mobile-icon');
const navList = document.getElementById('nav-list');
mobileIcon.addEventListener('click', function () { 
    mobileIcon.style.display= 'none'; 
    closeIcon.style.display = "block"; 
    navList.style.display = "flex"; 
}); 
closeIcon.addEventListener('click', function () {
    navList.style.display = 'none';
    closeIcon.style.display = 'none';
    mobileIcon.style.display = 'block';
});
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView :1,
    autoplay: {
             delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },
});
const about = document.querySelectorAll('#about ul li a');
about.forEach(e => {
    e.addEventListener('click', function () {
        about.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
    })  
});











