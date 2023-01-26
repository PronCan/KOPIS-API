import './common.scss'
import './App.css';
import $ from 'jquery';
import axios from 'axios';
// import React, {useEffect, useRef} from 'react';
import MusicalContent from './Musical_content';
import MusicalMain from './Musical_main';

const xml2json = require('node-xml2json');

var apiurl = 'http://localhost:5000/mu_api';

function App() {
  function getData2() {
    axios.get(apiurl)
      .then(res => {
         var _json = xml2json.parser(res.data);
         console.log('_json\n', _json);
         var _html = '';
         for(var i=0; i<_json.dbs.db.length; i++) {
            // _html += `<img src=${_json.dbs.db[i].poster}>`;
           _html += `<img src=${_json.dbs.db[i].poster}>`;
         }
        $('.testjson').html(_html);
      })
  }

  // getData2();
  return (
    <div className="App">
      {/* <MusicalContent /> */}
      <MusicalMain />
      <p className='testjson'></p>
    </div>
  );
}

export default App;
