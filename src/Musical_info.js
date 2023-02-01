import React, {useContext, useState} from 'react'
import { AppCont } from './Musical_context'
import './musical.scss'
import exImg from './img/example.png';
import logo from './img/logo2.png';

const Musical = () => {
  return (
    <div className='mv-main'>
      <div className='mv-logo'>
        <img src={logo}></img>
      </div>
        <div className='mv-wrap'>
          <div className='mv-wrap-top'>
            <span className='mv-wrap-img'>
              <img src={exImg} alt='뮤지컬포스터'></img>
            </span>
            <div className='mv-context'>
                <h1>THE KANDLE: Valentine's Special in 앙트레블</h1>
                <h2>THE KANDLE</h2>
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

export default Musical