console.log("我是哈士奇")
let startBtn = document.getElementById("start")
let gamepic = document.getElementById("gamepic")
let gameH1=document.querySelector(".game")
let titlep=document.querySelector(".title")
let videoBtn = document.getElementById("video")
let informationBtn = document.getElementById("information")
let connectBtn = document.getElementById("connect")
let mediaBtn=document.getElementById("media")
startBtn.addEventListener("click",function(){
    console.log("哈士奇又來了")
    gamepic.src="image.png"
    videoBtn.style.display = 'none';
    gameH1.style.display = 'none';
    titlep.style.display = 'none';
    startBtn.style.display = 'none';
    informationBtn.style.display = 'none';
    connectBtn.style.display = 'none';
})
videoBtn.addEventListener("click",function(){
    console.log("鯊魚寶寶來了喔( ´థ౪థ）σ")
    window.location.href="https://www.youtube.com/watch?v=iYxQgkOH-hA"
})
informationBtn.addEventListener("click",function(){
    console.log("長官我可以加薪嗎QAQ")
    window.location.href="https://hpcod.mohw.gov.tw/HospWeb/RWD/PageType/acp/introduction.aspx"
})
connectBtn.addEventListener("click",function(){
    console.log("其實我也不知道要聯絡誰TAT")
    window.location.href="https://www.cgmh.org.tw/tw/SocialService/Service#4"
})
mediaBtn.addEventListener("click",function(){
    let audio = document.getElementById("backgroundAudio");
    if (audio.paused) {
        audio.play();
        mediaBtn.innerHTML="&#128265;"
    }else {
        audio.pause();
        mediaBtn.innerHTML="&#128263;"
    }}
)
