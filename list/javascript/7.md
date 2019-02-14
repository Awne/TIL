## Destructing

객체 및 배열을 해체한다.

### 배열

아래 코드는 `1 3`을 출력한다.
```javascript
let data = [1,2,3,4];
let [one,,three] = data;
console.log(one, three);
```
변수 `one`은 `data[0]`을, `three`는 `data[2]`를 할당받는다.

### 객체

아래 코드는 `Awne 27`을 출력한다.

변수 `name`은 `obj.name`을, `age`는 `obj.age`를 할당받는다.
```javascript
let obj = {
    name : "Awne",
    from : "Korea",
    age : 27,
}

let {name, age} = obj;
console.log(name, age);
```

변수의 이름을 바꿀 수도 있다.

아래 코드는 `name` `age` 대신 `myName` `myAge` 를 사용한다.
```javascript
let {name : myName, age : myAge} = obj;
console.log(myName, myAge);
```

### JSON 파싱

JSON 데이터를 파싱하는데도 유용하게 사용할 수 있다.

아래와 같은 데이터가 있다고 가정한다.
```javascript
let stockmarket = [
    {
        title : "KOSPI",
        nation : "Korea",
        companies : [
            "Samsung electronics", "SK Hynix", "Hyundai car"
        ],
    },
    {
        title : "NASDAQ",
        nation : "USA",
        companies : [
            "Microsoft", "Amazon", "Alphabet"
        ],
    }
]
```

아래 코드는 변수`nas`에 `stockmarket[1]`을 할당한다.
```javascript
let [,nas] = stockmarket;
```

아래 코드는 `NASDAQ [ 'Microsoft', 'Amazon', 'Alphabet' ]`을 출력한다.
```javascript
let {title, companies} = nas;
console.log(title, companies);
```

아래 코드는 위 코드와 동일하게 동작한다.
```javascript
let [, {title : 이름, companies : 기업}] = stockmarket;
console.log(이름, 기업);
```

### 이벤트 객체 전달

이벤트 객체를 전달하는데 비구조화 할당을 사용할 수 있다.

아래와 같은 HTML이 있다고 가정한다.
```html
<div id = "a"> Click Here !! </div>
```

아래와 같이 이벤트 리스너를 정의한다.
```javascript
document.querySelector("#a").addEventListener("click", function(e) {
    console.log(e.target);
})
```
위 코드를 설명하면 아래와 같다.
1. 변수 `e`는 이벤트 객체이다. 즉, 마우스 클릭 이벤트에 대한 정보들을 가지고 있다.
2. `target`프로퍼티는 이벤트의 대상이다 즉, 여기서는 `<div>`태그 및 텍스트를 의미한다.

위 코드는 아래와 같이 바꿀 수 있다. 이벤트 객체에서 `target`프로퍼티만 사용할 것을 의미한다.
```javascript
document.querySelector("#a").addEventListener("click", function({target}) {
    console.log(target);
})
```

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

## Template Literal

템플릿 리터럴에 태그가 들어갈 수 있다.
```javascript
console.log(`<div>Hello World !</div`);

document.querySelector("#empty").innerHTML = `<span style = "color : red">Hello World !</span>`
```

## Tagged Template Literal

템플릿 리터럴 내 변수와 문자열에 대해 함수를 적용할 수 있다.

1. 템플릿 리터럴 앞에 함수명을 입력해준다.
2. 함수의 첫 번째 인자에는 변수들을 제외한 모든 문자열이 들어간다.
3. 함수의 두 번째 인자부터는 각각 변수가 들어간다.


```javascript
let name = "Jun";
let age = 24;

function fn(tags, name, age) {
    console.log(`태그는 ${tags}`);
    ++age;
    console.log(`내 이름은 ${name}, 1년 후 내 나이는 ${age}`);
}

console.log(fn`나는 ${name}이고 지금 ${age}살임.`);
```