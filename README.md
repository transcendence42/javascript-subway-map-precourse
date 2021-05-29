# 🚇 지하철 노선도 미션

### to know
- [자바스크립트 MVC 패턴](http://blog.naver.com/love_junim/220655980712) 
> 1. 사용자는 애플리케이션과 상호작용합니다.
> 2. 컨트롤러의 이벤트 헨들러가 작동됩니다.
> 3. 컨트롤러는 모델로부터 데이터를 요구하고, 그 결과를 뷰로 전달합니다.
> 4. 뷰는 데이터를 사용자에게 보여줍니다.
- [자바스크립트 MVC 구현](https://antaehyeon.github.io/devlog/2018/07/14/%EC%BD%94%EB%93%9C%EC%8A%A4%EC%BF%BC%EB%93%9C-MV%EC%97%AD%ED%95%A0%EB%82%98%EB%88%84%EA%B8%B0/)
- [로컬스토리지](https://www.daleseo.com/js-web-storage/)
>  세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워지는 반면에, 로컬 스토리지는 웹페이지의 세션이 끝나더라도 데이터가 지워지지 않습니다. 다시 말해, 브라우저에서 같은 웹사이트를 여러 탭이나 창에 띄우면, 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸합니다. 반면에, 로컬 스토리지의 경우 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있습니다.
> 하지만 이러한 로컬 스토리지의 데이터 영속성(persistence) 어디까지나 계속해서 동일한 컴퓨터에서 동일한 브라우저를 사용할 때만 해당합니다. 즉, 같은 컴퓨터에서 다른 브라우저를 사용하거나 (e.g. 크롬을 쓰다가 사파리를 쓰면), 또는 다른 컴퓨터에서 같은 브라우저를 사용하는 경우에는 (e.g. 집에서 크롬을 쓰다가 회사에서 크롬을 쓰면), 엄연히 다른 브라우저이므로 서로 다른 두 개의 로컬 스토리지에 데이터가 저장될 것입니다.
> 웹 스토리지를 사용할 때 주의해야 할 부분이 하나 있는데요. 오직 문자형(string) 데이터 타입만 지원한다는 것입니다. 웹 스토리지를 사용할 때 위와 같은(다른 타입의 데이터 저장할 때) 문제를 피하기 위해서 많이 사용하는 방법이 JSON 형태로 데이터를 읽고 쓰는 것입니다.
> 로컬 스토리지에 저장된 데이터는 웹페이지를 닫는다고 해서 사라지지 않으므로 불필요한 데이터가 남지 않도록 직접 청소해주는 것이 좋겠습니다.
- [로컬스토리지에 데이터를 json으로 저장하고 불러오기](https://studyingych.tistory.com/28)
> JSON은 형태만 객체, 실체는 문자열이다!
- [이벤트 위임](https://ko.javascript.info/event-delegation)
> 이벤트 핸들러 한번 연결할 때 마다 기본적으로 메모리를 꽤나 잡아 먹는다.
> listen이라는 작업 특성상 항상 대기해야 하기 때문에 어떻게 보면 당연하다.
> 따라서 원하는 요소를 만들때 마다 이벤트 핸들러를 추가해 버리면 사용자에게 매우 부담되는 페이지가 될 수 있다.
> 부가적인 문제지만 이벤트 핸들러는 태그가 삭제되어도 자동으로 삭제되지 않아(js GC는 뭐하는지?) 따로 호출해야 하는데(메모리 누수가 여기도 발생하네) 이 역시 이벤트 위임을 통해 자동적으로 해결된다.
- [이벤트 위임과 데이터 속성 연동하기](https://ko.javascript.info/event-delegation#ref-353)
> 가장 먼저 버튼 각각에 독립된 핸들러를 할당하는 방법이 떠오를 겁니다. 하지만 이 방법보다 더 우아한 해결책이 있습니다. 메뉴 전체에 핸들러를 하나 추가해주고, 각 버튼의 data-action 속성에 호출할 메서드를 할당해 주는 방법 말이죠.


### to do
- [ ] View: 화면에 보여줌  
    - [x] constructor : 4개의 버튼 만들기
    - [x] showStation: 역관리 화면 만들기
    - [x] showLine: 노선 관리 화면 만들기
    - [x] showSection: 구간 관리 화면 만들기 
    - [ ] showMap: 지하철 노선도 화면 만들기
- [ ] Controller: 이벤트 관련
    - [x] constructor: 4개의 버튼에 대한 이벤트를 확인
    - [x] catchStationAddition: 역추가 이벤트를 확인
    - [x] catchStationDeletion: 역삭제 이벤트를 확인
    - [x] catchLineAddition: 노선 추가 이벤트를 확인
    - [x] catchLineDeletion: 노선 삭제 이벤트를 확인
    - [ ] catchSectionAddition: 구간 추가 이벤트를 확인
    - [ ] catchSectionDeletion: 구간 삭제 이벤트를 확인
- [ ] Model: Local Storage와 소통
    - [x] addStation: 유효성(2글자 이상, 중복 여부)을 검증, 역추가
    - [x] deleteStation: 유효성(노선 등록 여부) 검증, 역삭제 
    - [ ] getStations: 전체 역 반환
    - [x] addLine: 유효성(중복 여부, 종점역 올바른 입력 여부) 검증, 노선 추가
    - [x] deleteLine: 노선 삭제
    - [ ] getLines: 전체 노선 반환
    - [x] addSection: 유효성(역 중복 여부) 검증, 구간 추가
    - [x] deleteSection: 유효성(노선 포함 역 두개 초과 여부) 검증, 구간 삭제
    - [ ] getSections: 노선 별 구간 반환

## 🚀 기능 요구사항
### 기존 요구사항

- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

### 추가된 요구사항
- [data](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)속성을 활용하여 html 태그에 역, 노선, 구간의 유일한 데이터 값들을 관리한다. 
- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 이용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 한다.

<br/>

### 지하철 역 관련 기능
- 지하철 역을 등록하고 삭제할 수 있다. (단, 노선에 등록된 역은 삭제할 수 없다)
- 중복된 지하철 역 이름이 등록될 수 없다.
- 지하철 역은 2글자 이상이어야 한다.
- 지하철 역의 목록을 조회할 수 있다.

### 지하철 노선 관련 기능
- 지하철 노선을 등록하고 삭제할 수 있다.
- 중복된 지하철 노선 이름이 등록될 수 없다.
- 노선 등록 시 상행 종점역과 하행 종점역을 입력받는다.
- 지하철 노선의 목록을 조회할 수 있다.

### 지하철 구간 추가 기능
- 지하철 노선에 구간을 추가하는 기능은 노선에 역을 추가하는 기능이라고도 할 수 있다.
  - 역과 역사이를 구간이라 하고 이 구간들의 모음이 노선이다.  
- 하나의 역은 여러개의 노선에 추가될 수 있다.
- 역과 역 사이에 새로운 역이 추가 될 수 있다.
- 노선에서 갈래길은 생길 수 없다.

### 지하철 구간 삭제 기능
- 노선에 등록된 역을 제거할 수 있다.
- 종점을 제거할 경우 다음 역이 종점이 된다.
- 노선에 포함된 역이 두개 이하일 때는 역을 제거할 수 없다.

### 지하철 노선에 등록된 역 조회 기능
- 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 역 목록을 조회할 수 있다.

<br/>


## ✅ 프로그래밍 요구사항

### 메뉴 버튼
- 역 관리 button 태그는 `#station-manager-button` id값을 가진다.
- 노선 관리 button 태그는 `#line-manager-button` id값을 가진다.
- 구간 관리 button 태그는 `#section-manager-button` id값을 가진다.
- 지하철 노선도 출력 관리 button 태그는 `#map-print-manager-button` id값을 가진다.

### 지하철 역 관련 기능
- 지하철 역을 입력하는 input 태그는 `#station-name-input` id값을 가진다.
- 지하철 역을 추가하는 button 태그는 `#station-add-button` id값을 가진다.
- 지하철 역을 삭제하는 button 태그는 `.station-delete-button` class값을 가진다.

### 지하철 노선 관련 기능
- 지하철 노선의 이름을 입력하는 input 태그는 `#line-name-input` id값을 가진다.
- 지하철 노선의 상행 종점을 선택하는 select 태그는 `#line-start-station-selector` id값을 가진다.
- 지하철 노선의 하행 종점을 선택하는 select 태그는 `#line-end-station-selector` id값을 가진다.
- 지하철 노선을 추가하는 button 태그는 `#line-add-button` id값을 가진다.
- 지하철 노선을 삭제하는 button 태그는 `.line-delete-button` class값을 가진다.

### 지하철 구간 추가 기능
- 지하철 노선을 선택하는 button 태그는 `.section-line-menu-button` class값을 가진다.
- 지하철 구간을 설정할 역 select 태그는 `#section-station-selector` id값을 가진다.
- 지하철 구간의 순서를 입력하는 input 태그는 `#section-order-input` id값을 가진다.
- 지하철 구간을 등록하는 button 태그는 `#section-add-button` id값을 가진다.
- 지하철 구간을 제거하는 button 태그는 `.section-delete-button` class값을 가진다.

### 지하철 노선도 출력 기능
- 지하철 노선도 출력 버튼을 누르면 `<div class="map"></div>` 태그를 만들고 해당 태그 내부에 노선도를 출력한다.