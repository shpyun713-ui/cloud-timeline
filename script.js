// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // FAQ 아코디언 기능 (기본 및 상세)
    const faqItems = document.querySelectorAll('.faq-item, .faq-item-detailed');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question, .faq-question-detailed');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && toggle) {
            question.addEventListener('click', function() {
                // 현재 활성화된 FAQ 아이템이 다른 것인지 확인
                const currentlyActive = document.querySelector('.faq-item.active, .faq-item-detailed.active');
                
                // 다른 FAQ가 열려있다면 닫기
                if (currentlyActive && currentlyActive !== item) {
                    currentlyActive.classList.remove('active');
                }
                
                // 현재 FAQ 토글
                item.classList.toggle('active');
            });
        }
    });
    
    // 자료실 카테고리 탭 기능
    const tabBtns = document.querySelectorAll('.tab-btn');
    const resourceItems = document.querySelectorAll('.resource-item, .resource-item-detailed');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 모든 탭 버튼에서 active 클래스 제거
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // 클릭된 탭 버튼에 active 클래스 추가
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // 리소스 아이템 필터링
            resourceItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'flex';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // FAQ 카테고리 필터링
    const categoryBtns = document.querySelectorAll('.category-btn');
    const faqItemsDetailed = document.querySelectorAll('.faq-item-detailed');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 모든 카테고리 버튼에서 active 클래스 제거
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // 클릭된 카테고리 버튼에 active 클래스 추가
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // FAQ 아이템 필터링
            faqItemsDetailed.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 전환 사업 카테고리 필터링
    const projectTabBtns = document.querySelectorAll('.projects-categories .tab-btn');
    const projectCards = document.querySelectorAll('.project-card-detailed');
    
    projectTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 모든 탭 버튼에서 active 클래스 제거
            projectTabBtns.forEach(b => b.classList.remove('active'));
            
            // 클릭된 탭 버튼에 active 클래스 추가
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // 프로젝트 카드 필터링
            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // 스무스 스크롤 기능
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 외부 링크는 기본 동작 유지
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 애니메이션 on scroll 효과
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션을 적용할 요소들
    const animateElements = document.querySelectorAll('.intro-card, .project-card, .resource-item, .timeline-item, .value-card, .org-item, .history-item, .timeline-item-detailed, .policy-status-card, .plan-item, .summary-card, .project-card-detailed, .support-service-card, .resource-item-detailed, .faq-item-detailed, .inquiry-method');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 타임라인 아이템 애니메이션 지연
    const timelineItems = document.querySelectorAll('.timeline-item, .timeline-item-detailed');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // 프로젝트 카드 애니메이션 지연
    const projectCardsAnimate = document.querySelectorAll('.project-card, .project-card-detailed');
    projectCardsAnimate.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // 로고 애니메이션
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // 버튼 호버 효과 강화
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 검색 기능
    const searchInputs = document.querySelectorAll('.search-input');
    const searchBtns = document.querySelectorAll('.search-btn');
    
    searchInputs.forEach((input, index) => {
        const searchBtn = searchBtns[index];
        
        if (searchBtn) {
            // 검색 버튼 클릭
            searchBtn.addEventListener('click', function() {
                performSearch(input.value);
            });
            
            // Enter 키 입력
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch(this.value);
                }
            });
        }
    });
    
    // 검색 실행 함수
    function performSearch(query) {
        if (!query.trim()) return;
        
        // 현재 페이지에 따라 다른 검색 로직 적용
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        
        switch (currentPage) {
            case 'resources':
                searchResources(query);
                break;
            case 'faq':
                searchFAQ(query);
                break;
            case 'projects':
                searchProjects(query);
                break;
            default:
                // 메인 페이지에서는 전체 검색
                searchAll(query);
        }
    }
    
    // 자료실 검색
    function searchResources(query) {
        const resourceItems = document.querySelectorAll('.resource-item-detailed');
        const searchResults = [];
        
        resourceItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('.resource-description').textContent.toLowerCase();
            const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            if (title.includes(query.toLowerCase()) || 
                description.includes(query.toLowerCase()) || 
                tags.some(tag => tag.includes(query.toLowerCase()))) {
                searchResults.push(item);
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                item.style.display = 'none';
            }
        });
        
        // 검색 결과가 없을 때 메시지 표시
        showSearchResults(searchResults.length, '자료');
    }
    
    // FAQ 검색
    function searchFAQ(query) {
        const faqItems = document.querySelectorAll('.faq-item-detailed');
        const searchResults = [];
        
        faqItems.forEach(item => {
            const question = item.querySelector('h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer-detailed').textContent.toLowerCase();
            
            if (question.includes(query.toLowerCase()) || answer.includes(query.toLowerCase())) {
                searchResults.push(item);
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                item.style.display = 'none';
            }
        });
        
        showSearchResults(searchResults.length, 'FAQ');
    }
    
    // 전환 사업 검색
    function searchProjects(query) {
        const projectCards = document.querySelectorAll('.project-card-detailed');
        const searchResults = [];
        
        projectCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.project-description').textContent.toLowerCase();
            
            if (title.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
                searchResults.push(card);
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
        
        showSearchResults(searchResults.length, '전환 사업');
    }
    
    // 전체 검색 (메인 페이지)
    function searchAll(query) {
        // 메인 페이지에서는 검색 결과 페이지로 이동하거나 알림
        alert(`"${query}"에 대한 검색 결과를 확인하려면 자료실, FAQ, 또는 전환 사업 페이지를 방문해 주세요.`);
    }
    
    // 검색 결과 표시
    function showSearchResults(count, type) {
        // 기존 검색 결과 메시지 제거
        const existingMessage = document.querySelector('.search-result-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const message = document.createElement('div');
        message.className = 'search-result-message';
        message.style.cssText = `
            text-align: center;
            padding: 20px;
            margin: 20px 0;
            background: #f3f4f6;
            border-radius: 8px;
            color: #6b7280;
        `;
        
        if (count === 0) {
            message.innerHTML = `<strong>검색 결과가 없습니다.</strong><br>다른 키워드로 검색해 보세요.`;
        } else {
            message.innerHTML = `<strong>${count}개의 ${type} 검색 결과</strong>를 찾았습니다.`;
        }
        
        // 검색 입력창 아래에 메시지 표시
        const searchSection = document.querySelector('.search-section, .faq-search-section');
        if (searchSection) {
            searchSection.appendChild(message);
        }
    }
    
    // 모바일 메뉴 토글 (작은 화면에서)
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('.main-nav');
            const navList = nav.querySelector('.nav-list');
            
            // 모바일 메뉴 버튼 생성
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileBtn = document.createElement('button');
                mobileBtn.className = 'mobile-menu-btn';
                mobileBtn.innerHTML = '☰';
                mobileBtn.style.cssText = `
                    display: none;
                    background: none;
                    border: none;
                    font-size: 24px;
                    color: #1e3a8a;
                    cursor: pointer;
                    padding: 10px;
                `;
                
                nav.insertBefore(mobileBtn, navList);
                
                // 모바일 메뉴 토글
                mobileBtn.addEventListener('click', function() {
                    navList.style.display = navList.style.display === 'none' ? 'flex' : 'none';
                    this.innerHTML = navList.style.display === 'none' ? '☰' : '✕';
                });
                
                // 초기 상태 설정
                navList.style.display = 'none';
                mobileBtn.style.display = 'block';
            }
        } else {
            // 데스크톱에서는 모바일 메뉴 숨기기
            const mobileBtn = document.querySelector('.mobile-menu-btn');
            const navList = document.querySelector('.nav-list');
            
            if (mobileBtn) {
                mobileBtn.style.display = 'none';
            }
            if (navList) {
                navList.style.display = 'flex';
            }
        }
    };
    
    // 초기 모바일 메뉴 설정
    createMobileMenu();
    
    // 윈도우 리사이즈 시 모바일 메뉴 재설정
    window.addEventListener('resize', createMobileMenu);
    
    // 로딩 애니메이션
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // 스크롤 진행률 표시 (선택사항)
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #1e3a8a, #3b82f6);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    };
    
    // 스크롤 진행률 바 생성
    createScrollProgress();
    
    // 콘솔 로그 (개발용)
    console.log('클라우드 타임라인 센터 홈페이지가 로드되었습니다.');
    console.log('정부 클라우드 스타일의 디자인이 적용되었습니다.');
    
});

