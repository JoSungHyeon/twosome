import './css/Home.css';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from '@studio-freight/lenis';

import Header from '../components/Header';
import Start from '../components/Start';
import Main from '../components/Main';
import Franchise from '../components/Franchise';
import News from '../components/News';
import Footer from '../components/Footer';
import Arrow from '../components/Arrow';
gsap.registerPlugin(ScrollToPlugin);

function Home() {
	// Arrow 표시 여부 상태 - 초기값을 false로 설정
	const [showArrow, setShowArrow] = useState(false);
	
	// News 컴포넌트 참조
	const newsRef = useRef(null);
	
	useEffect(() => {
		function lenisAnimation(){
			const lenis=new Lenis({
				duration: 2,
				easing: (t) => Math.min(1, 1.001-Math.pow(2, -10*t))
			});
		
			function raf(time){
				lenis.raf(time);
				requestAnimationFrame(raf);
			}
		
			requestAnimationFrame(raf);
		}

		lenisAnimation();
		
		// 페이지 로드 시 맨 위로 스크롤하고 Arrow 강제로 숨기기
		window.scrollTo(0, 0);
		setShowArrow(false);
		
		// 스크롤 위치에 따라 Arrow 표시 여부 결정하는 함수
		const checkScrollPosition = () => {
			if (!newsRef.current) return;
			
			// 현재 스크롤 위치
			const scrollPosition = window.scrollY || window.pageYOffset;
			
			// News 섹션의 위치 (페이지 상단으로부터의 거리)
			const newsRect = newsRef.current.getBoundingClientRect();
			const newsPosition = newsRect.top + scrollPosition;
			
			// News 섹션이 화면에 보이기 시작하면 Arrow 표시
			const shouldShowArrow = scrollPosition >= newsPosition - window.innerHeight * 0.8;
			
			// 상태 업데이트
			setShowArrow(shouldShowArrow);
		};
		
		// 초기에는 Arrow를 숨김
		setShowArrow(false);
		
		// 약간의 지연 후 스크롤 위치 확인 (DOM이 완전히 렌더링된 후)
		const initialCheckTimeout = setTimeout(() => {
			checkScrollPosition();
		}, 500);
		
		// 스크롤 이벤트 리스너 추가
		window.addEventListener('scroll', checkScrollPosition);
		
		// 윈도우 크기 변경 시에도 위치 재계산
		window.addEventListener('resize', checkScrollPosition);
		
		// 컴포넌트 언마운트 시 이벤트 리스너와 타임아웃 제거
		return () => {
			clearTimeout(initialCheckTimeout);
			window.removeEventListener('scroll', checkScrollPosition);
			window.removeEventListener('resize', checkScrollPosition);
		};
	}, []);
	
  	return (
  	  	<div id='home'>
			<Header />
			<Start /> 
			<Main />
			<Franchise />
			<div ref={newsRef}>
				<News />
			</div>
			<Footer />
			{/* showArrow가 true일 때만 Arrow 컴포넌트 렌더링 */}
			{showArrow && <Arrow />}
		</div>
  	);
}

export default Home;