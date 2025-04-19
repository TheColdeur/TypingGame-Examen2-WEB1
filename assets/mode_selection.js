const modeText = document.querySelector('.mode-text');
const modeTime = document.querySelector('.mode-time');
const modeNoFail = document.querySelector('.mode-no-fail');
const modeChill = document.querySelector('.mode-chill');
const description = document.querySelector('.description-text p');
const modeName = document.querySelector('.name h4');

modeName.innerHTML = 'Time';
description.innerText = 'Random word appear, just type the maximum you can and as fast as you can';
modeTime.classList.add('selected');
const isTextSelect = () => {
    modeText.classList.add('selected');
    modeTime.classList.remove('selected');
    modeNoFail.classList.remove('selected');
    modeChill.classList.remove('selected');
    modeName.innerHTML = 'Text';
    description.innerText = 'Check in how much time can you write a text';
}

const isTimeSelect = () => {
    modeText.classList.remove('selected');
    modeTime.classList.add('selected');
    modeNoFail.classList.remove('selected');
    modeChill.classList.remove('selected');
    modeName.innerHTML = 'Time';
    description.innerText = 'Random word appear, just type the maximum you can and as fast as you can';
}

const isNoFailSelect = () => {
    modeText.classList.remove('selected');
    modeTime.classList.remove('selected');
    modeNoFail.classList.add('selected');
    modeChill.classList.remove('selected');
    modeName.innerHTML = 'No Fail';
    description.innerText = 'No time for mistake!';
}

const isChillSelect = () => {
    modeText.classList.remove('selected');
    modeTime.classList.remove('selected');
    modeNoFail.classList.remove('selected');
    modeChill.classList.add('selected');
    modeName.innerHTML = 'Chill';
    description.innerText = 'Just type and Chill';
}

modeText.addEventListener('click', isTextSelect);
modeTime.addEventListener('click', isTimeSelect);
modeNoFail.addEventListener('click', isNoFailSelect);
modeChill.addEventListener('click', isChillSelect);