// CSS 애니메이션 키프레임 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .timeline-item:nth-child(odd) .timeline-content {
        animation: slideInLeft 0.8s ease-out;
    }
    
    .timeline-item:nth-child(even) .timeline-content {
        animation: slideInRight 0.8s ease-out;
    }
    
    .timeline-item-detailed:nth-child(odd) .timeline-content-detailed {
        animation: slideInLeft 0.8s ease-out;
    }
    
    .timeline-item-detailed:nth-child(even) .timeline-content-detailed {
        animation: slideInRight 0.8s ease-out;
    }
    
    .project-card-detailed:nth-child(odd) {
        animation: slideInLeft 0.8s ease-out;
    }
    
    .project-card-detailed:nth-child(even) {
        animation: slideInRight 0.8s ease-out;
    }
    
    .resource-item-detailed:nth-child(odd) {
        animation: slideInLeft 0.8s ease-out;
    }
    
    .resource-item-detailed:nth-child(even) {
        animation: slideInRight 0.8s ease-out;
    }
    
    .faq-item-detailed:nth-child(odd) {
        animation: slideInLeft 0.8s ease-out;
    }
    
    .faq-item-detailed:nth-child(even) {
        animation: slideInRight 0.8s ease-out;
    }
`;

document.head.appendChild(style);
