# 변수
>상위 스코프에 있는 변수와 하위 스코프에 있는 변수의 이름이 같아도 다른 메모리에 저장된다.
```python
x = 1

def func():
	x = 5
	print("함수 내 x의 값은 {}".format(x))

func()
print("전역변수 x의 값은 {}".format(x))
```
```
함수 내 x의 값은 5
전역변수 x의 값은 1
```
# global
> 함수 내에서 전역변수를 변경하기 위해 `global`키워드를 사용합니다.
```python
x = 1

def func():
	global x
	x = 5
	print("함수 내 x의 값은 {}".format(x))

func()
print("전역변수 x의 값은 {}".format(x))
```
```
함수 내 x의 값은 5
전역변수 x의 값은 5
```
# nonlocal
> 상위 스코프의 변수를 가져오기 위해 `nonlocal`키워드를 사용합니다.
```python
def outerFunc():
	x = 100
	def innerFunc():
		nonlocal x
		x = 200
	innerFunc()
	print(x)
outerFunc()
```
```
200
```