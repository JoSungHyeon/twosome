import './css/Style.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import homeData from '../homeData';

gsap.registerPlugin(ScrollTrigger);

function Main() {
	let {menu} = homeData;

	useLayoutEffect(() => {

		const header = document.querySelector("header");
		const body = document.querySelector("body");

		const specTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#section1",
				pin: true,
				onEnter(){
					body.classList.remove("dark");
					header.classList.add('active');
				},
				onLeaveBack(){
					body.classList.add("dark");
					header.classList.remove('active');
				},
				start: "top top",
				end: "+=1200",
				scrub: true
			}
		});

		let specText = document.querySelectorAll("#section1 .title > h2");
		let specText2 = document.querySelectorAll("#section1 .title > p");

		specTl.fromTo(specText, {
			y: 200,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 0.3,
			stagger: 0.5
		})

		function specMove(element, container, prevy, nexty, playtime=2) {
			gsap.fromTo(element, {
				y: prevy
			}, {
				y: nexty,
				duration: playtime,
				ease: "none",
				scrollTrigger: {
					trigger: container,
					scrub: true,
					start: "top 30%",
				}
			});
		}
	
		specMove(".menu_1", "#section1", 1000, -2000);
	
		specMove(".menu_2", "#section1", 3000, -2000);
	
		specMove(".menu_3", "#section1", 3000, -2000);
	
		specMove(".menu_4", "#section1", 2000, -2000);
	
		specMove(".menu_5", "#section1", 6000, -2000);
	
		specMove(".menu_6", "#section1", 4000, -2000);

		return () => {
			specTl.scrollTrigger.kill();
			ScrollTrigger.refresh();
		};
	}, []);


	return (
		<section id="section1">
			<div className="icons">
				<div className="title">
					<h2>언제 어디서나 여유롭게 즐기는 <span>투썸플레이스</span></h2> 
					<h2>좋은 커피를 마셔야 비로소 하루가 시작되는 느낌이라면 하루에도 몇 번씩 그윽한 커피 향이 생각난다면 마음속 우선순위에 언제나 커피가 있는 당신이라면 잊지 말고 챙겨야 할 <span>투썸플레이스</span></h2>
				</div>
				<MenuIcon propsValue={menu} />
			</div>
		</section>
	);
}

function MenuIcon(props) {
	let menu = props.propsValue;
	
	return (
		<div className="menus">
			{
				menu.map((d, i) =>
					<div key={i} className={d.class}>
						<img src={`/img/menu/${d.src}`} alt={d.class} />
					</div>
				)
			}
		</div>
	);
}

export default Main;