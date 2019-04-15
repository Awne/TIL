## 속성 선택자

1. `p[class]` `class` 속성을 가짐
2. `p[class="A"]` `class="A"`속성을 가짐
3. `p[class~="A"]` 여러 값을 가지는 `class` 를 가지며 그 중 하나의 값이 `"A"`임
4. `p[class^="A"]` `class`가 A로 시작함
5. `p[class*="A"]` `class`가 A를 포함함
6. `p[class$="A"]` `class`가 A로 끝남.

## 결합자

1. `p a` `<p>`의 자식 및 손자인 `<a>` 모두
2. `p>a` `<p>`의 자식인 `<a>` 모두
3. `p+a` `<p>`의 인접한 형제인 `<a>` 모두
4. `p~a` `<p>`의 형제 중 `<a>` 모두

## 의사 클래스

1. `a:link` 모든 `<a>` 제어
2. `a:active` `<a>`가 클릭된 순간
3. `input:focus` `<textarea>` 등에 포커스가 들어왔을 때

