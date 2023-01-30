import React, { useState } from 'react'
import $ from 'jquery';

// let [data, setData] = useState([]);

const Musical_getapi = () => {
    // 공연목록 
    const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
            + '?service=3e0f7775aa2a40238ae5d390ad13362c'
            // + '&stdate=20230101'
            // + '&eddate=20230228'
            + '&cpage=1'
            + '&rows=10'
            + '&prfstate=02'; // 공연중
    const url = encodeURI(t_url);

    $.ajax({
      url : url,
      type : "GET",
      success : function(xml){
          console.log(xml);
      }
  }); 
   
  // return (
  //   data.map((res) => {
  //       // <div key={}
  //   })
  // )
}

export default Musical_getapi