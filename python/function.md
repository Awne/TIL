# Return
> 파이썬의 함수는 여러 개의 리턴값을 가질 수 있다.
```py
def calc(x, y):
	return x+y, x-y, x*y, x/y

add, sub, mul, div = calc(100,20)
print(add, sub, mul, div)
```
```
120 80 2000 5.0
```
# 인자와 매개변수
> 매개변수 앞에 `*`가 있다면 `가변인자`를 의미합니다.

> 매개변수에 `=`가 있다면 `인자의 기본값`을 의미하며, 이 매개변수들은 항상 뒤에 위치합니다.

> 인자에 `=`가 있다면 `키워드 인자`를 의미합니다. 키워드인자를 받는 `매개변수`의 앞에는 `**`이 붙어있습니다.

> 키워드 인자는 함수 내에서 딕셔너리로 저장됩니다.

# 람다식
```py
money = 8000

result = lambda x : 'OK' if x > 10000 else 'SOSO' if x > 5000 else 'NO'

print(result(money))
```
```
SOSO
```
1. `lambda 매개변수 : 반환식1 if 조건1 else 반환식2 if 조건2 else 반환식3...`
> 조건1 만족시 반환식1 반환, 그게 아니라면 조건2 따져서 반환식2 반환 ...

2. 람다식에서 `elif`는 사용하지않음.

# Reduce
> `functools`에서 `reduce`가져올수있음
```py
from functools import reduce

def func(x, y):
	return x + y
nums = [1,2,3,4,5,6,7,8,9,10]

result = reduce(func, nums)
print(result)
```
> `리스트`의 두 값을 `함수`로 연산하고 그 값을 첫 인덱스에 반환하며 이 과정을 반복합니다.