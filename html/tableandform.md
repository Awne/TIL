# 테이블 

## `<table>`  

테이블 생성  
  
## `<thead>`,`<tbody>`,`<tfoot>`  

시멘틱 태그  
  
  
## `<th>`    

테이블 헤드라인 추가  

`scope` 속성을 가지며 `row`와 `col`을 값으로 가질 수 있다.  

`scope = "row"`라면 행의 헤드라인, 후자는 열의 헤드라인  
  
## `<tr>` 

테이블 행 추가

## `<td>` 

테이블 셀 추가

`<td>`,`<th>`는 `colspan`, `rowspan` 속성을 가질 수 있다.

얘들은 입력된 값에 해당하는 개수의 셀을 병합한다.

## 폼

## `<form>`
폼 생성


데이터를 보낼 url을 입력받는 `action`

보내는 방법을 정의하는 `method`

여러 폼 컨트롤과 연결할 수 있는 `id` 속성을 가진다.


## 폼 컨트롤

### 종류

#### 텍스트

`text` `textarea`

#### 선택

`checkbox` `radio`

#### 비밀번호

`password`

#### 드랍다운

`select`

자식 요소로 `option`을 가지며 이는 `value`값을 가져야한다.

#### 버튼

`submit` `image` `upload`

이미지 버튼은 버튼에 이미지를 입힌다.


##### 공통

폼 컨트롤은 `name` 속성을 반드시 준다. 

이는 전송 데이터의 키값으로 사용됨.

아래 코드는 `gender : man` 을 전송한다.
```html
<input type="radio" name="gender" value="man" id="first">MAN
```


`label for 폼컨트롤의 id` 를 통해 영역을 공유할수있음. 

아래 코드에서 텍스트인 `MAN`을 클릭해도 라디오버튼이 체크된다.

```html
<input type="radio" name="gender" value="man" id="first">
    <label for = "first>
        MAN
    </label>
```







