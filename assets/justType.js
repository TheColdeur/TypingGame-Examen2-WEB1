const typingText = document.querySelector('.typing-text p');
const inputField = document.querySelector('.input-field');
const cursor = document.querySelector('.cursor');

let wordCount = word1.length;
let characterIndex = 0;

const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordCount);
    return word1[randomIndex];
}
const newGame = () => {
    document.addEventListener('keydown', () => inputField.focus());
    typingText.addEventListener('click', () => inputField.focus());
    typingText.innerHTML = '';
    for (let i=0; i<=25; i++){
        const space = ' ';
        let word = '';
        if (i!=200){
            word = `<div class="word">
            <span class="letter">${randomWord().split('').join('</span><span class="letter">')}</span><span class="letter">${space}</span>
            </div>
            `;
        } else {
            word = `<div class="word">
            <span class="letter">${randomWord().split('').join('</span><span class="letter">')}</span>
            </div>`;
        }
        typingText.innerHTML += word;
    }
    typingText.querySelectorAll('.letter')[0].classList.add('current');
}
const typing = () => {
    const letter = typingText.querySelectorAll('.letter');
    let typedChar = inputField.value.split('')[characterIndex];
    if (typedChar == null){
        characterIndex--;
        letter[characterIndex].classList.remove('correct');
        letter[characterIndex].classList.remove('incorrect');
    } else{
        if (letter[characterIndex].innerHTML === typedChar){
            letter[characterIndex].classList.add('correct');
        } else{
            letter[characterIndex].classList.add('incorrect');
        }
        characterIndex++;
    }
    letter.forEach(span => span.classList.remove("current"));
    letter[characterIndex].classList.add("current");
}
newGame();
inputField.addEventListener('input', typing);
document.addEventListener('keyup', (key) => {
    console.log(key);
});