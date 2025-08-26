// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 복수 선택 필터링 기능
    let selectedCategories = new Set();
    let selectedStages = new Set();
    let selectedTypes = new Set();
    
    // 가이드 데이터 정의
    const guideData = {
        '행정공공기관 클라우드 컴퓨팅서비스 이용안내서': {
            description: '기관별 클라우드 전환 사업계획 수립을 위한 표준 템플릿으로, 체계적인 계획 수립과 예산을 지원합니다.',
            category: 'cloud-computing',
            categoryName: '클라우드 컴퓨팅 서비스 이용',
            stages: ['기획', '도입', '이용'],
            format: '템플릿',
            date: '2024.01.15',
            size: '5.2MB',
            views: '1,892회',
            icon: '📋'
        },
        'ISP/ISMP 수립 공통 가이드(8판)': {
            description: '정보시스템 계획 수립을 위한 표준 가이드라인',
            category: 'budget',
            categoryName: '예산/이용 요금 산출',
            stages: ['기획', '도입'],
            format: 'PDF',
            date: '2024.01.10',
            size: '32.8MB',
            views: '1,567회',
            icon: '📊'
        },
        '행정공공기관 클라우드컴퓨팅 서비스 이용요금 산출 가이드': {
            description: '클라우드 서비스 비용 산출 및 예산 계획 수립 가이드',
            category: 'budget',
            categoryName: '예산/이용 요금 산출',
            stages: ['기획', '도입', '이용'],
            format: 'PDF',
            date: '2024.01.08',
            size: '15.3MB',
            views: '2,134회',
            icon: '💰'
        },
        '국가 클라우드 컴퓨팅 보안가이드라인': {
            description: '국가 차원의 클라우드 보안 표준 및 가이드라인',
            category: 'security',
            categoryName: '보안',
            stages: ['준비', '기획', '도입', '이용', '종료'],
            format: 'PDF',
            date: '2024.01.05',
            size: '28.7MB',
            views: '3,456회',
            icon: '🔒'
        },
        '국가 클라우드 컴퓨팅 보안관제가이드라인': {
            description: '클라우드 보안 모니터링 및 관제 업무 표준',
            category: 'security',
            categoryName: '보안',
            stages: ['준비', '기획', '도입', '이용', '종료'],
            format: 'PDF',
            date: '2024.01.03',
            size: '22.1MB',
            views: '1,987회',
            icon: '🛡️'
        },
        '클라우드 네이티브 구축운영 가이드': {
            description: '클라우드 네이티브 아키텍처 구축 및 운영 표준',
            category: 'construction',
            categoryName: '구축/운영',
            stages: ['준비', '기획', '도입', '이용', '종료'],
            format: 'PDF',
            date: '2023.12.28',
            size: '45.2MB',
            views: '4,321회',
            icon: '🏗️'
        },
        '클라우드 네이티브 구축운영 상세 가이드': {
            description: '클라우드 네이티브 시스템 구축의 세부적인 실행 방법',
            category: 'construction',
            categoryName: '구축/운영',
            stages: ['도입'],
            format: 'PDF',
            date: '2023.12.25',
            size: '67.8MB',
            views: '2,876회',
            icon: '🔧'
        },
        '클라우드네이티브 정보시스템 구축을 위한 발주자 안내서': {
            description: '발주자가 알아야 할 클라우드 네이티브 구축 요구사항',
            category: 'construction',
            categoryName: '구축/운영',
            stages: ['도입', '이용', '종료'],
            format: 'PDF',
            date: '2023.12.20',
            size: '19.4MB',
            views: '1,654회',
            icon: '📝'
        },
        '클라우드네이티브 정보시스템 구축을 위한 개발자 안내서': {
            description: '개발자를 위한 클라우드 네이티브 개발 방법론',
            category: 'construction',
            categoryName: '구축/운영',
            stages: ['도입', '이용', '종료'],
            format: 'PDF',
            date: '2023.12.15',
            size: '34.6MB',
            views: '3,789회',
            icon: '💻'
        },
        '범정부 정보시스템 표준운영절차서': {
            description: '정부 정보시스템 운영을 위한 표준 절차 및 방법',
            category: 'construction',
            categoryName: '구축/운영',
            stages: ['도입', '이용', '종료'],
            format: 'PDF',
            date: '2023.12.10',
            size: '41.2MB',
            views: '2,543회',
            icon: '⚙️'
        },
        '공공부문 SaaS 이용가이드라인': {
            description: '공공부문에서 SaaS 서비스 도입 및 활용 가이드',
            category: 'saas',
            categoryName: 'SaaS 이용',
            stages: ['준비', '기획', '도입', '이용', '종료'],
            format: 'PDF',
            date: '2023.11.30',
            size: '18.9MB',
            views: '1,876회',
            icon: '☁️'
        },
        '국가기관등을 위한 디지털서비스 이용계약 가이드라인': {
            description: '디지털 서비스 계약 체결 시 고려사항 및 표준 약관',
            category: 'contract',
            categoryName: '계약',
            stages: ['도입', '이용', '종료'],
            format: 'PDF',
            date: '2023.11.25',
            size: '26.7MB',
            views: '1,432회',
            icon: '📄'
        },
        '전자정부 성과관리 업무 매뉴얼(24년도)': {
            description: '전자정부 사업의 성과 측정 및 관리 표준 매뉴얼',
            category: 'performance',
            categoryName: '성과관리/비용최적화',
            stages: ['도입', '이용'],
            format: 'PDF',
            date: '2023.11.20',
            size: '23.4MB',
            views: '987회',
            icon: '📈'
        },
        '클라우드 컴퓨팅서비스 비용 최적화가이드': {
            description: '클라우드 서비스 비용 절감 및 효율성 향상 방법론',
            category: 'performance',
            categoryName: '성과관리/비용최적화',
            stages: ['이용', '종료'],
            format: 'PDF',
            date: '2023.11.15',
            size: '31.8MB',
            views: '2,765회',
            icon: '💡'
        }
    };
    
    // 라이프사이클 단계 클릭 이벤트
    const stageItems = document.querySelectorAll('.stage-item.clickable');
    stageItems.forEach(stage => {
        stage.addEventListener('click', function(e) {
            e.preventDefault();
            const stageType = this.getAttribute('data-stage');
            console.log('클릭된 라이프사이클 단계:', stageType);
            
            // 다른 스테이지들의 선택 상태 모두 제거
            stageItems.forEach(item => item.classList.remove('selected'));
            
            // 현재 클릭된 스테이지만 선택 상태로 설정
            this.classList.add('selected');
            
            // 스테이지 선택 상태 업데이트
            selectedStages.clear();
            selectedStages.add(stageType);
            
            // 범주와 스테이지를 모두 고려한 필터링 적용
            applyFilters();
        });
    });
    
    // 카테고리 라벨 클릭 이벤트
    const areaLabels = document.querySelectorAll('.area-label.clickable');
    areaLabels.forEach(label => {
        label.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            console.log('클릭된 카테고리:', category);
            
            // 선택 상태 토글
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                selectedCategories.delete(category);
            } else {
                this.classList.add('selected');
                selectedCategories.add(category);
            }
            
            // 필터링 실행
            applyFilters();
        });
    });
    
    // 법령/가이드 버튼 클릭 이벤트
    const typeBtns = document.querySelectorAll('.type-btn.clickable');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-type');
            console.log('클릭된 타입:', type);
            
            // 선택 상태 토글
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                selectedTypes.delete(type);
            } else {
                this.classList.add('selected');
                selectedTypes.add(type);
            }
            
            // 필터링 실행
            applyFilters();
        });
    });
    
    // 초기 가이드 표시 함수 (필터링 없이 모든 가이드 표시)
    function showInitialGuides() {
        const guidelineItems = document.querySelectorAll('.guideline-item');
        guidelineItems.forEach(item => {
            item.classList.add('visible');
            item.classList.remove('filtered');
        });
        clearFilterStatus();
    }
    
    // 결과 카드 업데이트 함수
    function updateResultCards() {
        const resultSection = document.querySelector('.filtered-results-section');
        const resultGrid = document.getElementById('filteredResultsGrid');
        
        if (!resultSection || !resultGrid) return;
        
        // 보이는 가이드라인 아이템들 찾기
        const visibleItems = document.querySelectorAll('.guideline-item.visible');
        
        if (visibleItems.length === 0) {
            resultSection.style.display = 'none';
            return;
        }
        
        // 결과 섹션 표시
        resultSection.style.display = 'block';
        
        // 기존 카드들 제거
        resultGrid.innerHTML = '';
        
        // 각 보이는 아이템에 대해 카드 생성
        visibleItems.forEach(item => {
            const title = item.querySelector('h4').textContent.trim();
            const guideInfo = guideData[title];
            
            if (guideInfo) {
                const cardElement = createResultCard(title, guideInfo);
                resultGrid.appendChild(cardElement);
            }
        });
    }
    
    // 결과 카드 생성 함수
    function createResultCard(title, guideInfo) {
        const card = document.createElement('div');
        card.className = 'result-card';
        
        // 스테이지 이름 매핑
        const stageNameMap = {
            '준비': 'pre-period',
            '기획': 'planning', 
            '도입': 'introduction',
            '이용': 'usage',
            '종료': 'termination'
        };
        
        // 현재 선택된 스테이지들 찾기
        const selectedStageNames = [];
        selectedStages.forEach(stageClass => {
            for (const [name, className] of Object.entries(stageNameMap)) {
                if (className === stageClass) {
                    selectedStageNames.push(name);
                }
            }
        });
        
        card.innerHTML = `
            <div class="result-card-header">
                <div class="result-card-icon">${guideInfo.icon}</div>
                <div class="result-card-content">
                    <h3 class="result-card-title">${title}</h3>
                    <p class="result-card-description">${guideInfo.description}</p>
                </div>
            </div>
            
            <div class="result-card-meta">
                <div class="result-meta-item">
                    <span class="result-meta-label">카테고리</span>
                    <span>${guideInfo.categoryName}</span>
                </div>
                <div class="result-meta-item">
                    <span class="result-meta-label">${guideInfo.format}</span>
                    <span>${guideInfo.date}</span>
                </div>
                <div class="result-meta-item">
                    <span class="result-meta-label">${guideInfo.size}</span>
                    <span>${guideInfo.views}</span>
                </div>
            </div>
            
            <div class="result-card-tags">
                <span class="result-tag category">${guideInfo.categoryName}</span>
                ${selectedStageNames.length > 0 ? 
                    selectedStageNames.map(stage => `<span class="result-tag stage">${stage}</span>`).join('') :
                    guideInfo.stages.map(stage => `<span class="result-tag stage">${stage}</span>`).join('')
                }
                <span class="result-tag format">${guideInfo.format}</span>
                <span class="result-tag year">${guideInfo.date.split('.')[0]}년</span>
            </div>
            
            <div class="result-card-actions">
                <button class="result-btn result-btn-preview">
                    🔍 미리보기
                </button>
                <button class="result-btn result-btn-download">
                    📥 다운로드
                </button>
            </div>
        `;
        
        // 버튼 이벤트 리스너 추가
        const downloadBtn = card.querySelector('.result-btn-download');
        const previewBtn = card.querySelector('.result-btn-preview');
        
        downloadBtn.addEventListener('click', () => {
            alert(`"${title}" 다운로드를 시작합니다.`);
        });
        
        previewBtn.addEventListener('click', () => {
            alert(`"${title}" 미리보기를 엽니다.`);
        });
        
        return card;
    }
    
    // 필터 상태 초기화 함수
    function clearFilterStatus() {
        const statusContainer = document.querySelector('.filter-status');
        if (statusContainer) {
            statusContainer.remove();
        }
    }
    
    // 필터링 함수
    function applyFilters() {
        const guidelineItems = document.querySelectorAll('.guideline-item');
        
        // 아무것도 선택되지 않은 경우 모든 가이드라인 숨김
        if (selectedCategories.size === 0 && selectedStages.size === 0) {
            guidelineItems.forEach(item => {
                item.classList.remove('visible', 'filtered');
            });
            updateFilterStatus();
            return;
        }
        
        guidelineItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const itemClasses = item.className.split(' ');
            
            let shouldShow = true;
            
            // 카테고리 필터링
            if (selectedCategories.size > 0) {
                shouldShow = shouldShow && selectedCategories.has(itemCategory);
            }
            
            // 스테이지 필터링
            if (selectedStages.size > 0) {
                const hasMatchingStage = itemClasses.some(className => selectedStages.has(className));
                shouldShow = shouldShow && hasMatchingStage;
            }
            
            // 필터링 결과 적용
            if (shouldShow) {
                item.classList.add('visible');
                item.classList.remove('filtered');
            } else {
                item.classList.remove('visible');
                item.classList.add('filtered');
            }
        });
        
        // 필터링 결과 표시
        updateFilterStatus();
        
        // 결과 카드 업데이트
        updateResultCards();
    }
    
    // 필터 상태 표시 함수
    function updateFilterStatus() {
        const statusContainer = document.querySelector('.filter-status') || createFilterStatus();
        
        let statusText = '';
        if (selectedCategories.size > 0 || selectedStages.size > 0) {
            const categoryText = selectedCategories.size > 0 ? `카테고리: ${Array.from(selectedCategories).join(', ')}` : '';
            const stageText = selectedStages.size > 0 ? `스테이지: ${Array.from(selectedStages).join(', ')}` : '';
            statusText = `필터링: ${[categoryText, stageText].filter(Boolean).join(' | ')}`;
        } else {
            statusText = '가이드라인을 보려면 카테고리 또는 스테이지를 선택해주세요';
        }
        
        statusContainer.textContent = statusText;
    }
    
    // 필터 상태 컨테이너 생성
    function createFilterStatus() {
        const statusContainer = document.createElement('div');
        statusContainer.className = 'filter-status';
        statusContainer.style.cssText = `
            text-align: center;
            padding: 20px;
            margin: 20px 0;
            background: #fef3c7;
            border-radius: 12px;
            border: 2px solid #f59e0b;
            font-weight: 600;
            color: #92400e;
            font-size: 16px;
        `;
        
        // resources-navigator-section의 시작 부분에 삽입
        const navigatorSection = document.querySelector('.resources-navigator-section');
        if (navigatorSection) {
            navigatorSection.insertBefore(statusContainer, navigatorSection.firstChild);
        }
        
        return statusContainer;
    }
    
    // 초기 필터 상태 표시
    updateFilterStatus();
    
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
    
    // 자료실 게시판 검색 및 필터링
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const categoryFilter = document.querySelector('.category-filter');
    const stageFilter = document.querySelector('.stage-filter');
    const tableRows = document.querySelectorAll('.table-row');
    
    if (searchInput && searchBtn) {
        // 검색 기능
        const performSearch = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const selectedStage = stageFilter.value;
            
            tableRows.forEach(row => {
                const category = row.getAttribute('data-category');
                const stage = row.getAttribute('data-stage');
                const title = row.querySelector('.col-title h4').textContent.toLowerCase();
                const description = row.querySelector('.col-title .description').textContent.toLowerCase();
                
                let showRow = true;
                
                // 카테고리 필터
                if (selectedCategory && category !== selectedCategory) {
                    showRow = false;
                }
                
                // 단계 필터
                if (selectedStage && !stage.includes(selectedStage)) {
                    showRow = false;
                }
                
                // 검색어 필터
                if (searchTerm && !title.includes(searchTerm) && !description.includes(searchTerm)) {
                    showRow = false;
                }
                
                row.style.display = showRow ? 'grid' : 'none';
            });
        };
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // 필터 변경 시 자동 검색
        categoryFilter.addEventListener('change', performSearch);
        stageFilter.addEventListener('change', performSearch);
    }
    
    // 다운로드 버튼 클릭 이벤트
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('.table-row');
            const title = row.querySelector('.col-title h4').textContent;
            alert(`"${title}" 자료 다운로드를 시작합니다.`);
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

    // 탭 기능 구현
    function initializeTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                // 모든 탭 버튼에서 active 클래스 제거
                tabBtns.forEach(b => b.classList.remove('active'));
                // 모든 탭 패널에서 active 클래스 제거
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                // 클릭된 탭 버튼에 active 클래스 추가
                btn.classList.add('active');
                // 해당하는 탭 패널에 active 클래스 추가
                const targetPanel = document.getElementById(`${targetTab}-panel`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // 공지사항 검색 및 필터링
    function initializeNoticeBoard() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const categoryFilter = document.getElementById('categoryFilter');
        const noticeItems = document.querySelectorAll('.notice-list-item');

        // 검색 기능
        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            noticeItems.forEach(item => {
                const titleElement = item.querySelector('.notice-link');
                const title = titleElement ? titleElement.textContent.toLowerCase() : '';
                const category = item.getAttribute('data-category');

                const matchesSearch = title.includes(searchTerm);
                const matchesCategory = !selectedCategory || category === selectedCategory;

                if (matchesSearch && matchesCategory) {
                    item.style.display = 'grid';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // 이벤트 리스너 등록
        if (searchBtn) {
            searchBtn.addEventListener('click', performSearch);
        }
        if (searchInput) {
            searchInput.addEventListener('input', performSearch);
        }
        if (categoryFilter) {
            categoryFilter.addEventListener('change', performSearch);
        }
    }

    // 탭 기능 초기화
    initializeTabs();
    
    // 공지사항 기능 초기화
    initializeNoticeBoard();
    
    // 팝업 모달 초기화 (메인 페이지만)
    initializePopup();
    
    // 자료실 인덱스 페이지에서 초기에 모든 가이드 표시
    if (window.location.pathname.includes('resources-index.html') || window.location.pathname.includes('resources-index')) {
        showInitialGuides();
    }
    
    // view-btn 클릭 효과
    initializeViewButtons();
    
});

// view-btn 클릭 효과 초기화
function initializeViewButtons() {
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 모든 버튼에서 clicked 클래스 제거
            viewBtns.forEach(b => b.classList.remove('clicked'));
            
            // 클릭된 버튼에 clicked 클래스 추가
            this.classList.add('clicked');
            
            // 0.5초 후에 페이지 이동
            setTimeout(() => {
                window.location.href = this.href;
            }, 200);
            
            // 기본 링크 동작 방지
            e.preventDefault();
        });
    });
}

