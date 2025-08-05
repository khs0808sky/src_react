# src_react

## 📅 목차

- [2025-08-05](#2025-08-05)

<br><br><br>

---

# 2025-08-05

---

## ✅ 1. HTML의 특징

### 🔹 HTML이란?

* **Hyper Text Markup Language**의 약자로, 웹 페이지의 구조를 기술하는 마크업 언어

### 🔹 HTML의 주요 특징

| 항목       | 설명                                    |
| -------- | ------------------------------------- |
| 구조화 중심   | 웹 콘텐츠의 제목, 문단, 목록 등 구조 정의             |
| 마크업 언어   | `<h1>`, `<p>`, `<table>` 등 태그로 의미를 표현 |
| 브라우저 독립적 | 다양한 브라우저에서 동일한 구조 해석 가능               |
| 정적 문서    | 기본적으로 정적인 페이지 제공 (동적 처리는 JS 등 필요)     |

---

## ✅ 2. HTML5의 특징 및 주요 태그

### 🔹 HTML5 특징

| 항목        | 설명                                                         |
| --------- | ---------------------------------------------------------- |
| 시맨틱 태그 도입 | `<section>`, `<article>`, `<nav>`, `<header>` 등 구조적 의미 강화  |
| 폼 관련 확장   | `required`, `placeholder`, `email`, `range` 등 다양한 입력 속성 지원 |
| 멀티미디어 지원  | `<video>`, `<audio>` 태그 도입                                 |
| 그래픽 지원    | `<canvas>`, `<svg>`                                        |
| 웹 스토리지    | localStorage, sessionStorage                               |
| API 제공    | Drag\&Drop, Geolocation, WebSocket 등                       |

### 🔹 HTML5 유용한 태그 예시

| 태그                                      | 설명                  |
| --------------------------------------- | ------------------- |
| `<details>`, `<summary>`                | 접었다 펼 수 있는 정보 블록    |
| `<mark>`                                | 강조 표시               |
| `<time>`                                | 시간 정보 표현            |
| `<meter>`                               | 정량적인 값 (예: 퍼센트, 점수) |
| `<progress>`                            | 진행 상태 표시            |
| `<datalist>`                            | 입력 자동완성 옵션 제공       |
| `<input type="range">`, `date`, `email` | 폼 확장 타입             |

---

## ✅ 3. CSS 예제 중심 정리

### 🔹 박스 모델 & 포지션

* `margin`, `padding`, `border`, `width`, `height`로 구성된 박스 모델
* `position: relative`, `absolute` 등을 통해 위치 제어

```css
.parents {
  position: relative;
}
.child {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

### 🔹 트랜지션 & 애니메이션

```css
.btn {
  transition-property: background-color;
  transition-duration: 0.5s;
}
.btn:hover {
  background-color: #ddd;
}
```

### 🔹 메뉴 흐름 처리 (inline-block, flex)

```css
.menu_item {
  display: inline-block;
}
.container {
  display: flex;
}
```

### 🔹 기본 선택자 & 복합 선택자

```css
.class01 { background-color: silver; }
#fruit { background-color: transparent; }
ul li { color: blue; }          /* 자손 */
ul > li { background: pink; }   /* 자식 */
li#기준 ~ li { color: plum; }   /* 형제들 */
li#기준 + li { color: green; }  /* 바로 다음 형제 */
```

### 🔹 미디어 쿼리 & 반응형 디자인

```css
@media screen and (min-width: 200px) and (max-width: 400px) {
  #media_query {
    color: blue;
    font-weight: bold;
  }
}
```

---

📅[목차로 돌아가기](#-목차)

---
