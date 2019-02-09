## flex-box

나열된 박스들을 묶는 컨테이너에 `display : flex`선언

보통 `box`요소들은 세로로 배치되지만, `flex-box`요소는 가로로 배치된다.

### flex-direction

진행 방향을 설정할 수 있다.

### flex-wrap

1. `nowrap` 말그대로 wrap이 없다. 제한너비를 뚫고간다.
2. `wrap` 너비제한에 걸리면 다음줄에 쌓인다.
3. `flex-direction`+`flex-wrap`=`flex-flow`
   
### flex-basis

기본 크기설정. `width`과 다른점이라면 `column`형태에도 사용가능하다는것.

### flex-grow, flex-shrink

1. `flex-grow` 컨테이너가 남는 경우 내부 박스들에 할당된 값대로 크기를 확장
2. `flex-shrink` 컨테이너가 부족한 경우 내부 박스들에 할당된 값대로 크기를 축소

[실습](http://bit.ly/2thTn0V)

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
4. `flex-start` `flex-start` 각각 좌에서 우, 우에서 좌로 박스를 배치.


## Grid

박스들을 묶는 컨테이너에 `display : grid` 선언

### grid-template-columns

가로로 배치되는 그리드를 만든다.

### grid-auto-rows

가로로 배치되는 그리드의 높이를 설정함.

### grid-template-rows

세로로 배치되는 그리드를 만든다.

### grid-auto-columns

세로로 배치되는 그리드의 너비를 설정함.

만약 값을 `fr`단위로 준다면 컨테이너의 남는 부분을 해당 비율만큼 차지할 수 있음.

### 그리드 라인

1. 세로 줄은 좌측부터 `column` 1,2,3 ... 
2. 가로 줄은 위쪽부터 `row` 1,2,3 ...
3. 이 라인들을 이용해 구역을 만들 수 있음.

1. `grid-column-start` `grid-column-end` 세로줄 선택
2. `grid-row-start` `grid-row-end` 가로줄 선택

### grid-template-areas

텍스트로 구역을 정해준다.

### grid-area

각 박스들에서 선언하며 구역에 해당하는 텍스트를 값으로 가진다.

[실습](http://bit.ly/2tdpRcN)







