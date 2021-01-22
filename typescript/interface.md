# 인터페이스
> 객체의 구조를 정의하기 위해 사용함. 해당 객체와 `인터페이스`를 비교하여 자료형의 일치여부를 판단함.
```ts
interface playerType {
    position : string
    age : number
}

const player1 : playerType = {position: 'mid', age: 21}
```

# 선택적 프로퍼티
> 원래 `인터페이스`에서 정의한 프로퍼티들은 반드시 구현되어야한다. 만약 구현되지 않으면 에러가 발생함. 하지만 프로퍼티의 이름 뒤에 `?`를 추가하면 있어도 되고 없어도 되는 `선택적 프로퍼티`가 된다.
```ts
interface playerType {
    position : string
    age : number
    champion? : string
}

const player1 : playerType = {position: 'mid', age: 21, champion: 'Zedd'}
const player2 : playerType = {position: 'top', age: 25}
```

# 읽기전용 프로퍼티
> 프로퍼티 앞에 `readonly` 키워드를 추가하면 바꿀 수 없는 `읽기전용 프로퍼티`가 된다.
```ts
interface playerType {
    readonly position : string
    age : number
    champion? : string
}

const player1 : playerType = {position: 'mid', age: 21, champion: 'Zedd'}
const player2 : playerType = {position: 'top', age: 25}

player2.position = 'sup' // 에러가 발생함
```

# 함수 타입
> `인터페이스`에 `(매개변수 : 타입) : 함수 반환타입` 을 정의한다.
```ts
interface funcType {
    (position : string, age : number) : boolean
}

const can_I_victory : funcType = function can_I_victory(pos, age) {
    return true
}
```