# 🎯 시나브로 룰렛 배틀 (Sinabro Game Roulette)

친구, 동료들과 함께 즐기는 흥미진진한 복불복 룰렛 미니게임 웹 앱입니다.

## 🚀 기술 스택
- **프레임워크:** React 18, Vite
- **스타일링:** Tailwind CSS
- **효과 및 애니메이션:** HTML5 Canvas, Web Audio API, Canvas-confetti, Lucide React
- **배포 지원:** Vercel Ready (`vercel.json` 포함)

## ✨ 주요 기능 및 특징
1. **[1단계] 참여 인원 및 대결 목표 설정**
   - 1등 뽑기 / 벌칙자 뽑기 / 직접 입력 커스텀
   - 참여 인원수 (+ / -) 간편 조절 및 개별 플레이어 이름 커스텀
2. **[2단계] 룰렛 내용 설정**
   - 원클릭 추천 프리셋 (벌칙 복불복, 1등 당첨, 점심 메뉴, 역할 분담)
   - 룰렛 항목 실시간 추가, 삭제, 수정 및 색상 팔레트 자동 매핑
3. **[3단계] 룰렛 돌리기 & 당첨 결과 확인**
   - HTML5 Canvas 기반의 부드럽고 실감나는 룰렛 회전 물리 애니메이션
   - 회전 시 실시간 틱 사운드 및 당첨 팡파레 (Web Audio API 내장, 음소거 지원)
   - 차례별 룰렛 스핀 및 개별 당첨 결과 쾅! 팝업
   - 모든 참가자가 완료되었을 때의 최종 결과 요약 및 클립보드 복사 공유

## 🛠 로컬 실행 방법
```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드 테스트
npm run build
```

## 🌐 Vercel 배포 방법
1. GitHub 저장소에 푸시합니다.
2. Vercel(https://vercel.com) 대시보드에서 `New Project`를 클릭합니다.
3. 해당 저장소를 Import 한 후 Framework Preset으로 **Vite**를 선택하고 배포(Deploy)합니다.

