import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

const Main = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(2);

  const goToNextSlide = () => {
    if (swiper) {
      // @ts-ignore
      swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiper) {
      // @ts-ignore
      swiper.slidePrev();
    }
  };

  return (
    <div className="w-full h-[100vh] relative">
      <Swiper
        className="h-full"
        loop={true}
        // @ts-ignore
        onSwiper={(swiperInstance) => {
          setSwiper(swiperInstance);
          // @ts-ignore
          setTotalSlides(swiperInstance.slides.length);
        }}
        // @ts-ignore
        onSlideChange={(swiperInstance) => {
          // @ts-ignore
          let realIndex = swiperInstance.realIndex + 1; // 0부터 시작하므로 1 추가
          setActiveIndex(realIndex);
        }}
      >
        <SwiperSlide className="h-full">
          <img
            src="/img/main/main_1.jpg"
            alt="main"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="/img/main/main_2.jpg"
            alt="main"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>

      <div className="px-8 py-4 absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 bg-black bg-opacity-60 rounded-full flex items-center justify-between w-48 space-x-4">
        <button
          onClick={goToPrevSlide}
          className="z-10"
          aria-label="이전 슬라이드"
        >
          <img src="/img/main/prev.svg" alt="이전" className="w-6 h-6" />
        </button>

        <div className="flex gap-2 text-white text-base">
          <p className="font-bold">{activeIndex}</p>
          <p className="font-bold">/</p>
          <p className="font-bold">{totalSlides}</p>
        </div>

        <button
          onClick={goToNextSlide}
          className="z-10"
          aria-label="다음 슬라이드"
        >
          <img src="/img/main/next.svg" alt="다음" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Main;
