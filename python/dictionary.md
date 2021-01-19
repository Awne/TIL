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




setdefault - 키값쌍추가 - 반환값은 해당 값 - 동일한 키가 존재한다면 무시
update - 덮어쓰기해서 갱신하기위해사용 키=값, 키=값 이런식으로인자줌, 없는키는추가함
pop(키) - 키값쌍제거 , 해당키가없는경우 두번째인자반환(썬택), del 키워드와역할같음
popitem() - 마지막키값쌍제거
get(키) - 값반환, 키없으면 두번째인자반환
items keys values - 리스트형태로 반환
dict.fromkeys(키배열) - 키값으로이루어진 리스트로 객체만듦. 모든 값들은 None으로 초기화, 다른값으로초기화하고싶으면 두번째인자에 세팅
딕셔너리 복사 copy함수, 이중 딕셔너리복사 : copy모듈의 deepcopy