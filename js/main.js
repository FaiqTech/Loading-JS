
    var loader = document.querySelector('.loader');
    var overlay = document.querySelector('.overlay');
    
    setTimeout(function() {
        loader.style.display = 'none';
        overlay.style.display = 'none';
    }, 5000); //burada deyirikki 5 saniyeden sora overlayda loadedde yox olsun

