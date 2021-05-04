function changeVisibility(e) {
    const elem = e.currentTarget;
    const passBox = document.querySelector('#password');
    if (elem.dataset.type === 'invisible') {
        elem.src = 'images/icons/visibility_off.svg';
        elem.dataset.type = 'visible';
        passBox.type = 'text';
    } else {
        elem.src = 'images/icons/visibility.svg';
        elem.dataset.type = 'invisible';
        passBox.type = 'password';
    }
}

const visibility = document.querySelector('#visibility');

visibility.addEventListener('click', changeVisibility);

for (let key of document.querySelectorAll('.navbar img'))
    key.addEventListener('click', function() {
        location.href = 'index.html';
    });