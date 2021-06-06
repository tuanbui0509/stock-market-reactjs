const showMenuLanguage = () => {
    console.log('haha')
    let menuLanguages = document.querySelector('.header__right-language-list');
    console.log(menuLanguages.style.display)
    if (menuLanguages.style.display === 'block') {
        menuLanguages.style.display = 'none';
    }
    else{
        menuLanguages.style.display = 'block';
    }
}