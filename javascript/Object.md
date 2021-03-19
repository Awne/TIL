## 객체 합치기 : Object.assign
> 첫 번째 인자에는 합쳐지는 대상, 두 번째 인자부터는 합쳐질 객체들을 할당합니다.
```javascript
const obj = {
	name: 'jun',
	age: 27
}

const obj2 = {
	age: 25,
	job: 'no'
}

const result = Object.assign(obj, obj2)
console.log(result)
```
```
{ name: 'jun', age: 25, job: 'no' }
```

## 프로토타입
> 객체 인스턴스를 생성할 때 두 가지 방법의 차이는 아래와 같습니다.
1. `Object.create` : 인자로 할당된 객체를 프로토타입 프로퍼티에 할당합니다.
> 직접 프로퍼티를 할당하기때문에 프로퍼티 값 조회 및 변경이 잘 되었습니다.
```javascript
const champion = function Champion() {
	this.group = 'champion'
}

const support = function Support() {
	this.support = 'support'
}

const c1 = Object.create(champion)
console.log(Object.getPrototypeOf(c1) === champion)

Object.setPrototypeOf(c1, support)
console.log(Object.getPrototypeOf(c1) === support)
console.log(Object.getPrototypeOf(c1) === champion)
```
```
true
true
false
```
2. `new` : 프로토타입 프로퍼티는 건드리지 않고, 생성자 함수를 실행시킵니다.
> `new`키워드는 프로퍼티 값에 접근하지 않기때문에 프로퍼티 조회 결과가 일치하지 않았습니다. `Object.setPropertyOf` 메서드를 통해 프로퍼티가 변경되었습니다.
```javascript
const champion = function Champion() {
	this.group = 'champion'
}

const support = function Support() {
	this.support = 'support'
}

const c2 = new champion()
console.log(Object.getPrototypeOf(c2) === champion)

Object.setPrototypeOf(c2, support)
console.log(Object.getPrototypeOf(c2) === support)
console.log(Object.getPrototypeOf(c2) === champion)
```
```
false
true
false
```

# 프로퍼티, 메서드
1. 프로퍼티나 객체를 제거하기 위해 `delete` 키워드를 사용합니다.
```javascript
const obj = {
	name: 'Jun',
	age: 27,
	job: 'unemployed'
}

delete obj.age
const {name, age, job} = obj
```
2. `[]`를 이용하여 표현식을 프로퍼티로 사용할 수 있습니다.
```javascript
const my = 'my'
const name = 'name'

const obj = {
	[my + name]: 'Jun',
	age: 27,
	job: 'unemployed'
}

console.log(obj.myname)
```
3. 생성자 함수 내에서 만든 변수는 외부에서 접근할 수 없는 `private`한 변수가 됩니다.