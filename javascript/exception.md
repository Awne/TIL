## Error instance

인자가 조건에 맞지 않을 경우 에러 발생시킴


아래 코드는 `@`가 포함되지 않는 경우 에러를 발생시킴.
```javascript
const err = new Error("invalid email");

function validateEmail(email) {
    return email.match(/@/) ? email : err;
}
```
아래 코드에서 `message` 속성은 에러에 대한 설명을 나타낸다.
```javascript
const myMail = "bboyoung01@gmail.com";
const validateMyMail = validateEmail(myMail);

if(validateMyMail instanceof Error) {
    console.error(`Error : ${validateMyMail.message}`);
} else {
    console.log(`Valid Email : ${validateMyMail}`);
}
```

## try-catch 구문

`try`블록에서 상황을 시도하고 그 상황에서 에러 발생시 `catch`블록을 실행함.

`finally`블록은 에러와 상관없이 항상 실행된다.

아래코드에서 `validateEmail`함수는 `@`가 포함된 문자열인지 검사함.

`try`구문의 첫 줄에서 `validateEmail`함수는 `email.match(/@/)`를 판단해야함

하지만 정규표현식인 `match`메소드는 문자열에만 사용가능하기에 `try`블록은 첫 줄부터 에러를 발생시킴.
```javascript
const wiredMail = null;

try {
    const validateMyMail = validateEmail(wiredMail);
    if(validateMyMail instanceof Error) {
        console.error(`Error : ${validateMyMail.message}`);
    } else {
        console.log(`Valid email : ${validateMyMail}`);
    }
} catch {
    console.error(`Error : ${err.message}`);
} finally {
    console.log(`이 검사는 ${new Date()}에 실행됨.`);
}
```

## throw

`throw`키워드를 사용하면 고의적으로 에러를 발생시킬 수 있음.

`throw`가 호출되면 `return`처럼 함수의 실행을 멈추게 됨.

```javascript
function billPay (myCash, Price) {
    if (myCash < Price) {
        throw new Error ("Insufficient funds");
    }
    return "You buy it";
}

console.log(billPay(30000, 45000));
```

## 호출 스택

호출 스택을 활용하면 복잡한 함수의 에러 발생 위치를 알 수 있음.

아래 코드의 동작은 다음과 같음.
1. `a` 함수는 `b` 함수를 호출함.
2. `b` 함수는 `c` 함수를 호출함.
3. `c` 함수는 에러를 발생시킴.
4. `d` 함수는 `c` 함수를 호출함.
```javascript
function a() {
    console.log("a : calling b");
    b();
    console.log("a done");
}

function b() {
    console.log("b : Calling c");
    c();
    console.log("b done");
}

function c() {
    console.log("c : throwing error");
    throw new Error ("c error");
    console.log("c done");
}

function d() {
    console.log("d : calling c");
    c();
    console.log("d done");
}
```
아래 코드는 에러 발생 위치를 확인하기 위해 호출 스택을 보여줌.

`catch`는 인자로 잡길 원하는 에러를 설정해줄 수 있음.
```javascript
try {
    a();
} catch(err) {
    console.log(err.stack);
}
```
에러 스택의 출력 순서는 다음과 같음.
1. 최초로 에러가 발생한 `c`
2. `c`를 호출한 `b`
3. `b`를 호출한 `a`
4. `a`를 호출한 `try`블록

```javascript
try {
    d();
} catch(err) {
    console.log(err.stack);
}
```
에러 스택의 출력 순서는 다음과 같음.
1. 최초로 에러가 발생한 `c`
2. `c`를 호출한 `d`
3. `d`를 호출한 `try`블록