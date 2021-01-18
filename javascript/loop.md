# for-of vs for-in
1. `for-of` : 반복가능한 요소를 순회합니다. `(Python의 for-in)`
2. `for-in` : 객체의 `key`를 순회합니다. (자바스크립트의 모든 객체에 사용가능)


 # 제너레이터 
> 제너레이터 선언은 `function*`입니다. 
```javascript
function* gn() {
	console.log('안녕하세요')
	console.log('제너레이터 테스트입니다.')
	yield
	console.log('일단 넥스트 한번 조졌습니다.')
	console.log('한번 더 조져봅시다.')
	yield
	console.log('또 조졌습니다.')
	console.log('그럼 이만')
}

const g = gn()
g.next()
g.next()
g.next()
```
> 위 코드는 제너레이터 객체 생성 후 `next` 메서드를 사용할 때마다 `yield`까지의 명령을 수행합니다/