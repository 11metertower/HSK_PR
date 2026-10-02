# 김현성 자기 PR / 소개팅 프로필 웹사이트 (HSK PR)

'Salon de Letter' 모바일 청첩장의 우아하고 감성적인 디자인 언어를 바탕으로 제작된 **김현성 님의 모바일 최적화 자기 PR 및 소개팅 주선용 단일 페이지 웹사이트**입니다.

---

## 🌐 GitHub Pages 배포 URL

배포 완료 시 아래 링크를 통해 모바일/PC 브라우저 어디서든 바로 접속하실 수 있습니다:

🔗 **[https://11metertower.github.io/HSK_PR/](https://11metertower.github.io/HSK_PR/)**

> **주선자 및 상대방 전달 팁:**
> - 카카오톡 채팅방에 위 링크를 보내면 설정된 썸네일(프로필 사진)과 타이틀(*"김현성을 소개합니다 · HYUNSUNG KIM"*)이 감성적인 카드 형태로 자동 미리보기(Open Graph)됩니다.
> - 사이트 하단의 **[카카오톡 전송 문구 복사하기]** 버튼을 누르면 추천 소개 문구와 링크가 클립보드에 함께 복사됩니다.

---

## 🌟 주요 특징 및 구성 섹션

1. **감성적인 BGM 오디오 플레이어 (Web Audio API)**
   - 우측 상단 플로팅 버튼으로 잔잔하고 로맨틱한 피아노 아르페지오 멜로디 재생 및 일시정지 (외부 음원 의존성 없음).
2. **상단 퀵 네비게이션**
   - 처음 · 인사말 · 프로필 · 취향·가치관 · 사진 · 마음 전하기 부드러운 스크롤 점프.
3. **메인 커버 (Hero Section)**
   - 아치형 프레임의 고화질 프로필 사진 (`/public/images/profile.jpg`).
   - 단정한 명조체 타이포그래피와 핵심 요약 뱃지 (1995년생 / 179cm / 삼성전자 DX / 수원).
4. **인사말 (Greeting Letter)**
   - 청첩장 특유의 서정적이고 정중하며 다정한 톤앤매너로 작성된 자기소개 편지글.
5. **프로필 상세 (Profile Specs)**
   - 1995년생 (31세), 179cm, 삼성전자 DX, 카이스트 학사 & 포항공대(포스텍) 석사, 수원 거주, 자차 보유 및 드라이브.
6. **취향과 가치관 (Lifestyle & Values Q&A)**
   - 주말 카페 투어 및 교외 드라이브 취향, 지향하는 편안한 연애관, 차분하고 다정한 성격 소개.
7. **바라는 인연 (Ideal Match)**
   - "순딩하게 예쁘거나 적당히 예쁘고 적극적인 분"을 품격 있고 매력적인 언어로 재구성.
8. **일상 갤러리 (Moments)**
   - 2열 반응형 그리드, '사진 더보기' 버튼 및 사진 클릭 시 전체화면 고화질 확대 라이트박스 뷰어.
9. **마음 전하기 폼 (Connect Form - RSVP 대체)**
   - 선호하는 만남 스타일 선택 (커피 한잔 / 식사 & 드라이브 / 메시지 먼저).
   - 성함, 연락처, 전하는 한마디 입력 후 제출 시 낭만적인 Confetti 축하 효과.
   - 브라우저 로컬스토리지 저장 및 주선자 전달용 요약 문구 복사 기능.
10. **주선자 공유 및 본인 확인용 수신함**
    - 카카오톡 전송용 소개 문구 복사 및 소개서 링크 복사.
    - '도착한 마음 확인하기' 모달을 통해 본인(김현성 님)이 받은 신청 내역 확인 가능.

---

## 🚀 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (실시간 반영)
npm run dev

# 정적 HTML 빌드 (out 디렉토리 생성)
npm run build
```
로컬 브라우저에서 `http://localhost:3000` 접속

---

## 📤 GitHub Pages 배포 및 접근 가이드

### [옵션 A] gh-pages 브랜치 배포 (Personal Access Token에 workflow 권한이 없을 때 권장)
토큰 수정 없이 바로 배포할 수 있는 가장 간단한 방법입니다:

1. 워크플로우 파일 충돌 방지:
   ```bash
   git rm -f .github/workflows/deploy.yml
   git commit -m "chore: remove actions workflow for gh-pages direct deploy"
   git push origin main
   ```
2. gh-pages로 정적 사이트 배포:
   ```bash
   npx gh-pages -d out -t true
   ```
3. GitHub 저장소 설정:
   - `https://github.com/11metertower/HSK_PR/settings/pages` 접속
   - **Source**: `Deploy from a branch` 선택
   - **Branch**: `gh-pages` / `/ (root)` 선택 후 **Save**

### [옵션 B] GitHub Actions 자동 배포 (토큰에 `workflow` 권한 추가 시)
1. GitHub 웹사이트: **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. 현재 사용 중인 토큰 클릭 후 **`workflow`** 체크박스 활성화 및 저장
3. 터미널에서 푸시:
   ```bash
   git push origin main
   ```
4. GitHub 저장소 설정:
   - `https://github.com/11metertower/HSK_PR/settings/pages` 접속
   - **Source**: `GitHub Actions` 선택

---

## 🖼️ 프로필 사진 교체 방법

새로운 사진을 등록하고 싶을 때는 아래 명령어로 덮어쓴 후 빌드하시면 됩니다:
```bash
cp ~/새사진.jpg ~/dev/HSK_PR/public/images/profile.jpg
npm run build
```
