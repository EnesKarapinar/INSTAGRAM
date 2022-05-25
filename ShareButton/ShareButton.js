let shareWidgies = document.querySelectorAll('.share-widget:not(.full) .share-widget-sub');

shareWidgies.forEach(el => {
    el.addEventListener('click', function() {
        if (this.classList.contains('flipped')) {
            this.classList.remove('flipped');
        } else {
            this.classList.add('flipped');
        }
    });
});