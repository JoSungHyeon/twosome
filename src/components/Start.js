import './css/Start.css'
import { useEffect, useRef } from 'react';
// Swiper 관련 import 추가
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/pagination';

function Start() {	
	// Swiper 인스턴스를 저장할 ref 생성
	const swiperRef = useRef(null);

	useEffect(() => {
		// 커스텀 네비게이션 버튼에 이벤트 연결
		const prevBtn = document.querySelector('.swiper-button-prev a');
		const nextBtn = document.querySelector('.swiper-button-next a');
		
		if (prevBtn && nextBtn && swiperRef.current) {
			prevBtn.addEventListener('click', (e) => {
				e.preventDefault();
				swiperRef.current.slidePrev();
			});
			
			nextBtn.addEventListener('click', (e) => {
				e.preventDefault();
				swiperRef.current.slideNext();
			});
		}
		
		// 컴포넌트 언마운트 시 이벤트 리스너 제거
		return () => {
			if (prevBtn && nextBtn) {
				prevBtn.removeEventListener('click', () => {});
				nextBtn.removeEventListener('click', () => {});
			}
		};
	}, []);

	return (
		<div id="start">
			<main>
				{/* <video src={mainVideo} id='mainVideo' muted autoPlay loop playsInline poster='/img/video_poster.png'></video> */}
				
				{/* 스와이퍼 추가 */}
				<div className="swiper-container">
					<Swiper
						loop={true}
						speed={2000}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							el: '.swiper-pagination',
							clickable: true,
							type: 'fraction',
							formatFractionCurrent: (number) => number,
							formatFractionTotal: (number) => number,
							renderFraction: function (currentClass, totalClass) {
								return '<span class="' + currentClass + '"></span>' +
									' / ' +
									'<span class="' + totalClass + '"></span>';
							}
						}}
						onSwiper={(swiper) => {
							swiperRef.current = swiper;
						}}
						modules={[Autoplay, Pagination]}
						className="mySwiper"
					>
						<SwiperSlide>
							<img src="./img/main/main_1.jpg" alt="슬라이드 이미지 1" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="./img/main/main_2.jpg" alt="슬라이드 이미지 2" />
						</SwiperSlide>
					</Swiper>
					
					{/* 페이지네이션 추가 */}
					
					
					{/* 네비게이션 버튼 */}
					<div className='swiper-button-wrap'>
						<div className='swiper-button-prev'>
							<a href="">
								<img src="./img/main/prev.svg" alt="이전" />
							</a>
						</div>
						<div className="swiper-pagination"></div>
						<div className='swiper-button-next'>
							<a href="">
								<img src="./img/main/next.svg" alt="다음" />
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Start;