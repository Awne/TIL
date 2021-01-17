### 배열

아래 코드는 `1 3`을 출력한다.
```javascript
let data = [1,2,3,4];
let [one,,three] = data;
console.log(one, three);
```
변수 `one`은 `data[0]`을, `three`는 `data[2]`를 할당받는다.

## 전개연산자

묶인 배열을 다시 풀 수 있다.

아래 코드는 배열의 요소를 그대로 옮긴 것이다.
```javascript
let arr = ["A", "B", "C", "D"];
let spread = [...arr];
```
아래와 같이 배열의 요소로 사용할 수 있다.
```javascript
let newData = ["S", ...arr, "Z"];
```
