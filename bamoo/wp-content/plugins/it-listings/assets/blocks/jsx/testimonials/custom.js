(function() {
    const sliders = document.querySelectorAll('.swiper');
    
    if (sliders.length === 0) {
        return;
    }
    
    sliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            autoplay: true,
            clickable: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            loop: true,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
    })
})();