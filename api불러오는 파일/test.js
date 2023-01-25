const express = require('express');
const router = express.Router();
const request = require('request');
const converter = require("xml-js");

const t_url = 'http://www.kopis.or.kr/openApi/restful/prfstsPrfBy?service=3e0f7775aa2a40238ae5d390ad13362c&cpage=1&rows=10&stdate=20160601&eddate=20160630&shcate=AAAA&shprfnm=아들'
const url = encodeURI(t_url);

router.get('/', (req, res) => {
    request(
        {
            url: url,
            method: "GET",
        },
        (error, response, body) => {
            const xmltojson = converter.xml2json(body);
            res.send(xmltojson);
        }
    )
})

module.exports = router;