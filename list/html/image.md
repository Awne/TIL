이미지 내에 영역을 지정해서 링크를 만들 수 있다.
```html
<img src = "url" alt="" usemap = "#workmap">
<map name = "workmap>
    <area shape = "rect" coords = "1,2,3,4" href = "url2" alt="">
</map>
```
>* usemap의 값은 map name
>* shape는 도형의 형태를 정해줌

화면 크기에 따라 다른 이미지를 불러올 수 있다.
```html
<picture>
    <source media = "(min-width: 650px)" srcset = "img1.jpg">
    <source media = "(min-width: 465px)" srcset = "img2.jpg">
    <img src = "img3.jpg" alt="">
</picture>
```
>* img 는 항상 마지막에 위치시킴. 조건에 맞지 않거나 지원하지 않는 브라우저에 적용.
>* min-width : 650px까지는 1을, 더 줄여서 465까지는 2를 불러옴.


