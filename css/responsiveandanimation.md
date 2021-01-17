## Group Rules

1. `@media` 브라우저가 이 조건 만족 시 적용
2. `@supports` 브라우저가 이 기능 지원 시 적용
3. `@document` 페이지가 이 조건 만족 시 적용

참고로 이 규칙들은 쉼표를 사용하여 동시에 적용시킬 수 없음.

대신, 괄호 내 조건끼리 `and` `or(,로 대체가능)` `not` 으로 연결가능

사용 예시
```CSS
@media (min-width : 800px) {
    background-color : "blue";
}
```

## Animation

대상 선택자에 속성을 설정하고, `@keyframe`을 통해 구체적인 행동을 설정

1. 이 속성은 대상 요소의 선택자에 설정해줌.
2. `animation-name`은 반드시 첫번째 값으로 입력
3. 처음으로 입력한 시간은 `duration`이 됨.

### animation-direction

1. `normal` 행동 1회 종료 후 다시 제자리로 돌아온 뒤 재시작
2. `reverse` 종료 지점에서 시작하고, 진행 방향도 반대, 종료 후 종료 지점에서 재시작
3. `alternate` 홀수번째 시작은 `normal` 짝수번째 시작은 `reverse`
4. `alternate-reverse` 홀수번째 시작은 `reverse` 짝수번째 시작은 `normal`


## @keyframes

`animation`속성으로 시간 및 횟수를 설정했다면 진행 지점별 행동을 설정할 수 있음.

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

만약 진행 지점이 `0%`와 `100%`밖에 없다면 `from`과 `to`를 사용할 수 있음.

```CSS
@keyframes animation-name {
    from {
        0퍼센트에 할 일
    }
    to {
        100퍼센트에 할 일
    }
}
```


