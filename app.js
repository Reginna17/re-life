console.log("我是哈士奇")
let startBtn = document.getElementById("start")
let gamepic = document.getElementById("gamepic")
let videoBtn = document.getElementById("video")
let informationBtn = document.getElementById("information")
let mediaBtn=document.getElementById("media")
let titlepic=document.getElementById("titlepic")
let mediapic=document.getElementById("mediapic")
let audio = document.getElementById("backgroundAudio")
let firstvideo = document.getElementById("firstvideo")
let board =document.querySelector('.board')
let selections = document.querySelector('.selections')
let music = document.getElementById('music')
let gameStatus = "start"
console.log(qa)
startBtn.addEventListener("click",function(){
    console.log("哈士奇又來了")
    selections.innerHTML = "";
    audio.pause();
    titlepic.style.display = 'none';
    //videoBtn.style.display = 'none';
    //startBtn.style.display = 'none';
    //informationBtn.style.display = 'none';
    //titlepic.style.display = 'none';
    //mediaBtn.style.display ='none';
})
videoBtn.addEventListener("click", shark)
function shark(){
    console.log("鯊魚寶寶來了喔( ´థ౪థ）σ")
    window.location.href="https://youtu.be/RgkogvXAy9Q?si=gZ0OXJrKPq9sG9jB"
}
informationBtn.addEventListener("click",function(){
    console.log("長官我可以加薪嗎QAQ")
    window.location.href="https://www1.cgmh.org.tw/intr/intr2/c0910/department/%E6%9E%97%E5%8F%A3%E7%A4%BE%E6%9C%8D%E8%AA%B2/excursion12.html"
})
mediaBtn.addEventListener("click",function(){
    if (audio.paused) {
        audio.play();
        mediapic.src="https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/musicon.png"
    }else {
        audio.pause();
        mediapic.src="https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/musicstop.png"
    }
})
startBtn.addEventListener("click",function(){
    console.log("要換影片了")
    let storyHtml = `
        <div class="storybegin"> 
            <video class="faint" id="faint" autoplay src="https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/最終更新影片.mov" type="video/mp4"></video>
            <img class="nextstyle" id="nextbottom" src="https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/forward.png"></img>
        </div>`;
    board.insertAdjacentHTML('beforeend', storyHtml);
    let nextstyleBtn = document.getElementById("nextbottom")
    let faintvideo = document.getElementById("faint")
    nextstyleBtn.addEventListener("click",function(){
        console.log("遊戲開始啦")
        faintvideo.style.display ="none";
        board.innerHTML = ""
        audio.play();
        changePic(qa[gameStatus].title, qa[gameStatus].storySkip, qa[gameStatus].yes.title, qa[gameStatus].no.title, qa[gameStatus].pic)
    });
    document.addEventListener('DOMContentLoaded', function() {
    faintvideo.addEventListener('ended', function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Opera and Safari
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    });
    });
})
function changePic(topic, storySkip, yes, no, background){
    board.innerHTML = ""
    gamepic.src = background
    let storyHtml = `
    <div class="content">
        <div class="topic">${topic}</div>
        <div class="storySkip">${storySkip}</div>
        <div class="yesNo">
            <div class="choose" id="yes">${yes}</div>
            <div class="choose" id="no">${no}</div>
        </div>
    </div>    
    `;
    board.insertAdjacentHTML('beforeend', storyHtml);
    let yesBtn =document.getElementById("yes")
    let noBtn =document.getElementById("no")
    yesBtn.addEventListener("click", function(){
        console.log("哈士奇很可愛")
        answer("yes")
    })
    noBtn.addEventListener("click", function(){
        console.log("柴犬很可愛")
        answer("no")
    })
}
function skipPic(telling,skipPic,storySkip){
    board.innerHTML = ""
    gamepic.src = skipPic
    let skipHtml =`
    <div class="content">
        <div class="telling">${telling}</div>
        <div class="storySkip">${storySkip}</div>
        <img class="nextstyle" id="nextbottom" src="https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/forward.png"></img>
        </div>
    `;
    board.insertAdjacentHTML('beforeend',skipHtml);
    let nextstyleBtn = document.getElementById("nextbottom")
    nextstyleBtn.addEventListener("click",function(){
        console.log("遊戲開始啦")
        answer("next")
    })
}
function ending(background){
    board.innerHTML = ""
    gamepic.src = background
    let endingHtml = `
    <div class="content">
        <div class="topic">Re-Life</div>
        <div class="storySkip">遊戲沒有返回鍵<br>如同人生選擇後就無法後悔再來一遍<br><br>人從一出生就開始與死亡直面<br>坦然面對才能不抱遺憾<br>為自己的離世提前規劃一份清單</div>
        <div class="QAtest" id="QA">填寫Re-Life問券~</div>
        <div class="QAtest" id="ACP">更多安寧及病人自主權立法資訊</div>
    </div>    
    `;
    board.insertAdjacentHTML('beforeend', endingHtml);
    let QAtest = document.getElementById("QA")
    QAtest.addEventListener("click",function(){
        window.location.href="https://www.surveycake.com/s/eYoRX"
    })
    let ACPbtn =document.getElementById("ACP")
    ACPbtn.addEventListener("click",function(){
        window.location.href="https://hpcod.mohw.gov.tw/HospWeb/RWD/PageType/acp/introduction.aspx"
    }) 
} 
function answer(ans){
    console.log(qa[gameStatus].nextStatus)
    if (ans ==="yes"){
        gameStatus = qa[gameStatus].yes.nextStatus
        if (qa[gameStatus].selection){
            changePic(qa[gameStatus].title, qa[gameStatus].storySkip, qa[gameStatus].yes.title, qa[gameStatus].no.title, qa[gameStatus].pic)
        }else{
            console.log("skipPic")
            skipPic(qa[gameStatus].title, qa[gameStatus].pic, qa[gameStatus].storySkip)
        }
    } else if (ans === "no"){
        gameStatus = qa[gameStatus].no.nextStatus
        if (qa[gameStatus].selection){
            changePic(qa[gameStatus].title, qa[gameStatus].storySkip, qa[gameStatus].yes.title, qa[gameStatus].no.title, qa[gameStatus].pic)
        }else{
            console.log("skipPic")
            skipPic(qa[gameStatus].title, qa[gameStatus].pic, qa[gameStatus].storySkip)
        }
    } else if (qa[gameStatus].nextStatus ==="ENDING"){
        console.log("出現ACP")
        ending("https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/24.png")
    } else {
        gameStatus = qa[gameStatus].nextStatus
        if (qa[gameStatus].selection){
            changePic(qa[gameStatus].title, qa[gameStatus].storySkip, qa[gameStatus].yes.title, qa[gameStatus].no.title, qa[gameStatus].pic)
        }else{
            console.log("skipPic")
            skipPic(qa[gameStatus].title, qa[gameStatus].pic, qa[gameStatus].storySkip)
        }
    }
}
