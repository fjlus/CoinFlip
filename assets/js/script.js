// TODO: Declare any global variables we need
let countHeads = 0;
let percentageHeads = 0;

let countTails = 0;
let percentageTails = 0;

let countClicks = 0;

document.addEventListener('DOMContentLoaded', function () {
    let flipButton = document.querySelector("#flip")
    let clearButton = document.querySelector("#clear")
    
    let imageSelector = document.querySelector("#penny-img")
    let statusSelector = document.querySelector("#status-text")
    
    let headsCount = document.querySelector("#heads")
    let headsPct = document.querySelector("#heads-percent")
    let tailsCount = document.querySelector("#tails")
    let tailsPct = document.querySelector("#tails-percent")
    // TODO: Add event listener and handler for flip and clear buttons
    flipButton.addEventListener("click", function(e){
       // TODO: Determine flip outcome
       countClicks ++;

       let result = Math.random (); //heads:0.0 - 0.50; tails: 0.51 -1.0
       console.log(result) 
       if(result <= 0.5){
            //heads
            imageSelector.src = "./assets/images/penny-heads.jpg" //match the image with the result
            statusSelector.textContent = "You flipped Heads!"//update status message with result
            countHeads ++ //update the count
            headsCount.textContent = `${countHeads}`
        } else {
            //tails
            imageSelector.src = "./assets/images/penny-tails.jpg"
            statusSelector.textContent = "You flipped Tails!"
            countTails ++ //update the count
            tailsCount.textContent = `${countTails}`
        }

        //percentages of heads and tails
        percentageHeads = Math.round((countHeads/countClicks) * 100)
        headsPct.textContent = `${percentageHeads}%`
        percentageTails = Math.round((countTails/countClicks) * 100)
        tailsPct.textContent = `${percentageTails}%`
        console.log(`heads %`, headsPct, `tails %`, tailsPct)
    })
    // Flip Button Click Handler
        
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
clearButton.addEventListener("click", function(e){
    
    imageSelector.src = "./assets/images/penny-heads.jpg"    
    // TODO: Reset global variables to 0
        headsCount.textContent = "0"
        headsPct.textContent = "0%"
        tailsCount.textContent = "0"
        tailsPct.textContent = "0%"
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        countHeads = 0;
        percentageHeads = 0;
        countTails = 0;
        percentageTails = 0;
        countClicks = 0;

        statusSelector.textContent = "Let's Get Rolling!"
    })
})
