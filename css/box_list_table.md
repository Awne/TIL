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