function News() {
	return (
		<section id="news">
			<div className="section_inner">
                <div className="news_wrap">
                    <ul>
                        <li>
                            <a href="">
                                <strong>공지사항</strong>
                                <p>투썸플레이스 오픈 안내</p>
                                <span>2025.02.20</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <strong>공지사항</strong>
                                <p>투썸하트 멤버십 정책 변경 안내</p>
                                <span>2025.02.25</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <em>NEW</em>
                                <strong>공지사항</strong>
                                <p>개인정보처리방침 개정 안내</p>
                                <span>2025.03.12</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="title">
                    <h2>NEWS & NOTICE</h2>
                    <p>공지사항</p>
                    <img src="./img/news/news.svg" alt="news" />
                </div>
            </div>
		</section>
	);
}

export default News;