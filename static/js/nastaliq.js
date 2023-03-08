var arabicPatt = /[\u0600-\u06ff]/;
[].forEach.call(document.getElementsByTagName('p'), function(p) {
    var lang, dir;
    if (arabicPatt.test(p.textContent)) {
        lang = 'ar'; dir = 'rtl';
    }
    else {
        lang = 'en'; dir = 'ltr';
    }
    p.setAttribute('lang', lang);
    p.setAttribute('dir', dir);
});
