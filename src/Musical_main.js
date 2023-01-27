import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './common.scss'
import './musical_main.scss'
import $ from 'jquery';
import axios from 'axios';
import logo from './img/logo2.png';
// import "./BoxOffice.css";

const xml2json = require('node-xml2json');

// import required modules

const Musical_main = () => {
  // var apiurl = 'http://localhost:5000/mu_api';
    // 공연목록 
  const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
  + '?service=3e0f7775aa2a40238ae5d390ad13362c'
  // + '&stdate=20230101'
  // + '&eddate=20230228'
  + '&cpage=1'
  + '&rows=10'
  + '&prfstate=02'; // 공연중
  const apiurl = encodeURI(t_url);

  // 뮤지컬 목록
  function getData2() {
    axios.get(apiurl)
      .then(res => {
         var _json = xml2json.parser(res.data);
         console.log('_json\n', _json);
         var _html = '';
         _html += `<Swiper
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={4}
         coverflowEffect={{
           rotate: 10,
           stretch: 0,
           depth: 120,
           modifier: 2,
           slideShadows: true,
         }}
         mousewheel={true}
         modules={[EffectCoverflow, Pagination, Mousewheel]}
         className="mySwiper"
       >`;
         for(var i=0; i<_json.dbs.db.length; i++) {
            // _html += `<img src=${_json.dbs.db[i].poster}>`;
           _html += `<SwiperSlide><img className='boxofficesp' src="${_json.dbs.db[i].poster}" alt='${i}' /></SwiperSlide>`;
         }
         _html += '</Swiper>';
        $('.second-swiper').html(_html);
      })
  }
  // getData2();
  return (
    <>
    <div className='mv-logo'>
      <img src={logo}></img>
    </div>
    <div className='mv-content-list'>
      <div className='first-swiper'>
          <Swiper
            navigation={true}
            modules={[Navigation,Autoplay]}
            // mousewheel={true}
            loop={true}
            autoplay={{ delay: 2000 }}
            className="mainSwiper">
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86072/86072210859_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86072/86072210856_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86072/86072210854_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211579_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211578_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211577_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211576_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86729/86729211581_727.png" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86157/86157211607_727.jpg" alt='1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='main' src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000086/86157/86157211428_727.jpg" alt='1' />
            </SwiperSlide>
          </Swiper>
      </div>
      <span className='mid-text'>Now Showing</span>
      <div className='second-swiper'>
      <Swiper
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={4}
         coverflowEffect={{
           rotate: 10,
           stretch: 0,
           depth: 120,
           modifier: 2,
           slideShadows: true,
         }}
         mousewheel={true}
         modules={[EffectCoverflow, Pagination, Mousewheel]}
         className="mySwiper-mv"
       >

// SwiperSlide 를 map 돌리기

       </Swiper>
      </div>
    </div>
    </>
  )
}

export default Musical_main