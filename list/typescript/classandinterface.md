함수 생성
```typescript
function greeter(person : string) {
    return "Hello, " + person;
}

let user = "Jane User";
```
interface 추가
```typescript
document.body.innerHTML = greeter(user);
interface Person {
    firstName : string;
    lastName : string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " "+ person.lastName;
}

let user = { firstName : "Jane", lastName : "User" };

document.body.innerHTML = greeter(user);
```
>타입 양식을 interface 로 선언하여 만들어놓을 수 있음 (템플릿 역할) 

class 추가
```typescript
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M. ", "User");

document.body.innerHTML = greeter(user);
```
> class로 객체생성, 그아래 constructor함수의 인자는 객체의 인자를 받음.
생성자함수의 내용은 인자 종합해서 반환 내용 class 와 interface는 환상의 듀오임

HTML에서 스크립트 불러옴
```html
<script src = "greeter.js></script>
```