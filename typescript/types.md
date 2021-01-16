```typescript
//booelan
let isDone : boolean = false;

//number
let decimal : number = 6;

//string
let color : string = "blue";
color = "red";

// template literal
let fullName : string = "Junseong Park";
let age : number = 27;
let sentence : string = `Hello, my name is ${fullName}.
I'll be ${age+1} years old next year.`;

//array
let list : number[] = [1,2,3,4];
let list : Array<number> = [1,2,3,4];

//tuple : 타입과 요소의 수가 고정된 배열.
let tuple : [string, number];
tuple = ["hello", 10];

//enum
enum Color {Red, Green, Blue}
let c : Color = Color.Green;
let colorName : string = Color[2];

enum Color2 {Red=1, Green=2, Blue=7}
let c2 : Color2 = Color2.Green;

//any : 아무거나 올 수 있음. 존재하지 않는 메소드 호출가능.
let notSure : any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();

//Object : 아무거나 올 수 있음. 존재하는 메소드 호출가능.
let prettySure : Object = 4;

//any[]
let anyArr : any[] = [1,true,"free"];

//void : 함수에 사용하면 리턴값이 없는거임. 변수에는 안씀.
function warnUser () : void {
    console.log("This is my warning message.");
}

//never : 예외처리, 무한루프, 반환값 없는 함수에 사용.
function error (message : string) : never {
    throw new Error(message);
}

function fail() {
    return error("이건 error 자체가 never 타입을 가지고 있음");
}

function infiniteLoop () : never {
    while (true) { }
}

//object : 객체
declare function create (o : object | null) : void;
create( {prop : 0} );
create(null);
let someValue : any = "This is a string";

//아래 세 줄의 값은 모두 같음.
let strLength : number = (<string>someValue).length;
let strLength2 : number = (someValue as string).length;
let strLength3 : number = someValue.length;
```