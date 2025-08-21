// 공통 푸터 생성 함수
function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>행정·공공기관 클라우드전문지원센터</h3>
                    <p>정부 클라우드 정책과 전환 사업을 지원하는 전문 기관</p>
                </div>
                <div class="footer-section">
                    <h4>연락처</h4>
                    <p>📞 02-1234-5678</p>
                    <p>📧 info@cloudtimeline.go.kr</p>
                    <p>📍 서울특별시 종로구 세종로 1</p>
                </div>
                <div class="footer-section">
                    <h4>바로가기</h4>
                    <ul>
                        <li><a href="intro.html">센터 소개</a></li>
                        <li><a href="timeline.html">정책 타임라인</a></li>
                        <li><a href="projects.html">전환 사업</a></li>
                        <li><a href="resources.html">자료실</a></li>
                        <li><a href="faq.html">자주하는질문</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 행정·공공기관 클라우드전문지원센터. All rights reserved.</p>
            </div>
        </div>
    `;
    
    return footer;
}

// 페이지 로드 시 푸터 생성
document.addEventListener('DOMContentLoaded', function() {
    // 기존 푸터가 있다면 제거
    const existingFooter = document.querySelector('.footer');
    if (existingFooter) {
        existingFooter.remove();
    }
    
    // 새 푸터 생성 및 추가
    const footer = createFooter();
    document.body.appendChild(footer);
});
