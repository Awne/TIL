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