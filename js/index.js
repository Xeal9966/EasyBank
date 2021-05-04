function menuHandler(e) {
    closeOpenMenu();
}

function closeOpenMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.querySelector('body');
    const menuImg = document.querySelector('#menu-button');

    if (mobileMenu.dataset.active === 'false') {
        mobileMenu.style.top = window.pageYOffset + 60;
        menuImg.src = 'images/icons/clear.svg';
        body.dataset.overflow = 'hidden';
        mobileMenu.dataset.active = 'true';
    } else {
        menuImg.src = 'images/icons/burger.svg';
        body.dataset.overflow = 'auto';
        mobileMenu.dataset.active = 'false';
    }
}

function changeMenu(e) {
    e.preventDefault();
    const elem = e.currentTarget;
    const href = elem.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 60;
    menuHandler(e);

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}

function manageNavbar() {
    let offsets = setOffsets();
    let scroll = window.pageYOffset;
    let curr;
    for (let key of offsets)
        if (scroll >= key.offset) curr = key.id;
    for (let key of document.querySelectorAll('a[data-active = "true"]')) key.dataset.active = 'false';
    for (let key of document.querySelectorAll(`a[href='` + `#` + curr + `']`)) key.dataset.active = 'true';
}

function setOffsets() {
    let offsets = [{
        id: 'home',
        offset: 0
    }];
    for (let key of document.querySelectorAll('section')) {
        if (key.id !== '')
            offsets.push({
                id: key.id,
                offset: document.querySelector('#' + key.id).offsetTop - 60
            });
    }
    return offsets;
}
setOffsets();
const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', menuHandler);

for (let key of document.querySelectorAll('.mobile-menu-items a')) key.addEventListener('click', changeMenu);
for (let key of document.querySelectorAll('.button'))
    key.addEventListener('click', function() {
        location.href = 'login.html';
    });
window.addEventListener('scroll', manageNavbar);