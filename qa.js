let qa = {
    "start": {
        "selection": true,
        "title": "是否要放置鼻胃管?",
        "storySkip": "我還年輕，所以積極努力的治療<br>即便治療使我虛弱<br>但我仍不敢想太多<br>只告訴自己是因為治療有效果<br>我暈倒了<br>不是一次，而是越來越多次<br>甚至這次醒來時還發現吃東西無法吞嚥<br>醫師以我目前的狀況建議放置鼻胃管<br>管子可以灌牛奶維持一天所需的營養",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/NG.jpg",
        "yes": {
            "title":"接受放置鼻胃管",
            "nextStatus": "1"
        },
        "no": {
            "title":"拒絕放置鼻胃管",
            "nextStatus": "2"
        }
    },
    "1": {
        "selection": false,
        "title": "接受放置鼻胃管",
        "storySkip": "雖然喉嚨一直因為鼻胃管有異物感<br>但我仍然覺得醫師的建議是對的",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic1.jpg",
        "nextStatus": "B"
    },
    "B":{
        "selection": false,
        "title": "鼻胃管造成的異物感",
        "storySkip": "畢竟我要有營養才有體力可以繼續治療<br>所以只要想到，或許有機會可以打敗癌症<br>也就沒有那麼在乎了......",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic1.jpg",
        "nextStatus": "C"
    },
    "C":{
        "selection": false,
        "title": "繼續治療",
        "storySkip": "隨著體力恢復<br>治療也跟著繼續<br>但隨之面臨的是治療後更嚴重的副作用",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic2.jpg",
        "nextStatus": "D"
    },
    "D":{
        "selection": true,
        "title": "照顧人手問題",
        "storySkip": "這種情況使我沒辦法獨自一人待在病房<br>日漸虛弱的我，需要有人協助",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic3.jpg",
        "yes": {
            "title":"家人輪流照顧<br>→費用0元",
            "nextStatus": "3"
        },
        "no": {
            "title":"家人並沒有空，必須請看護<br>→費用2700-3000元台幣/天不等",
            "nextStatus": "4"
        }
    },
    "3":{
        "selection": false,
        "title": "家人自己顧",
        "storySkip": "家人決定輪流來醫院照顧我<br>他們希望我能盡量由嘴巴進食<br>在醫療人員沒有同意的情況下<br>嘗試餵了很多次飯菜<br>我不想辜負他們的心意",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic4.jpg",
        "nextStatus": "E"
    },
    "4":{
        "selection": false,
        "title": "請看護顧",
        "storySkip": "他們沒有時間可以幫忙照顧，必須花錢請看護<br>這是一筆並不小的數目......<br>我不是一個很好的雇主<br>但也絕對不是一個隨意謾罵或指使的雇主<br>朋友家人來探視時<br>總是告訴我看護懶散及不適任<br>我只是笑著說還好",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic5.jpg",
        "nextStatus": "F"
    },
    "E":{
        "selection": false,
        "title": "吸入性肺炎",
        "storySkip": "但這讓我反覆嗆咳，甚至吸入性肺炎<br>無疑使我更不舒服，但也不希望他們因此而難過",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic4.jpg",
        "nextStatus": "G" 
    },
    "F":{
        "selection": false,
        "title": "尾底壓力性損傷",
        "storySkip": "前幾天<br>護理師在我屁股的地方發現有個壓瘡<br>換藥時那椎心的疼痛，無疑是增加我的痛苦......",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic5.jpg",
        "nextStatus": "G" 
    },
    "G":{
        "selection": false,
        "title": "治療不敵腫瘤擴散速度，無法繼續做治療",
        "storySkip": "治療始終還是不敵癌細胞擴散的速度<br>癌細胞侵蝕著我的意識，我無法開口說話<br>偶爾因為疼痛或不舒服才有呻吟跟胡亂擺動肢體的反應<br>此時醫師評估已經無法再做任何治癒性的治療了",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic6.jpg",
        "nextStatus": "H"  
    },
    "H":{
        "selection": true,
        "title": "症狀控制後的出院準備",
        "storySkip": "醫師告訴家人有兩種方向<br>一個是安寧共同照護<br>由安寧團隊與現在原有的醫療團隊結合<br>在治療計畫中加入安寧照護<br>期限為一個月<br>另一種則是轉至安寧緩和醫療照顧的病房<br>只是與當初的目標不同<br>不以治癒疾病為目標，而是提升病人的生活品質為目的<br>若在狀況穩定<br>還是能夠執行出院準備",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic7.jpg",
        "yes": {
            "title":"家人可接受",
            "nextStatus": "5"
        },
        "no": {
            "title":"家人無法接受",
            "nextStatus": "6"
        }
    },
    "5":{
        "selection": false,
        "title": "家人可以接受",
        "storySkip": "一開始對於安寧是排斥的<br>很多人都認為選擇安寧就等於放棄治療<br>認為就是等死的地方<br>但是上網查了很多資訊<br>發現其實並不是想像中的恐怖<br>雖然比較放心，卻開始擔心起費用問題<br>共照師回答：「別擔心!安寧療護有健保，加上病人領有重大傷病卡，費用部分會減免很多」",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/10c.jpg",
        "nextStatus": "I" 
    },
    "6":{
        "selection": false,
        "title": "家人無法接受",
        "storySkip": "這什麼破醫院爛醫師<br>他的狀況才沒有這麼糟糕<br>我們不相信他沒辦法再治療了<br>人家總說西醫治標不治本<br>聽鄰居說有位中醫師特別厲害<br>好幾個癌症都被他給看好了<br>我們現在就趕快出院帶他去治",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic15.jpg",
        "nextStatus": "J" 
    },
    "I":{
        "selection": true,
        "title": "身為家屬，你會怎麼選擇?",
        "storySkip": "在安寧病房裡，身體的不舒服得到了相當大的改善<br>醫師建議我們可以居家安寧或者到機構休養<br>回家需要照顧人力和設備<br>申請居家安寧後醫師和護理師會依照要訪視<br>在家中照顧上有問題，可以聯絡護理師諮詢<br>護理師也能協助幫病人更換管路<br><br>而長期照護機構必須要全額自費<br>長時間下來是一筆非常大的開銷<br>可以接受安寧或癌症的機構目前偏少數<br>若病人需要緊急醫療處理，還是會被送往醫院",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic10.png",
        "yes": {
            "title":"居家安寧",
            "nextStatus": "7"
        },
        "no": {
            "title":"長照機構",
            "nextStatus": "8"
        } 
    },
    "J":{
        "selection": false,
        "title": "接受中醫治療",
        "storySkip": "半夜時分，病人突然全身大力抽搐不止<br>臉色蒼白呼吸一度停止<br>我們緊張地叫了救護車趕往急診<br>他的狀況危急，必須要插管急救<br>但他的病歷顯示是腦癌末期",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic16.jpg",
        "nextStatus": "M" 
    },
    "7":{
        "selection": false,
        "title": "居家安寧",
        "storySkip": "家裡面的空間及人力是允許的<br>也希望病人可以在自己所熟悉的環境裡治療，甚至接受死亡",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/10b.jpg",
        "nextStatus": "K" 
    },
    "K":{
        "selection": false,
        "title": "返家後的生活",
        "storySkip": "在居家安寧的醫療團隊幫助下，我們知道什麼是瀕死症狀<br>當這些症狀出現時，該如何處理才能讓病人舒服",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic11.png",
        "nextStatus": "aEND" 
    },
    "aEND":{
        "selection": false,
        "title": "返家後的生活",
        "storySkip": "我們可以陪伴病人更安心地在家往生<br>並且跟他道謝、道歉、道愛跟道別<br>學習如何放下<br>在他離世時，他是好看的，平靜地躺著，就像是睡著了一般",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic12.png",
        "nextStatus": "ENDING" 
    },
    "8":{
        "selection": false,
        "title": "長照機構",
        "storySkip": "短暫照顧上的人力可行<br>面臨長期照顧，家人都必須要上班賺錢，實在無法做到<br>家中空間狹窄，沒辦法擺放病人所需的設備<br>雖然知道必須負擔一筆費用<br>但我認為有專業的人員照顧還是最好",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic13.png",
        "nextStatus": "L" 
    },
    "L":{
        "selection": false,
        "title": "長照困難",
        "storySkip": "當初醫師告知只剩下半年的時間<br>卻沒想到......如今已過了6年<br>機構的費用，早已成為我們日常生活的一部分<br>生活即便再困苦，我們還是希望他能夠受到好的照護<br>但我們還是抱持著哪天他奇蹟般的醒來，甚至開口喊我們的名字",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/10a.jpg",
        "nextStatus": "bEND"  
    },
    "bEND":{
        "selection": false,
        "title": "長照悲歌",
        "storySkip": "但他只是一個躺在病床上<br>維持基本的新陳代謝，卻無法溝通和思考的植物人<br>任由機構的照顧服務員翻動身體<br>我們作為他的家人<br>我們是這世界上最了解他的人<br>這真的是他所想要的嗎?<br>我握著他的手反覆的思考<br>如果他還能做決定時......",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic14.png",
        "nextStatus": "ENDING"
    },
    "M":{
        "selection": false,
        "title": "插管",
        "storySkip": "插管急救雖然可以暫時維持呼吸<br>卻無法改變腦部不可逆損傷之事實<br>醫師這樣告知我們<br>但我們不想失去他<br>所以請醫生一定要救到底，醫師及護理師便為他開始插管及CPR<br>他的身上多了更多管子，機器的聲音和醫護人員的聲音圍繞著腦海",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic16.jpg",
        "nextStatus": "N"
    },
    "N":{
        "selection": false,
        "title": "如果...可以重來",
        "storySkip": "急救30分鐘後仍搶救無效<br>醫師宣告了他的死亡時間",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic16.jpg",
        "nextStatus": "cEND"
    },
    "cEND":{
        "selection": false,
        "title": "如果...可以重來",
        "storySkip": "我們很難過...<br>看到他因急救造成胸前凹陷，氣管內管布滿血跡<br>我們更是痛苦的說不出話<br>我們相互凝視，就像是在問對方<br>我們這樣做是正確的嗎?",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic16.jpg",
        "nextStatus": "ENDING"
        },
    "2":{
        "selection": false,
        "title": "不放鼻胃管",
        "storySkip": "得了癌症之後，食欲越來越差<br>但還是有想吃東西的時候<br>雖然偶爾會嗆咳，但我還是希望從嘴巴進食<br>這樣才能享受到食物的味道<br>我將不放鼻胃管的決定告知了醫師<br>醫師尊重我的想法",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic17.jpg",
        "nextStatus": "dEND"
    },
    "dEND":{
        "selection": false,
        "title": "我想為自己做決定",
        "storySkip": "他將最近醫界推動的「預立醫療照護諮商」資訊遞給了我<br>剎那間，有了預立醫療決定的決心<br>不管是為了自己，還是為了家人......",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic18.jpg",
        "nextStatus": "ENDING"
    },
}