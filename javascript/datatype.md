## String

1. `split` 인자를 기준으로 나누어 배열로 반환
2. `substr` 첫 인자는 시작인덱스, 두번째 인자는 길이
3. `substring` 첫 인자는 시작인덱스, 두번째 인자는 종료인덱스 (양수만 사용가능)
4. `slice` 첫 인자는 시작인덱스, 두번째 인자는 종료인덱스 (음수사용 가능)

## String의 새로운 메소드

`startsWith` `endsWith` `includes` 메소드가 추가되었다.

아래 코드는 3개의 `true`를 출력한다.
```javascript
let str = "Hello World ! ^^ ~~";
let matchstr = "Hello";

console.log(str.startsWith(matchstr));
console.log(str.endsWith("~~"));
console.log(str.includes("d ! ^"));
```

## Number

1. `toFixed` 소수점 이하 해당자리수 반올림
2. `toPrecision` 유효숫자 해당개수 반올림
3. `parseInt` 첫 인자는 문자열, 두번째 인자는 진법
4. `parseFloat` 문자열을 소수로 반환

## Array

1. `join` 배열의 내용을 구분자로 이어줌
2. `concat` 여러 값 추가
3. `splice` 첫 인자는 시작 인덱스, 두번째 인자는 삭제할 요소 개수, 이후 인자는 추가할 요소
4. `forEach` 콜백 함수를 인자로 받고 동작은 `map`과 같지만 값을 리턴하지 않음.
5. `reduceRight` 오른쪽부터 계산하는 `reduce`
6. `every` 모든 항목이 조건을 만족한다면 `true` 반환
7. `some` 하나 이상의 항목이 조건을 만족한다면 `true`반환
8. `copyWithin` 첫 번째 인자는 붙여넣기 할 인덱스, 두번째 요소는 복사를 시작할 인덱스, 세번째 요소는 복사종료 인덱스
9. `fill` 첫 번째 인자는 채울 값, 두번째 인자는 시작할 인덱스, 세 번째 인자는 종료할 인덱스
10. `flat` 모든 환경에서 지원하지는 않지만 유용해서 추가함. 내부 배열을 해제함. 숫자 인자를 추가하면 depth가 2인 배열까지 해제.
11. `findIndex` 조건에 맞는 인덱스 반환, 콜백함수의 두 번째 인자로 인덱스 사용가능
12. `find` 조건에 맞는 요소 반환, 콜백함수의 두 번째 인자로 인덱스 사용가능

## Array의 새로운 메소드

`Array.from` 메소드를 통해 `iterable object`를 배열로 변환할 수 있게 되었다.

아래 코드는 함수의 인자값에 느낌표를 추가해주는 함수이다.
```javascript
function addMark() {
    let result = [];
    for(let i=0; i<arguments.length; i++) {
        result.push((arguments[i] + "!"));
    }
    console.log(result);
}
```
아래 코드는 위 함수와 동일한 동작을 하지만 유사배열인 `arguments`를 배열로 변환시켜 배열의 `map`메소드를 사용하였다.
```javascript
function addMark() {
    let beArray = Array.from(arguments);
    let result = beArray.map((item) => {
        return item + "!";
    });
    console.log(result);
}
```

## Math

1. `random` 0~1 사이 무작위 유리수 반환
2. `floor` 버림하여 정수로 반환
3. `ceil` 올림하여 정수로 반환
4. `round` 반올림해 정수로 반환
5. `max` `min` 인자들 중 최대/최소값 반환


## Set

`Set`은 중복을 허용하지 않는 배열이라고 생각하면 좋다. 요소를 쉽게 제거할 수 있다는 장점도 가지고 있다.

```javascript
let mySet = new Set();

mySet.add("first");
mySet.add("second");
mySet.delete("second");
```

## WeakSet

`Set`과 거의 같지만, 객체 요소만 저장할 수 있다.
```javascript
let myWs = new WeakSet();

let arr = [1,2,3,4];
let func = function(){};

myWs.add(arr);
myWs.add(func);
```
위 코드는 아래와 같은 특성을 가짐.

1. 변수의 참조를 제거해도 `WeakSet`을 출력해보면 그대로 남아있다.
2. 하지만, `has`메소드를 통해 존재하는지 여부를 살펴보면 없다고 나온다.
3. 즉, `WeakSet`의 요소들은 가비지 컬렉션의 대상이 된다.
4. 이 말은, `WeakSet`이 그 요소를 참조하고 있더라도 그 요소가 참조하는 값이 사라지면 메모리에서 없어진다.
```javascript
arr = null;
console.log(myWs);
console.log(myWs.has(arr));
```

## Map

배열의 상위호환이 `Set`라면, 객체의 상위호환은 `Map`이다.

1. `Key`가 반드시 문자열이 아니어도 된다.
2. `size`프로퍼티를 통해 크기를 구하기가 쉽다.
3. 데이터가 입력된 순서대로 반환된다.

`Map`은 `set`메소드로 데이터를 저장하며 `get`메소드로 호출한다.
```javascript
let myMap = new Map();

myMap.set("Terran", ["SCV", "Marine"]);
console.log(myMap.get("Terran"));
```

## WeakMap

`Map`과 거의 모든점이 같지만 몇몇 다른점이 존재한다.

1. `Key`값으로 객체 요소만 올 수 있다.
2. `WeakSet`과 마찬가지로 요소들은 가비지 컬렉션의 대상이 된다.