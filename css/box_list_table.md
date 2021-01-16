## 박스 설정
1. `max-width` : 반응형 웹에서 증가할 수 있는 너비의 최대치
2. `min-width` : 반응형 웹에서 감소할 수 있는 너비의 최소치
3. `border-radius` : 박스 모서리에 삽입할 원의 반지름
4. `box-sizing` : 박스 설정의 대상을 설정합니다.
   1. `content-box` : 박스 설정의 대상을 컨텐츠 영역으로 설정합니다.
   2. `border-box` : 박스 설정의 대상을 컨텐츠 영역과 패딩으로 설정합니다.
> 만약 `width: 100px` `height: 100px`인 경우
> 
> `box-sizing: content-box`라면 위 설정은 컨텐츠 영역에 적용됩니다.
> 
> `box-sizing: border-box`라면 위 설정은 컨텐츠 영역과 패딩의 합에 적용됩니다.

## 박스를 숨기고 싶을때
1. `display: none` : 아예 사라져버림.
2. `visibility: hidden` : 해당 자리는 차지하지만 요소는 보이지 않음.

## 테이블
### empty-cells
빈 셀을 표시할지 여부를 결정함.
1. `show` 보여준다.
2. `hide` 숨긴다.
3. `inherit` 상속받는다.

### border-spacing
셀 사이의 거리를 설정함.

### border-collapse
인접한 테두리를 설정함.
1. `collapse` 인접한 변의 굵기를 기존 셀의 변의 굵기로 줄인다.
2. `separate` 인접한 변의 굵기를 두 셀의 변의 굵기의 합으로 만든다.

## 목록
### list-style-type
리스트의 인덱스 모양을 바꿀 수 있음.

### list-style-image
`url` 속성을 사용해 인덱스 모양을 이미지로 바꿀 수 있음.

### list-style-position
리스트의 내용이 여러줄인 경우 내용이 인덱스 아래 공간을 차지할지 설정할 수 있음.
1. `outside` 줄바꿈 내용이 인덱스 아래를 지나지 않음.
2. `inside` 줄바꿈 내용이 인덱스 아래를 지남.