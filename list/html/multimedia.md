###오디오 단일
```html
<audio controls src = "url" preload = "auto">
    오디오를 불러올 수 없습니다.
</audio>
```
### 오디오 여러개
```html
<audio controls>
    <source src = "url1" type = "audio/mpeg">
    <source src = "url2" type = "audio/ogg">
</audio>
```
### 비디오
```html
<video src = "url" width = "150px" height = "150px" poster = "img_url">
    비디오를 불러올 수 없음.
</video>    
```
>preload에 대해
>* none : 재생을 하지 않을 예정이거나, 트래픽을 최소화시키고 싶을때사용하며 미리 파일을 다운받지 않음.
>* metadata : 재생은 하지 않는다고 가정하지만, 길이 등의 메타데이터만 불러옴.
>* auto (또는 빈칸) : 파일을 미리 다운로드 받음.