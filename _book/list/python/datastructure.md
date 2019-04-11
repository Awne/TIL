## 여러줄 입력
```python
my_str = """a
b
c
d
"""
```

## 문자열 슬라이싱
```python
chunk = "Your Face" print(chunk[0:3]) print(chunk.split()) 
another_chunk = "Divided-by-line" print(another_chunk.split("-")) 
```

## end
```python
print('Your Eyes, Nose', end=" and Mouth\n")
```

## 다양한 Collection
```python
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
my_dic = {"one" : 1, "two" : 2, "three" : 3, "four" : 4, "five" : 5}
```
1. **리스트** : 일반적인 배열과 같다.
2. **튜플** : 배열과 비슷하지만 내용을 변경할 수 없다.
3. **딕셔너리** : 키-값 쌍을 가진 자료형이다.

### 리스트 메서드
```python
test_list = [10,412,5125,3213,312]
test_list.sort()

print(test_list.count(10))

del test_list[1]

print(len(test_list))
```
1. **sort** 메서드로 자료를 정렬할 수 있다.

2. **count** 메서드로 해당 요소가 몇 개 존재하는지 찾을 수 있다.

3. **del** 키워드로 원하는 인덱스에 있는 값을 지울수도 있으며, **len** 메서드로 리스트의 크기도 알 수 있다.

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

### 딕셔너리 구조, 활용
```python
test_dic = {}
test_dic['Faker'] = "Leblanc"
test_dic["Rookie"] = "Ziggs"

print(test_dic, test_dic["Faker"])
print("Champs : ",test_dic.values())
print("Players : ",test_dic.keys())
print("Champs and Players : ", test_dic.items())

for champ in test_dic.values():
    print(champ)
for player in test_dic.keys():
    print(player)
for pl, ch in test_dic.items():
    print("{} plays {}".format(pl, ch))
del test_dic["Rookie"]
```
딕셔너리에 키-값을 직접 추가할 수 있다.

1. **values, keys** 메서드를 통해 딕셔너리에 존재하는 모든 값 또는 키들을 한번에 출력할 수 있다.

2. **items** 메서드를 통해 모든 키-값 쌍을 출력할 수도 있다.

3. **for in** 반복문을 사용하면 많은 양의 데이터를 쉽게 출력할 수 있다.

4. **del** 키워드로 원하는 값을 지울 수도 있다.

## 형 변환
```python
alpha = str(1234) 
print(type(alpha))
```
자료형과 같은 이름을 가진 클래스를 통해 형변환 가능

## 포맷팅
```python
my_format = "My name is %s and I am %dyears old." % ("Jun", 27)
print(my_format)

your_format = "My name is {} and I am {}years old.".format("Yuri", 23)
print(your_format)

order_format = "{1} {0} {2}".format("second", "first", "third") 
print(order_format)
```
다른 언어들처럼 포맷팅이 가능하다. 다만 방법이 조금 특이하다.

1. 문자열의 내용과 입력되는 값을 %로 구분할 수 있다.

2. **%d**와 같은 언어출력타입 대신 **{}**를 입력하고, **format**함수를 사용하여 값을 입력해줄 수 있다.

3. **{}** 내부에 숫자를 입력하여 **format** 함수의 인자 중 원하는 인덱스의 값을 넣을 수 있다.