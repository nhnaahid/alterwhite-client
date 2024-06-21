import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Fade, Slide } from "react-awesome-reveal";
import './banner.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../../assets/slider1.jpg'
import banner2 from '../../../assets/slider2.jpg'
import banner3 from '../../../assets/slider3.jpg'
const Banner = () => {
    return (
        <div className='h-[300px] md:h-dvh w-full relative'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>

            </Swiper>

            <div className='absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60 space-y-1 md:space-y-3'>
            <div className='absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60 space-y-1 md:space-y-2'>
                <Slide>
                    <h1 className='font-oswald text-3xl md:text-6xl font-semibold text-white uppercase'>Welcome to AlterWhite</h1>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <h1 className='text-xl md:text-3xl text-white font-merri font-semibold'>Knowledge Empowers Choices</h1>
                    <p className='text-xs md:text-base font-poppins text-gray-200 text-center font-semibold font-merri'>Discover, Compare, Decide: Your Ultimate Product Knowledge Hub</p>
                    <button className="btn btn-sm md:btn-md btn-outline text-white mt-2">Explore Now</button>
                    <h1 className='text-xl md:text-2xl text-white'>Knowledge Empowers Choices</h1>
                    <p className='text-xs md:text-base font-poppins  text-white text-center'>Discover, Compare, Decide: Your Ultimate Product Knowledge Hub</p>
                    <button className="btn btn-outline text-white mt-2">Explore Now</button>
                </Fade>
            </div>
        </div>
        </div>
    );
};

export default Banner;