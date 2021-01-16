## 이미지
### 이미지 내에 링크 걸기
```html
<img src = "image.jpg" usemap = "#workmap">
<map name = "workmap">
    <area shape = "rect" coords = "1,2,3,4" href = "https://github.com/junseongparkme">
</map>
```
1. `<img>`태그를 생성하고 `usemap` 속성을 추가한다. `usemap`의 값은 `#`로 시작한다.
2. `<map>`태그를 생성하고 `name` 속성을 추가한다. `name`의 값은 `<img>`태그의 `usemap`속성의 값에서 `#`을 뺀 값이다.
3. `<map>`태그 내에 `<area>`태그를 추가하고 링크에 대한 정보들을 추가한다.

[이미지맵 예시](https://codepen.io/Junseongpark/pen/XWjPgyp?editors=1100)

### 화면 크기에 따라 다른 이미지 불러오기
```html
<picture>
    <source media = "(min-width: 650px)" srcset = "1.jpg">
    <source media = "(min-width: 465px)" srcset = "2.jpg">
    <img src = "3.jpg">
</picture>
```
1. `<picture>`태그를 생성하고 태그 내에 `<source>`태그들을 추가한다.
2. `<source>`태그에 `media`속성을 추가하고 화면 크기에 대한 정보를 값으로 제공하고, `srcset`속성을 추가하고 대상 이미지 파일을 값으로 제공한다.
3. 마지막 요소로 `<img>`태그를 생성하고 `src`속성을 추가하여 모든`<source>`태그의 `media`속성에 해당하지 않을 경우 불러올 이미지를 값으로 제공한다.

[반응형 이미지 예시](https://codepen.io/Junseongpark/pen/dypqRLe)

## 오디오 & 비디오
더이상 플래시 파일들을 사용하지 않으며 HTML5의 `<Audio>`, `<Video>`로 대체.

멀티미디어 재생방법은 3가지 존재
1. ~~SWFObject 라이브러리를 이용한 파일 업로드 (이제 안씀)~~
2. 유튜브, 사운드클라우드 등을 이용하여 업로드
3. HTML5의 `<video>` , `<audio>` 태그 사용

```html
<video width="300px" height="300px" controls preload="none">
    <source src="1.mp4" type="video/mp4">
    <source src="2.ogv" type="video/ogg">
</video>
```
### `preload` 속성값
1. `none` 미리 받는것 아무것도 없음.
2. `matadata` 기본 데이터만 미리 받음.
3. `auto` 빈칸으로 대체가능하며 파일을 미리받음.