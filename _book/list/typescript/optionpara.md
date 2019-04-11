```typescript
// 인자 옆에 ?를 추가하면 필수 인자가 아닌 옵션 인자. (꼭 값을 주지 않아도 됨.)
function test (name : string, age : number, introduce? : string) : string {
   if (introduce) {
       return `My name is ${name} and I am ${age} years old and ${introduce}.`
   } else {
       return `My name is ${name} and I am ${age} years old.`
   }
}
```
