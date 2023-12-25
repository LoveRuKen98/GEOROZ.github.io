let randomResult = document.getElementById('randres');
let table = document.getElementById('myTable');
const victoryPlate = document.getElementById('victory');
const hider = document.getElementById('hider');
const hinkali = document.getElementById('hinkali');
const hinkText = document.getElementById('hinktext');
const gruzin = document.getElementById('gruzin');
const players = [];

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
  players.push({number: number ,name: name, life: life });
}

addPlayer(1,'Лаврентий', 2);
addPlayer(2,'Шота', 2);
addPlayer(3,'Бесики', 2);
addPlayer(4,'Николоз', 2);
addPlayer(5,'Сандро', 2);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

hinkali.addEventListener('click', () => {
  let randomID = getRndInteger(1, players.length+1);
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
    table.deleteRow(randomID);
    players.splice(randomID - 1, 1);

    updatePlayerNumbers(randomID);
    if (players.length >= 2 )
    setTimeout(() => {
      alert(`Участник ${player.name} выбыл! Пока пока :)`);
    }, 200)
  }
  if (players.length == 1){
    let winner = players[0].name;

    if (players.length == 1){
        let winner = players[0].name;
        hinkali.style.display = 'none';
        hinkText.style.display = 'none';
        gruzin.style.display = 'none';
        table.style.display = 'none';
        hider.style.backgroundColor = '#454545';
        hider.style.width = '10000px';
        hider.style.height = '10000px';
          victoryPlate.style.display = 'block';
          victoryPlate.textContent = `${winner}, с победой! Геймпад твой!`;

      }
  }
});

function updatePlayerNumbers(startIndex) {
  for (let i = (startIndex-1); i < players.length; i++) {
    players[i].number--;

    const NumberCell = table.rows[i+1].cells[0];
    NumberCell.textContent = players[i].number;
  }
}