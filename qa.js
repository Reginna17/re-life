let qa = {
    "start": {
        "selection": true,
        "title": "是否要放置鼻胃管?",
        "storySkip": "我暈倒了<br>不是一次，而是越來越多次<br>甚至這次醒來時還發現吃東西無法吞嚥<br>醫師以我目前的狀況建議放置鼻胃管<br>管子可以灌牛奶維持一天所需的營養",
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
        "storySkip": "這種情況使我沒辦法獨自一人待在病房<br>日漸虛弱的我，需要有人協助<br>家人來照顧比較熟悉，但會少一份收入<br>請看護有專業的人，但一天要2,700到3,000元不等的費用",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic3.jpg",
        "yes": {
            "title":"家人輪流照顧",
            "nextStatus": "3"
        },
        "no": {
            "title":"請看護照顧",
            "nextStatus": "4"
        }
    },
    "3":{
        "selection": false,
        "title": "家人輪流照顧",
        "storySkip": "家人決定輪流來醫院照顧我<br>他們希望我能盡量由嘴巴進食<br>在醫療人員沒有同意的情況下<br>嘗試餵了很多次飯菜<br>我不想辜負他們的心意",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic4.jpg",
        "nextStatus": "E"
    },
    "4":{
        "selection": false,
        "title": "24小時看護照顧",
        "storySkip": "他們沒有時間，必須請看護<br>這是一筆並不小的費用......<br>我不是一個很好的雇主<br>但也絕對不是一個隨意謾罵或指使的雇主<br>朋友家人來探視時<br>總是告訴我看護懶散及不適任<br>我只是笑著說還好",
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
        "title": "無法繼續治療",
        "storySkip": "治療始終還是不敵癌細胞擴散的速度<br>癌細胞侵蝕著我的意識，我無法開口說話<br>偶爾因為疼痛或不舒服才有呻吟跟胡亂擺動肢體的反應<br>此時醫師評估已經無法再做任何治癒性的治療了",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic6.jpg",
        "nextStatus": "H"  
    },
    "H":{
        "selection": true,
        "title": "出院準備",
        "storySkip": "醫師告訴家人有兩種方向<br>一個是安寧共同照護<br>由安寧團隊與現在原有的醫療團隊結合<br>在治療計畫中加入安寧照護<br>期限為一個月<br>另一種則是轉至安寧緩和醫療照顧的病房<br>只是與當初的目標不同<br>不以治癒疾病為目標，而是提升病人的生活品質為目的<br>若狀況穩定，還是能夠執行出院準備",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic7.jpg",
        "yes": {
            "title":"可接受",
            "nextStatus": "5"
        },
        "no": {
            "title":"無法接受",
            "nextStatus": "6"
        }
    },
    "5":{
        "selection": false,
        "title": "家人可以接受",
        "storySkip": "一開始對於安寧是排斥的<br>很多人都認為選擇安寧就等於放棄治療<br>認為就是等死的地方<br>但是上網查了很多資訊<br>發現其實並不是想像中的恐怖<br>雖然比較放心，卻開始擔心起費用問題<br>共照師說：「別擔心!安寧療護有健保<br>加上病人領有重大傷病卡，費用部分會減免很多」",
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
        "selection": false,
        "title": "身為家屬，你會怎麼選擇?",
        "storySkip": "在安寧病房裡，身體的不舒服得到了相當大的改善<br>醫師建議我們可以居家安寧或者到機構休養<br>回家需要照顧人力和設備<br>申請居家安寧後醫師和護理師會依照要訪視<br>在家中照顧上有問題，可以聯絡護理師諮詢<br>護理師也能協助幫病人更換管路",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic10.png",
        "nextStatus": "I1"
    },
    "I1":{
        "selection": true,
        "title": "身為家屬，你會怎麼選擇?",
        "storySkip": "而長期照護機構必須要全額自費<br>長時間下來是一筆非常大的開銷<br>可以接受安寧或癌症的機構目前偏少數<br>若病人需要緊急醫療處理，還是會被送往醫院",
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
        "title": "善終",
        "storySkip": "我們可以陪伴病人更安心地在家往生<br>並且跟他道謝、道歉、道愛跟道別<br>學習如何放下<br>在他離世時，他是好看的，平靜地躺著，就像是睡著了一般",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic12.png",
        "nextStatus": "pic19" 
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
        "nextStatus": "pic20"
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
        "nextStatus": "pic21"
        },
    "2":{
        "selection": false,
        "title": "不放鼻胃管",
        "storySkip": "得了癌症之後，食慾越來越差<br>但還是有想吃東西的時候<br>雖然偶爾會嗆咳，但我還是希望從嘴巴進食<br>這樣才能享受到食物的味道<br>我將不放鼻胃管的決定告知了醫師<br>醫師尊重我的想法",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic17.jpg",
        "nextStatus": "dEND"
    },
    "dEND":{
        "selection": false,
        "title": "我想為自己做決定",
        "storySkip": "他將最近醫界推動的「預立醫療照護諮商」資訊遞給了我<br>剎那間，有了預立醫療決定的決心",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/pic18.jpg",
        "nextStatus": "pic22"
    },
    "pic19":{
        "selection": false,
        "title": "讓自己決定如何說再見",
        "storySkip": "多年後，隨著時代進步<br>病人自主權利法的推行<br>醫療文化不再重視家庭及醫療父權主義<br>而是將決定權交還給病人",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/19.png",
        "nextStatus": "pic191"
    },
    "pic191":{
        "selection": false,
        "title": "THE END<br>讓自己決定如何說再見",
        "storySkip": "確保了病人即使昏迷或無法清楚表達<br>其意願仍能獲得保障<br>也降低家屬或醫療委任代理人的自責及內疚感",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/19.png",
        "nextStatus": "ENDING"
    },
    "pic20":{
        "selection": false,
        "title": "THE END<br>加工賴活不如好死",
        "storySkip": "隨著醫療科技不斷進步<br>加工賴活也越來越不如好死<br>如果疾病痊癒已經不再可能<br>要選擇減輕痛苦平靜的走？<br>還是在急救和電擊中存活？",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/20.png",
        "nextStatus": "ENDING"
    },
    "pic21":{
        "selection": false,
        "title": "家人的壓力",
        "storySkip": "整理他的房間時<br>預立醫療決定手冊引起了我的好奇心<br>使我停下手邊的動作<br>沒想到一張紙條從書裡飄落掉到地上",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/21.png",
        "nextStatus": "pic211"
    },
    "pic211":{
        "selection": false,
        "title": "THE END<br>家人的壓力",
        "storySkip": "「不要為你們所做的決定而感到內疚或自責」<br>「我永遠都知道你們一直是我最愛的家人」<br>「也很抱歉，讓你們承受了做決定的壓力」",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/21.png",
        "nextStatus": "ENDING"
    },
    "pic22":{
        "selection": false,
        "title": "預立醫療照護諮商",
        "storySkip": "這幾天反覆思考<br>看著醫師遞給我的資訊<br>我屬於腦腫瘤末期<br>是符合簽署預立醫療決定的病人<br>但簽署之前還是需要找其他家人<br>一起去門診跟諮商小組仔細會談了解內容",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/22.png",
        "nextStatus": "pic25"
    },
    "pic23":{
        "selection": false,
        "title": "THE END<br>為自己做決定",
        "storySkip": "從小到大，一直希望能被認同<br>總是走在父母規劃好的道路上<br>一輩子都在為了別人而活<br>而這次我想為了自己做一次選擇<br>也為了家人們將來不會有任何愧疚與壓力",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/23.png",
        "nextStatus": "ENDING"
    },
    "pic25":{
        "selection": false,
        "title": "預立醫療諮商",
        "storySkip": "選擇了一個陽光明媚的午後<br>帶著爸媽還有我哥跟朋友一起去了預立醫療照護諮商門診<br>過程中雖然難免會有意見衝突<br>但經過解釋後他們還是可以了解我的想法<br>在諮商小組充分說明解釋後",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/25.png",
        "nextStatus": "pic26"
    },
    "pic26":{
        "selection": true,
        "title": "我的意願與決定",
        "storySkip": "醫生說我可以決定不要接受維生醫療，代表我不要任何只維持生命的措施<br>以及不要管灌飲食或營養針<br>又或是希望在半年內，接受化學治療的嘗試之後停止<br>但我或醫療委任代理人能於期間內<br>隨時表達停止的意願",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/26.png",
        "yes": {
            "title":"我不要維生醫療及人工餵養",
            "nextStatus": "pic27"
        },
        "no": {
            "title":"我要限時嘗試治療",
            "nextStatus": "pic31"
        }
    },
    "pic27":{
        "selection": false,
        "title": "未來",
        "storySkip": "當然，我曉得並不是簽署後就表示放棄<br>在不可能治癒時<br>不想使用機器式維生系統來延長無謂的生命，甚至造成感染等併發症<br>不想承擔因CPR造成肋骨斷裂及器官破裂等風險",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/27.png",
        "nextStatus": "pic271"
    },
    "pic271":{
        "selection": false,
        "title": "未來",
        "storySkip": "不想即使救了回來，大腦也可能缺氧<br>造成永久性損傷，而成為植物人<br>不想治療後還要額外承受可能發生的不良反應及副作用<br>更不想使用抗生素只是控制感染，卻無法逆轉疾病",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/27.png",
        "nextStatus": "pic28"
    },
    "pic28":{
        "selection": false,
        "title": "我還能做甚麼...",
        "storySkip": "醫師說癌症已經不能治療<br>但安寧緩和醫療可以透過醫療處置，改善不適症狀，提升生活品質<br>我聽了醫師的建議去緩和醫療門診<br>思考很多關於死亡的事",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/28.png",
        "nextStatus": "pic281"
    },
    "pic281":{
        "selection": false,
        "title": "我還能做甚麼...",
        "storySkip": "因為有太多想說的話<br>我只能以寫信方式給我最愛的家人<br>謝謝他們，多愛他們，對不起他們，還有再見",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/28.png",
        "nextStatus": "pic29"
    },
    "pic29":{
        "selection": false,
        "title": "我的旅程",
        "storySkip": "趁著身體狀況還算穩定<br>收拾行李，揹上背包<br>我完成了之前沒辦法完成的環島之旅<br>後來，我再也無法從床上下來<br>不曉得是因為長時間的亢奮後鬆懈<br>導致我的疾病突然惡化<br>還是其實我已經準備跟這個世界說再見",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/29.png",
        "nextStatus": "pic30"
    },
    "pic30":{
        "selection": false,
        "title": "THE END<br>最後一哩路",
        "storySkip": "在走向生命盡頭的路上<br>很高興我為自己做了決定<br>慶幸自己不是被傳統醫療文化重視的家庭及醫療父權主義下所犧牲的人<br>在親愛的家人陪伴下，度過生命最後一刻<br>讓生命的最後一哩路沒有遺憾",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/30.png",
        "nextStatus": "ENDING" 
    },
    "pic31":{
        "selection": false,
        "title": "限時嘗試治療",
        "storySkip": "我給自己半年的時間再試一次<br>哪怕只有一點好轉的可能<br>不想太快放棄的我<br>還是可以再忍受這半年治療所帶來的痛苦",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/31.png",
        "nextStatus": "pic32"
    },
    "pic32":{
        "selection": false,
        "title": "決定放下",
        "storySkip": "治療始終還是敵不過癌細胞擴散的速度<br>這半年並沒有使我的腦癌好轉<br>我又因為治療再次承受虛弱、噁心嘔吐、口腔潰瘍等副作用<br>不過正因為有限時嘗試治療<br>我曉得自己的極限在哪<br>所以甘願放下",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/32.png",
        "nextStatus": "pic33"
    },
    "pic33":{
        "selection": false,
        "title": "THE END<br>向殘酷的仁慈說再見",
        "storySkip": "存在主義哲學之父海德格：「向死而生的意義是<br>當你無限接近死亡，才能深切體會生的意義」<br><br>因為生病，我開始面對死亡<br>因為病人自主權利法，我開始學會如何準備死亡<br>人終將會死，只是你無法選擇什麼時候死去",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/33.png",
        "nextStatus": "pic331"
    },
    "pic331":{
        "selection": false,
        "title": "THE END<br>向殘酷的仁慈說再見",
        "storySkip": "我最後的記憶停留在限時嘗試治療結束後的第一天<br>我告訴他們把我樹葬<br>不用每年都來看我<br>只要偶爾想起我",
        "pic": "https://pub-40e07f428a124fd39e46fbb640611db6.r2.dev/33.png",
        "nextStatus": "ENDING"
    },

}