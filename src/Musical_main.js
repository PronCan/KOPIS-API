import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper";
import { createContext, useEffect, useState, useTransition, useContext } from 'react';
import { Link } from 'react-router-dom'
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
// import MusicalContent from './Musical_info';

const xml2json = require('node-xml2json');

const Musical_main = () => {
  const [isPending, startTransition] = useTransition();
  //로컬용
  // var apiurl = 'http://localhost:5000/mu_api';
  // var rankth_apiurl = 'http://localhost:5000/get_rank_th'
  // var rankmu_apiurl = 'http://localhost:5000/get_rank_mu'
  // 배포용
  const _cloudsv_url = 'https://port-0-kopis-api-1b5xkk2fldl11gxs.gksl2.cloudtype.app/'
  var apiurl = _cloudsv_url + 'mu_api';
  var rankth_apiurl = _cloudsv_url + 'get_rank_th';
  var rankmu_apiurl = _cloudsv_url + 'get_rank_mu';
  // console.log(apiurl);
  // console.log(rankth_apiurl);
  // console.log(rankmu_apiurl);

  var [_data, setData] = useState();
  var [_rankth, setThRank] = useState();
  var [_rankmu, setMuRank] = useState();
  const DataContext = createContext(_data);

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

// console.log("_json", _data);
{/* <MusicalContent data={content} index={idx} /> */}
  function setContent() {
    return _data&&_data.map((content, idx) => (
      <SwiperSlide key={idx} className="mySwiper-mv-slide">
        <div className='swiper-cover'>
          <Link to='/thmu_info' ref={{content, idx}}><button>상세보기</button></Link>
          <button>예매하기</button>
        </div>
        <img src={content.poster} alt={idx}></img>
        <p>{content.prfnm}</p>
        <p>{content.prfpdfrom} ~ {content.prfpdto}</p>
        <p>{content.fcltynm}</p>
      </SwiperSlide>
    ))
  }
  
// 상위 20개만 출력되게 제한 - 나중에
  function setThRankContent() { 
    return _rankth&&_rankth.map((content, idx) => (
        <SwiperSlide key={idx} className="mySwiper-mv-slide">
          {/* <div>{JSON.stringify(content)}</div> */}
          <img src={`http://www.kopis.or.kr${content.poster}`} alt={idx}/>
          <p>{content.rnum}위</p>
          <p>{content.prfnm}</p>
        </SwiperSlide>
    ))
  }
  function setMuRankContent() {
    return _rankmu&&_rankmu.map((content, idx) => (
      <SwiperSlide key={idx} className="mySwiper-mv-slide">
        {/* <div>{JSON.stringify(content)}</div> */}
        <img src={`http://www.kopis.or.kr${content.poster}`} alt={idx} />
        <p>{content.rnum}위</p>
        <p>{content.prfnm}</p>
      </SwiperSlide>
    ))
  }

  return (
    <>
    <div className='mv-logo'>
      <img src={logo} alt='logo'></img>
    </div>
    <ul className='select-th-mv'>
      <li><button className="thbtn" onClick={()=> {
        // setRankContent('th');
        $('.first-swiper').removeClass('hidden')
        $('.mu-rank-swiper').addClass('hidden')
        $('.top-text').text('주간 연극 랭킹 TOP 20');
        }}>연극</button></li>
      <li><button className="mubtn" onClick={()=> {
        // setRankContent('mu');
        $('.mu-rank-swiper').removeClass('hidden')
        $('.first-swiper').addClass('hidden')
        $('.top-text').html('주간 뮤지컬 랭킹 TOP 20');
        }
      }>뮤지컬</button></li>
    </ul>
    {isPending ? 'Loading.....' : null}
    <div className='mv-content-list'>
      <span className='top-text'>주간 연극 랭킹 TOP 20</span>
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
          clickable={true}
          // loop={true} 
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
              // setRankContent('th')
              setThRankContent()
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
          // loop={true} 
          clickable={true}
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
              // setRankContent('mu')
              setMuRankContent()
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
            autoplay={{ delay: 2500 }}
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