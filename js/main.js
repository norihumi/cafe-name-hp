// =======================================
// ハンバーガーメニュー
// =======================================
const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__item a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
})

navLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        hamburger.classList.remove('is-open');
        nav.classList.remove('is-open');
    })
})

// =======================================
// メインビジュアル スライドショー
// =======================================
const slides = document.querySelectorAll('.mv__slide');
let currentSlide = 0;

function nextSlide() {
    // 現在のスライドから is-active を外す（非表示へ）
    slides[currentSlide].classList.remove('is-active');
    
    // 次のスライド番号へ（最後の次は0に戻る）
    currentSlide = (currentSlide + 1) % slides.length;
    
    // 次のスライドに is-active をつける（表示へ）
    slides[currentSlide].classList.add('is-active');
}

// 4000ミリ秒（4秒）ごとに nextSlide を実行
setInterval(nextSlide, 4000);