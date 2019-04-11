## let

블록단위 변수선언법인 `let` 키워드가 등장함

아래 코드는 `100`과 `myif`가 출력된다.

`var`키워드는 함수 단위로 소멸하기때문이다.
```javascript
function home() {
    for (var i=0; i<100; i++){}
    console.log(i);

    if(true) {
        var myif = "myif";
    }
    console.log(myif)
}

home();
```
아래 코드는 반복문과 조건문 모두 에러를 발생시킨다.

`let`키워드는 블록 단위로 소멸하기 때문이다.
```javascript
function home() {
    for (let i=0; i<100; i++){}
    console.log(i);

    if(true) {
        let myif = "myif";
    }
    console.log(myif)
}

home();
```
아래와 같은 코드가 있다고 가정할때
```html
<ul>
    <li>Python</li>
    <li>Javascript</li>
    <li>Java</li>
    <li>GO</li>
</ul>
```
아래 코드의 이벤트 결과는 각각 `4,4,4,4`를 출력한다.
```javascript
var list = document.querySelectorAll("li");
for (var i=0; i<list.length; i++) {
    list[i].addEventListener("click", function() {
        console.log(`${i} 번째 리스트`);
    });
}
```
아래 코드의 이벤트 결과는 각각 `0,1,2,3`을 출력한다.
```javascript
var list = document.querySelectorAll("li");
for (let i=0; i<list.length; i++) {
    list[i].addEventListener("click", function() {
        console.log(`${i} 번째 리스트`);
    });
}
```
위 코드의 동작 과정은 아래와 같다.
1. 반복문이 돌면서 각 인덱스에 적용되는 이벤트리스너가 선언된다.
2. 이벤트와 콜백함수가 각 이벤트리스너의 인자로 들어간다.

`var`키워드를 사용한 경우
1. 반복문이 돌면서 전역변수 `i`값이 `4`가 되었다.
2. 모든 콜백함수는 `4`의 값을 가지게 된 전역변수 `i`를 출력하게 된다.

`let`키워드를 사용한 경우
1. 책의 페이지처럼 `i`값마다 각자의 스코프를 가진다.
2. 참고할 전역변수가 없으므로 각 스코프에 할당된 `i`값을 출력하게 된다.

## const

1. `const`를 변수 선언시 기본으로 사용하는게 좋다.
2. `let`은 재할당이 필요한 변수에 사용한다.
3. `var`는 더이상 사용하지 않는다.

아래와 같이 재선언시 에러가 발생한다.
```javascript
let a = 0;
let a = 100;
```
아래와 같이 재할당시 값이 할당된다.
```javascript
let a = 0;
a = 100;
```

## String의 새로운 메소드

`startsWith` `endsWith` `includes` 메소드가 추가되었다.

아래 코드는 3개의 `true`를 출력한다.
```javascript
let str = "Hello World ! ^^ ~~";
let matchstr = "Hello";

console.log(str.startsWith(matchstr));
console.log(str.endsWith("~~"));
console.log(str.includes("d ! ^"));
```

## Array의 새로운 메소드

`Array.from` 메소드를 통해 `iterable object`를 배열로 변환할 수 있게 되었다.

아래 코드는 함수의 인자값에 느낌표를 추가해주는 함수이다.
```javascript
function addMark() {
    let result = [];
    for(let i=0; i<arguments.length; i++) {
        result.push((arguments[i] + "!"));
    }
    console.log(result);
}
```
아래 코드는 위 함수와 동일한 동작을 하지만 유사배열인 `arguments`를 배열로 변환시켜 배열의 `map`메소드를 사용하였다.
```javascript
function addMark() {
    let beArray = Array.from(arguments);
    let result = beArray.map((item) => {
        return item + "!";
    });
    console.log(result);
}
```
## for of

`for of`가 추가되었다. `forEach` `for in` `for of`를 비교하면 아래와 같다.

아래와 같은 배열이 있을 때
```javascript
let arr = ["A", "B", "C", "D"];
```

`forEach`는 `key(index)`와 `value(item)`에 모두 접근이 가능하며 `callback function`을 인자로 받는다.

배열 메소드이기때문에 배열 타입에만 사용할 수 있다.
```javascript
arr.forEach(function(value, i) {
    console.log(value, i);
})
```

`for-in`은 `key(index)`에 접근할 수 있으며 상속받은 `key`값을 모두 출력한다.

모든 객체에서 사용할 수 있다.
```javascript
for(idx in arr) {
    console.log(idx);
}
```

`for-of`는 `value`에 접근할 수 있다.

모든 `iterable object`에서 사용할 수 있다.
```javascript
for(item of arr) {
    console.log(item);
}
```

## 전개연산자

묶인 배열을 다시 풀 수 있다.

아래 코드는 배열의 요소를 그대로 옮긴 것이다.
```javascript
let arr = ["A", "B", "C", "D"];
let spread = [...arr];
```
아래와 같이 배열의 요소로 사용할 수 있다.
```javascript
let newData = ["S", ...arr, "Z"];
```