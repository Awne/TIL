## 속성 선택자
1. `p[class]` : `class` 속성을 가짐
2. `p[class="A"]` : `class="A"` 속성을 가짐
3. `p[class~="A"]` : 여러 `class` 중 `A`가 포함
4. `p[class^="A"]` : `class`가 A로 시작함
5. `p[class*="A"]` : `class`가 A를 포함함
6. `p[class$="A"]` : `class`가 A로 끝남.

## 자식 선택자
1. `first-child` , `first-of-type` : 부모요소의 첫 번째 자식요소
2. `last-child` , `last-of-type` : 부모요소의 마지막 자식요소
3. `nth-child(fn)` , `nth-of-type(fn)` : 부모요소의 자식요소 중 일반항에 해당하는 자식요소
4. `nth-last-child(fn)` , `nth-last-of-type(fn)` : 부모요소의 자식요소 중 일반항에 해당하는 자식요소를 뒤에서부터 찾음
> `child`는 해당하는 요소가 없는경우 아무런 효과를 적용하지 않지만,
> 
> `of-type`은 해당하는 요소를 찾을 때까지 아래로 탐색합니다. 

## 결합자
1. `p a` : `<p>`의 자식 및 손자인 `<a>` 모두
2. `p>a` : `<p>`의 자식인 `<a>` 모두
3. `p+a` : `<p>`의 인접한 형제인 `<a>` 모두
4. `p~a` : `<p>`의 형제 중 `<a>` 모두

## 의사 클래스
1. `a:link` : 모든 `<a>` 제어
2. `a:active` : `<a>`가 클릭된 순간
3. `input:focus` : `<textarea>` 등에 포커스가 들어왔을 때

## 기타 선택자
1. `not(selector)` : 해당 선택자를 제외한 요소들
2. `valid` , `invalid` : 지정한 정규표현식을 만족하는/만족하지 않는 `input` 요소를 선택
3. `checked` , `enabled` , `disabled` : 해당 속성을 가진 요소들을 선택

## 가상 요소
> 가상 요소는 `::`를 사용하여 적용합니다.
>
> 첫 글자, 첫 줄, 요소의 앞이나 뒤 처럼 요소의 일부를 변화시킬때 사용
1. `first-letter` , `first-line` : 선택자의 첫 글자 / 첫 줄
2. `after` , `before` : 선택자의 앞/뒤에 내용을 추가합니다.
> 내용은 `content: "내용";`을 사용하여 추가할 수 있습니다.
3. `selection` : 커서로 드래그한 문자열