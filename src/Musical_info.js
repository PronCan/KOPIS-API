import React, {useContext, useState, useEffect, useTransition} from 'react'
import axios from 'axios';
import './musical.scss'
import { useLocation } from 'react-router-dom';
import logo from './img/logo2.png';
const xml2json = require('node-xml2json');

const Musical_info = () => {
  const [isPending, startTransition] = useTransition();

  const location = useLocation();
  const data = location.state.data;
  const data_parse = JSON.parse(data);
  const index = location.state.index.idx;
  const _data = data_parse[index];
  console.log('_data', _data);
  const mt20id = _data.mt20id; // 공연 조회용 id

  // 공연 관련 세부정보
  const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr/'
    + mt20id
    + '?service=3e0f7775aa2a40238ae5d390ad13362c';
  const thmu_info_url = encodeURI(t_url);
  console.log(thmu_info_url);

  const [info, setInfo] = useState();

  useEffect(()=>{
    function getData() {
      axios.get(thmu_info_url)
        .then(res => {
          startTransition(async()=>{
            var _json = await xml2json.parser(res.data);
            setInfo(_json);
          });
        })
    }
    getData();
  },[])

  console.log("info", info);

  return (
    <div className='mv-main'>
      <div className='mv-logo'>
        <img src={logo}></img>
      </div>
        <div className='mv-wrap'>
          <div className='mv-wrap-top'>
            <span className='mv-wrap-img'>
              <img src={_data.poster} alt='뮤지컬포스터'></img>
            </span>
            <div className='mv-context'>
                <h1>{_data.prfnm}</h1>
                <h2></h2>
                <p>감독 김아무개</p>
                <p>나,너,우리쟤</p>
                <p>클래식</p>
                <p>공연시간</p>
                <p>장소</p>
                <p>PF210026PF210026PF210026PF210026PF210026PF210026PF210026 </p>
                <button>예매하기</button>
            </div>
          </div>
          <div className='mv-review'>
              <h2>관람평</h2>
              <div className='mv-review-input'>
                <input placeholder='관람후기작성'></input>
                <button>등록하기</button>
              </div>
              <ul>
                <li>후기후기후기후기후기후기후기</li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Musical_info