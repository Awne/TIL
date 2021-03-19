# Set
## Set의 메서드
>`Set`은 중복을 허용하지 않는 배열이라고 생각하면 좋다.
1. `add` : 요소를 추가한다.
2. `delete` : 요소를 제거한다.
3. `has` : 인자에 해당하는 요소가 존재한다면 `true`를 반환한다.

## Set의 ITERABLE OBJECT
1. `values` : 세트의 요소들을 가진 이터레이터를 반환
> `Set`자료형은 `key`가 없이 `value`만 존재하기에 `keys` 역시 같은 결과를 반환한다.
2. `entries` : `next` 메서드로 순환할 수 있는 `[value, value]` 형태의 이터레이터를 반환

## 다양한 집합연산
1. 합집합
```javascript
const union = new Set([...s1, ...s2])
```
2. 교집합
```javascript
const intersection = new Set([...s1].filter(function (x) {
	return s2.has(x)
}))
```
3. 차집합
```javascript
const difference = new Set([...s1].filter(function (x) {
	return !s2.has(x)
}))
```

# WeakSet
>`Set`과 거의 같지만, 객체 요소만 저장할 수 있다.
## WeakSet의 특징
1. `Set`와 달리 `객체` 형태의 데이터만 저장할 수 있습니다.
2. 저장된 객체가 아무데서도 참조되지 않는다면 해당 객체는 `가비지 컬렉션`의 대상이 됩니다.
3. 순회, 열거가 불가능하며 오로지 객체를 참조하는 용도로만 사용할 수 있습니다.
4. `length`의 값은 항상 0입니다.
5. 오로지 `add`, `delete`, `has` 메서드만 사용할 수 있습니다.

# Map
> 객체처럼 `key - value` 쌍을 저장합니다.
## Map과 Object의 차이
1. `Object`의 `key`는 `String`과 `Symbol`만 가능
2. `Map`의 `key`는 모든 자료형 가능
3. `size` 프로퍼티를 이용하여 크기를 얻을 수 있음.

## Map의 메서드
1. `set` : `(key, value)` , 키-값 쌍을 저장합니다.
2. `get` : `key`를 입력받아 해당 키가 가진 값을 반환합니다.
3. `has` : `key`를 입력받고, 해당 키가 존재한다면 `true`를 반환합니다.
4. `delete` : `key`를 입력받고 해당 키-값쌍을 제거합니다. 제거된 `value`를 반환합니다.

## Map의 ITERABLE OBJECT
1. `keys` : 가지고 있는 키들로 구성된 객체를 반환합니다.
2. `values` : 가지고 있는 값들로 구성된 객체를 반환합니다.
3. `entries` : `next`로 순환할 수 있는 `[key, value]`로 구성된 객체를 반환합니다.

# WeakMap
## WeakMap의 특징
1. `key`는 항상 `Object` 형식임.
2. `key`를 아무데서도 참조하지 않는다면 가비지 컬렉션의 대상이 되어 해당 `key`는 `WeakMap`에서 제거됩니다.
3. `length`의 값은 항상 0입니다.
4. 열거가 불가능하며 오직 `set` , `get` , `has` , `delete` 메서드만 사용할 수 있습니다.

# Symbol
> `Symbol`은 어떤 데이터와도 중복될 수 없는 객체의 키를 정의할때 사용한다.
1. 두 개의 동일한 형태의 `Symbol`도 `s1 == s2` 의 결과는 `false`.
```javascript
const s1 = Symbol('name')
const s2 = Symbol('name')
```
> `Symbol.for`을 이용해 생성한 경우 같은 형태의 `Symbol`은 같은 `Symbol`을 의미한다.
2. `Symbol`로 객체의 프로퍼티를 생성했다면, 외부에서 접근할 수 없음.
> `Symbol`로 프로퍼티를 생성한 경우 `keys`메서드는 
```javascript
const name = Symbol('It is name')
const age = Symbol('It is age')

const obj = {
	[name]: 'Jun',
	[age]: 27
}
```
