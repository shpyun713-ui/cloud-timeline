@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========================================
echo   Vercel 배포 스크립트
echo ========================================
echo.

echo [1/6] Git 저장소 확인...
if not exist .git (
    echo 오류: Git 저장소가 아닙니다!
    echo 이 폴더에서 'git init'을 먼저 실행하세요.
    pause
    exit /b 1
)
echo ✓ Git 저장소 확인됨
echo.

echo [2/6] 원격 저장소 확인...
git remote -v
if %errorlevel% neq 0 (
    echo 경고: 원격 저장소가 설정되지 않았습니다.
    echo 'git remote add origin [저장소 URL]'을 실행하세요.
    pause
    exit /b 1
)
echo ✓ 원격 저장소 확인됨
echo.

echo [3/6] 현재 브랜치 확인...
for /f "tokens=2" %%b in ('git branch --show-current 2^>nul') do set CURRENT_BRANCH=%%b
if "!CURRENT_BRANCH!"=="" (
    for /f "tokens=2" %%b in ('git rev-parse --abbrev-ref HEAD 2^>nul') do set CURRENT_BRANCH=%%b
)
if "!CURRENT_BRANCH!"=="" set CURRENT_BRANCH=master
echo 현재 브랜치: !CURRENT_BRANCH!
echo.

echo [4/6] 변경사항 확인...
git status
echo.

echo [5/6] 변경사항 스테이징 및 커밋...
echo 모든 변경사항 추가 중...
git add .
if %errorlevel% neq 0 (
    echo 오류: git add 실패
    pause
    exit /b 1
)

echo 스테이징된 변경사항 확인...
git status --short
echo.

git commit -m "타임라인 페이지 확장 카드 너비 확대 (700px -> 1000px)"
if %errorlevel% neq 0 (
    echo.
    echo 경고: 커밋 실패
    echo 변경사항이 이미 커밋되었거나, 커밋할 변경사항이 없습니다.
    echo 현재 상태를 확인합니다...
    git status
    echo.
    echo 변경사항이 없다면 푸시만 진행합니다...
) else (
    echo ✓ 커밋 완료
)
echo.

echo [6/6] 원격 저장소에 푸시...
git push origin !CURRENT_BRANCH!
if %errorlevel% neq 0 (
    echo.
    echo 오류: 푸시 실패
    echo 가능한 원인:
    echo   - 인증이 필요합니다 (GitHub/GitLab 로그인 확인)
    echo   - 네트워크 연결 문제
    echo   - 원격 저장소 권한 문제
    pause
    exit /b 1
)
echo ✓ 푸시 완료
echo.

echo ========================================
echo   배포 완료!
echo ========================================
echo Vercel이 자동으로 배포를 시작합니다.
echo 배포 상태는 Vercel 대시보드에서 확인하세요.
echo.
pause


