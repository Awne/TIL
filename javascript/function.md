## Arrow Function

간단한 문법으로 함수를 작성할 수 있다.

아래 코드는 `function` 키워드로 `callback function`을 작성하는 코드.
```javascript
let arr = [1,2,3,4,5];
let newArr = arr.map(function(value) {
    return value * 2;
})
```

아래 코드는 `ES6`의 `Arrow function`으로 콜백함수를 작성함.
```javascript
let arr = [1,2,3,4,5];
let newArr = arr.map((v) => v * 2);
```

## Arrow function의 this context

`Arrow function`의 `this`와 일반함수의 `this`의 대상이 다르다.

아래 코드는 일반 함수의 `this`를 알아보기 위한 코드이다.
```javascript
const myObj = {
    runTimeout() {
        setTimeout(function() {
            this.printData();
        }, 2000);
    },
    
    printData() {
        console.log("Hi Jun");
    }
}

myObj.runTimeout();
```

위 코드에서 살펴볼 점은 아래와 같다.

1. 콜백함수의 `this`는 전역객체인 `window`객체이다.
2. 때문에, `this.printData()`는 에러를 발생시킨다.

`runTimeout()`메소드를 아래 코드처럼 고쳐서 사용할 수 있다.
```javascript
runTimeout() {
    setTimeout(function() {
        this.printData();
    }.bind(this), 2000);
}
```

1. 콜백함수에 `bind`메소드를 사용하여 `this`를 `myObj`로 변경.
2. `myObj.printData()`는 에러를 발생시키지 않고 해당 메시지를 출력함.

`Arrow Function`을 사용하면 콜백함수의 `this`를 해당 객체로 정할 수 있음.

```javascript
const myObj = {
    runTimeout() {
        setTimeout(() => {
            console.log(this === window);
            this.printData();
        }, 2000);
    },

    printData() {
        console.log("Hi jun");
    }
}

myObj.runTimeout();
```

1. 위 코드의 콜백 함수는 `Arrow function`으로 선언되어 `this`는 `myObj`를 가리킨다.
2. `this === window`는 `true`를 출력한다.
3. `this.printData()`는 `myObj.printData()`를 의미하므로 해당 메시지가 정상적으로 출력된다.

아래는 `Arrow function`을 이벤트 리스너에서 사용하는 예시임.

```html
<div>Click Here</div>
```

일반 함수 선언
```javascript
const pickDiv = document.querySelector("div");
const aimtoDiv = {
    register() {
        pickDiv.addEventListener("click", function() {
            console.log(this);
        })
    }
}
```
위 코드는 `<div>Click Here</div>` 를 출력한다.

1. 메소드의 타겟이 되는 요소가 `this`가 됨.
2. 타겟이 되는 요소가 없다면 전역 객체인 `window`가 `this`가 됨.

`Arrow function` 선언
```javascript
const pickDiv = document.querySelector("div");
const aimtoDiv = {
    register() {
        pickDiv.addEventListener("click", function() {
            console.log(this);
        })
    }
}
```
위 코드는 `aimtoB`객체를 출력한다.

## Rest parameters

인자를 원하는 만큼 받을 수 있으며 받은 인자를 배열로 저장함.
```javascript
function restParameter(...args) {
    console.log(typeof args, args);
}

restParameter(1,2,3,4,[true, false]);
```
배열 타입으로 저장되므로 `arguments`를 사용하지 않아도 됨.

## Argument, Parameter

함수의 길이는 매개변수의 수를, `arguments`의 길이는 인자의 수를 나타낸다.
```javascript
let test = function (parm1, parm2, parm3) {
  console.log(`매개변수 개수 : ${test.length}`);
  console.log(`인자 개수 : ${arguments.length}`);
}
```


## Tagged Template Literal

템플릿 리터럴 내 변수와 문자열에 대해 함수를 적용할 수 있다.

