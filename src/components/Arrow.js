import { useEffect } from 'react';

function Arrow() {
	useEffect(() => {
		// Arrow 클릭 시 맨 위로 스크롤하는 이벤트 핸들러
		const handleArrowClick = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		};
		
		// Arrow 요소 가져오기
		const arrowElement = document.querySelector('.arrow');
		
		// 클릭 이벤트 리스너 추가
		if (arrowElement) {
			arrowElement.addEventListener('click', handleArrowClick);
		}
		
		// 컴포넌트 언마운트 시 이벤트 리스너 제거
		return () => {
			if (arrowElement) {
				arrowElement.removeEventListener('click', handleArrowClick);
			}
		};
	}, []);
	
	return (
		<div className="arrow">↑</div>
	);
}

export default Arrow;
