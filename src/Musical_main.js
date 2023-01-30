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
  var rank_apiurl = 'http://localhost:5000/get_rank'
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
  var [_rank, setRank] = useState([]);

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

  // 연극 랭킹
  useEffect(()=>{
    function getData() {
      axios.get(rank_apiurl)
        .then(res => {
           startTransition(async()=>{
            var _json = await xml2json.parser(res.data);
            console.log('연극랭킹', _json);
            setRank(_json.boxofs.boxof);
           
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
        <p>{content.prfnm}</p>
      </SwiperSlide>
    ))
  }

  function setRankContent() {
    return _rank&&_rank.map((content, idx) => (
      <SwiperSlide key={idx} className="mySwiper-mv-slide">
        {/* <div>{JSON.stringify(content)}</div> */}
        <img src={`http://www.kopis.or.kr${content.poster}`} />
        <p>{content.rnum}위</p>
        <p>{content.prfnm}</p>
      </SwiperSlide>
    ))
  }
  
  return (
    <>
    <div className='mv-logo'>
      <img src={logo}></img>
    </div>
    <ul className='select-th-mv'>
      <li><button>연극</button></li>
      <li><button>뮤지컬</button></li>
    </ul>
    <div className='mv-content-list'>
      <span className='top-text'>주간 연극 랭킹 &nbsp;&nbsp;&nbsp;&nbsp;{isPending ? 'Loading.....' : null}</span>
      <div className='first-swiper'>
          {/* <Swiper
            navigation={true}
            modules={[Navigation,Autoplay]}
            // mousewheel={true}
            loop={true} 
            autoplay={{ delay: 2000 }}
            className="mainSwiper">
            {
              setRankContent()
            }
          </Swiper> */}
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: true,
          }}
          mousewheel={true}
          modules={[EffectCoverflow, Pagination, Mousewheel]}
          className="mySwiper-th-rank"
        >
            {
              setRankContent()
            }
        </Swiper>
      </div>
      <span className='mid-text'>Now Showing &nbsp;&nbsp;&nbsp;&nbsp;{isPending ? 'Loading.....' : null}</span>
      <div className='second-swiper'>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={7}
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