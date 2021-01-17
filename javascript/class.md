## Class

생성자 함수를 `class` 키워드를 사용해 가독성을 높일 수 있다.

아래 코드는 `name`인자를 받는 생성자 함수임.
```javascript
function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요");
}

const h = new Health("Jun");
h.showHealth();
```

아래 코드는 `class`키워드를 사용해 모든 요소를 한곳에 넣음.
```javascript
class Health {
    constructor(name) {
        this.name = name;
    }

    showHealth() {
        console.log(this.name + "님 안녕하세요.");
    }
}

const h = new Health("Jun");
h.showHealth();
```






 클래스와 상속  

```javascript
// ES5에선 prototype을 이용해서 상속받았음.
function Lair() {}
function Hive() {}

Lair.prototype = {
    location  : function () {
        console.log(Math.random()*10);
    }   
    //함수의 prototype 프로퍼티에 메소드 생성
}

Hive.prototype = new Lair();
var multi0 = new Lair();
var multi1 = new Hive();
var multi2 = new Hive();


//ES6에서는 클래스 사용함
class Lair_ {
    location() {
        console.log(Math.random()*10);
    }
    //메소드는 클래스 안에서 정의함.
}
class Hive_ extends Lair_ {} // 편해짐 :)
let multi3 = new Hive_();
let multi4 = new Hive_();
let multi5 = new Lair_();

// 클래스엔 constructor 메소드가 있음. - 인스턴스가 만들어질때마다 발동 (멀티할때마다)
//인자를 받아서 인자를 처리하는 역할을 함.
class Lair_2 {
    constructor(timing) {
        this.timing = timing;
    }
}


//프로퍼티, 메소드 기본적인거
class CommandCenter {   // 클래스에 관한 내용을 호출하려면 인스턴스 있어야함.
                        //클래스 안에는 생성자와 메소드만 들어올수있음.
    getMana() {        
        return 0;
    }
}

CommandCenter.HP = 1500;    // 클래스에 프로퍼티 삽입
console.log(CommandCenter.HP);

let ter_mul1 = new CommandCenter();  // 메소드는 인스턴스에서만 호출가능
console.log(ter_mul1.getMana());

//getter setter

let Protoss = {
    one : "Probe",
    two : "Zelot",
    three : "Dragoon",
    four : "Archon",
    get six() {             //six메소드를 정의함, 바로 호출하면 this.one을 반환
        return this.one
    },
    set six(unitName) {     //six 메소드에 값을 주고 호출하면 그 값이 this.one으로 들어간 뒤 호출됨.
        this.one = unitName
    } ,
    doubleShoutThisOne () {
        console.log (this.one, this.one)
    }
}

console.log(Protoss.six);   //get 발동
console.log(Protoss.one)
Protoss.six = "Arbiter";    // set 발동
console.log(Protoss.six);
console.log(Protoss.one);
Protoss.doubleShoutThisOne();

//super
class Tax {
    constructor (income) {
        this.income = income
        console.log(`Your income per a year is ${this.income}`)
    }
    calculateTax() {
        console.log("Your basic tax is " + this.income*0.1)
    }
}

class YourTax extends Tax {
    constructor (income, years) {
        super(income);  // Tax의 생성자에서 income처리과정을 복사
        this.years = years;
        console.log("You've been here " + this.years + " years");
    }
    calculateYourTax() {
        super.calculateTax();   // Tax의 메소드를 그대로 복사
        console.log("Your additional tax is " + this.income*0.08)    
    }
}

let tax1 = new Tax(50000000);
tax1.calculateTax();

let tax2 = new YourTax(50000000, 27);
tax2.calculateYourTax();
```




## 클래스

ES6, 간단한 인스턴스 생성, 상속

### 클래스를 통한 인스턴스 생성

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {}
}

let Jun = new Person("Jun", 20);
```

### 클래스를 통한 상속

`super`키워드를 통해 `Person`에서 정의한 프로퍼티 및 메소드를 모두 받아온다.

```javascript
class Teacher extends Person {
    constructor(subject) {
        super(name, age);
        this.subject = subject;
    }
}