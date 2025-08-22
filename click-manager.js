// 클릭 매니저 - 모든 hover 효과를 클릭 효과로 변경
document.addEventListener('DOMContentLoaded', function() {
    
    // 클릭 가능한 카드들에 클릭 이벤트 추가
    const clickableCards = [
        '.purpose-card',
        '.roadmap-phase',
        '.metric-card',
        '.analysis-card',
        '.legal-card',
        '.contract-card',
        '.project-content-card',
        '.model-type-card',
        '.support-card',
        '.performance-card',
        '.intro-card',
        '.k-card',
        '.expanded-kpis .kpi-card',
        '.expanded-kpis .kpi-item',
        '.expanded-policies li',
        '.policy-simple-item',
        '.expanded-strategies .strategy-item li',
        '.strategy-simple-item',
        '.timeline-marker',
        '.goal-step',
        '.stat-card',
        '.case-card',
        '.service-card',
        '.result-card'
    ];

    // 각 카드 타입에 대해 클릭 이벤트 추가
    clickableCards.forEach(selector => {
        const cards = document.querySelectorAll(selector);
        cards.forEach(card => {
            card.addEventListener('click', function() {
                // 다른 카드들의 clicked 클래스 제거
                cards.forEach(c => c.classList.remove('clicked'));
                // 현재 카드에 clicked 클래스 추가
                this.classList.add('clicked');
                
                // 3초 후 clicked 클래스 제거 (자동으로 원래 상태로 복귀)
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 3000);
            });
        });
    });

    // 확장 가능한 카드 처리
    const expandableCards = document.querySelectorAll('.k-card-expandable');
    expandableCards.forEach(card => {
        card.addEventListener('click', function() {
            // 다른 확장 가능한 카드들의 expanded 클래스 제거
            expandableCards.forEach(c => c.classList.remove('expanded'));
            
            // 현재 카드가 이미 확장되어 있다면 축소, 아니면 확장
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
            } else {
                this.classList.add('expanded');
            }
        });
    });

    // Goal Step Horizontal 클릭 이벤트
    const goalSteps = document.querySelectorAll('.goal-step-horizontal');
    goalSteps.forEach(step => {
        step.addEventListener('click', function() {
            // 다른 스텝들의 clicked 클래스 제거
            goalSteps.forEach(s => s.classList.remove('clicked'));
            // 현재 스텝에 clicked 클래스 추가
            this.classList.add('clicked');
            
            // 2초 후 clicked 클래스 제거
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 2000);
        });
    });

    // 버튼 클릭 효과
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline, .download-btn, .search-btn, .tab-btn, .category-btn, .preview-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 클릭 효과를 위한 임시 스타일 추가
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 테이블 행 클릭 효과
    const tableRows = document.querySelectorAll('.table-row');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // 다른 행들의 clicked 클래스 제거
            tableRows.forEach(r => r.classList.remove('clicked'));
            // 현재 행에 clicked 클래스 추가
            this.classList.add('clicked');
            
            // 2초 후 clicked 클래스 제거
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 2000);
        });
    });

    // FAQ 질문 클릭 효과
    const faqQuestions = document.querySelectorAll('.faq-question, .faq-question-detailed');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 리소스 아이템 클릭 효과
    const resourceItems = document.querySelectorAll('.resource-item, .resource-item-detailed');
    resourceItems.forEach(item => {
        item.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 프로젝트 카드 클릭 효과
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // 다른 카드들의 clicked 클래스 제거
            projectCards.forEach(c => c.classList.remove('clicked'));
            // 현재 카드에 clicked 클래스 추가
            this.classList.add('clicked');
            
            // 3초 후 clicked 클래스 제거
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 3000);
        });
    });

    // 방향 클라우드 클릭 효과
    const directionClouds = document.querySelectorAll('.direction-cloud');
    directionClouds.forEach(cloud => {
        cloud.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 이해관계자 그룹 클릭 효과
    const stakeholderGroups = document.querySelectorAll('.stakeholder-group');
    stakeholderGroups.forEach(group => {
        group.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 푸터 링크 클릭 효과
    const footerLinks = document.querySelectorAll('.footer-section ul li a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 타임라인 플래그 클릭 효과
    const timelineFlags = document.querySelectorAll('.k-timeline-flag');
    timelineFlags.forEach(flag => {
        flag.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 타임라인 날짜 래퍼 클릭 효과
    const dateWraps = document.querySelectorAll('.k-timeline-date-wrap');
    dateWraps.forEach(wrap => {
        wrap.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 네비게이션 링크 클릭 효과
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 서브메뉴 아이템 클릭 효과
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 클릭 효과
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            // 100ms 후 원래 크기로 복귀
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    console.log('클릭 매니저가 초기화되었습니다. 모든 hover 효과가 클릭 효과로 변경되었습니다.');
});
