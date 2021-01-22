# 숫자
> 값 앞에 특정 값을 추가하면 원하는 진법으로 사용할 수 있다.
```ts
const binary = 0b1111;
const oct = 0o123;
const hex = 0xFC19
```
```
15 83 64537
```
# 배열
> 배열 타입은 두 가지 방법으로 정의할 수 있다.

아래는 두 가지의 숫자 배열을 정의하는 방법이다.
```ts
const numArr : number[] = [2,3,4,5,6]
const numArr_2 : Array<number> = [1,2,3,4,5]
```

# 튜플
> 튜플은 각 요소별 자료형과 요소의 개수가 정해져있을 때 사용한다.
```ts
const myProfile : [string, number, string] = ["Jun", 28, "unemployed"]
```

# enum
> 임의의 집합을 의미하며 집합에 원하는 이름을 붙여주기 위해 사용.
```ts
enum Color {
    Red, Green = 5, Blue
}

const myColor : Color = Color.Blue
const yourColor : string = Color[5]

console.log(myColor, yourColor)
```
```
6 Green
```
> `Green`의 인덱스를 5로 설정한 경우 `Blue`의 인덱스는 6이 된다.
# any
> 정확한 타입을 알지 못할때 사용한다. 타입에서 자유롭던 기존 자바스크립트에서 사용하던 방식이기도 함.

> `Object` 자료형은 `Object` 자료형의 메서드만 사용 가능한 반면, `any` 자료형은 모든 메서드를 사용할 수 있다.
```ts
const myProfile : any[] = ["Jun", 28]
```

# void
> 어떤 타입도 존재할 수 없음을 나타내며 `any`와 정 반대의 성격을 가진다.

> 주로 반환값 없는 함수의 자료형을 나타낼때 사용
```ts
function greeting() : void {
    console.log("Hello World!!");
}
```
# null, undefined
> 모든 타입의 하위 타입으로, 다른 자료형을 가진 변수에 값으로 들어갈 수있음.
```ts
const a : number = null
const b : string = undefined
```
> `--strictNullChecks` 사용 시 자신들의 타입에만 할당가능하다. 
> >`undeinfed`는 `void`에 할당가능

# never
> 절대 발생할 수 없는 타입을 나타낸다. 주로 에러가 발생하는 함수나 무한루프 함수에서 사용한다.
> 
> 모든 타입에 할당이 가능하지만, 다른 타입을 `never`타입에 할당은 불가능하다.
```ts
function func() : never {
    while(true) {

    }
}
```
```ts
function func_() : never {
    throw new Error('Error occured')
}
```
# object 
> `null`, `string`, `undefined`, `boolean` 등 원시 타입이 아닌 나머지 자료 타입을 의미합니다.

# 타입단언
> 확실하지 않은 데이터타입을 개발자가 확신할 수 있을 때 사용합니다.
1. 데이터 타입을 `<>`로 감싸서 사용할 수 있습니다.
```ts
const lang : string = "Python"
const len : number = (<string>lang).length
```
2. `변수명 as 자료형`을 통해 사용할 수 있습니다.
```ts
const lang : string = "Python"
const len : number = (lang as string).length
```