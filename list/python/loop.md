## 반복문
```python
for item in [1,2,3,4,5,6]:
    print(item) 

for item in range(7, 11):
    print(item)

for a in range(2,10) :
    print("\n") 
    for b in range(1,10) :
        print("{} X {} = {}".format(a,b,a*b), end="\n")
```
파이썬에서는 집합 자료형과 함께 for-in 문을 자주 사용한다.

2중 반복문 역시 사용이 가능하며 **format** 메서드를 함께 사용할 수 있다.

```python
for pl, ch in test_dic.items():
    print("{} plays {}".format(pl, ch))
```
특히, 딕셔너리에서 사용할때 for문의 인자로 변수 2개가 올 수 있으며 각각 **키**와 **값**을 의미한다.

## 컴프리헨션
```python
numbers = range(1,31)
odd_numbers = [number for number in numbers if number%2 == 1] 
print(odd_numbers)
```
반복문이나 조건문을 사용하여 간단하게 리스트를 제작할 수 있는데 이를 컴프리헨션이라고 한다.

직해해보면 아래와 같음.
number로 채울것/number는 numbers의 요소들/홀수 조건을 만족하는

## if 조건문
```python
Members = ["Jun", "Yul", "Lee"]

if "Min" in Members:
    print("Yes, she is.")
elif "Jun" in Members:
    print("Jun is here")
else: 
    print("What is it?")
```
조건문에서 특이한 점으로는 else if 대신 **elif**를 사용한다 정도.

## 연산자
```python
print(64//10, 64%10, 25**2)
print("AB"*5, "CD"+"EF" + "\n"*3 + "ZZ")
print("All is T", not False, True and True, True or False )
print ("All is F", "a" not in ["a","b"], "z" in ["a", "b"])
```
1. //연산자는 몫을, %는 나머지를, **는 제곱을 의미함.

2. 문자열에서 *연산자는 해당 횟수만큼 반복을, +연산자는 데이터 추가를 의미함.

3. **not, and, or**을 기호로 사용하지 않고 문자 그대로 사용한다.

4. **in, not in** 을 이용해 집합 자료형 내부에 원하는 요소가 존재하는지, 아닌지 체크하여 bool 값을 반환할 수 있음.


