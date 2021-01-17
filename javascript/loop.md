## for of

`for of`가 추가되었다. `forEach` `for in` `for of`를 비교하면 아래와 같다.

아래와 같은 배열이 있을 때
```javascript
let arr = ["A", "B", "C", "D"];
```

`forEach`는 `key(index)`와 `value(item)`에 모두 접근이 가능하며 `callback function`을 인자로 받는다.

배열 메소드이기때문에 배열 타입에만 사용할 수 있다.
```javascript
arr.forEach(function(value, i) {
    console.log(value, i);
})
```

`for-in`은 `key(index)`에 접근할 수 있으며 상속받은 `key`값을 모두 출력한다.

모든 객체에서 사용할 수 있다.
```javascript
for(idx in arr) {
    console.log(idx);
}
```

`for-of`는 `value`에 접근할 수 있다.

모든 `iterable object`에서 사용할 수 있다.
```javascript
for(item of arr) {
    console.log(item);
}
```



 제너레이터 

```javascript
function* bjs () {
    console.log ("I'm Junseong Park.");
    yield;
    console.log ("I live in Busan.");
    yield;
    console.log ("I'm 27 years old.");
    yield;
    console.log("I will shout out.");
    console.log("AHHHHHHHHHHHHHHHHHHHHHH~~~");
    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH~");
}

let introduce = bjs();
introduce.next();
introduce.next();
introduce.next();
introduce.next();

// function* 는 함수선언처럼 보이지만 제너레이터 선언임.
// 얘 특징은 명령설정 후 yield;로 끝점 만들어줌. 
// 이름.next();를 하면 끝점을 기준으로 다음 작업 시작함.
```



 반복문 

```javascript
//forEach

let Factory = ["Vulture", "Seige Tank", "Goliath"];
Factory.unitsAre = "Mechanical Units";
Factory.forEach((n) => console.log(n));
// 유닛만 나옴

//for - in
let Gateway = ["Zelot", "Dragoon", "High Templer", "Dark Templer"];
Gateway.unitsAre = "Basic units of Protoss";
for (let n in Gateway) {
    console.log(n);
    console.log(Gateway[n]);
}
// n은 인덱스를 출력함 (unitsAre 프로퍼티 역시 출력됨.)

let Stargate = ["Scout", "Corsair", "Carrier", "Arbiter"];
Stargate.unitsAre = "Air units of Protoss";
for (let n of Stargate) {
    console.log(n);
}
//유닛들 출력

//이렇게 보면 forEach랑 for of가 같아보임 근데 차이가 큼.
// 전자는 배열에만 사용가능, 인덱스에 접근가능
// 후자는 순환가능한 모든 데이터에 사용가능(심지어 문자열도), 인덱스에 접근불가.
// 그리고 for of가 유일하게 ES6에 새로 도입된거라서 최신임. 
// 특징으로는 async, await 사용가능하다고함.
// 그럼 그냥 forEach는 영원히 안쓰고 데이터순환할때 for of 쓰는걸로 하자구.

```