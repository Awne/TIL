# 여러 줄 입력
> 작은따옴표 또는 큰따옴표 세개를 사용하면 여러 줄의 문자열을 입력할 수 있다.
```python
result = '''안녕

하세

요

'''
```
# 포맷팅
1. 특정 데이터타입으로 출력하기
```python
print('My name is %s and I am %dyears old.' % ("Jun", 28))
```
2. 할당한 데이터타입 그대로 출력하기
```python
print('My name is {} and I am {}years old.'.format("Jun", 28))
```
# 메서드
1. `replace` : 문자를 변경합니다.
2. `strip` : 연속된 문자 제거
3. `ljust`, `rjust` : 공간확보 후 정렬하고 빈공간 특정문자로 채우기
4. `zfill` : 공간확보 후 0으로 채우기
5. `find` , `rfind` : 문자의 인덱스 반환, 없으면 `-1`반환
6. `count` : `문자열` 등장횟수 카운트

# maketrans 메서드
> `str.maketrans`함수로 테이블을 작성하고, `translate`함수로 테이블을 적용합니다.
```python
string = 'Hello'
table = str.maketrans('Helo', '1234')
result = string.translate(table)
print(result)
```