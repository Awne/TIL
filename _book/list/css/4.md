## position

`fixed`가 뷰포트에 대해 고정적인 위치를 가진다면, `absolute`는 부모 요소에 대해 고정적인 위치를 가짐.

## z-index

더 큰 값을 가진 요소가 더 위로 올라간다.

## float

1. `left` `right` 부모 요소의 자리를 차지함.
2. `none` 적용하지 않음.

## clear

1. `left` `right` 해당 `float`요소의 좌/우 측에 아무런 요소가 오지 못하게 함.
2. `both` 해당 `float`요소의 양쪽에 아무런 요소가 오지 못하게 함.
3. `none` 해당 `float`요소의 주변에 다른 요소가 올 수 있음.

## 문제 해결

### float만 포함한 부모 요소가 0px로 처리될때

`overflow : auto` 와 `width : 100%`를 설정한다.

### 요소들을 나란히 배치해야할때

배치할 요소들의 `width`를 설정하고 `float : left`를 설정한다.

### 부모태그 내 img파일 위치 조정

1. `float`의 값을 설정하면 좌/우로 배치
2. `display : block`와 `text-align : center` 설정
3. `display : block`와 `margin : 0 auto` 설정
   

