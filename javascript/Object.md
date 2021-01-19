

## Object

### Object.assign

메소드를 가지고있는 객체가 존재함.
```javascript
const healthObj = {
    showHealth : function() {
        console.log("운동시간 : " + this.healthTime)
    }
}
```

아래 코드는 `Object.create`를 통해 부모를 모셔온 새 객체를 만든 뒤 프로퍼티를 추가함.
```javascript
const myHealth = Object.create(healthObj);

myHealth.healthTime = "11:00";
myHealth.name = "crong";
```

아래 코드는 위 코드와 결과는 같지만 `Object.assign`을 통해 프로퍼티를 한번에 추가할 수 있음.
```javascript
const myHealth = Object.assign(Object.create(healthObj), {
    name : "crong",
    healthTime : "11:22"
})
```
1. 첫 인자는 어디에 합칠지 설정
2. 아무것도 상속받지 않는 객체에 추가하려면 첫 인자를 `{}`로 설정.
3. 두번째 인자부터는 합칠 객체들을 설정
4. 합칠 객체들 사이에 중복된 키가 있다면 덮어쓰기를 통해 우측 요소가 적용.

### Object.setPrototypeOf

`Object.create`처럼 프로토타입을 정해줄 수 있다. 반환값은 새로운 객체.

```javascript
Object.setPrototypeOf(Bird, Animal)
```

`Bird`의 프로토타입을 `Animal`로 설정함.









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



## 객체 인스턴스 생성 방법

1. 생성자 함수 사용

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
> 다른 언어들과 다르게 생성자 함수를 이용해 객체를 생성하기 위해서는 함수 앞에 new만 붙여주면된다. 일반 함수와 구분하기 위해 앞을 대문자로 쓸 뿐
new를 안붙이면 그냥 함수호출이고 new를 붙이면 생성자함수로 호출하는거임.

let Jun = new Person('Jun',20);
```
2. Object 생성자 사용

```javascript
let Jun = new Object();
Jun.name = "Jun";
Jun.age = 20;
```
3. Object.create 메소드 사용

```javascript
let Jun = Object.create(Person);
```
객체 리터럴 방식과 생성자 함수 사용 방식의 차이는 프로토타입임.
객체리터럴의 프로토타입은 Object.prototype
생성자함수의 프로토타입은 생성자함수명.prototype


## 상속

`Person`을 상속받고 `subject`프로퍼티를 가지며, `greeting`메서드를 추가한 `Teacher`클래스

```javascript
function Teacher(subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype)
// 메소드 상속
```
위 메소드 상속으로 인해 `Teacher.prototype.constructor`가 `Person()`이 됨.

이를 막기위해 아래 코드를 명시해줌.
```javascript
Teacher.prototype.constructor = Teacher; 
```

메소드를 추가하기 위해
```javascript
Teacher.prototype.greeting = function() {}
```

생성자간 상속도 가능함. 아래 코드는 `Bio`생성자를 상속받는 `People`생성자
```javascript
People.prototype = new Bio();
let marine = new People();

// 변수 marine은 People, Bio의 프로퍼티 및 메소드 사용가능
```


객체 생성 방법

객체 리터럴 {}
생성자 함수 new Object()
인스턴스 생성 방법 : new

this는 인스턴스를 가리킴

this와 연결된 프로퍼티나 메서드는 public (외부에서 참조가능), 생성자 함수 내에서 선언된 변수는 private (외부에서 참조X)

키 이름에 -가 있으면 따옴표로 묶어줘야함

키에 표현식 쓰려면 []사용

delete 키워드로 객체나 프로퍼티 제거가능

for in으로 키 순환가능 (배열에선 사용X, 순서가 없는 객체를 위해 사용하는거임)

배열은 for of로 순환하자

객체 비구조화 할당 {키1, 키2, ..} = 객체명
이건 변수 키1, 키2.. 에 각자 할당됨
각 키는 객체의 키이름과 동일해야함
키이름 변경가능 예를들어 키1을 키하나로 변경하고싶다면
{키1 : 키하나}로 하면됨.


객체메서드 선언시 화살표함수사용X
ES6 축약 메서드 표현 : 함수명() { ~}