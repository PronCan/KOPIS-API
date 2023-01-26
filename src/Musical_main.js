import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './common.scss'
import './musical_main.scss'

// import "./BoxOffice.css";

// import required modules
import { EffectCoverflow, Mousewheel, Autoplay } from "swiper";

const Musical_main = () => {
  return (
    <>
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

        <div className='boxofficetxt'>
            뮤지컬 순위
        </div>

        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // pagination={{ clickable: true }}
        centeredSlides={true}
        slidesPerView={4}
        // spaceBetween={250}
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
      >  

          <div className='second-swiper'>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86729/86729_1000.jpg" alt='1' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86072/86072_1000.jpg" alt='2'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86750/86750_1000.jpg" alt='3'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86720/86720_1000.jpg" alt='4'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86157/86157_1000.jpg" alt='5'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86751/86751_1000.jpg" alt='6'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86728/86728_1000.jpg" alt='7'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86754/86754_1000.jpg" alt='8'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86745/86745_1000.jpg" alt='9'/>
          </SwiperSlide>
          <SwiperSlide>
            <img className='boxofficesp' src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83203/83203_1000.jpg" alt='10'/>
          </SwiperSlide>
          </div>
      </Swiper>
    </>
  )
}

export default Musical_main