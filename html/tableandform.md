# 테이블 
## `<table>`  
테이블 생성  
## `<thead>`,`<tbody>`,`<tfoot>`  
`<table>`태그 내 요소들을 시멘틱하게 구분하는 용도.
## `<tr>`
`<table>`태그 내에서 한 행을 추가하기 위해 사용함.
## `<th>`    
`<tr>`태그 내에서 헤드라인을 추가함.
>`<th>`태그의 특징은 헤드라인을 의미하기에 `scope`속성을 이용해 데이터 흐름을 정할 수 있음.
## `<td>` 
`<tr>` 태그 내에서 하나의 셀을 나타내기 위해 사용함.

>`<td>`태그와 `<th>`태그는 `colspan`, `rowspan` 속성을 이용하여 셀을 병합할 수 있음.

[테이블 예시](https://codepen.io/Junseongpark/pen/vYXzZmp)

# 폼
## `<form>`
폼 생성
> `<form>`태그의 역할은 다양한 형식의 데이터를 입력받고 원하는 URL로 데이터를 제출하는 것이므로 이를 위한 다양한 기능들이 존재함.

1. `<form>`태그는 `action`속성을 가지며, 데이터 제출을 원하는 URL을 값으로 가짐.
2. `<form>`태그는 `method`속성을 가지며 데이터를 어떤 방식을 값으로 가짐.
   1. `GET`방식은 데이터의 정보를 주소 뒤 문자열 형태로 보냄.
   2. `POST`방식은 데이터를 요청한 서버로 직접 데이터의 형식으로 보냄.
## 폼 컨트롤

> 모든 폼 컨트롤 요소들은 키-값 쌍으로 전달됩니다.
> 
> 키는 `name`속성을 의미하고, 값은 `value`속성을 의미합니다.
#### 텍스트
`<text>` , `<textarea>`

#### 선택
`<checkbox>` , `<radio>`

#### 비밀번호
`<password>`

#### 드랍다운
`<select>`
> `<select>`는 자식 요소로 `<option>`태그 여러개를 가짐.
> 
> 각 `<option>`태그들은 `value`속성을 가짐.

### Label
1. 다양한 `<input>`태그들을 `<label>`태그로 감싸주면 해당 요소의 영역을 확장할 수 있습니다.
2. `<label>`태그는 `for`속성을 가지며 이 속성의 값으로 `<input>`태그의 `id`를 가집니다.

예를 들어, 아래 코드로 생성된 문자열 `MALE`을 클릭하면 라디오버튼이 선택됩니다.
```html
<label for = "yourGender">
    <input type="radio" name="Gender" value="male" id="yourGender">
        MALE
</label>
```
## 폼 영역 설정하기

폼 영역은 `<fieldset>` 태그로 설정하고 제목은 `<legend>` 태그로 설정함.

[폼 예시](https://codepen.io/Junseongpark/pen/PoGdpgN?editors=1100)