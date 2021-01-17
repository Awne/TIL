# 변수
> `CSS`에서도 변수를 사용하여 값을 저장할 수 있습니다.

변수의 이름은 항상 `--`로 시작하며 변수는 `var(변수명)`으로 사용할 수 있습니다.

```CSS
html {
    --the_color: blue;
}

#box {
    background-color: var(--the_color);
}
```