# SET

중괄호를 사용하여 생성, 빈 중괄호는 딕셔너리가 생성되므로 주의

순서가 없기때문에 인덱스, 사용불가, for in에서도 값이 임의로 순회

중복허용 ㄴ

합집합 : a|b 하고 set.union(a,b)
a |= b 이건 a.update(b)

교집합 : a&b 하고 set.intersection(a,b)
a&=b 이건 a.intersection_update(b)

차집합 : a-b 하고 set.difference(a,b)
a-=b 이건 a.difference_update(b)

대칭차집합 : 겹치지않는요소 : 합집합-교집합
a^b 랑  set_symmetric_difference(a,b)
a^=b랑 a.symmetric_difference_update(b)

상위집합 a.issuperset(b)
부분집합 a.issubset(b)
부등호도 사용가능
isdisjoint - 안겹치면 트루
add, remove -> 요소추가제거
discard 요소제거, 리무브는 요소없으면 에러, 디스는 없으면그냥무시
pop 랜덤요소제거
copy 복사


