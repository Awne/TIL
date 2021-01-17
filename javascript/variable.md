## Scope

`var`는 함수단위, `let`은 블록단위 스코프를 가짐

아래 코드는 2가 출력됨.
```javascript
var a = 1;
if(true) {
    var a = 2;
}
console.log(a);
```

아래 코드는 1이 출력됨.
```javascript
let b = 1;
if(true) {
    let b = 2;
}
console.log(b);
```

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



비구조화 할당
```javascript
// 객체 깰땐 변수에 { }쓰고 배열 깰땐 [ ] 써준다.


function ldg () {
    return {
        name : "Dong-gun Lee",
        age : 27,
        location : "Busan"
    };
}
// 갓디지의 정보를 객체로 묶어 반환하는 함수

let { name, age, location } = ldg();
// 전역변수 name, age, location 에 함수 반환값을 차례로 담는모습

console.log (name, age, location);
//출력


console.log(`LDG says : "My name is ${name}, ${age}years old and I live in ${location}`);
// 백틱에 리터럴 템플릿까지 사용

//만약 location 대신 city를 사용하고 싶다면
let { name_, age_, location : city} = ldg();
console.log(name, age, city);
// 왼쪽 변수는 그냥 임의로 선언하는게 아니라 객체를 부셔서 안의 내용들을 구해주는것임.
// 그래서 객체 안 내용들과 이름이 같아야함. 그래서 city로 바로 사용하면 undefined 소환.
// location : city를 통해 location 을 city로 사용한다고 알려야함.


//벙커 구성원 살펴보기
let bunker = ["marine", "firebat", "ghost", "medic"];
let [first, second, third, fourth] = bunker;
console.log(first, second, third, fourth);
```