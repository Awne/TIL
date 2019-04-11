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