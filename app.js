console.log("我是哈士奇")
let startBtn = document.getElementById("start")
let gamepic = document.getElementById("gamepic")
let videoBtn = document.getElementById("video")
let informationBtn = document.getElementById("information")
let mediaBtn=document.getElementById("media")
let titlepic=document.getElementById("titlepic")
let mediapic=document.getElementById("mediapic")
let audio = document.getElementById("backgroundAudio")
let firstvideo = document.getElementById("firstvideo") //應片按鈕
let board =document.querySelector('.board')
let selections = document.querySelector('.selections')
let music = document.getElementById('music')
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
    window.location.href="https://www.youtube.com/watch?v=iYxQgkOH-hA"
}
informationBtn.addEventListener("click",function(){
    console.log("長官我可以加薪嗎QAQ")
    window.location.href="https://hpcod.mohw.gov.tw/HospWeb/RWD/PageType/acp/introduction.aspx"
})
mediaBtn.addEventListener("click",function(){
    if (audio.paused) {
        audio.play();
        mediapic.src="musicon.png"
    }else {
        audio.pause();
        mediapic.src="musicstop.png"
    }
})
startBtn.addEventListener("click",function(){
    console.log("要換影片了")
    let storyHtml = `
        <div class="storybegin"> 
            <video class="faint" id="faint" autoplay src="開頭.mp4" type="video/mp4"></video>
            <div class="nextstyle" id="nextbottom">&#128315;</div>
        </div>`;
    board.insertAdjacentHTML('beforeend', storyHtml);
    let nextstyleBtn = document.getElementById("nextbottom")
    let faintvideo = document.getElementById("faint")
    nextstyleBtn.addEventListener("click",function(){
        console.log("遊戲開始啦")
        faintvideo.style.display ="none";
        board.innerHTML = ""
        changePic("ON NG??", "接受放置鼻胃管","拒絕放置鼻胃管", "NG.jpg")
    })
});
function changePic(topic, yes, no, background){
    board.innerHTML = ""
    gamepic.src = background
    let storyHtml = `
    <div class="content">
        <div class="topic">${topic}</div>
        <div class="yesNo">
            <div class="choose" id="yes">${yes}</div>
            <div class="choose" id="no">${no}</div>
        </div>
    </div>    
    `;
    board.insertAdjacentHTML('beforeend', storyHtml);
    //let yes =document.getElementById("yes")
    //let no =document.getElementById("no")
}
