const express = require('express');
const router = express.Router();
const request = require('request');

// const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr?service=3e0f7775aa2a40238ae5d390ad13362c&stdate=20230101&eddate=20230228&cpage=1&rows=10&prfstate=02';
// 공연목록 
const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
+ '?service=3e0f7775aa2a40238ae5d390ad13362c'
// + '&stdate=20230101'
// + '&eddate=20230228'
+ '&cpage=1'
+ '&rows=10'
+ '&prfstate=02'; // 공연중
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

module.exports = router;