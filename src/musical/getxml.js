// import { InfoContext } from '../Musical_Context'
const express = require('express');
const router = express.Router();
const request = require('request');
const xml2json = require('node-xml2json');

const _date = new Date();
const today = '' + _date.getFullYear() + ( ((_date.getMonth()+1)<=9) ? "0"+(_date.getMonth()+1) : (_date.getMonth()+1) ) + _date.getDate();

// 공연목록 - 뮤지컬
const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
// + '&stdate=20230101'
// + '&eddate=20230228'
+ '&cpage=1'
+ '&rows=10'
+ '&prfstate=02' // 공연중
+ '&shcate=GGGA'// 장르코드: 뮤지컬
const url = encodeURI(t_url);
console.log(url);

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

// 공연목록 - 연극
const t_url2 = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
// + '&stdate=20230101'
// + '&eddate=20230228'
+ '&cpage=1'
+ '&rows=10'
+ '&prfstate=02'
+ '&shcate=AAAA'// 장르코드: 연극
const url2 = encodeURI(t_url2);
console.log(url2);

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

// 예매상황판 - 연극
const t_url3 = 'http://www.kopis.or.kr/openApi/restful/boxoffice'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
+ '&ststype=week'   // 주별, 월별, 일별 가능 (month/week/day)
+ '&date=' + today
+ '&catecode=AAAA' // 장르코드 연극
// + '&area=11' //서울
const url3 = encodeURI(t_url3);
console.log(url3);


router.get('/get_rank_th', (req, res) => {
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

// 예매상황판 - 뮤지컬
const t_url4 = 'http://www.kopis.or.kr/openApi/restful/boxoffice'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
+ '&ststype=week'   // 주별, 월별, 일별 가능 (month/week/day)
+ '&date=' + today
+ '&catecode=GGGA' // 장르코드 뮤지컬
// + '&area=11' //서울
const url4 = encodeURI(t_url4);
console.log(url4);

router.get('/get_rank_mu', (req, res) => {
    request(
        {
            url: url4,
            method: "GET",
        },
        (error, response, body) => {
            // console.log(JSON.stringify(body))
            // 4번결과중 id 변수 저장
            // var temp = JSON.stringify(body);
            // var temp2 = xml2json.parser(JSON.parse(temp));
            // mt20id = temp2.boxofs.boxof[0].mt20id;
            // console.log(mt20id);
            res.send(body);
        }
    )
})

router.get('/thmu_info', (req, res) => {
    // let {id} = req.params.id;
    let {id} = req.query;
    console.log(id)
    // 공연 관련 세부정보
    const t_url5 = 'http://www.kopis.or.kr/openApi/restful/pblprfr/'
    // + url4에서 받아온 공연코드 mt20id
    // + 'PF200830' // 물랑
    + id
    + '?service=3e0f7775aa2a40238ae5d390ad13362c'
    const url5 = encodeURI(t_url5);
    console.log(t_url5);

    request(
        {
            url: url5,
            method: "GET",
        },
        (error, response, body) => {
            res.send(body);
        }
    )
})

module.exports = router;