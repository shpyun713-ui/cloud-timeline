// 메뉴 데이터 정의 (중앙 집중 관리)
const menuData = {
    policy: {
        title: '정책 소개',
        items: [
            { name: '정책 타임라인', url: 'timeline.html', active: false },
            { name: '해외 클라우드 동향', url: 'overseas-trends.html', active: false },
            { name: '관련 법제도 정비', url: 'legal-framework.html', active: false }
        ]
    },
    project: {
        title: '전환 사업',
        items: [
            { name: '행정·공공기관 클라우드 전환사업', url: 'conversion-project.html', active: false },
            { name: '클라우드컴퓨팅서비스 활용모델 사업', url: 'utilization-model.html', active: false },
            { name: '민간 SaaS 활용촉진', url: 'saas-promotion.html', active: false }
        ]
    },
    guide: {
        title: '이용 안내',
        items: [
            { name: '공지사항', url: 'notice.html', active: false },
            { name: '자주찾는 질문', url: 'faq.html', active: false }
        ]
    }
};

// 현재 페이지 URL에 따라 활성 메뉴 설정
function setActiveMenu() {
    const currentPath = window.location.pathname.split('/').pop() || 'timeline.html';
    
    // 모든 메뉴의 active 상태 초기화
    Object.keys(menuData).forEach(menuKey => {
        menuData[menuKey].items.forEach(item => {
            item.active = (item.url === currentPath);
        });
    });
}

// 하위 메뉴 생성 및 렌더링
function createSubmenu(menuKey, menuInfo) {
    const submenu = document.createElement('div');
    submenu.className = 'submenu';
    submenu.setAttribute('data-menu', menuKey);
    
    menuInfo.items.forEach(item => {
        const submenuItem = document.createElement('a');
        submenuItem.href = item.url;
        submenuItem.className = `submenu-item ${item.active ? 'active' : ''}`;
        submenuItem.textContent = item.name;
        submenu.appendChild(submenuItem);
    });
    
    return submenu;
}

// 메뉴 초기화
function initializeMenus() {
    const navItems = document.querySelectorAll('.nav-item[data-menu]');
    
    navItems.forEach(navItem => {
        const menuKey = navItem.getAttribute('data-menu');
        const menuInfo = menuData[menuKey];
        
        if (menuInfo) {
            // 하위 메뉴 생성 및 추가
            const submenu = createSubmenu(menuKey, menuInfo);
            navItem.appendChild(submenu);
            
            // 호버 이벤트 처리
            navItem.addEventListener('mouseenter', () => {
                submenu.style.opacity = '1';
                submenu.style.visibility = 'visible';
                submenu.style.transform = 'translateY(0)';
            });
            
            navItem.addEventListener('mouseleave', () => {
                submenu.style.opacity = '0';
                submenu.style.visibility = 'hidden';
                submenu.style.transform = 'translateY(-10px)';
            });
        }
    });
}

// 메뉴 데이터 업데이트 함수 (외부에서 사용 가능)
function updateMenuData(newData) {
    Object.assign(menuData, newData);
    // 기존 메뉴 제거 후 재생성
    const existingSubmenus = document.querySelectorAll('.submenu');
    existingSubmenus.forEach(submenu => submenu.remove());
    initializeMenus();
}

// 페이지 로드 시 메뉴 초기화
document.addEventListener('DOMContentLoaded', () => {
    setActiveMenu();
    initializeMenus();
});

// 외부에서 사용할 수 있도록 함수들 export
window.MenuManager = {
    updateMenuData,
    getMenuData: () => menuData,
    refreshMenus: initializeMenus
};
