```typescript
// 인터페이스를 이용해 타입 만들기

interface entireForm {  // 전체 양식을 인터페이스로 정의해둠.
    name : string,
    age : number,
    career : string,
    tel : number,
    comment? : string
}

class googleForm {  // 구글폼에 전체 양식을 업로드할 수 있음.
    constructor (public form : entireForm){} 
    //생성자 인자는 원래 접근할 수 없지만 아래에서 사용할것이므로 public 사용
}

let firstResume : entireForm = {    // 첫번째 이력서는 전체 양식을 따랐음.
    name : "Junseong Park",
    age : 27,
    career : "Apple, Yahoo",
    tel : 123-1234
}

let passedResume = new googleForm(firstResume)  // 합격 이력서는 구글폼에 올렸던 첫번째 이력서임.
console.log(`A passed resume is ${passedResume.form.name}'s `) // 합격 이력서에서 이름을 추출해 발표함.

// 추상클래스로도 사용가능 (여러 클래스의 부모가 되는 가상 클래스 역할)

interface Tax { 
    // 인터페이스 생성 : 실행되는 부분없이 선언부만 있는 클래스라고 생각하면 됨 (그냥 있다고 말하고 그 기능은 정의하지않음.)
    calc (money : number) : number
}

class Employees {   // 부모가될 클래스
    constructor () {
        console.log("I'm an employee")
    }
    
}

class Senior extends Employees implements Tax { // 인터페이스와 클래스를 모두 상속받는 클래스
    
    calc (money : number) : number  {
        console.log("I'm a senior developer")
        return money * 0.05
    }
}

class Junior implements Tax {   // 인터페이스만 상속받는 클래스
    
    calc (money : number ) : number {
        console.log("I'm a junior developer")
        return money * 0.03
    }
}

let p1 = new Senior
let money1 = 40000000
console.log(p1.calc(money1))

let p2 = new Junior
let money2 = 30000000
console.log(p2.calc(money2))
```