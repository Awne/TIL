# 딕셔너리
1. `setdefault` : 키-값쌍을 추가합니다. 동일한 키가 존재한다면, 무시합니다.
```py
LOL = {}
LOL.setdefault('Faker', 'Leblanc')
LOL.setdefault('BDD', 'Azir')
LOL.setdefault('Faker', 'Zedd')
print(LOL)
```
```
{'Faker': 'Leblanc', 'BDD': 'Azir'}
```
2. `update` : 키-값쌍을 수정하기 위해 사용합니다. 인자로 `키=값`을 받습니다. 인자가 존재하지 않는다면 새로 추가합니다.
```py
LOL = {}
LOL.setdefault('Faker', 'Leblanc')
LOL.setdefault('BDD', 'Azir')
LOL.update(Faker='Zedd')

print(LOL)
```
```
{'Faker': 'Zedd', 'BDD': 'Azir'}
```
3. `items`, `keys`, `values` : 각 값들을 리스트형태로 반환합니다.
```py
LOL = {'Faker': 'Zedd', 'BDD': 'Azir'}

print(LOL.items())
print(LOL.keys())
print(LOL.values())
```
```
dict_items([('Faker', 'Zedd'), ('BDD', 'Azir')])
dict_keys(['Faker', 'BDD'])
dict_values(['Zedd', 'Azir'])
```
4. `get` : 할당된 키에 해당하는 값을 반환합니다. 해당 키가 존재하지 않는다면 두 번째 인자를 반환합니다.
```py
LOL = {'Faker': 'Zedd', 'BDD': 'Azir'}
findRookie = LOL.get('Rookie', 'The player is in LPL')

print(findRookie)
```
```
The player is in LPL
```
5. `dict.fromkeys` : 키값으로 이루어진 배열을 인자로 받아 해당 키들로 이루어진 딕셔너리 객체를 생성합니다. 각 키의 값은 기본적으로 `None`이며 두 번째 인자를 통해 값들을 한꺼번에 초기화할 수 있습니다.
```py
champs = ['Zedd', 'Talon', 'Lucian']
AD = dict.fromkeys(champs, 'MID')
print(AD)
```
```
{'Zedd': 'MID', 'Talon': 'MID', 'Lucian': 'MID'}
```
6. `copy`, `deepcopy` : 딕셔너리를 복사할 때 사용합니다. `deepcopy`는 `copy`모듈에 존재하며, 이중 딕셔너리를 복사할때 사용합니다. 
7. `pop` : 키를 입력받아 해당 키를 가진 키-값쌍을 제거하고, 그 값을 반환합니다.
8. `popitem` : 가장 마지막에 추가된 키-값쌍을 제거합니다.
> 키-값쌍의 제거는 `del[key]`를 통해서도 가능합니다.