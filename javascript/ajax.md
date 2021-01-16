## fetch - then 
```html
<input type="button" value="fetch" onclick="
 fetch('css').then(function(response){
    response.text().then(function(text){
        alert(text); 
        }) 
    }) 
"> 
```
1. fetch('css') : 'css'라는 이름 가진 파일 내놔
2. then(콜백함수) : 1에 대한 응답하면 콜백함수 실행시켜
3. 결론 : css파일 받으면 그 파일 내용이 경고창에 뜬다.