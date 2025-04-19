const typingText = document.querySelector('.typing-text p');
const inputField = document.querySelector('.input-field');
const wpmResult = document.querySelector('.WPM span');
const mistakesResult = document.querySelector('.mistakes span');
const time = document.querySelector('.time span');

const choice1 = document.querySelector('.choice-1');
const choice2 = document.querySelector('.choice-2');
const choice3 = document.querySelector('.choice-3');
const choice4 = document.querySelector('.choice-4');

choice1.classList.add('time-select');
const isChoice1 = () => {
    choice1.classList.add('time-select');
    choice2.classList.remove('time-select');
    choice3.classList.remove('time-select');
    choice4.classList.remove('time-select');
}
const isChoice2 = () => {
    choice2.classList.add('time-select');
    choice1.classList.remove('time-select');
    choice3.classList.remove('time-select');
    choice4.classList.remove('time-select');
}
const isChoice3 = () => {
    choice3.classList.add('time-select');
    choice1.classList.remove('time-select');
    choice2.classList.remove('time-select');
    choice4.classList.remove('time-select');
}
const isChoice4 = () => {
    choice4.classList.add('time-select');
    choice1.classList.remove('time-select');
    choice3.classList.remove('time-select');
    choice2.classList.remove('time-select');
}

let wordCount = word2.length;
let currentTime = startTime = 0;
let characterIndex = 0;
let mistakes = 0;
let totalMistakes = 0;
let firstChar = 0;

const getWpm = () => {
    const wpm = ((((characterIndex + 1) - totalMistakes) / 5) / ((startTime - currentTime)/60));
    return Math.round(wpm);
}

const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordCount);
    return word2[randomIndex];
}
const newGame = () => {
    document.addEventListener('keydown', () => inputField.focus());
    typingText.addEventListener('click', () => inputField.focus());
    typingText.innerHTML = '';
    for (let i=0; i<=100; i++){
        let word = '';
        word = `<div class="word"><span class="letter">${randomWord().split('').join('</span><span class="letter">')}</span></div>`;
        typingText.innerHTML += word + `<span class="letter"> </span>`;
    }
    typingText.querySelector('.letter').classList.add('current');
    
    choice1.addEventListener('click', isChoice1);
    choice1.addEventListener('click', newGame);
    choice2.addEventListener('click', isChoice2);
    choice2.addEventListener('click', newGame);
    choice3.addEventListener('click', isChoice3);
    choice3.addEventListener('click', newGame);
    choice4.addEventListener('click', isChoice4);
    choice4.addEventListener('click', newGame);
    if (choice1.classList.contains('time-select')){
        startTime = currentTime = parseInt(document.querySelector('.choice-1 span').innerHTML);
    } else if (choice2.classList.contains('time-select')){
        startTime = currentTime = parseInt(document.querySelector('.choice-2 span').innerHTML);
    } else if (choice3.classList.contains('time-select')){
        startTime = currentTime = parseInt(document.querySelector('.choice-3 span').innerHTML);
    } else if (choice4.classList.contains('time-select')){
        startTime = currentTime = parseInt(document.querySelector('.choice-4 span').innerHTML);
    }
    time.innerHTML = startTime;
}
const isTyping = (event) => {
    const letter = typingText.querySelectorAll('.letter');
    let typedChar = event.key;
    if (characterIndex < letter.length - 1 && currentTime > 0){
        if (firstChar == 0){
            timeLeft = setInterval(startTimer, 1000);
            firstChar = true;
        }
        if (typedChar === 'Backspace'){
            characterIndex--;
            if (letter[characterIndex].classList.contains('incorrect')){
                mistakes--;
            }
            letter[characterIndex].classList.remove('correct');
            letter[characterIndex].classList.remove('incorrect');
        } else if (typedChar == 'Shift'){
            characterIndex;
        } else{
            if (letter[characterIndex].innerHTML === typedChar){
                letter[characterIndex].classList.add('correct');
            } else{
                letter[characterIndex].classList.add('incorrect');
                mistakes++;
                totalMistakes++;
            }
            characterIndex++;
        }
        mistakesResult.innerHTML = mistakes;
        wpmResult.innerHTML = getWpm();
        if (wpmResult.innerHTML == 'Infinity' || wpmResult.innerHTML == null){
            wpmResult.innerHTML = 0;
        }
    } else{
        inputField.innerHTML = '';
        clearInterval(timeLeft);
        window.location.href = './result.html';
    }
    letter.forEach(span => span.classList.remove("current"));
    letter[characterIndex].classList.add("current");
}
const startTimer = () => {
    time.innerHTML = '';
    if (currentTime > 0){
        currentTime--;
        time.innerHTML += currentTime;
    } else{
        time.innerHTML = 0;
    }
}
newGame();
inputField.addEventListener('keydown', isTyping);
