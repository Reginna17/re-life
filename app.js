console.log("我是哈士奇")
let startBtn = document.getElementById("start")
let gamepic = document.getElementById("gamepic")
let videoBtn = document.getElementById("video")
let informationBtn = document.getElementById("information")
let mediaBtn=document.getElementById("media")
let titlepic=document.getElementById("titlepic")
let nextstyleBtn=document.getElementById("next")
let faintvideo=document.getElementById("faint")
let image2=document.getElementById("image2")
startBtn.addEventListener("click",function(){
    console.log("哈士奇又來了")
    videoBtn.style.display = 'none';
    startBtn.style.display = 'none';
    informationBtn.style.display = 'none';
    titlepic.style.display = 'none';
    mediaBtn.style.display ='none';
})
videoBtn.addEventListener("click",function(){
    console.log("鯊魚寶寶來了喔( ´థ౪థ）σ")
    window.location.href="https://www.youtube.com/watch?v=iYxQgkOH-hA"
})
informationBtn.addEventListener("click",function(){
    console.log("長官我可以加薪嗎QAQ")
    window.location.href="https://hpcod.mohw.gov.tw/HospWeb/RWD/PageType/acp/introduction.aspx"
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
startBtn.addEventListener("click",function(){
    console.log("要換影片了")
    let storyHtml =`
        <div class="storybegin"> 
            <div class="firstvideo" id="firstvideo"></div>
            <div class="nextstyle" id="nextstyle">&#128315;</div>
            <video class="faint" id="faint" autoplay muted loop src="開頭影片.mp4" type="video/mp4"></video>
        </div>
        <img id="image2" src="image.png" style="display:none;>
    `;
    let storyHtmla =document.querySelector('.board')
    storyHtmla.insertAdjacentHTML('beforeend', storyHtml);
    });
   