1. 템플릿 리터럴 앞에 함수명을 입력해준다.
2. 함수의 첫 번째 인자에는 변수들을 제외한 모든 문자열이 들어간다.
3. 함수의 두 번째 인자부터는 각각 변수가 들어간다.


```javascript
let name = "Jun";
let age = 24;

function fn(tags, name, age) {
    console.log(`태그는 ${tags}`);
    ++age;
    console.log(`내 이름은 ${name}, 1년 후 내 나이는 ${age}`);
}

console.log(fn`나는 ${name}이고 지금 ${age}살임.`);
```




 태그드 템플릿 

```javascript
function introduce (stringP, name, age, location) { // stringP는 백틱 내 변수 외 스트링들을 배열로 모아놓음.
    console.log(stringP);
    return `My name is ${name}, I am ${age} years old and I live in ${location}`    
}

let bjs = introduce(" ","Junseong", 27, "Busan");
console.log(bjs);

let name_ = "ldg";
let age_ = 28;
let location_ = "Seo-Dong";

let ldg = introduce` Hmm${name_}${age_}${location_}`
console.log(ldg);

// func (a,b,c) 대신 func`${a1}${a2}${a3}` 로 사용하는듯.
```



## Context

다음과 같은 코드가 있다.
```javascript
var name = 'zero'; // (1)변수 선언 (6)변수 대입
function wow(word) { // (2)변수 선언 (3)변수 대입
  console.log(word + ' ' + name); // (11)
}
function say () { // (4)변수 선언 (5)변수 대입
  var name = 'nero'; // (8)
  console.log(name); // (9)
  wow('hello'); // (10)
}
say(); // (7)
```

호이스팅으로 인해 함수 선언식으로 생성된 `wow` `say` 함수는 동째로 최상단으로 올려짐

컨텍스트의 모습은
```javascript
전역컨텍스트: {
    변수객체:{
        arguments: null, 
        variable: [name,wow,say]
    }, 
    scopechain: [전역 변수객체], // 스코프체인은 자기자신과 상위 스코프의 변수객체임.
    this: window
}

'say컨텍스트' : {
    변수객체: {
        arguments: null,
        variable: ['name'],
    },
    scopeChain: ['say변수객체', '전역 변수객체'],
    this: window
}

'wow컨텍스트': {
    변수객체 : {
        arguments: [{word:'hello'}],
        variable: null,
    },
    scopechain: ['wow변수객체', '전역변수객체'],
    this: window
}
```

## Closure

컨텍스트의 원리를 활용하면 클로져를 사용할 수 있음.
```javascript
var makeClosure = function() {
    var name = 'zero';
    return function () {   
      console.log(name);
    }
  };
  var closure = makeClosure();

  closure();
```

위 코드의 컨텍스트는
```javascript
"전역 컨텍스트": {
  변수객체: {
    arguments: null,
    variable: [{ makeClosure: Function }, 'closure'],
  },
  scopeChain: ['전역 변수객체'],
  this: window,
}

"makeClosure 컨텍스트": {
  변수객체: {
    arguments: null,
    variable: [{ name: 'zero' }],
  },
  scopeChain: ['makeClosure 변수객체', '전역 변수객체'],
  this: window,
}

"closure 컨텍스트":  {
  변수객체: {
    arguments: null,
    variable: null,
  scopeChain: ['closure 변수객체', 'makeClosure 변수객체', '전역 변수객체'],
  this: window,
}
```

`makeClosure`변수의 값은 익명함수가 된다. (반환값이 변수의 값이 되기 때문) 그래서 외부에서는 무슨 방법을 써도 `name`변수에 접근할 수 없음.

만약 `makeClosure`변수가 외부함수 없이 바로 익명함수를 저장한다면 `makeClosure.name`으로 접근이 가능함.

함수인자에 ...이 붙으면 인자의 수에 제한이 없다는 이야기이고 함수 내에서 arguments로 접근가능