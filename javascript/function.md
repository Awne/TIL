# Arrow Function
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

## Arrow Function을 사용하면 안되는 경우
1. `객체의 메서드` : 전역 객체를 가리킨다.
2. `prototype에 할당하는 메서드` : 전역 객체를 가리킨다.
3. `EventListener callback function` : 전역 객체를 가리킨다.
4. `생성자 함수`
> 생성자 함수는 `prototype` 프로퍼티를 가지고 있어야함. 이 객체가 가지고 있는 `constructor` 메서드를 사용해야하기때문.
> 
> 그런데 `Arrow Function`은 `prototype` 프로퍼티 자체가 존재하지 않기때문에 객체 선언시 에러가 발생한다.


# Rest parameters
인자를 원하는 만큼 할당받을 수 있습니다.
```javascript
function restParameter(...args) {
    return args;
}
restParameter(1,2,3,4,[true, false]);
```
# Argument, Parameter
함수의 길이는 매개변수의 수를, `arguments`의 길이는 인자의 수를 나타낸다.

# Tagged Template Literal
> 함수의 인자를 소괄호 대신 백틱을 사용해서 받고, 변수 대신 문자열을 받는다고 생각하면 이해하기 쉬울 것 같다.

> 인자 중 문자열 부분은 첫 번째 인자에 배열의 형태로 할당되고, 문자열 내 변수 부분들은 두 번째 인자부터 할당된다.
```javascript
let myName = "Jun"
let myAge = 27

const mySelf = (data, name, age) => {
	name += 'seong'
	age += 30
	
	console.log(data)
	console.log(name)
	console.log(age)

	return 0
}
mySelf`My name is ${myName} and I am ${myAge}years old.`
```
```
[ 'My name is ', ' and I am ', 'years old.' ]
Junseong
57
```
# Closure
> 클로저는 변수 등 다양한 주변 환경을 의미하는 `외부 함수`와 주변 환경을 이용해 값을 계산하는 익명 함수를 의미하는 `내부 함수`로 이루어져 있습니다.

> `외부 함수`는 `내부 함수`를 반환하며, `외부함수`의 밖에서는 함수의 내용에 접근할 수 없습니다.
```javascript
function outerFunc() {
	let myAge = 27
	return function() {
		console.log(myAge)
	}()
}

outerFunc()
```
```
27
```