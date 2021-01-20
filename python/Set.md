# SET
> 중괄호를 사용하여 생성하지만, 빈 중괄호는 딕셔너리가 생성됩니다.

> 중복을 허용하지 않고 순서가 없기때문에 인덱스를 사용할 수 없고, 반복문을 사용하더라도 값이 원하는 대로 출력되지 않을 수 있습니다.

# 연산
1. `add` , `remove` : 요소 추가/제거
2. `discard` : 요소 제거
> `remove`는 요소가 존재하지 않으면 에러발생, `discard`는 없으면 그냥 무시
3. `isdisjoint` : 교집합이 존재하지 않으면 `True`를 반환합니다.
4. `issuperset` , `issubset` : 해당 집합이 특정 집합의 상위집합인지, 부분집합인지 판단합니다.
> 이 연산은 부등호를 이용해서 실행할 수도 있습니다.
5. `copy` : 세트 객체를 복사합니다.
# 집합연산
1. 합집합
    1. 새로운 객체 반환 : `A|B` , `set.union(A,B)`
    ```py
    MID = {'Lucian', 'Zedd', 'Ziggs', 'Oriana'}
    AD = {'Lucian', 'Ziggs', 'Samira'}
    print(MID|AD, set.union(MID, AD), sep='\n')
    ```
    ```
    {'Zedd', 'Samira', 'Ziggs', 'Lucian', 'Oriana'}
    {'Zedd', 'Samira', 'Ziggs', 'Lucian', 'Oriana'}
    ```
    2. 기존 객체에 할당 : `A|=B` , `A.update(B)`

2. 교집합
    1. 새로운 객체 반환 : `A&B` , `set.intersection(A,B)`
    ```py
    MID = {'Lucian', 'Zedd', 'Ziggs', 'Oriana'}
    AD = {'Lucian', 'Ziggs', 'Samira'}
    print(MID&AD, set.intersection(MID, AD), sep='\n')
    ```
    ```
    {'Lucian', 'Ziggs'}
    {'Lucian', 'Ziggs'}
    ```
    2. 기존 객체에 할당 : `A&=B` , `A.intersection_update(B)`

3. 차집합
    1. 새로운 객체 반환 : `A-B` , `set.difference(A,B)`
    ```py
    MID = {'Lucian', 'Zedd', 'Ziggs', 'Oriana'}
    AD = {'Lucian', 'Ziggs', 'Samira'}
    print(MID-AD, set.difference(MID, AD), sep='\n')
    ```
    ```
    {'Oriana', 'Zedd'}
    {'Oriana', 'Zedd'}
    ```
    2. 기존 객체에 할당 : `A-=B` , `A.difference_update(B)`

4. 대칭차집합 (겹치지 않는 요소. 즉, 합집합-교집합)
    1. 새로운 객체 반환 : `A^B` , `set_symmetric_difference(A,B)`
    ```py
    MID = {'Lucian', 'Zedd', 'Ziggs', 'Oriana'}
    AD = {'Lucian', 'Ziggs', 'Samira'}
    print(MID^AD, set.symmetric_difference(MID, AD), sep='\n')
    ```
    ```
    {'Oriana', 'Samira', 'Zedd'}
    {'Oriana', 'Samira', 'Zedd'}
    ```
    2. 기존 객체에 할당 : `A^=B` , `A.symmetric_difference_update(B)`