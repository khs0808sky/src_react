# src_react

## 📅 목차

- [2025-08-05](#2025-08-05)
- [2025-08-06](#2025-08-06)
- [2025-08-07](#2025-08-07)

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

# 2025-08-06

### JavaScript 주요 개념 및 예제 정리

---

#### 1. 변수 선언 (ES6 기준)

* `let`: 블록 스코프, 재선언 불가
* `const`: 상수, 블록 스코프, 재할당 불가
* `var`: 함수 스코프, 중복 선언 가능, 전역에서는 `window` 프로퍼티로 작동
* 예:

  ```js
  let a = 10;
  const b = '가나다';
  var c = true;
  console.info(a, b, c);
  ```

---

#### 2. 데이터 타입 및 형변환

* `typeof` 사용 예:

  ```js
  typeof 10;        // number  
  typeof '12345';   // string  
  typeof function() {};  // function  
  typeof [];        // object (배열도 객체)  
  ```
* 암시적 형변환 예:

  ```js
  1 + '2';       // "12" (문자열 결합)  
  '1' / 2;       // 0.5 (숫자 연산)  
  Number('123'); // 123  
  Number('abcd'); // NaN  
  isNaN(Number('123abcd')); // true
  ```
* 템플릿 문자열:

  ```js
  console.log(`1+2=${1 + 2}`);
  ```

---

#### 3. 비교 연산자

* `==` : 값만 비교 (느슨한 비교)
* `===`: 값과 타입 모두 비교 (엄격한 비교)

```js
console.log(123 == '123');  // true  
console.log(123 === '123'); // false
```

---

#### 4. 구조 분해 할당

* 배열:

  ```js
  let [d, e, f] = [1, 2, 3];
  let [g=0, h=0, i=0] = [1, 2];
  ```
* 객체:

  ```js
  let { p1, p2, p3 } = { p1:1, p2:'str', p3:true };
  ```

---

#### 5. 배열 및 반복문

* 기본 반복문: `for`, `for...in`, `for...of`
* 고차 함수: `forEach`, `map`, `filter`, `reduce`, `some`, `every`
* 예:

  ```js
  let ary = [100, 200, 300, 400, 500];
  ary.forEach(item => console.log(item));
  let total = ary.filter(x => x >= 300).reduce((tot, x) => tot + x, 0);
  let hasBig = ary.some(x => x >= 500);
  ```

---

#### 6. `this`와 호이스팅

* `var` 변수와 함수 선언은 호이스팅되어 코드 최상단으로 끌어올려진 듯 동작함
* `let`, `const`는 호이스팅되지만 초기화 이전에는 접근 불가(Temporal Dead Zone)
* 전역 `var` 변수는 `window` 객체 프로퍼티가 됨
* 예:

  ```js
  var name = '가';
  let name1 = '나';

  console.log(name, name1);
  console.log(this.name, this.name1);
  console.log(window.name, window.name1);

  test(); // 함수 호이스팅으로 정상 호출
  function test() {
      var name = 'A';
      console.log(name);
      console.log(this.name);
  }
  ```

---

#### 7. 함수 매개변수

* 기본값 매개변수
* 나머지 매개변수 (`...args`)
* 전개 연산자 (`...arr`)
* 예:

  ```js
  function add(a, b = 0) {
    return a + b;
  }

  function addAll(...args) {
    return args.reduce((sum, val) => sum + val, 0);
  }

  let arr = [1, 2, 3];
  console.log(...arr);
  ```

---

#### 8. 불변 객체와 함수형 프로그래밍

* 객체 복사 및 확장:

  ```js
  const obj = { name: '홍길동', age: 20 };
  const obj2 = { ...obj, age: 30, addr: '광주' };
  ```
* 함수형 예:

  ```js
  function add4(a, b, ...fns) {
    let c = 0;
    fns.forEach(f => c += f(a, b));
    return c;
  }
  ```

---

#### 9. 객체 리터럴과 생성자 함수

* 리터럴 객체 메서드 정의
* 생성자 함수와 프로토타입 메서드
* 예:

  ```js
  const calc = {
    a: 1,
    b: 2,
    add() { return this.a + this.b; }
  };

  function Calc3(a, b) {
    this.a = a;
    this.b = b;
  }
  Calc3.prototype.add = function() {
    return this.a + this.b;
  }
  let obj3 = new Calc3(1, 2);
  ```

---

#### 10. 클래스 및 상속

* ES6 클래스, getter, 메서드
* 상속 `extends` 및 `super()`
* 예:

  ```js
  class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area() {
      return this.height * this.width;
    }
    print() {
      console.log('면적: ' + this.area);
    }
  }

  class Square extends Polygon {
    constructor(length) {
      super(length, length);
    }
  }
  ```

---

#### 11. 비동기 처리 및 Ajax (jQuery, Axios, Fetch)

* jQuery `$.get`과 `done`, `fail`
* Axios `axios.get`과 `then`, `catch`
* Fetch API `fetch()`와 Promise 처리
* async/await 예시도 가능
* 예:

  ```js
  $.get('msg.json', {}, function(data) {
    console.log('jQuery:', data);
  });

  axios.get('msg.json')
    .then(res => console.log('Axios:', res.data))
    .catch(err => console.log('Error:', err));

  fetch('msg.json')
    .then(res => res.json())
    .then(data => console.log('Fetch:', data))
    .catch(err => console.log('Error:', err));
  ```
  
---

📅[목차로 돌아가기](#-목차)

---

## 2025-08-07

---

### ✅ React에 대해

* 자바스크립트 기반의 **UI 라이브러리**
* SPA(Single Page Application) 구현에 최적화
* 선언형(Declarative) 방식으로 UI 구성 → 코드가 간결하고 예측 가능
* 컴포넌트(Component) 기반 아키텍처 → 재사용성, 유지보수 용이

---

### ✅ CRA (Create React App)

* 리액트 프로젝트를 **빠르게 시작**할 수 있도록 돕는 CLI 도구
* 복잡한 환경 설정 없이 실행 가능한 기본 구성 제공
* 주요 명령어:

  * `npx create-react-app 프로젝트명`
  * `npm start`, `npm run build` 등

---

### ✅ 모듈(Module)

* \*\*자바스크립트의 모듈 시스템(ES Modules)\*\*을 이용
* 하나의 파일을 **기능 단위로 나눠서 관리**
* `import`, `export` 문법 사용

  ```js
  export default 함수명;  // 내보내기  
  import 함수명 from './파일명';  // 불러오기
  ```

---

### ✅ 컴포넌트(Component)

* **UI를 구성하는 최소 단위**
* 함수형(functional) 컴포넌트가 일반적
* JSX 문법을 사용해 마크업 작성

  ```jsx
  function Greeting() {
    return <h1>Hello, world!</h1>;
  }
  ```

---

### ✅ props (Properties)

* **부모 → 자식**으로 데이터 전달할 때 사용
* 읽기 전용 (불변성 유지)
* 객체 형태로 전달되며, JSX 내에서 `{}`로 접근

  ```jsx
  function Welcome(props) {
    return <h1>안녕, {props.name}!</h1>;
  }

  <Welcome name="현수" />
  ```
* 구조 분해 할당으로 더 깔끔하게 작성 가능

  ```jsx
  function Welcome({ name }) {
    return <h1>안녕, {name}!</h1>;
  }
  ```

---

📅[목차로 돌아가기](#-목차)

---


