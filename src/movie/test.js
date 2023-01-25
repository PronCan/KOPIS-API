const express = require('express');
const router = express.Router();
const request = require('request');
const converter = require("xml-js");

const key = '4OU26TO8981P9O2RCPX2';
const t_url = 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&detail=N&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=4OU26TO8981P9O2RCPX2';
const url = encodeURI(t_url);
console.log(url);

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