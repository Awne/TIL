 this 

```javascript
function test (arg) {
    this.arg = arg;
    function testin() {
        console.log(this.arg)
        console.log(arg);
    }
}

let one = test("Zz");
console.log(one);

// 함수 내부에 있는 함수의 this는 전역객체인 window를 가리킴
// 메소드에서 사용되는 this는 해당 메소드를 가진 object를 가리킴.

let bjs = {
    name : "Junseong",
    introduce : function(age, location) {
        return `I'm ${this.name}. I'm ${age} years old and I live in ${location}`
    }
}

let ldg = {
    name : "Dong-gun"
}

let khy = {
    name : "Hye-yul"
}
let js_int = bjs.introduce(27, "Busan");
console.log(js_int);

let dg_int = bjs.introduce.call(ldg,25,"Seo-dong");
console.log(dg_int);

let hy_int = bjs.introduce.apply(khy, [24,"Yang-san"]);
console.log(hy_int);

// bjs에 있는 메소드를 다른 애들이 쓸수있음. call이랑 apply인데,
// 둘다 첫 인자는 적용할 객체이름, 이후는 call은 나열, apply는 배열로 정리한다는 차이.

```




## this

`this`를 변경하기 위해 `call` `apply` `bind` 를 사용할 수 있음.

`bind`는 값을 호출하지 않고 정의만 함.

함수의 인자를 담는 `arguments`는 유사배열이기에 배열 메소드를 사용할 수 없음.

```javascript
function example() {
    console.log(arguments.join());
} 

example(1,'string',true);   // 에러발생
```
`call` 메소드를 사용한다.
```javascript
function example() {
    console.log(Array.prototype.join.call(arguments));
}

example(1,'string',true);   // 출력
```

참고로 `arguments`의 부모는 `arguments.callee`로 호출한다.