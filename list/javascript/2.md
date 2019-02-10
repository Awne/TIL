## 메소드

메소드는 노드에 자식요소를 추가하거나 제거, 변경할 수 있음.

1. `document.createElement` 태그 생성
2. `document.createTextNode` 텍스트 생성
3. `document.createDocumentFragment` 가상 DOM생성. 여기에 모든걸 조작하고 이를 `body`에 넣는 경우가 많음.
4. `appendChild` 노드에 요소 추가
5. `removeChild` 노드의 요소 제거
6. `insertBefore` 첫 인자는 삽입을 원하는 요소, 두번째 인자는 노드의 자식 요소 중 삽입기준이 되는 요소
7. `replaceChild` 노드의 자식요소 중 첫 인자를 두번째 인자로 교체


## 프로퍼티

프로퍼티는 노드에 속해있는 값을 확인, 변경할 수 있음.

1. `innerHTML` 요소의 내용을 가져옴
2. `outerHTML` 태그를 포함한 요소 전체를 가져옴
3. `document.anchors` 링크 태그에 접근
