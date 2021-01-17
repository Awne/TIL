전개 연산자 

```javascript
let arr = [1,2,3,4,5,6,7,8,9];

(function vvvv (...args) {
    console.log(arr);
    console.log(...arr);
})();

// 함수 인자에 ... 쓰면 나머지 연산자로 그냥 인수를 계속 받을수있다는거임.
// 다른곳에 ...배열명 이런식으로 쓰면 배열을 해체하여 [와 ]를 없앤 값만 나열.
```