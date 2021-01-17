### 리스트 메서드
```python
test_list = [10,412,5125,3213,312]
test_list.sort()

print(test_list.count(10))

del test_list[1]

print(len(test_list))
```

1. **count** 메서드로 해당 요소가 몇 개 존재하는지 찾을 수 있다.
2. **del** 키워드로 원하는 인덱스에 있는 값을 지울수도 있음, pop에 인자주면 해당 인덱스에있는 요소 제거, remove는 인덱스가아닌 값을 설정해서 제거
3. 리스트 결합 : extend
4. 원하는 인덱스에 요소 추가 : insert
5. 인덱스 구하기 : index
6. 리스트 비우기 : clear() 이건 del[:]과같음.
7. 리스트복사하기위해 단순할당은 같은 메모리주소를 가리키기에 공유하는거지 복사하는게아님. -> copy함수사용.
8. 이차원리스트는 copy로도 값을 공유하기에 deepcopy사용
9. enumerate(리스트명)은 각 요소가 (인덱스, 리스트요소)로 이루어진 객체를 반환합니다.
10. enumerate함수의 두번째인자로 start=시작인덱스 가 올 수 있습니다.

## 컴프리헨션
```python
numbers = range(1,31)
odd_numbers = [number for number in numbers if number%2 == 1] 
print(odd_numbers)
```
반복문이나 조건문을 사용하여 간단하게 리스트를 제작할 수 있는데 이를 컴프리헨션이라고 한다.

직해해보면 아래와 같음.
number로 채울것/number는 numbers의 요소들/홀수 조건을 만족하는



## 튜플 패킹
```python
test_tuple = 1,2,3
num1, num2, num3 = test_tuple
num1, num2 = num2, num1
print(num1, num2, num3)
```
튜플을 초기화 할때 소괄호를 생략할 수 있다. 

1. 튜플을 초기화하는 과정을 **패킹**이라고 하며, 여러 변수에 튜플의 값들을 할당하는 것을 **언패킹**이라고 한다. (ES6 의 Destructing과 비슷하다.)

2. 세번째 줄처럼 손쉽게 변수 스왑이 가능하다.