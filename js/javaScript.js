
/*nowa gra*/
var newGameBtn = document.getElementById('js-newGameButton'); //pobieranie elementu z przycisku "nowa gra"
newGameBtn.addEventListener('click', newGame);//dodanie nasłuchu na przycisk "nowa gra"

function newGame() {
  console.log('dupa');
};
/*deklaracje zmiennych opcji wyboru papier nożyczki kamień*/

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

/* po kliknieciu w element (pap, noż kam) wykonaj funkcję "player pick" z parametrem: "rock","paper" lub "scissors"*/

    pickRock.addEventListener('click', function() {
      playerPick('kamien')//playePick to nazwa funkcji
    });

    pickPaper.addEventListener('click', function() {
      playerPick('papier')//playePick to nazwa funkcji
    });

    pickScissors.addEventListener('click', function() {
      playerPick('nozyczki')//playePick to nazwa funkcji
    });

  /*end*/

  /*obecny status gry*/

    var gameState = 'notStarted', //started //ended
        player = {
                  name: '',
                  score: 0
                  },
        computer = {
                  score: 0
                  };

    var newGameElem = document.getElementById('js-newGameElement'), //wyświetla przycisk "nowa gra"
        pickElem = document.getElementById('js-playerPickElement'), //wyświetla pola wyboru
        resultsElem = document.getElementById('js-resultsTableElement');//wyświetla tabelę wyników

  function setGameElements() {
    switch(gameState) {
        case 'started': newGameElem.style.display = 'none';
        pickElem.style.display = 'block'; resultsElem.style.display = 'block';
         //przycisk nowa gra schowany - wyświetla pola wyboru!!
        break;
        case 'ended': newGameBtn.innerText = 'Jeszcze raz';
        case 'notStarted': default: newGameElem.style.display = 'block';
        //wyświetla przycisk nowa gra, nie wyświetla pól wyboru
        pickElem.style.display = 'none'; resultsElem.style.display = 'none'; } }


setGameElements();

/*definiowanie funkcji "nowaGra"*/

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');


    function newGame() {
      player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
      if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        console.log(gameState)

        playerNameElem.innerHTML = player.name;
        setGamePoints();
      }
    };

  /*funkcja co wybrał gracz*/

    function playerPick(playerPick) {
    console.log(playerPick);
};

/*wybór komputera*/
function getComputerPick() {
    var possiblePicks = ['kamien', 'papier', 'nozyczki'];
    return possiblePicks[Math.floor(Math.random()*3)];
};

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'kamien' &&  playerPick == 'nozyczki') ||
        (computerPick == 'nozyczki' &&  playerPick == 'papier') ||
        (computerPick == 'papier' &&  playerPick == 'kamien')) {

        winnerIs = 'computer';

    };

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    };
};


function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
    setGamePoints()

    if (player.score==10) {
      alert('Wygrałeś')
      newGame();
    } else if (computer.score==10) {
      alert('loozer')
      newGame();
    };
};

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
};
