## Group Rules (Query)
1. `@media` 브라우저가 이 조건 만족 시 적용
2. `@supports` 브라우저가 이 기능 지원 시 적용

괄호 내 조건끼리 `and` , `or` , `not` 으로 연결가능

사용 예시
```CSS
@media (min-width: 800px) and (background-color: red) {
    background-color: "blue";
}
```
```CSS
@support (display: grid) {
    div {
        display: grid;
    }
}
@support not (display: grid) {
    div {
        float: right;
    }
}
```

## Animation
1. 선택자에 `animation` 속성을 추가합니다.
2. 값으로 `name` , `duration` , `timing-function` , `delay`, `iteration-count` , `direction` 가 올 수 있습니다.
3. `@keyframes` 쿼리를 사용하여 특정 시점에 적용할 속성변화를 정의합니다.
```CSS
@keyframes animation-name {
    0% {
        0퍼센트에 할일
    }
    50% {
        50퍼센트에 할일
    }
    100% {
        100퍼센트에 할일
    }
}
```
> `0%` 대신 `from`을, `100%` 대신 `to`를 사용할 수 있습니다.

### animation-direction
> `keyframes`를 이용해 설명하는것이 가장 이해하기 쉽습니다.
1. `normal` : 0% -> 50% -> 100% -> 0% -> 50% -> 100% -> ...
2. `reverse` : 100% -> 50% -> 0% -> 100% -> 50% -> 0% -> ...
3. `alternate` : 0% -> 50% -> 100% -> 50% -> 0% -> 50% -> ...
4. `alternate-reverse` : 100% -> 50% -> 0% -> 50% -> 100% -> 50% -> ...

### animation-play-state
> 재생중인 애니메이션을 일시중지하거나, 중지된 애니메이션을 다시 재생할 수 있습니다.

1. `running` : 애니메이션을 재생합니다. (기본값)
2. `paused` : 애니메이션을 일시중지합니다.

### animation-fill-mode

1. `none` : 애니메이션이 끝나면 원래 상태로 돌아갑니다.
2. `forwards` : 애니메이션이 끝나도 `keyframes 100%` 상태를 유지합니다.
3. `backwards` : `delay`중일때 `keyframes 0%` 의 상태로 만들어줍니다.
4. `both` : `forwards`와 `backwards`를 모두 적용합니다.

[애니메이션 예제](https://codepen.io/Junseongpark/pen/GRjPxPE)