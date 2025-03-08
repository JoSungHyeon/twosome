import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// 메뉴 카테고리 타입 정의
type MenuCategory = 'coffee' | 'dessert' | 'deli';

// 메뉴 아이템 타입 정의
interface MenuItem {
  id: number;
  name: string;
  image: string;
}

const Menu = () => {
  // 현재 선택된 카테고리
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('coffee');
  // Swiper 인스턴스
  const [swiper, setSwiper] = useState(null);
  // 현재 활성화된 슬라이드 인덱스
  const [activeIndex, setActiveIndex] = useState(0); // 초기값을 0으로 설정 (첫 번째 슬라이드)

  // 카테고리별 메뉴 데이터
  const menuData: Record<MenuCategory, MenuItem[]> = {
    coffee: [
      {
        id: 1,
        name: '아메리카노',
        image: '/img/menu/coffee_1.jpg',
      },
      {
        id: 2,
        name: '카페라떼',
        image: '/img/menu/coffee_2.jpg',
      },
      {
        id: 3,
        name: '바닐라 라떼',
        image: '/img/menu/coffee_3.jpg',
      },
      {
        id: 4,
        name: '카페모카',
        image: '/img/menu/coffee_4.jpg',
      },
    ],
    dessert: [
      {
        id: 1,
        name: '티라미수',
        image: '/img/menu/dessert_1.jpg',
      },
      {
        id: 2,
        name: '초코 케이크',
        image: '/img/menu/dessert_2.jpg',
      },
      {
        id: 3,
        name: '치즈 케이크',
        image: '/img/menu/dessert_3.jpg',
      },
      {
        id: 4,
        name: '치즈 케이크',
        image: '/img/menu/dessert_4.jpg',
      },
      {
        id: 5,
        name: '치즈 케이크',
        image: '/img/menu/dessert_5.jpg',
      },
      {
        id: 6,
        name: '치즈 케이크',
        image: '/img/menu/dessert_6.jpg',
      },
      {
        id: 7,
        name: '치즈 케이크',
        image: '/img/menu/dessert_7.jpg',
      },
    ],
    deli: [
      {
        id: 1,
        name: '잠봉 버터',
        image: '/img/menu/deli_1.jpg',
      },
      {
        id: 2,
        name: '에그 샐러드',
        image: '/img/menu/deli_2.jpg',
      },
      {
        id: 3,
        name: '크로크무슈',
        image: '/img/menu/deli_3.jpg',
      },
      {
        id: 4,
        name: '크로크무슈',
        image: '/img/menu/deli_4.jpg',
      },
      {
        id: 5,
        name: '크로크무슈',
        image: '/img/menu/deli_5.jpg',
      },
      {
        id: 6,
        name: '크로크무슈',
        image: '/img/menu/deli_6.jpg',
      },
      {
        id: 7,
        name: '크로크무슈',
        image: '/img/menu/deli_7.jpg',
      },
      {
        id: 8,
        name: '크로크무슈',
        image: '/img/menu/deli_8.jpg',
      },
    ],
  };

  // 카테고리 변경 시 activeIndex 초기화 및 첫 번째 슬라이드로 이동
  useEffect(() => {
    setActiveIndex(0); // 첫 번째 슬라이드 인덱스
    if (swiper) {
      // @ts-ignore
      swiper.slideTo(0); // 첫 번째 슬라이드로 이동
    }
  }, [activeCategory, swiper]);

  // 다음 슬라이드로 이동
  const goToNextSlide = () => {
    if (swiper) {
      // @ts-ignore
      swiper.slideNext();
    }
  };

  // 이전 슬라이드로 이동
  const goToPrevSlide = () => {
    if (swiper) {
      // @ts-ignore
      swiper.slidePrev();
    }
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category: MenuCategory) => {
    setActiveCategory(category);
  };

  // 현재 활성화된 메뉴 이름 가져오기
  const getActiveMenuName = () => {
    if (activeIndex >= 0 && menuData[activeCategory][activeIndex]) {
      return menuData[activeCategory][activeIndex].name;
    }
    return '';
  };

  return (
    <div className="w-full min-h-screen bg-amber-50 py-16 px-4">
      {/* 메뉴 타이틀 - 크기 확대 */}
      <div className="text-center mb-16">
        <h2 className="text-7xl font-bold text-amber-900 relative inline-block tracking-wide">
          MENU STORY
          <span className="absolute -bottom-0 -right-6 w-5 h-5 bg-red-500"></span>
        </h2>
      </div>

      {/* 카테고리와 Swiper를 좌우로 배치하는 컨테이너 */}
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        {/* 카테고리 탭 - 세로 배치 */}
        <div className="lg:w-1/4 mb-8 lg:mb-0">
          <div className="flex flex-col space-y-4 bg-white rounded-2xl p-4 shadow-md">
            <button
              className={`px-8 py-4 rounded-xl text-lg font-bold transition-all ${
                activeCategory === 'coffee'
                  ? 'bg-amber-800 text-white'
                  : 'text-amber-800 hover:bg-amber-100'
              }`}
              onClick={() => handleCategoryChange('coffee')}
            >
              COFFEE STORY
            </button>
            <button
              className={`px-8 py-4 rounded-xl text-lg font-bold transition-all ${
                activeCategory === 'dessert'
                  ? 'bg-amber-800 text-white'
                  : 'text-amber-800 hover:bg-amber-100'
              }`}
              onClick={() => handleCategoryChange('dessert')}
            >
              DESSERT STORY
            </button>
            <button
              className={`px-8 py-4 rounded-xl text-lg font-bold transition-all ${
                activeCategory === 'deli'
                  ? 'bg-amber-800 text-white'
                  : 'text-amber-800 hover:bg-amber-100'
              }`}
              onClick={() => handleCategoryChange('deli')}
            >
              DELI STORY
            </button>
          </div>
        </div>

        {/* 메뉴 슬라이더 - 우측 배치 */}
        <div className="lg:w-3/4 relative">
          <div className="relative">
            <Swiper
              className="h-full"
              loop={true} // 루프 비활성화
              // @ts-ignore
              onSwiper={(swiperInstance) => {
                setSwiper(swiperInstance);
                // 초기화 후 첫 번째 슬라이드로 이동
                // @ts-ignore
                setTimeout(() => swiperInstance.slideTo(0), 100);
              }}
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={false}
              initialSlide={0} // 초기 슬라이드를 첫 번째로 설정
              // @ts-ignore
              onSlideChange={(swiper) => {
                // @ts-ignore
                const realIndex = swiper.activeIndex; // realIndex 대신 activeIndex 사용
                setActiveIndex(realIndex);
              }}
              breakpoints={{
                // 모바일 화면
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // 태블릿 화면
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // 데스크탑 화면
                1024: {
                  slidesPerView: 3, // 3개만 보이도록 설정
                  spaceBetween: 10,
                },
              }}
            >
              {menuData[activeCategory].map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className="pb-24 transition-all duration-300" // 하단 패딩 증가
                >
                  {({ isActive }) => {
                    // 첫 번째 슬라이드인지 확인
                    const isFirstSlide = index === 0;
                    // 첫 번째 슬라이드이거나 활성 슬라이드인 경우 확대
                    const shouldEnlarge = isFirstSlide || isActive;

                    return (
                      <div
                        className={`bg-white overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 ${
                          shouldEnlarge
                            ? 'scale-140 z-10'
                            : 'scale-80 opacity-60'
                        }`}
                      >
                        {/* 이미지 컨테이너 */}
                        <div className="flex-grow flex items-center justify-center">
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 메뉴명을 표시하는 고정된 박스 - 첫 번째 슬라이드 아래로 위치 조정 */}
            <div className="absolute bottom-0 left-0 z-20 w-64 bg-white rounded-xl shadow-lg p-4 text-center mb-16 transform translate-y-8">
              <h3 className="text-2xl font-bold text-amber-900 transition-all duration-300">
                {getActiveMenuName()}
              </h3>
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-6">
            <button
              onClick={goToPrevSlide}
              className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center shadow-md hover:bg-amber-900 transition-colors"
              aria-label="이전 메뉴"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNextSlide}
              className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center shadow-md hover:bg-amber-900 transition-colors"
              aria-label="다음 메뉴"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
