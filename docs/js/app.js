document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementsByClassName('hamburger-menu__container')[0];
    const menuButtonOpen = document.getElementsByClassName('hamburger-menu__button_open')[0];
    const menuButtonClose = document.getElementsByClassName('hamburger-menu__button_close')[0];
    const contactButton = document.getElementsByClassName('hamburger-menu__contact')[0];

    const handleMenuOpen = () => {
        window.scrollTo(0, 0);
        mobileMenu.classList.add('hamburger-menu__container_is-active');
        document.body.style.overflowY = 'hidden';
    }

    const handleMenuClose = () => {
        mobileMenu.classList.remove('hamburger-menu__container_is-active');
        document.body.style.overflowY = '';
    }

    menuButtonOpen.addEventListener("click", handleMenuOpen);
    menuButtonClose.addEventListener("click", handleMenuClose);
    contactButton.addEventListener("click", handleMenuClose);

    let menuItems = [...document.getElementsByClassName('hamburger-menu__menu-item')];
    menuItems.forEach(item => {
        item.addEventListener("click", handleMenuClose)
    })
});
