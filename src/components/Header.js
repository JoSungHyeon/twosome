import styles from './css/Header.module.css';
import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Header() {
	
	// ref 사용하여 DOM 요소 참조
	const moOpenRef = useRef(null);
	const logoRef = useRef(null);
	const pcMenuRef = useRef(null);
	const mobileMenuRef = useRef(null);
	const headerRef = useRef(null);
	const overlayRef = useRef(null);
	
	// 스크롤 상태 관리
	const [isScrolled, setIsScrolled] = useState(false);
	// 오버레이 표시 상태 관리
	const [showOverlay, setShowOverlay] = useState(false);

	// 오버레이 닫기 함수 - useCallback으로 메모이제이션
	const closeOverlay = useCallback(() => {
		// GSAP 애니메이션으로 오버레이 숨기기
		const overlay = overlayRef.current;
		if (overlay) {
			gsap.to(overlay, {
				height: 0,
				duration: 0.5,
				ease: 'power2.inOut',
				onComplete: () => {
					setShowOverlay(false);
					// 오버레이가 닫힐 때 body 스크롤 복원
					document.body.style.overflow = '';
				}
			});
		}
	}, []);

	// 오버레이 열기 함수 - useCallback으로 메모이제이션
	const openOverlay = useCallback(() => {
		setShowOverlay(true);
		// 오버레이가 열릴 때 body 스크롤 방지
		document.body.style.overflow = 'hidden';
		
		// GSAP 애니메이션으로 오버레이 표시
		const overlay = overlayRef.current;
		if (overlay) {
			gsap.fromTo(overlay, 
				{ height: 0 }, 
				{ 
					height: '100%', 
					duration: 0.5, 
					ease: 'power2.inOut'
				}
			);
		}
	}, []);

	useEffect(() => {
		let sectionList = document.querySelectorAll("section");

		let sectionOffset = [];

		sectionList.forEach(function(item, i) {
			sectionOffset.push(item);
		});
	
		// ref를 사용하여 DOM 요소 접근
		const moMenu = mobileMenuRef.current.querySelector("a");
		const logo = logoRef.current;
		let moMenuList = mobileMenuRef.current.querySelectorAll("ul > li");
		const overlay = overlayRef.current;

		sectionList.forEach(function(item, i) {
			sectionOffset.push(item);
		});

		moMenuList.forEach(function(item, i) {
			item.addEventListener("click", function(e) {
				e.preventDefault();
				if(i == 0) {
					gsap.to(window, {scrollTo: 0, duration: 0.3});
					moOpen.classList.remove("on");
					logo.classList.remove("on");
					gsap.to(moMenu, {left: "100%", duration: 0.3});
				} else {
					gsap.to(window, {scrollTo: sectionOffset[i], duration: 0.3});
					moOpen.classList.remove("on");
					logo.classList.remove("on");
					gsap.to(moMenu, {left: "100%", duration: 0.3});
				}
			});
		});

		// ScrollTrigger를 사용하여 스크롤 위치에 따라 상태 변경
		const headerHeight = headerRef.current.offsetHeight;
		
		const scrollTrigger = ScrollTrigger.create({
			start: `top+=${headerHeight} top`,
			end: 'bottom bottom',
			onEnter: () => setIsScrolled(true),
			onLeaveBack: () => setIsScrolled(false),
		});

		// 스크롤 이벤트 리스너 (대체 방법)
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > headerHeight) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// ScrollTrigger가 작동하지 않을 경우를 대비한 백업 방법
		window.addEventListener('scroll', handleScroll);
		
		// 초기 스크롤 위치 확인
		handleScroll();

		// 오버레이 클릭 시 닫기
		if (overlay) {
			overlay.addEventListener('click', (e) => {
				// 오버레이 콘텐츠 클릭 시 이벤트 전파 방지
				if (e.target === overlay) {
					closeOverlay();
				}
			});
		}

		// ESC 키 누를 때 오버레이 닫기
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && showOverlay) {
				closeOverlay();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		// 컴포넌트 언마운트 시 이벤트 리스너 제거
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleKeyDown);
			
			// ScrollTrigger 인스턴스 정리
			if (scrollTrigger) {
				scrollTrigger.kill();
			}
		};

	}, [closeOverlay, showOverlay]); // 의존성 배열에 메모이제이션된 함수 추가

  return (
	<>
		<header ref={headerRef}>
			<div className={styles.inner}>
				<div className={styles.logo} ref={logoRef}>
					<h1><a href="">
						{ !isScrolled 
						? <img src="./img/logo_white.svg" alt="logo" />
						: <img src="./img/logo_black.svg" alt="logo" />
						}
						</a></h1>
				</div>
				<nav className={styles.pc_menu} ref={pcMenuRef}>
					<Navigation isScrolled={isScrolled} onClick={openOverlay} />
				</nav>
				<nav className={styles.mobile_menu} ref={mobileMenuRef}>
					<Navigation isScrolled={isScrolled} onClick={openOverlay} />
				</nav>
			</div>
		</header>
		
		{/* 전체 화면 오버레이 */}
		<div 
			ref={overlayRef} 
			className={styles.fullOverlay} 
			style={{ 
				display: showOverlay ? 'block' : 'none',
				height: 0
			}}
		>
			<div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
				<div className={styles.mobileTop}>
					<img src="./img/logo_white.svg" alt="logo" />
					<button className={styles.closeBtn} onClick={closeOverlay}>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className={styles.menuItems}>
					<ul>
						<li><a href="#" onClick={(e) => { e.preventDefault(); closeOverlay(); gsap.to(window, {scrollTo: 0, duration: 0.3}); }}>투썸플레이스소개</a></li>
						<li><a href="#" onClick={(e) => { e.preventDefault(); closeOverlay(); gsap.to(window, {scrollTo: "#main", duration: 0.3}); }}>메뉴이야기</a></li>
						<li><a href="#" onClick={(e) => { e.preventDefault(); closeOverlay(); gsap.to(window, {scrollTo: "#franchise", duration: 0.3}); }}>브랜드지원</a></li>
						<li><a href="#" onClick={(e) => { e.preventDefault(); closeOverlay(); gsap.to(window, {scrollTo: "#news", duration: 0.3}); }}>투썸플레이스 앱 & 멤버십</a></li>
						<li><a href="#" onClick={(e) => { e.preventDefault(); closeOverlay(); gsap.to(window, {scrollTo: "footer", duration: 0.3}); }}>새소식 & 공지</a></li>
					</ul>
				</div>
			</div>
		</div>
	</>
  )
}

function Navigation({ isScrolled, onClick }) {
	// 스크롤 위치에 따라 이미지 경로 결정
	const imageSrc = isScrolled 
		? "./img/menu_icon_black.svg" 
		: "./img/menu_icon_white.svg";
	
	// 스크롤 위치에 따라 클래스 적용
	const linkClassName = isScrolled ? styles.scrolled : '';
	
	return (
		<a href="" className={linkClassName} onClick={(e) => { e.preventDefault(); onClick(); }}>
			<img src={imageSrc} alt="menu icon" />
		</a>
	)
}

export default Header