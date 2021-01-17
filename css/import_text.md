## 외부 URL불러오기
`@import url("index.css")`

## important
CSS의 키-값 쌍 뒤에 `!important`를 추가하면 항상 이 옵션이 적용된다.

## line-height
문자의 위아래 공백을 설정합니다.
>리딩이라고 하며, 박스모델의 `padding-top` + `padding-bottom`과 비슷한 개념인듯

## letter-spacing
옆에 오는 문자열과의 거리를 설정합니다.
>커닝이라고 하며, 박스모델의 `margin-right`와 같은 개념인듯.

## word-spacing
공백의 크기를 설정합니다.

## text-align
박스모델 내에서 컨텐츠들의 수평정렬을 설정합니다.

## vertical-align
박스모델 내에서 텍스트를 수직으로 정렬하며 가질 수 있는 값이 다양함.

1. `baseline` 부모 텍스트와 동일선상
2. `sub` `super` 부모 텍스트의 위/아래 첨자
3. `text-top` `text-bottom` 부모 텍스트의 맨위/맨아래
4. `middle` 부모요소의 가운데
5. `top` `bottom` 부모요소의 위/아래

## text-decoration
줄긋기를 설정합니다.

## text-overflow
> `overflow: visible`이외 값이 설정되었을때, 넘치는 문자에 대한 설정을 합니다.
1. `clip` : 넘치는 문자들을 생략합니다.
2. `ellipsis` : 넘치는 문자들을 말줄임표로 대체합니다.

## 개행 설정
> 문자열이 다음줄로 이동할때 단어 단위로 개행할지, 문자 단위로 개행할지 설정합니다.
1. `word-wrap: break-word` :  단어 단위로 개행합니다.
2. `word-break: break-all` : 문자 단위로 개행합니다.