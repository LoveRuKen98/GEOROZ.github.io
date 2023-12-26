let randomResult = document.getElementById('randres');
let randomResultSecond = document.getElementById('randrestwo');
let table = document.getElementById('myTable');
const victoryPlate = document.getElementById('victory');
const victoryText = document.getElementById('victorytext');
const hider = document.getElementById('hider');
const hinkali = document.getElementById('hinkali');
const hinkText = document.getElementById('hinktext');
const gruzin = document.getElementById('gruzin');
const continueButton = document.getElementById('continue');
const players = [];
const winners = [];
const firstPlace = document.getElementById('fplace');
const firstPlaceText = document.getElementById('fplacetext');
const secondPlaceText = document.getElementById('splacetext');
const thirdPlaceText = document.getElementById('tplacetext');
const winnerEmblem = document.getElementById('winneremblemcont');

function addPlayer(number, name, life) {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  cell1.textContent = number;
  cell1.style.border = '1px solid black';
  const cell2 = row.insertCell();
  cell2.textContent = name;
  cell2.style.border = '1px solid black';
  const cell3 = row.insertCell();
  cell3.textContent = life;
  cell3.style.border = '1px solid black';
  players.push({ number: number, name: name, life: life });
}

addPlayer(1, 'Лаврентий Латария', 2);
addPlayer(2, 'Шота Егутия', 2);
addPlayer(3, 'Бесики Кирия', 2);
addPlayer(4, 'Николоз Какабадзе', 2);
addPlayer(5, 'Сандро Какабадзе', 2);
addPlayer(6, 'Лаврентий Латария', 2);
addPlayer(7, 'Шота Егутия', 2);
addPlayer(8, 'Бесики Кирия', 2);
addPlayer(9, 'Николоз Какабадзе', 2);
addPlayer(10, 'Сандро Какабадзе', 2);
addPlayer(11, 'Лаврентий Латария', 2);
addPlayer(12, 'Шота Егутия', 2);
addPlayer(13, 'Бесики Кирия', 2);
addPlayer(14, 'Николоз Какабадзе', 2);
addPlayer(15, 'Сандро Какабадзе', 2);
addPlayer(16, 'Лаврентий Латария', 2);
addPlayer(17, 'Шота Егутия', 2);
addPlayer(18, 'Бесики Кирия', 2);
addPlayer(19, 'Николоз Какабадзе', 2);
addPlayer(20, 'Сандро Какабадзе', 2);
addPlayer(21, 'Лаврентий Латария', 2);
addPlayer(22, 'Шота Егутия', 2);
addPlayer(23, 'Бесики Кирия', 2);
addPlayer(24, 'Николоз Какабадзе', 2);
addPlayer(25, 'Сандро Какабадзе', 2);
addPlayer(26, 'Лаврентий Латария', 2);
addPlayer(27, 'Шота Егутия', 2);
addPlayer(28, 'Бесики Кирия', 2);
addPlayer(29, 'Николоз Какабадзе', 2);
addPlayer(30, 'Сандро Какабадзе', 2);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

hinkali.addEventListener('click', () => {
  let randomID = getRndInteger(1, players.length + 1);
  randomResult.value = randomID;
  randomResultSecond.value = randomID;
  hinkali.style.position = 'fixed';
  hinkText.style.display = 'none';

  let player = players[randomID - 1];



  if (player.life > 1) {
    player.life--;

    const LifeCell = table.rows[randomID].cells[2];
    LifeCell.textContent = player.life;
    LifeCell.parentElement.style.backgroundColor = 'red';
    LifeCell.parentElement.style.transition = 'background-color 1s linear';
    setTimeout(() => {
      LifeCell.parentElement.style.backgroundColor = 'white';
      LifeCell.parentElement.style.transition = 'background-color 1s linear';
    }, 1000);
  } else {
    if (players.length < 4 && players.length > 1) {
      winners.push(players[randomID - 1].name);
    }
    table.deleteRow(randomID);
    players.splice(randomID - 1, 1);

    updatePlayerNumbers(randomID);
    if (players.length >= 2)
      setTimeout(() => {
        alert(`Участник ${player.name} выбыл! Пока пока :)`);
      }, 200)
  }

  if (players.length == 1) {
    let winner = players[0].name;
    table.style.display = 'none';
    gruzin.style.display = 'none';
    hinkali.style.display = 'none';
    randomResult.style.display = 'none';
    randomResultSecond.style.display = 'none';
    hinkText.style.display = 'none';
    hider.style.display = 'flex';
    hider.style.backgroundColor = '#454545';
    hider.style.width = '100%';
    hider.style.height = '1000px';
    victoryPlate.style.display = 'block';
    victoryText.textContent = `${winner}, поздравляем с победой!`;
    winners.push(winner);

  }
      const playerRow = table.rows[randomID - 1];
      const visibleAreaHeight = window.innerHeight - document.querySelector('.randomheader').clientHeight;
        const scrollY = playerRow.offsetTop - visibleAreaHeight / 2;
        window.scrollTo(0, scrollY);
  

});

function updatePlayerNumbers(startIndex) {
  for (let i = (startIndex - 1); i < players.length; i++) {
    players[i].number--;

    const NumberCell = table.rows[i + 1].cells[0];
    NumberCell.textContent = players[i].number;
  }
}

continueButton.addEventListener('click', () => {
  victoryPlate.style.display = 'none';
  hider.style.display = 'none';
  winnerEmblem.style.display = 'flex';
  firstPlace.style.display = 'flex';
  firstPlaceText.textContent = `Первое место: ${winners[2]}. Приз - Sony DualSense!`;
  secondPlaceText.textContent = `Второе место: ${winners[1]}. Приз - 2000 рублей!`;
  thirdPlaceText.textContent = `Третье место: ${winners[0]}. Приз - 1000 рублей!`;
})
