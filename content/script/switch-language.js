const languageButton = document.querySelector('.languageButton');
const changeLanguage = () => {
    let newLanguage;
    if (languageButton.value === 'DE') {
        setGermanContent();
        newLanguage = 'EN';
    } else {
        setEnglishContent();
        newLanguage = 'DE';
    }
    languageButton.value = newLanguage;
}
languageButton.onclick = changeLanguage;