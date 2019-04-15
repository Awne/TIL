## 이미지

### 이미지 내에 링크 걸기

```html
<img src = "1.jpg" usemap = "#workmap">
<map name = "workmap">
    <area shape = "rect" coords = "1,2,3,4" href = "url">
</map>
```

1. `<img>` 태그와 `<map>` 태그를 별개로 생성해준다.
2. `<img>` 태그에 `usemap` 속성을 추가하고 그 값은 `<map>` 태그의 `name` 으로 설정한다.
3. `<map>` 태그의 자식태그인 `<area>` 태그를 생성한다.
4. `<area>`태그에 `shape`, `coords`, `href` 속성을 추가해준다.
   
#### 이미지와 맵을 따로 만들고, 맵의 자식태그에서 모든 설정을 해준다.

### 화면 크기에 따라 달라지는 이미지 로딩

```html
<picture>
    <source media = "(min-width: 650px)" srcset = "1.jpg">
    <source media = "(min-width: 465px)" srcset = "2.jpg">
    <img src = "3.jpg">
</picture>
```

1. `<picture>` 태그로 이미지들을 한 그룹으로 묶어준다.
2. 반응형 이미지들은 `<source media = "크기" srcset = "url">` 을 사용한다.
3. 마지막 이미지는 로딩 실패시 불러올 이미지를 정해준다.


## 아이프레임

```html
<iframe srcdoc = "<p>Hello</p>" src="1.html" width="100px" height="100px" seamless sandbox>
```

`<srcdoc>` 태그는 인라인으로 코드를 작성하며 지원하지 않을 경우 `<src>` 태그의 문서가 출력된다.

`seamless` 속성을 설정하면 아이프레임이 별개의 창이 아닌 부모 요소의 일부가 되어 JS나 CSS등 다양한 요소를 상속받는다.

`sandbox` 속성을 사용하면 아이프레임에 내장된 JS나 form 등 다양한 요소들이 작동하지 않게된다. (iframe을 통한 해킹 방지)

`sandbox` 속성에 값을 주면 해당 값에 해당하는 요소만 작동시킬 수 있음. 해당 값들은 아래와 같다.

1. `allow-same-origin` iframe과 부모문서를 같은 도메인으로 취급하여 부모 문서로 접근을 가능하게 한다. (클로저 느낌)
2. `allow-top-navigation` 페이지 전환시 iframe에서의 페이지 이동이 아닌 부모 문서에서 페이지가 전환됨. (버블링 느낌)
3. `allow-form` iframe에서 작성된 form을 다른곳으로 제출가능
4. `allow-scripts` iframe에 내장된 script 실행가능

### 링크 클릭시 iframe에 원하는 문서 출력

```html
<a href = "index.html" target = "first_frame"> Click Here! </a>
<iframe name = "first_name"></iframe>
```

1. `<a>`의 `href`속성에는 iframe에 출력할 문서의 URL을 입력해준다.
2. `target`속성에는 출력을 원하는 iframe의 `name`을 입력해준다.
3. `<iframe>`의 `name`을 반드시 정해준다.

[실습](http://bit.ly/2tbw09z)


## 오디오 & 비디오

더이상 플래시 파일들을 사용하지 않으며 HTML의 <Audio>, <Video>로 대체.

멀티미디어 재생방법은 3가지 존재
1. SWFObject 라이브러리를 이용한 파일 업로드 (이제 안씀)
2. 유튜브, 사운드클라우드 등을 이용하여 업로드
3. HTML5의 `<video>` `<audio>` 태그 사용

```html
<video width="300px" height="300px" controls preload="none">
    <source src="1.mp4" type="video/mp4">
    <source src="2.ogv" type="video/ogg">
</video>
```

`preload` 속성의 값에 대해
1. `none` 미리 받는것 아무것도 없음.
2. `matadata` 기본 데이터만 미리 받음.
3. `auto` 빈칸으로 대체가능하며 파일을 미리받음.


   


















