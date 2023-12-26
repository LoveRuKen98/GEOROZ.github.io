let randomResult = document.getElementById('randres');
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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

hinkali.addEventListener('click', () => {
  let randomID = getRndInteger(1, players.length + 1);
  randomResult.value = randomID;

  let player = players[randomID - 1];



  if (player.life > 1) {
    player.life--;

    const LifeCell = table.rows[randomID].cells[2];
    LifeCell.textContent = player.life;
    LifeCell.parentElement.style.backgroundColor = 'red';
    setTimeout(() => {
      LifeCell.parentElement.style.backgroundColor = 'white';
    }, 150);
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
    hinkText.style.display = 'none';
    hider.style.backgroundColor = '#454545';
    hider.style.width = '100%';
    hider.style.height = '1000px';
    victoryPlate.style.display = 'block';
    victoryText.textContent = `${winner}, поздравляем с победой!`;
    winners.push(winner);

  }

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