console.log("我是哈士奇")
let startBtn = document.getElementById("start")
let gamepic = document.getElementById("gamepic")
startBtn.addEventListener("click",function(){
    console.log("哈士奇又來了")
    gamepic.src="image.png"
})