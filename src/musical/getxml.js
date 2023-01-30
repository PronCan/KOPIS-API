const express = require('express');
const router = express.Router();
const request = require('request');

// const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr?service=3e0f7775aa2a40238ae5d390ad13362c&stdate=20230101&eddate=20230228&cpage=1&rows=10&prfstate=02';
// 공연목록 - 뮤지컬
const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
// + '&stdate=20230101'
// + '&eddate=20230228'
+ '&cpage=2'
+ '&rows=20'
+ '&prfstate=02' // 공연중
+ '&shcate=GGGA'// 장르코드: 뮤지컬

const url = encodeURI(t_url);
console.log(url);
// 공연목록 - 연극
const t_url2 = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
// + '&stdate=20230101'
// + '&eddate=20230228'
+ '&cpage=1'
+ '&rows=20'
+ '&prfstate=02'
+ '&shcate=AAAA'// 장르코드: 연극

const url2 = encodeURI(t_url2);
console.log(url2);

// 예매상황판
const t_url3 = 'http://kopis.or.kr/openApi/restful/boxoffice'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
+ '&ststype=week'   // 주별, 월별, 일별 가능 (month/week/day)
+ '&date=20230130'
+ '&catecode=AAAA' // 장르코드 연극
// + '&area=11' //서울
const url3 = encodeURI(t_url3);
console.log(url3);

router.get('/mu_api', (req, res) => {
    request(
        {
            url: url,
            method: "GET",
        },
        (error, response, body) => {
            res.send(body);
        }
    )
})

router.get('/theater_api', (req, res) => {
    request(
        {
            url: url2,
            method: "GET",
        },
        (error, response, body) => {
            res.send(body);
        }
    )
})

router.get('/get_rank', (req, res) => {
    request(
        {
            url: url3,
            method: "GET",
        },
        (error, response, body) => {
            res.send(body);
        }
    )
})

module.exports = router;