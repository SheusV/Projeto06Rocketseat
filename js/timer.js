export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControl,
    

}){

    let timerTimeOut
    let minutes =Number(minutesDisplay.textContent)

    function displayUpdate(newMinutes,seconds){
        newMinutes= newMinutes === undefined ? minutes : newMinutes
        seconds = seconds ===undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
        secondsDisplay.textContent= String(seconds).padStart(2,"0")
        
    }

    function reset(){
        displayUpdate(minutes,0)
        clearTimeout(timerTimeOut)
    }

    function countdown (){
    timerTimeOut=  setTimeout(function(){
            let seconds= Number(secondsDisplay.textContent)
            let minutes= Number(minutesDisplay.textContent) 
            let isFinished = minutes <= 0 && seconds <=0
            
            displayUpdate(minutes, 0)
            if (isFinished){
                resetControl()
                displayUpdate()
                
                return
            }
            
            
            if(seconds <= 0 ){
                seconds= 60
                --minutes
            }
            
            
            
            displayUpdate(minutes,String(seconds -1))
            countdown()
        },1000)

    }
    function updateMinutes(newMinutes){
        minutes =newMinutes
    }
    function hold(){
        clearTimeout(timerTimeOut)
    }


 return{
    countdown,
    reset,
    displayUpdate,
    updateMinutes,
    hold
 }
}

