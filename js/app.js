/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let getCards = document.querySelectorAll('.card');
let clicks=0;
let cardsOpen=[];

getCards.forEach(function(flip){
        flip.addEventListener('click', function(event){
        cardsOpen.push(flip);
        clicks++
            if(cardsOpen.length<3){
                flip.classList.add('open', 'show');
                }
            if(cardsOpen.length==2){
                matchCheck();
            }
    });
});



function matchCheck(){
    console.log('fire');
    if(cardsOpen[0].querySelector('i').classList.item(1)==cardsOpen[1].querySelector('i').classList.item(1)){
        console.log('its a match');
        cardsOpen.forEach(function(match){
            match.classList.add('match');
            cardsOpen=[];
        });
    }else{
        setTimeout(function(){
        cardsOpen.forEach(function(unmatched){
            unmatched.classList.remove('open', 'show');
            cardsOpen=[];
        });
    },1000);

    }

};
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
