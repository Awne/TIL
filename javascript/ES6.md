비구조화 할당
```javascript
// 객체 깰땐 변수에 { }쓰고 배열 깰땐 [ ] 써준다.


function ldg () {
    return {
        name : "Dong-gun Lee",
        age : 27,
        location : "Busan"
    };
}
// 갓디지의 정보를 객체로 묶어 반환하는 함수

let { name, age, location } = ldg();
// 전역변수 name, age, location 에 함수 반환값을 차례로 담는모습

console.log (name, age, location);
//출력


console.log(`LDG says : "My name is ${name}, ${age}years old and I live in ${location}`);
// 백틱에 리터럴 템플릿까지 사용

//만약 location 대신 city를 사용하고 싶다면
let { name_, age_, location : city} = ldg();
console.log(name, age, city);
// 왼쪽 변수는 그냥 임의로 선언하는게 아니라 객체를 부셔서 안의 내용들을 구해주는것임.
// 그래서 객체 안 내용들과 이름이 같아야함. 그래서 city로 바로 사용하면 undefined 소환.
// location : city를 통해 location 을 city로 사용한다고 알려야함.


//벙커 구성원 살펴보기
let bunker = ["marine", "firebat", "ghost", "medic"];
let [first, second, third, fourth] = bunker;
console.log(first, second, third, fourth);
```

 
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
 


 태그드 템플릿 

```javascript
function introduce (stringP, name, age, location) { // stringP는 백틱 내 변수 외 스트링들을 배열로 모아놓음.
    console.log(stringP);
    return `My name is ${name}, I am ${age} years old and I live in ${location}`    
}

let bjs = introduce(" ","Junseong", 27, "Busan");
console.log(bjs);

let name_ = "ldg";
let age_ = 28;
let location_ = "Seo-Dong";

let ldg = introduce` Hmm${name_}${age_}${location_}`
console.log(ldg);

// func (a,b,c) 대신 func`${a1}${a2}${a3}` 로 사용하는듯.
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

 

 
 프로미스 

```javascript
// 프로미스는 비동기 처리를 위해 등장
// 콜백함수는 대기열에 들어갔다가 모든 명령이 처리된 후 실행됨.

function form (tier) {
    return new Promise (
        function (resolve, reject) {
            if (tier === "challenger") {
                resolve (console.log("You can join this league."))  //함수처리에 성공했다면 resolve 함수실행
            } else {
                reject (console.log("Sorry, you can't join with us.")) // 실패했다면 reject 함수실행
            }
        }
    )
}

let myTier = "gold"
form(myTier)
.then(()=>console.log("Nice!")) // resolve 실행시 then 실행
.catch(()=>console.log("Fuck")) // reject 실행시 catch 실행

console.log("Hmm..")

let yourTier = "challenger"
form(yourTier)
Promise.all([form])
.then(console.log("What is it?"))

//출력결과 살펴보면 gold reject - Hmm - challenger resolve - challenger then - gold catch
// 우선 1함수 결과출력 - 일반텍스트출력 - 2함수 결과출력 - 2then은 all메소드를 통해 병렬처리되어서 빠르게 출력 - 콜백은마지막에출력 
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
 

 
 this 

```javascript
function test (arg) {
    this.arg = arg;
    function testin() {
        console.log(this.arg)
        console.log(arg);
    }
}

let one = test("Zz");
console.log(one);

// 함수 내부에 있는 함수의 this는 전역객체인 window를 가리킴
// 메소드에서 사용되는 this는 해당 메소드를 가진 object를 가리킴.

let bjs = {
    name : "Junseong",
    introduce : function(age, location) {
        return `I'm ${this.name}. I'm ${age} years old and I live in ${location}`
    }
}

let ldg = {
    name : "Dong-gun"
}

let khy = {
    name : "Hye-yul"
}
let js_int = bjs.introduce(27, "Busan");
console.log(js_int);

let dg_int = bjs.introduce.call(ldg,25,"Seo-dong");
console.log(dg_int);

let hy_int = bjs.introduce.apply(khy, [24,"Yang-san"]);
console.log(hy_int);

// bjs에 있는 메소드를 다른 애들이 쓸수있음. call이랑 apply인데,
// 둘다 첫 인자는 적용할 객체이름, 이후는 call은 나열, apply는 배열로 정리한다는 차이.

```
 
