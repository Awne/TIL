## 여러줄 입력
```python
my_str = """a
b
c
d
"""
```


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



## 메서드
1. replace(a,b) : a를 b로 변환, 세 번째인자로 실행횟수를 정할수있음.
2. strip류 메서드는 공백을 제거하지만 인자를 준 경우 해당 인자를 제거함. 인자 문자열의 길이가 2개 이상이라면 해당되는 모든 문자를 제거합니다.
3. ljust, rjust는 인자만큼으 ㅣ공간을 확보한 뒤 좌/우 정렬합니다.
4. zfill함수는 인자만큼의공간 확보후 비어잇는 부분을 0으로 채웁니다.
5. find, rfind는 해당 문자열을 찾고 문자열의 인덱스를 반환함. 없는경우 -1반환 (index함수와비슷)
6. 위 함수의 인덱스함수와 차이점은 index/rindex는 못찾으면 에러반환. 애초에 find목적은 문자열찾기ㅏ, index목적은 요소의인덱스반환임. 그래서 전자는 문자열에서만, 후자는 아무데서 사용가능
7. count로 문자열등장횟수 세기가능

## maketrans 메서드
```python
table = str.maketrans("abcdef", "123456")
s = 'apple'
news = s.translate(table)
print(news)
```
1. maketrans로 테이블을 만들고, translate로 테이블 적용시켜서 일치하는 문자를 변환시킵니다.