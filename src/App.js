import './App.css';
import $ from 'jquery';
import axios from 'axios';
// import React, {useEffect, useRef} from 'react';
const xml2json = require('node-xml2json');

var apiurl = 'http://localhost:5000/mu_api';

function App() {
  //  function getData() {
  //   return  fetch(apiurl)
  //   .then((res)=> {
  //     $('.App').text(res);
  //     // console.log(res);
  //   })
  // }

  function getData2() {
    axios.get(apiurl)
      .then(res => {
        // $('.App').html(res.request.responseText);
        // $('.list').text(res.request.response);
        //  musXMLdata = res.request.response;
         
         var _json = xml2json.parser(res.data);
         console.log('_json\n', _json);
         var _html = '';
         for(var i=0; i<_json.dbs.db.length; i++) {
            // _html += `<img src=${_json.dbs.db[i].poster}>`;
            _html += `<img style="width:300px; height:300px;" src=${_json.dbs.db[i].poster}>`;
         }
        $('.testjson').html(_html);
//끼얏호응
      })
  }
  getData2();
  return (
    <div className="App">
      <p>sdklfjskldfjskldjfklsjdfkl</p>
      <p className='testjson'></p>
    </div>
  );
}

export default App;
