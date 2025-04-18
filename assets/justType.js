const typingText = document.querySelector('.typing-text p');
const inputField = document.querySelector('.input-field');
const wpmResult = document.querySelector('.WPM span');
const mistakesResult = document.querySelector('.mistakes span');
const time = document.querySelector('.time span');

let currentTime = startTime = 30;
let wordCount = word2.length;
let characterIndex = 0;
let mistakes = 0;
let firstChar = 0;

time.innerHTML = startTime;

const getWpm = () => {
    const wpm = ((((characterIndex + 1) - mistakes) / 5) / (startTime - currentTime))*60;
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
