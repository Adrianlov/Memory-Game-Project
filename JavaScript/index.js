/* Selecting all the cards */

let cards = document.querySelectorAll('.card');

/*Adds an click event for every card and calls the function flipCard*/
cards.forEach(card => card.addEventListener('click', flipCard,)) 
/*..............................................*/

/* On every match this array takes plus 1 until reaches 8 for the number of cards in the game*/
let allCards =[]

/*If the cards dont match return false */
let hasFlippedCard = false;

/* Takes the value of the first and second card */
let firstCard 
let secondCard 


/* Loks the board and doesent permit for other cards to be flipped */
let lockBoard = false


/* Music and sound effects for the game */

let mouseClickSound = document.getElementById('click-sound')
let matchSound = document.getElementById('matchSound')
let YouLose = document.getElementById('youLose')
/*..................................................*/


/* Shows the clicks that you have made */ 
let clickEl= document.getElementById('clicks')
let addClicks = []

/*.................................................*/


let clicksEl = document.getElementById('clicks')




/* The game starts */

let startingSeconds = 50
  setInterval(function (){
    startingSeconds--
  
    if(startingSeconds >= 0 ){
      let coundownEl = document.getElementById('countDown')
      coundownEl.textContent = startingSeconds

    }

    if(allCards === 8){
     
      window.location.href = '../HTML/youWin.html'
     

   
    }

    if(startingSeconds === 0 ){
    
      window.location.href = '../HTML/youLose.html'
     
      
    }

  
  },1000)





/*..........................................................*/

function flipCard(){

  if(lockBoard) return
  if(this === firstCard) return

  this.classList.add('flip');

   mouseClickSound.play()

    addClicks++
    clickEl.textContent = addClicks
    
    /* Saves each click on the local storage so it can be retrive when You Lose or You Page are active*/

    let  retriveClicks = JSON.stringify(addClicks)
    localStorage.setItem('clicks', retriveClicks)

    /*................................................*/

  

  if(!hasFlippedCard ){
    // first click
    hasFlippedCard = true;
    firstCard = this;

    

  }else{
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch()

     
}}

/*..........................................................*/




/*..........................................................*/



/*This function uses the dataset atribute in html to find 2 matching cards and it triggers a sound*/

function checkForMatch() {
  // Are tha cards matching?

  if(firstCard.dataset.info === 
      secondCard.dataset.info){
        disableCards() 
        matchSound.play()
        allCards++
        console.log(allCards)
        
        
        
      
      }else
      {unflipCards() }    
  }


/*..........................................................*/



 //If it is a match!!

  function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetGame()
  }


/*..........................................................*/  


  // If the cards dont match.

  function unflipCards(){
    lockBoard = true

    setTimeout(() => {
          firstCard.classList.remove('flip')
          secondCard.classList.remove('flip')

          lockBoard = false

          resetGame()
        
        },600)
  }

/*..........................................................*/




/*..........................................................*/
  function resetGame(){
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
  }

  /*........................................................*/





  
  /*.......................................................*/

  (function shuffleCards(){
    cards.forEach(i => {
      let random = Math.floor(Math.random() * 16)
      i.style.order = random
    })
  })()
 



