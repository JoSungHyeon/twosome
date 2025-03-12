const projectData = {
	mainVideo: ["/video/intro2.mp4"],
	navigation: [
		{ href: "#work", text: "Project" },
		{ href: "#codepen", text: "Open Source" },
		{ href: "#contact", text: "Contact" }
	],
	work: [
		{
			num: "01",
			title: "Emotion Diary",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Router",
				"useContext",
				"Coutom Hook",
				"LocalStorage",
				"Vite",
			],
			desc: "React와 useContext 그리고 LocalStorage를 활용하여 TodoList 기능을 구현했습니다. 이 구조를 통해 애플리케이션의 상태 관리를 간소화하고, 사용자가 작성한 할 일을 로컬 스토리지에 저장해 재방문 시에도 데이터를 유지할 수 있도록 했습니다. 이러한 방식으로, 사용자 경험을 극대화하고 앱의 유지 관리성을 높였습니다. 이를 통해 콘텐츠를 더욱 직관적으로 저장, 탐색할 수 있도록 했습니다. 또한, 저장된에 따라 콘텐츠가 필터링되도록 하여 사용자가 원하는 정보에 쉽게 접근할 수 있게 프로그래밍했습니다.",
			siteLink: "https://sh-emotion-diary.vercel.app/",
			codeLink: "https://github.com/JoSungHyeon/React-V-Emotion-Diary"

		},
		{
			num: "02",
			title: "Board Shop",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Redux",
				"Router",
				"Axios",
				"LocalStorage",
				"Vite",
			],
			desc: "Axios를 활용하여 API 요청을 처리하고, Redux를 통해 전역 상태를 관리함으로써 사용자 경험을 향상시키고, 데이터의 일관성을 보장했습니다. 그리고 LocalStorage를 이용해서 저장되는 DB 데이터의 기본 형태를 테스트하여 상품을 전시하였으며, 이러한 구조는 쇼핑몰의 제품 관리 방식과 유사하게 작동하여, 사용자에게 친숙한 인터페이스를 제공합니다.",
			siteLink: "https://sh-board-shop.vercel.app/",
			codeLink: "https://github.com/JoSungHyeon/React-Vite-Shop"

		},
		{
			num: "03",
			title: "ClassBox",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Axios",
				"Swiper",
			],
			desc: "React를 활용한 유아 영어 교재 클론 코딩 프로젝트입니다. 이 사이트는 전체적으로 반응형 디자인으로 제작되어 다양한 기기에서 최적의 사용자 경험을 제공합니다. 데이터 요청은 Axios를 사용하여 교재 정보를 외부 API에서 받아오도록 설정했습니다. UI 라이브러리로는 SwiperJS를 활용하여 슬라이더 및 갤러리 효과를 강화하였습니다.",
			siteLink: "https://sh-classbox.vercel.app/",
			codeLink: "https://github.com/JoSungHyeon/classbox"

		},
		{
			num: "04",
			title: "O'Kichen",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"Swiper",
				"PWA"
			],
			desc: "URL로 접속하여 쉽게 설치하고 이용할 수 있는 PWA, 프로그레시브 웹 앱입니다. SwiperJS 라이브러리를 통해 컨텐츠와 광고 배너를 둘러볼 수 있게 제작하였으며 사용자에게 직관적인 디자인으로 개발하였습니다.",
			siteLink: "https://josunghyeon.github.io/o-kichen-pwa/",
			codeLink: "https://github.com/JoSungHyeon/o-kichen-pwa"

		}
	],
	codepen: [
		{
			title: "Table",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Table"
			],
			desc: ["form 태그를 사용하여 검색칸을 개발하였습니다.", "table 태그를 활용해 게시판 UI를 제작하였습니다.", "기기의 너비에 따라 '제목'란의 크기만 줄어들도록 개발하였습니다."],
			siteLink: "https://sh-open-1.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "fetch, useState",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Fetch"
			],
			desc: ["fetch 메소드를 활용해 데이터를 입력하였습니다.", "useState를 사용해 로딩을 구현하였습니다.", "setTimeout를 이용해 로딩시간을 지정하였습니다."],
			siteLink: "https://sh-open-2.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "props, resize",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Resize"
			],
			desc: ["props로 데이터를 전달하였습니다.", "resize 메소드를 이용해 디바이스의 너비를 활용하였습니다.", "map 메소드를 활용해 돔을 구현하였습니다."],
			siteLink: "https://sh-open-3.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "useState, map",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"useState"
			],
			desc: ["useState를 활용하여 데이터의 순번을 스테이트화 하였습니다.", "map 메소드 내부의 조건식을 활용하였습니다.", "버튼 클릭시마다 해당 버튼에 해당하는 아이템만 보여지게 개발하였습니다."],
			siteLink: "https://sh-open-4.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "Swiper, pagination",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Swiper"
			],
			desc: ["Swiper 라이브러리를 활용해 이미지 슬라이드를 구현하였습니다.", "Swiper 라이브러리가 제공하는 기능을 활용해 이미지의 번호를 개발하였습니다.", "map 메소드를 활용해 슬라이드를 구현하였습니다."],
			siteLink: "https://sh-open-5.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "Video, GSAP",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"GSAP"
			],
			desc: ["video 태그를 활용하였습니다.", "GSAP 라이브러리를 활용하여 버튼의 애니메이션을 제어하였습니다."],
			siteLink: "https://sh-open-6.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "Video, map",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Map"
			],
			desc: ["props를 활용해 비디오의 목록을 불러왔습니다.", "map 메소드를 활용해 비디오의 목록만큼 돔을 구현하였습니다.", "버튼이 클릭되면 비디오가 재생되게끔 개발하였습니다."],
			siteLink: "https://sh-open-7.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "fetch, map",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Fetch"
			],
			desc: ["fetch 메소드를 활용해 데이터를 입력하였습니다.", "이중 map 메소드를 사용하여 서브메뉴를 구현하였습니다."],
			siteLink: "https://sh-open-9.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "Axios, map",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Axios"
			],
			desc: ["Axios 라이브러리를 활용해 데이터를 입력하였습니다.", "이중 map 메소드를 사용하여 서브메뉴를 구현하였습니다."],
			siteLink: "https://sh-open-10.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		},
		{
			title: "Swiper, React",
			skill: [
				"HTML",
				"CSS",
				"JavaScript",
				"React",
				"Swiper"
			],
			desc: ["Swiper 라이브러리를 활용해 슬라이드를 구현하였습니다.", "Swiper 라이브러리가 제공하는 기능을 활용해 페이지의 번호를 개발하였습니다."],
			siteLink: "https://sh-open-11.vercel.app/",
			gitLink: "https://github.com/JoSungHyeon/openSource"
		}
	],
	contact: [
		{
			name: "git",
			link: "https://github.com/JoSungHyeon"
		},
		{
			name: "notion",
			link: "https://stupendous-saver-a6c.notion.site/JoSungHyeon-11bd2ba5cf6080d693eac45f4b3b0d0c?pvs=74"
		},
		{
			name: "kakao",
			link: "https://open.kakao.com/o/sXyOvo2g"
		},
		{	name: "codepen",
			link: "https://codepen.io/JoSungHyeon/pens/"

		}
	]
}


export default projectData;