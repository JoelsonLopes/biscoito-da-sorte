const crashCookie = document.querySelector("#crashCookie")
const btnReset = document.querySelector("#btnReset")
const home = document.querySelector('.home');
const luck = document.querySelector('.luck');

let phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
]

function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function handleClickToCrash(event) {
  event.preventDefault()
  const randomPhrase = getRandomPhrase();

  const messageElement = document.querySelector('.animated-message');
  messageElement.textContent = randomPhrase;

  home.classList.add('hide');
  luck.classList.remove('hide');

}

function handleResetClick(){
  home.classList.remove("hide")
  luck.classList.add("hide")

}

crashCookie.addEventListener('click', handleClickToCrash)
btnReset.addEventListener('click', handleResetClick)