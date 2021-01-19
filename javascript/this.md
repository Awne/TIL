 # this 
1. 객체의 생성자 함수에서 `this`는 새로운 객체의 `인스턴스`를 의미함.
2. 함수나 메서드에서 `this`는 해당 함수를 포함하고 있는 `객체`를 의미함. 
3. 메서드의 내부함수, 콜백함수에서의 `this`는 `전역객체`를 의미함.
> 이는 의도한 것이 아닌 설계 단계의 결함이라고 함.

> 메서드에서 `this`를 변수에 할당하고 그 변수를 메서드 내부함수에서 사용하는 방법으로 이를 해결할 수 있다.
4. `Arrow Function`에서의 `this`는 자신을 둘러싼 `상위 스코프`를 의미함.
> 예를 들면, 특정 객체 내에서 어떤 메서드의 콜백 함수로 `Arrow Function`이 사용되었을때 이 `콜백함수` 내에서 사용된 `this`는 `전역 객체`가 아닌 메서드를 가진 `객체`를 의미함.

## this 바꾸기
> 원래 `this`는 자기자신을 포함하고있는 상위 객체를 의미하지만, `call`, `apply`, `bind` 메서드를 사용하면 `this`를 바꿀 수 있음.

> `Arrow Function`은 `call`, `apply`, `bind`를 이용하여 `this`를 바꿀 수 없다.
1. `call` : 첫 인자로 바꾸고 싶은 `this`를 할당하고, 두 번째 인자부터는 메서드에 들어갈 인자를 할당한다.
```javascript
const me = {
	name: "Jun",
	age: 27,
	printProfile : function() {
		console.log(this.name, this.age)
	}
}

const you = {
	name: "Yul",
	age: 25
}

me.printProfile.call(you)
```
2. `apply` : `call`과 사용법이 같음, `call`은 함수의 인자들을 하나씩 받는 대신 `apply`는 함수의 인자들을 하나의 배열로 받음.
3. `bind` : `bind`는 인자를 받지않고 오직 바꾸고싶은 `this`만 할당받는다. 함수를 메서드를 실행하지 않기때문에 변수에 저장하여 필요할때 사용할 수 있다.
```javascript
const me = {
	name: "Jun",
	age: 27,
	printProfile : function() {
		console.log(this.name, this.age)
	}
}

const you = {
	name: "Yul",
	age: 25
}

const result = me.printProfile.bind(you)
result()
```