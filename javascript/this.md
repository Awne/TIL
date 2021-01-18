 # this 
> `this`는 해당 메서드를 포함하고있는 상위 객체를 가리킵니다. 따로 객체를 생성하지 않은 경우 브라우저가 상위 객체가 되므로 이 때 `this`는 `window`객체가 됩니다.

## this 바꾸기
> 원래 `this`는 자기자신을 포함하고있는 상위 객체를 의미하지만, `call`, `apply`, `bind` 메서드를 사용하면 `this`를 바꿀 수 있음.
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