// 팝업 모달 기능
function initializePopup() {
    // 메인 페이지에서만 실행
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        return;
    }

    const popup = document.getElementById('seminarPopup');
    const closeBtn = document.getElementById('closePopup');
    const closeTodayBtn = document.getElementById('closeToday');
    const moreInfoBtn = document.getElementById('moreInfo');
    const overlay = document.querySelector('.popup-overlay');

    // 팝업이 없으면 return
    if (!popup) return;

    // 오늘 하루 보지 않기가 설정되어 있는지 확인
    const hideToday = localStorage.getItem('hidePopupToday');
    const today = new Date().toDateString();

    // 오늘 하루 보지 않기가 오늘 날짜와 같으면 팝업 표시하지 않음
    if (hideToday === today) {
        return;
    }

    // 페이지 로드 후 1초 뒤에 팝업 표시
    setTimeout(() => {
        showPopup();
    }, 1000);

    // 팝업 표시 함수
    function showPopup() {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }

    // 팝업 숨김 함수
    function hidePopup() {
        popup.classList.remove('show');
        document.body.style.overflow = ''; // 스크롤 복원
    }

    // 닫기 버튼 클릭
    if (closeBtn) {
        closeBtn.addEventListener('click', hidePopup);
    }

    // 오버레이 클릭 시 닫기
    if (overlay) {
        overlay.addEventListener('click', hidePopup);
    }

    // 오늘 하루 보지 않기 버튼
    if (closeTodayBtn) {
        closeTodayBtn.addEventListener('click', () => {
            localStorage.setItem('hidePopupToday', today);
            hidePopup();
        });
    }

    // 자세히 보기 버튼
    if (moreInfoBtn) {
        moreInfoBtn.addEventListener('click', () => {
            // 세미나 관련 페이지로 이동 (예: 공지사항 페이지)
            window.open('notice.html', '_blank');
            hidePopup();
        });
    }

    // ESC 키로 팝업 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('show')) {
            hidePopup();
        }
    });
}

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
