# Class
> 클래스는 객체를 생성하기 위한 템플릿입니다. 클래스도 사실 따지고 보면 함수의 일종이지만, 표현 방식이 특이할 뿐입니다.

생성자 함수를 이용하여 객체를 만드는 예시
```javascript
function Person_A(name, age) {
	this.name = name
	this.age = age
	this.greeting = function() {
		console.log(`Hello, ${this.name}`)
	}
}

const p = new Person_A("Jun", 27)
p.greeting()
```

클래스를 이용하여 객체를 만드는 예시
```javascript
class Person_B {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	greeting() {
		console.log(`Hello, ${this.name}`)
	}
}

const p = new Person_B("Jun", 27)
p.greeting()
```

# 상속
> 생성자 함수를 이용해 객체를 정의하고 상속할때는 `prototype` 프로퍼티에 하나씩 추가해야했지만, `class`를 사용하면 `extends` 키워드를 사용하여 상속받을 수 있습니다.

## super
> 자식 클래스에서 부모 클래스에 접근하고 싶을때 `super`키워드를 사용합니다. `this`가 자기 자신 클래스를 의미하는 것과 비슷합니다.
```javascript
class Person {
	constructor(name) {
		this.name = name
	}
	greeting() {
		console.log(`Hello, ${this.name}`)
	}
}

class Jun extends Person {
	greeting() {
		super.greeting()
	}
}

const p = new Jun("Junseong")
p.greeting()
```
```
Hello, Junseong
```

## Getter, Setter
> `Getter`는 항상 어떤 값을 `return`해야하고, `Setter`는 항상 어떤 값을 세팅해야합니다. 그렇지 않으면 에러가 발생합니다.

> `Getter`는 `get`키워드를 사용하여 생성하고, `Setter`는 `set`키워드를 이용하여 생성합니다.

> `Getter`와 `Setter`는 메서드의 형식으로 선언되지만, 실제 사용은 프로퍼티의 형식으로 사용합니다.
```javascript
class Person {
	constructor(name, money) {
		this.name = name
		this.money = money
	}

	get moneySetting() {
		return this.money
	}

	set moneySetting(moneyChange) {
		this.money += moneyChange
	}
}

const p = new Person("Jun", 5000)
p.moneySetting = 10000
console.log(p.moneySetting)
```
```
15000
```