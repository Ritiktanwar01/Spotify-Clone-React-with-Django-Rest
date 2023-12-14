let audio = new Audio('http://127.0.0.1:5500/js/moyemoye.mp3')

function playerplay(){
    document.getElementById("playerbtn").classList.toggle("remove")
    document.getElementById("playerbtnpause").classList.toggle("remove")
    document.getElementById("durationmedia").innerHTML = audio.duration
    audio.play()
    
}

function playerpause(){
    document.getElementById("playerbtn").classList.toggle("remove")
    document.getElementById("playerbtnpause").classList.toggle("remove")
    audio.pause()
}
