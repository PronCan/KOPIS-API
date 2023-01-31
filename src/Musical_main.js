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

// Context

const xml2json = require('node-xml2json');

// import required modules

const Musical_main = () => {
  const [isPending, startTransition] = useTransition();
  var apiurl = 'http://localhost:5000/mu_api';
  var rankth_apiurl = 'http://localhost:5000/get_rank_th'
  var rankmu_apiurl = 'http://localhost:5000/get_rank_mu'
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
  var [_rankth, setThRank] = useState([]);
  var [_rankmu, setMuRank] = useState([]);

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
      axios.get(rankth_apiurl)
        .then(res => {
           startTransition(async()=>{
            var _json = await xml2json.parser(res.data);
            console.log('연극랭킹', _json);
            setThRank(_json.boxofs.boxof);
          });
        })
    }
    getData();
  },[])

    // 뮤 랭킹
    useEffect(()=>{
      function getData() {
        axios.get(rankmu_apiurl)
          .then(res => {
             startTransition(async()=>{
              var _json = await xml2json.parser(res.data);
              console.log('뮤랭킹', _json);
              setMuRank(_json.boxofs.boxof);
            });
          })
      }
      getData();
    },[])

console.log("_json", _data);

  function setContent() {
    return _data&&_data.map((content, idx) => (
      <SwiperSlide key={idx} className="mySwiper-mv-slide">
        <img src={content.poster}></img>
        <p>{content.prfnm}</p>
        <p>{content.prfpdfrom} ~ {content.prfpdto}</p>
      </SwiperSlide>
    ))
  }

  function setRankContent(type) {
    switch(type) {
      case 'th':
        return _rankth&&_rankth.map((content, idx) => (
          <SwiperSlide key={idx} className="mySwiper-mv-slide">
            {/* <div>{JSON.stringify(content)}</div> */}
            <img src={`http://www.kopis.or.kr${content.poster}`} />
            <p>{content.rnum}위</p>
            <p>{content.prfnm}</p>
          </SwiperSlide>
        ))
      case 'mu':
        return _rankmu&&_rankmu.map((content, idx) => (
          <SwiperSlide key={idx} className="mySwiper-mv-slide">
            {/* <div>{JSON.stringify(content)}</div> */}
            <img src={`http://www.kopis.or.kr${content.poster}`} />
            <p>{content.rnum}위</p>
            <p>{content.prfnm}</p>
          </SwiperSlide>
        ))
    }
  }

  return (
    <>
    <div className='mv-logo'>
      <img src={logo}></img>
    </div>
    <ul className='select-th-mv'>
      <li><button className="thbtn" onClick={()=> {
        setRankContent('th');
        $('.first-swiper').removeClass('hidden')
        $('.mu-rank-swiper').addClass('hidden')
        $('.top-text').text('주간 연극 랭킹');
        }}>연극</button></li>
      <li><button className="mubtn" onClick={()=> {
        setRankContent('mu');
        $('.mu-rank-swiper').removeClass('hidden')
        $('.first-swiper').addClass('hidden')
        $('.top-text').html('주간 뮤지컬 랭킹');
        }
      }>뮤지컬</button></li>
    </ul>
    {isPending ? 'Loading.....' : null}
    <div className='mv-content-list'>
      <span className='top-text'>주간 연극 랭킹</span>
      <div className='first-swiper'>
          {/* <Swiper
            navigation={true}
            modules={[Navigation,Autoplay]}
            // mousewheel={true}
            loop={true} 
            autoplay={{ delay: 2000 }}
            className="mainSwiper">
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
              setRankContent('th')
            }
        </Swiper>
      </div>
      <div className='mu-rank-swiper hidden'>
          {/* <Swiper
            navigation={true}
            modules={[Navigation,Autoplay]}
            // mousewheel={true}
            loop={true} 
            autoplay={{ delay: 2000 }}
            className="mainSwiper">
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
          className="mySwiper-mu-rank"
        >
            {
              setRankContent('mu')
            }
        </Swiper>
      </div>
      <span className='mid-text'>Now Showing &nbsp;&nbsp;&nbsp;&nbsp;{isPending ? 'Loading.....' : null}</span>
      <div className='second-swiper'>
        <Swiper
          // effect={"coverflow"}
          // grabCursor={true}
          // centeredSlides={true}
          // slidesPerView={7}
          // coverflowEffect={{
          //   rotate: 10,
          //   stretch: 0,
          //   depth: 120,
          //   modifier: 2,
          //   slideShadows: true,
          // }}
          // mousewheel={true}
          // modules={[EffectCoverflow, Pagination, Mousewheel]}
          // className="mySwiper-mv"
          navigation={true}
            modules={[Navigation,Autoplay]}
            // mousewheel={true}
            loop={true} 
            autoplay={{ delay: 3000 }}
            slidesPerView={4}
            className="mainSwiper"
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