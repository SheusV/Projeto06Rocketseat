//DOM

// Document Object Model

import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"


const{
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay
}= elements


const controls= Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer= Timer({
    minutesDisplay,
    secondsDisplay,    
    resetControl: controls.reset,
    
})





//Event-driven
//programacao imperativa
//callback

buttonPlay.addEventListener('click',function()  {
   
    controls.play()
    timer.countdown()

})
buttonPause.addEventListener('click',function()  {
    controls.pause()
    timer.hold()
    
 

})

buttonStop.addEventListener('click',function(){
    controls.reset()
    timer.reset()
    
})

const sound = Sound()

buttonSoundOn.addEventListener('click',function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})
buttonSoundOff.addEventListener('click',function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sound.bgAudio.play() 
})

buttonSet.addEventListener('click',function(){
 let newMinutes = controls.getMinutes()
 if (!newMinutes){
    timer.reset()
    return
 }
 timer.displayUpdate(newMinutes, 0)
 timer.updateMinutes(newMinutes)

})