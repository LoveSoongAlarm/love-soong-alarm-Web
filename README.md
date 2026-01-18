# 좋아하면 숭리는 💘

💓 숭실대학교 대동제 위치기반 매칭 서비스
지금, 내 근처에 나와 같은 취향을 가진 사람을 자연스럽게 발견하고 연결하는 위치 기반 플랫폼

<p align="center">
  <img width="640" height="368" alt="뒷면" src="https://github.com/user-attachments/assets/ceddb867-2ac9-4200-a2b4-243509687912" />
</p>

## 🔎 프로젝트 소개

💡 지금 50m 이내에, 나와 같은 취향을 가진 사람이 있다면? <br />
	•	근처에 #리버풀FC를 좋아하는 사람이 있어요 <br />
	•	근처에 #검정치마를 좋아하는 사람이 있어요 <br />
	•	근처에 클라이밍, 등산, 헬스, 오버워치를 좋아하는 사람이 있어요 <br />

💭 같은 취향의 사람을 만나고 싶긴 한데 <br />
💭 그렇다고 소개팅 앱처럼 적극적으로 나서는 건 부담스럽고 <br />
💭 그냥 지금 이 공간에서 말 통하는 사람이 있으면 좋겠다 <br />

💓 좋아하면 숭리는은 축제라는 지금-여기 공간에서 관심사 기반으로 사람을 탐색하고 연결하는 서비스 💓 

## ✨ 주요 기능 

1. 📍 실시간 위치 기반 탐색 
  - 사용자의 현재 위치(Geolocation)를 포그라운드 상태에서 수집하여 서버로 전송

  - 지도 SDK를 활용해 내 주변 사용자를 마커로 시각화

2. 🔔 숭알람 & 매칭 
- Firebase Cloud Messaging(FCM)을 연동하여, 근처에 취향이 맞는 상대가 나타나거나 채팅이 오면 즉각적인 푸시 알림을 제공

3. 💬 익명 채팅
- 매칭된 상대와 즉시 대화할 수 있는 1:1 채팅 인터페이스를 제공

- 부담 없는 대화를 위해 프로필은 관심사 위주로 노출

4. 🔐 소셜 로그인
- 카카오 로그인을 연동하여 빠르고 간편한 가입 절차를 제공

5. 📱 PWA (Progressive Web App) 지원
- 브라우저에서 바로 실행되며, '홈 화면에 추가' 기능을 통해 네이티브 앱처럼 아이콘을 생성하고 사용할 수 있음

## 🛠 기술 스택 (Tech Stack)
**Core**: React(Vite), TypeScript, PWA

**State Management**: Zustand

**Cloud & DevOps**: Firebase (FCM), AWS

**Styling**: TailwinCSS

**Deployment**: Vercel

**Notification**: Firebase Cloud Messaging (FCM)

**Maps**: Kakao Maps API
