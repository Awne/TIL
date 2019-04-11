## 함수 선언과 반환
```python
def calc (a, b):
    return a+b, a-b, a*b
    
print(calc(100,230))

add, sub, mul = calc(100,230)
print(add, sub, mul)
```
함수의 선언은 매우 간단하다.

살펴볼 점으로는 리턴값이 많은 함수의 경우 여러 변수에 언패킹하여 리턴값을 할당할 수 있다는 것.

## 랜덤모듈
```python
import random players = ["Faker", "MadLife", "Uzi", "DoubleLift", "Doinb"]

print(random.choice(players))
print(random.sample(players, 3))

print("LOTTO", random.sample(range(1,46), 5))
print("\nWhen I go to school?\n", random.randint(0,24), "O clock")
```
모듈중에 사용 빈도가 매우 높은 랜덤모듈이다.

1. **choice** 함수를 사용하면 랜덤한 하나의 요소를, **sample** 함수를 사용하면 원하는 수만큼의 요소를 추출한다.

2. **range와** **sample** 함수를 사용하여 즉석 로또 당첨 번호를 뽑을수도 있다.

3. **randint** 함수를 통해 해당 범위 내에서 랜덤한 정수를 추출할 수도 있다.

