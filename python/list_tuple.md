# 리스트 메서드
1. `count` : 요소 개수 확인
2. 요소 제거
    1. `del` : 리스트 객체와 인덱스를 이용해 요소를 제거합니다.
    2. `pop` : 인덱스를 이용해 요소를 제거합니다.
    3. `remove` : 요소를 할당받아 해당 요소를 제거합니다.
3. `extend` : 두 리스트를 결합합니다.
4. `insert` : 특정 인덱스에 특정 요소를 추가합니다.
5. `index` : 특정 요소의 인덱스를 구합니다.
6. `copy` : 리스트를 복사합니다.
7. `deepcopy` : 이차원 리스트를 복사합니다.

# Enumerate
> 반복 가능한 객체를 `(인덱스, 요소)`로 이루어진 객체로 변환합니다.
```python
name = "Junseong Park"
enum = enumerate(name)

for i in list(enum):
	print(i)
```
```
(0, 'J')
(1, 'u')
(2, 'n')
(3, 's')
(4, 'e')
(5, 'o')
(6, 'n')
(7, 'g')
(8, ' ')
(9, 'P')
(10, 'a')
(11, 'r')
(12, 'k')
```
# 튜플
> 우선 알아야할 점은 한 변수에 여러 값을 할당하는 경우 해당 변수는 `튜플` 자료형이 된다.
```python
t = 1,2,3
print(t, type(t))
```
```
(1, 2, 3) <class 'tuple'>
```
## 언패킹
```python
champions = 'Leblanc', 'Zedd', 'Lucian'
Faker, Caps, Chovy = champions
print(Faker, Caps, Chovy)
```
```
Leblanc Zedd Lucian
```