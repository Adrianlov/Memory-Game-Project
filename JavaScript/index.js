let cards = document.querySelectorAll('.card');


let hasFlippedCard = false;
let firstCard 
let secondCard 
let lockBoard = false
let mouseClickSound = document.getElementById('click-sound')
let matchSound = document.getElementById('matchSound')
let GameSong = document.getElementById('mainSound')

let clickEl= document.getElementById('clicks')

let allCards =[]

let addClicks = []







let startingSeconds = 100
  setInterval(function (){
    startingSeconds--
    GameSong.play()

    if(startingSeconds >= 0 ){
      let coundownEl = document.getElementById('countDown')
      coundownEl.textContent = startingSeconds

    }

    if(allCards === 8){
      window.location.href = 'restart.html'
     

   
    }

    if(startingSeconds === 0 ){
    
      window.location.href = 'youLose.html'
      addClicks.textContent

      
    }

  
  },1000)



/* On every match this array takes plus 1 until reaches 8 for the number of cards in the game*/




function flipCard(){
  if(lockBoard) return
  if(this === firstCard) return
  mouseClickSound.play()
   addClicks++
   
  clickEl.textContent = addClicks
 
  this.classList.add('flip');



  if(!hasFlippedCard ){
    // first click
    hasFlippedCard = true;
    firstCard = this;

    

  }else{
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch()

    
   
}}

/*Adds an click event for every card and calls the function flipCard*/
cards.forEach(card => card.addEventListener('click', flipCard,)) 







/*This function uses the dataset atribute in html to find 2 matching cards and it triggers a sound*/
function checkForMatch() {
  if(firstCard.dataset.info === 
      secondCard.dataset.info){
        disableCards() 
        matchSound.play()
        allCards++
        console.log(allCards)
        
        
        
      
      }else
      {unflipCards() }    
  }


  function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetGame()
  }


  
  function unflipCards(){
    lockBoard = true

    setTimeout(() => {
          firstCard.classList.remove('flip')
          secondCard.classList.remove('flip')

          resetGame()
        
        },1000)
  }



  function resetGame(){
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
  }


  (function shuffleCards(){
    cards.forEach(i => {
      let random = Math.floor(Math.random() * 16)
      i.style.order = random
    })
  })()
 


let old_clicks =JSON.parse(localStorage.getItem('addClicks'))
old_clicks.push(addClicks)

localStorage.setItem('data', JSON.stringify(old_clicks))
