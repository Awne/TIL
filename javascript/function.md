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

