var Cookies2 = Cookies.noConflict();

$( document ).ready(function() {
    langButtonListen();
});

function langButtonListen() {
    var savedLanguage = readCookieLang();
    if (savedLanguage == 'fr') {
        showLang('fr');
    } else {
        showLang('en');
    }

    $('.frL').click(function (event) {setFrench();});
    $('.enL').click(function (event) {setEnglish();});
}

function showLang(l){
    if (l == 'en') {$('[lang="en"]').show();$('[lang="fr"]').hide();}
    else if (l =='fr') {$('[lang="en"]').hide();$('[lang="fr"]').show();}
}
function setFrench() {var s = "fr"; showLang(s); setcookie(s);}
function setEnglish() {var s = "en"; showLang(s); setcookie(s);}

function setcookie(l)      {Cookies2.set('language_index',l, { expires: 7, path: '' });}
function readCookieLang()  {return Cookies2.get('language_index');}
function eraseCookieLang() {Cookies2.remove('language_index');}
