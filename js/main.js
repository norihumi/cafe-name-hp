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

// =======================================
// こだわり フェードイン
// =======================================
document.addEventListener('DOMContentLoaded', () => {
    // 監視対象の要素（.js-fade が付いた要素）をすべて取得
    const fadeElements = document.querySelectorAll('.js-fade');

    // 監視のオプション設定
    const options = {
        root: null, // ブラウザの画面（ビューポート）を基準にする
        rootMargin: '0px 0px -20% 0px', // 画面の下から20%の位置に入ったら発火
        threshold: 0
    };

    // 画面内に入ったかを判定する監視カメラ（Observer）を作成
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面内に入ったら is-show クラスを追加
                entry.target.classList.add('is-show');
                // 一度表示されたら監視を解除（何度もパタパタ動くのを防ぐ）
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 各要素の監視を開始
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});