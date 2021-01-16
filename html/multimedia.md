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