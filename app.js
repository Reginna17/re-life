console.log("我是哈士奇")
let startBtn = document.getElementById("start")
let gamepic = document.getElementById("gamepic")
startBtn.addEventListener("click",function(){
    console.log("哈士奇又來了")
    gamepic.src="image.png"
})
let videoBtn = document.getElementById("video")
videoBtn.addEventListener("click",function(){
    console.log("鯊魚寶寶來了喔( ´థ౪థ）σ")
    window.location.href="https://www.youtube.com/watch?v=iYxQgkOH-hA"
})
let informationBtn = document.getElementById("information")
informationBtn.addEventListener("click",function(){
    console.log("長官我可以加薪嗎QAQ")
    window.location.href="https://hpcod.mohw.gov.tw/HospWeb/RWD/PageType/acp/introduction.aspx"
})