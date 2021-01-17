# Transform
> 이차원 좌표에서 요소의 형태를 변화시키는 프로퍼티

## 종류
1. `translate(x, y)` : 인자의 거리만큼 이동합니다.
2. `scale(x, y)` : 객체의 중심을 기준으로 요소를 확대합니다.
3. `rotate(deg)` : 객체의 중심을 기준으로 요소를 회전시킵니다.
4. `skew(Xdeg, Ydeg)` : 객체의 중심을 기준으로 요소를 기울입니다.

## transform-origin
> 기준점을 설정합니다. 기준점의 기본값은 `50% 50%` 즉, `center`입니다.
1. `center` : 기준점의 기본값이며 `50% 50%`를 의미합니다.
2. `top left` : 좌측상단을 의미하며 `0% 0%`를 의미합니다.
3. `50px 50px` : 좌측상단을 기준으로 우측으로 `50px` 아래로 `50px`을 이동한 좌표를 의미합니다.

# Transition
> 애니메이션을 적용하여 객체의 속성값을 일정 시간에 걸쳐 변할 수 있게 만들어줍니다.

## 속성
1. `transition(property, duration)` : 변화시킬 속성과 지속시간 - `필수적인 두 요소`
2. `transition(property, duration, delay)` : 시간을 추가하면 딜레이를 부여합니다.
3. `transition(property, duration, timing-function, delay)` : 지속시간과 딜레이 사이에 타이밍 함수를 추가할 수 있습니다.