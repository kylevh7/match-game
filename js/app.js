//Function shuffles cards, and inserts them into html. Also calls timer function
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    frog = array;
    // Removing all children from an element
    var element = document.querySelector(".deck");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    frog.forEach(function(scramble) {
        element.appendChild(scramble);
    });
    var threeMinutes = 60 * 3,
        display = document.querySelector('#timer');
    startTimer(threeMinutes, display);
    //elapsed time
        elapsedTime=threeMinutes-display;
        console.log(threeMinutes, display.innerHTML);

};

//Global variables
let elapsedTime=0;
let getCards = document.querySelectorAll('.card');
let clicks = 0;
let cardsOpen = [];
let scoreKeeper = [];
let moves = document.getElementById('stars');
let frog = Array.from(getCards);
let reset = document.querySelector('.restart');
let matchCount = 0;
let attempts = 0;
//Event Listeners
reset.addEventListener('click', restart);
frog.forEach(function(flip) {
    flip.addEventListener('click', function x() {
        if (!flip.classList.contains('open') && !flip.classList.contains('show') && cardsOpen.length < 2) {
            cardsOpen.push(flip);
            scoreKeeper.push(flip);
            flip.classList.add('open', 'show');
            if (cardsOpen.length == 2) {
                if (matchCount % 2 == 0) {
                    attempts++;
                    document.getElementById("moves").innerHTML = "moves " + attempts;
                };
                update_score();
            };
        };
    });
});

function update_score() {
    if (scoreKeeper.length == 26) {
        if (moves.hasChildNodes()) {
            moves.removeChild(moves.childNodes[1]);
        };
    };
    if (scoreKeeper.length == 46) {
        if (moves.hasChildNodes()) {
            moves.removeChild(moves.childNodes[2]);
        };
    };
    if (scoreKeeper.length == 60) {
        alert("You are out of moves!!! Click reset and try again.");
    };
    matchCheck();
};

function matchCheck() {
    if (cardsOpen[0].querySelector('i').classList.item(1) == cardsOpen[1].querySelector('i').classList.item(1)) {
        console.log('its a match');
        cardsOpen.forEach(function(match) {
            match.classList.add('match');
            cardsOpen = [];
            matchCount++;
            if (matchCount == 16) {
                setTimeout(function(){
                console.log("you win");
                alert("You Won in " );
            },300);
            }
        });
    } else {
        setTimeout(function() {
            cardsOpen.forEach(function(unmatched) {
                unmatched.classList.remove('open', 'show');
                match_test = false;
                cardsOpen = [];
            });
        }, 1000);
    };
};

//Timer function
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (matchCount == 16) {
            return;
        };
        if (--timer < 0) {
            timer = duration;
            alert("You are out of time!!!");
        };
    }, 1000);
};


//reset game/reset page function
function restart() {
    location.reload();
};
