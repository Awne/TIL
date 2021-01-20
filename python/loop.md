# 이터레이터
> 반복 가능 객체들은 `__iter__`메서드를 가지고 있음. 이 메서드는 이터레이터가 저장된 메모리 주소를 반환함.

> 이 이터레이터 객체는 `__next__`메서드를 가지고 있음. 이 메서드를 호출할 때마다 이터레이터가 생성하는 각 값을 순회함.

> 반복가능 객체들의 위 메서드들은 파이썬 내장함수로 이미 구현되어있습니다.

```py
s = 'Hello World!!'

it = iter(s)
for i in range(len(s)):
	res = next(it)
	print(res, end='')
```
```
Hello World!!
```
# 제너레이터
> `제너레이터`는 이터레이터를 반환하는 함수입니다.

> 함수에서 `yield`키워드를 이용해 값을 반환한다면 그 함수는 `제너레이터` 타입이 됩니다.

> `yield`의 역할은 `return`과 비교할 수 있습니다. `return`이 값을 반환하고 함수를 종료한다면, `yield`는 값을 반환하고 다시 함수로 돌아와 다음 작업을 수행합니다.
```py
def func():
	yield 1
	yield 2
	yield 3

for i in func():
	print(i)
```
```
1
2
3
```
>`yield from`을 이용하면 `리스트`를 이용해 여러 값을 호출할 수 있습니다.
```py
def func():
	yield from [1,2,3,4,5]

for i in func():
	print(i)
```
```
1
2
3
4
5
```
