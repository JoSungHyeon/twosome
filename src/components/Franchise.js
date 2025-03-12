import { useEffect, useRef } from 'react';

function Franchise() {
	const starsContainerRef = useRef(null);
	
	useEffect(() => {
		const starsContainer = starsContainerRef.current;
		if (!starsContainer) return;
		
		const starCount = 50; // 별의 개수
		
		// 기존 별들 제거
		while (starsContainer.firstChild) {
			starsContainer.removeChild(starsContainer.firstChild);
		}
		
		// 새로운 별들 생성
		for (let i = 0; i < starCount; i++) {
			const star = document.createElement('div');
			star.className = 'star';
			
			// 랜덤 위치 설정
			const x = Math.random() * 100;
			const y = Math.random() * 100;
			
			// 랜덤 크기 설정 (0.5px ~ 3px)
			const size = Math.random() * 2.5 + 0.5;
			
			// 랜덤 애니메이션 지연 설정
			const delay = Math.random() * 10;
			
			// 랜덤 애니메이션 지속 시간 설정 (3s ~ 7s)
			const duration = Math.random() * 4 + 3;
			
			star.style.left = `${x}%`;
			star.style.top = `${y}%`;
			star.style.width = `${size}px`;
			star.style.height = `${size}px`;
			star.style.animationDelay = `${delay}s`;
			star.style.animationDuration = `${duration}s`;
			
			starsContainer.appendChild(star);
		}
	}, []);
	
	return (
		<section id="franchise">
			{/* 별 효과를 위한 컨테이너 */}
			<div className="stars-container" ref={starsContainerRef}></div>
			
			<div className="section_inner">
				<div className="title">
					<h2>FRANCHISE</h2>
                    <strong>당신의 창업 성공 스토리,</strong>
                    <strong>투썸플레이스가 함께합니다.</strong>
                    <p>향기로운 커피와 달콤한 디저트가 함께하는 프리미엄 디저트
                        카페 투썸플레이스. 투썸플레이스의 축적된 경험과 노하우를
                        바탕으로 여러분의 성공창업을 약속 드립니다.</p>
				</div>
                <div className="button_wrap">
                    <button>창업안내 바로가기</button>
                    <button>가맹상담 신청</button>
                </div>
			</div>
		</section>
	);
}

export default Franchise;