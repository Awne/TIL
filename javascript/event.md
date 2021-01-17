### 이벤트 객체 전달

이벤트 객체를 전달하는데 비구조화 할당을 사용할 수 있다.

아래와 같은 HTML이 있다고 가정한다.
```html
<div id = "a"> Click Here !! </div>
```

아래와 같이 이벤트 리스너를 정의한다.
```javascript
document.querySelector("#a").addEventListener("click", function(e) {
    console.log(e.target);
})
```
위 코드를 설명하면 아래와 같다.
1. 변수 `e`는 이벤트 객체이다. 즉, 마우스 클릭 이벤트에 대한 정보들을 가지고 있다.
2. `target`프로퍼티는 이벤트의 대상이다 즉, 여기서는 `<div>`태그 및 텍스트를 의미한다.

위 코드는 아래와 같이 바꿀 수 있다. 이벤트 객체에서 `target`프로퍼티만 사용할 것을 의미한다.
```javascript
document.querySelector("#a").addEventListener("click", function({target}) {
    console.log(target);
})
```