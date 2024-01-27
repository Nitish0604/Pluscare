import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';
import './Hero.css';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const Carousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            // effect="fade"
            on={{
                slideChangeTransitionStart: (swiper) => {
                    const slides = swiper.slides;
                    slides.forEach((slide) => {
                        slide.style.transform = 'scale(0.5)';
                    });
                },
                slideChangeTransitionEnd: (swiper) => {
                    const slides = swiper.slides;
                    slides.forEach((slide) => {
                        slide.style.transform = 'scale(1)';
                    });
                },
            }}
            loop={true}
            className="mySwiper"
        >
            {/* slide1 */}
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <div className='flex flex-col gap-2 w-[45%] absolute z-[1] top-[50%] left-[10%] translate-y-[-50%]'>
                        <h1 className='text-[2.6rem] font-bold tracking-tight leading-[3rem] '>
                            Ensuring Health and Wellness for Every Generation
                        </h1>
                        <p className='text-[1.3rem] text-blue tracking-tighter font-semibold'>
                            Subscribe to Our Medicare Plan for Comprehensive Coverage!
                        </p>
                        <Link to="/subscription">
                            <button className="button-86">Secure Your Health Today</button>
                        </Link>
                    </div>
                    <img className='absolute object-cover' src='https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/babies-and-toddlers-health/urgent-care-vs-er-peds-hero.jpg?h=500&iar=0&mh=500&mw=1300&w=1297&hash=8E8D9E41F58B53A983AAEC30A6A6DB2B' alt='newBirthBoy'></img>
                </div>
            </SwiperSlide>

            {/* slide2 */}
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <div className='flex flex-col gap-2 w-[45%] absolute z-[1] top-[50%] left-[10%] translate-y-[-50%]'>
                        <h1 className='text-[2.6rem] font-bold tracking-tight leading-[3rem] '>
                            Guiding You Through the Joys of New Parenthood
                        </h1>
                        <p className='text-[1.3rem] text-blue tracking-tighter font-semibold'>
                            From Pregnancy to Parenting, Your Personalized Mentor for Every Milestone
                        </p>
                        <Link to="/subscription">
                            <button className="button-87"></button>
                        </Link>
                    </div>
                    <img className='absolute object-cover' src='https://i.ytimg.com/vi/URIBkkzpDOc/maxresdefault.jpg'
                        alt='newPregnancy'></img>
                </div>
            </SwiperSlide>

            {/* slide3 */}
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <div className='flex flex-col gap-2 w-[45%] absolute z-[1] top-[50%] left-[10%] translate-y-[-50%]'>
                        <h1 className='text-[2.6rem] font-bold tracking-tight text-midBlue leading-[3rem] '>
                            Your Mentor on the Path to Parenthood
                        </h1>
                        <p className='text-[1.3rem] text-blue tracking-tighter font-semibold'>
                            Supporting, Guiding, and Celebrating the Magic of New Births and Growing Families
                        </p>
                        <Link to="/subscription">
                            <button className="button-86">Don,t Hesitate Take New Step</button>
                        </Link>
                    </div>
                    <img className='absolute object-cover' src='https://www.hindustantimes.com/ht-img/img/2023/05/26/1600x900/-Pic-for-representation-_1685111948482.jpg' alt='pregnantLady'></img>
                </div>
            </SwiperSlide>

            {/* slide4 */}
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <div className='flex flex-col gap-2 w-[45%] absolute z-[1] top-[50%] left-[10%] translate-y-[-50%]'>
                        <h1 className='text-[2.6rem] font-bold tracking-tight leading-[3rem] '>
                            Your Trusted Companion in the Journey of Aging
                        </h1>
                        <p className='text-[1.3rem] text-blue tracking-tighter font-semibold'>
                            Providing Dedicated Assistance and Guidance for a Fulfilling Senior Lifestyle
                        </p>
                        <Link to="/subscription">
                            <button className="button-88">Secure Your Health Today</button>
                        </Link>
                    </div>
                    <img className='absolute object-cover' src='https://img.freepik.com/free-photo/patient-getting-covid-19-test_23-2148813495.jpg?w=1380&t=st=1706085555~exp=1706086155~hmac=b3449a0f6fc01d1216a5d03d688989939d7573d9e753c8c70f17a3dc5be00349'
                        alt='oldPeople'></img>
                </div>
            </SwiperSlide>

            {/* slide5 */}
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <div className='flex flex-col gap-2 w-[45%] absolute z-[1] top-[50%] left-[10%] translate-y-[-50%]'>
                        <h1 className='text-[2.6rem] font-bold tracking-tight leading-[3rem] '>
                            Your Pregnancy Companion for Every Step
                        </h1>
                        <p className='text-[1.3rem] text-blue tracking-tighter font-semibold'>
                            Nurturing Expecting Mothers with Expert Guidance and Compassionate Support
                        </p>
                        <Link to="/subscription">
                            <button className="button-86">Secure Your Health Today</button>
                        </Link>
                    </div>
                    <img className='absolute object-cover' src='https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/241/2022/07/istockphoto-1372113926-612x612-1.jpg' alt='newBirthOne'></img>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
