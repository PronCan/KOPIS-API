import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper";
import { useEffect, useState, useTransition } from 'react';
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
  const [isPending, startTransition] = useTransition();
  var apiurl = 'http://localhost:5000/mu_api';
    // 공연목록 
  // const t_url = 'http://www.kopis.or.kr/openApi/restful/pblprfr'
  // + '?service=3e0f7775aa2a40238ae5d390ad13362c'
  // // + '&stdate=20230101'
  // // + '&eddate=20230228'
  // + '&cpage=1'
  // + '&rows=10'
  // + '&prfstate=02'; // 공연중
  // const apiurl = encodeURI(t_url);
  var [_data, setData] = useState([]);

  // 뮤지컬 목록
useEffect(()=>{
  function getData() {
    axios.get(apiurl)
      .then(res => {
         startTransition(async()=>{
          var _json = await xml2json.parser(res.data);
          setData(_json.dbs.db);
         
        });
      })
  }
  getData();
},[])

// useEffect(()=>{
//   function getData() {
//     startTransition(()=> {
//     axios.get(apiurl)
//       .then(res => (
//         async()=>{
//           var _json = await xml2json.parser(res.data);
//           setData(_json.dbs.db);
//         }
//       ))
//     })
//   }
//   getData();
// },[])

console.log("_json", _data);


  function setContent() {
    return _data&&_data.map((content, idx) => (
      <SwiperSlide key={idx} className="mySwiper-mv-slide">
        <img src={content.poster}></img>
        {/* <p>{content}</p> */}
      </SwiperSlide>
    ))
  }
  
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
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
          </Swiper>
      </div>
      <span className='mid-text'>Now Showing &nbsp;&nbsp;&nbsp;&nbsp;{isPending ? 'Loading.....' : null}</span>
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
            {
              setContent()
            }
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default Musical_main