

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
console.log(array);
frog=array;
    }
//cosider looping through getCards and append each iteration to the deck class
let getCards = document.querySelectorAll('.card');
let clicks=0;
let cardsOpen=[];
let moves=document.getElementById('stars');
let frog=Array.from(getCards);
let reset=document.querySelector('.restart');
reset.addEventListener('click',restart);


    frog.forEach(function(flip){
        flip.addEventListener('click', function x(){
            if(!flip.classList.contains('open') && !flip.classList.contains('show')){
            cardsOpen.push(flip);
            flip.classList.add('open','show');
        };
            update_score();
        });
    });


    function update_score(){
        clicks++
            if(cardsOpen.length==2){
                moves.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
                matchCheck();
            };
    };


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
            match_test=false;
            cardsOpen=[];
        });
        },1000);

    }

}
function restart(){
    console.log('foo');

}
