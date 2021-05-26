## 📝 구현할 기능 목록

### 🗂 공통 메뉴

- [x] 역 관리 button 태그는 `#station-manager-button` id값을 가진다.
- [x] 노선 관리 button 태그는 `#line-manager-button` id값을 가진다.
- [x] 구간 관리 button 태그는 `#section-manager-button` id값을 가진다.
- [x] 지하철 노선도 출력 관리 button 태그는 `#map-print-manager-button` id값을 가진다.

### 🚋 지하철 역 관리

- [x] 지하철 역을 입력하는 input 태그는 `#station-name-input` id값을 가진다.
- [x] 지하철 역을 추가하는 button 태그는 `#station-add-button` id값을 가진다.
- [x] 지하철 역을 삭제하는 button 태그는 `.station-delete-button` class값을 가진다.

- [x] 지하철 역을 등록하고 삭제할 수 있다. (단, 노선에 등록된 역은 삭제할 수 없다)
  - [x] localStorage에 등록
- [x] 중복된 지하철 역 이름이 등록될 수 없다.
- [x] 지하철 역은 2글자 이상이어야 한다.
- [x] 지하철 역의 목록을 조회할 수 있다.

### 🛤 지하철 노선 관리

- [x] 지하철 노선의 이름을 입력하는 input 태그는 `#line-name-input` id값을 가진다.
- [x] 지하철 노선의 상행 종점을 선택하는 select 태그는 `#line-start-station-selector` id값을 가진다.
- [x] 지하철 노선의 하행 종점을 선택하는 select 태그는 `#line-end-station-selector` id값을 가진다.
- [x] 지하철 노선을 추가하는 button 태그는 `#line-add-button` id값을 가진다.
- [x] 지하철 노선을 삭제하는 button 태그는 `.line-delete-button` class값을 가진다.

- [x] 지하철 노선을 등록하고 삭제할 수 있다.
- [x] 중복된 지하철 노선 이름이 등록될 수 없다.
- [x] 노선 등록 시 상행 종점역과 하행 종점역을 입력받는다.
- [x] 지하철 노선의 목록을 조회할 수 있다.

### 🚉 지하철 구간 관리

#### 삭제

- [ ] 지하철 노선에 구간을 추가하는 기능은 노선에 역을 추가하는 기능이라고도 할 수 있다.
  - [ ] 역과 역사이를 구간이라 하고 이 구간들의 모음이 노선이다.
- [ ] 하나의 역은 여러개의 노선에 추가될 수 있다.
- [ ] 역과 역 사이에 새로운 역이 추가 될 수 있다.
- [ ] 노선에서 갈래길은 생길 수 없다.

#### 추가

- [x] 지하철 노선을 선택하는 button 태그는 `.section-line-menu-button` class값을 가진다.
- [x] 지하철 구간을 설정할 역 select 태그는 `#section-station-selector` id값을 가진다.
- [x] 지하철 구간의 순서를 입력하는 input 태그는 `#section-order-input` id값을 가진다.
- [x] 지하철 구간을 등록하는 button 태그는 `#section-add-button` id값을 가진다.
- [x] 지하철 구간을 제거하는 button 태그는 `.section-delete-button` class값을 가진다.

- [ ] 노선에 등록된 역을 제거할 수 있다.
- [ ] 종점을 제거할 경우 다음 역이 종점이 된다.
- [ ] 노선에 포함된 역이 두개 이하일 때는 역을 제거할 수 없다.


### 🗺 지하철 노선도 출력

- [ ] 지하철 노선도 출력 버튼을 누르면 `<div class="map"></div>` 태그를 만들고 해당 태그 내부에 노선도를 출력한다.

- [ ] 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 역 목록을 조회할 수 있다.