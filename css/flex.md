## flex-box
컨테이너에 `display : flex`를 선언하여 생성함.

박스배치를 가로로 하고싶을 때 사용함.

### flex-direction
박스배치의 방향을 설정합니다.
1. `row` : 좌에서 우
2. `row-reverse` : 우에서 좌
3. `column` : 상에서 하
4. `column-reverse` : 하에서 상

### flex-wrap
자식 요소들의 너비의 합이 컨테이너의 너비보다 큰 경우 배치를 설정합니다.
1. `nowrap` 말그대로 wrap이 없다. 제한너비를 뚫고간다.
2. `wrap` 너비제한에 걸리면 다음줄에 쌓인다.
   
### flex-basis
자식 요소들에게 설정하며, 기본 크기를 나타냅니다.
1. `flex-direction: row` 또는 `row-reverse` : `width`를 설정합니다.
2. `flex-direction: column` 또는 `column-reverse` : `height`를 설정합니다.

### flex-grow, flex-shrink
1. `flex-grow` 컨테이너가 남는 경우 내부 박스들에 할당된 값대로 크기를 확장
2. `flex-shrink` 컨테이너가 부족한 경우 내부 박스들에 할당된 값대로 크기를 축소

### align-items
컨테이너 내에서 박스들의 수직 위치를 설정
1. `stretch` 컨테이너 가득 채움.
2. `center` 컨테이너 한가운데 배치
3. `start` `end` 각각 컨테이너 위, 아래에 배치

### justify-content
컨테이너 내에서 박스들의 수평 위치를 설정
1. `space-around` 모든 박스들이 동일한 `margin`을 가지게 되어 일정 거리를 유지.
2. `space-evenly` 모든 박스들이 동일한 `margin`을 가지지만 `margin`끼리 겹치는 구간에는 collapse가 일어나 크기가 절반이 됨.
3. `space-between` 처음과 마지막 박스는 양끝으로 붙고 나머지 박스들은 일정 간격을 유지.