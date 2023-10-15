let qa = {
    "start": {
        "selection": true,
        "title": "是否要放置鼻胃管?",
        "pic": "picture/NG.jpg",
        "yes": {
            "title":"接受放置鼻胃管",
            "nextStatus": "A"
        },
        "no": {
            "title":"拒絕放置鼻胃管",
            "nextStatus": "1"
        }
    },
    "A": {
        "selection": false,
        "title": "放置後感覺很不舒服...感覺喉嚨一直有東西",
        "pic": "picture/NG.jpg",
        "nextStatus": "B"
    },
    "1": {
        "selection": true,
        "title": "醫師會診安寧共照師討論安寧的想法",
        "pic": "picture/NG.jpg",
        "yes": {
            "title":"決定簽署預立安寧緩和醫療暨維生醫療抉擇意願書(DNR 1)",
            "nextStatus": "3"
        },
        "no": {
            "title":"我不簽",
            "nextStatus": "2"
        }
    },
    "B": {
        "selection": false,
        "title": "繼續治療",
        "pic": "picture/NG.jpg",
        "nextStatus": "C"
    },
    "C": {
        "selection": true,
        "title": "照顧人手問題",
        "pic": "picture/NG.jpg",
        "yes": {
            "title":"家人自己照顧",
            "nextStatus": "F"
        },
        "no": {
            "title":"請看護",
            "nextStatus": "G"
        }
    },
    "F": {
        "selection": false,
        "title": "餵食嗆咳導致吸入性肺炎",
        "pic": "picture/NG.jpg",
        "nextStatus": "H"
    },
    "G": {
        "selection": false,
        "title": "尾底骨壓瘡",
        "pic": "picture/NG.jpg",
        "nextStatus": "H"
    },
    "H": {
        "selection": false,
        "title": "治療不敵腫瘤擴散速度，醫師評估無法繼續治療",
        "pic": "picture/NG.jpg",
        "nextStatus": "I"
    },

}