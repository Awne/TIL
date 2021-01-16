## Modules

### export

```javascript
export { name1, name2, ..., nameN };
export { variable1 as name1, variable2 as name2, ..., nameN };
export let name1, name2, ..., nameN; // 또는 var
export let name1 = ..., name2 = ..., ..., nameN; // 또는 var, const
 
export expression;
export dafault expression;
export default function (...) { ... } // 또는 class, function*
export default function name1(...) { ... } // 또는 class, function*
export { name1 as default, ... };
 
export * from ...;
export { name1, name2, ..., nameN } from ...;
export { import1 as name1, import2 as name2, ..., nameN } from ...;
```

1. 참고로 `export default`는 한 모듈에 하나만 존재하며 객체, 함수, 클래스 등에 사용될 수 있음.
2. `export default`를 사용한 컴포넌트는 임의의 이름으로 `import`가능.

### import

```javascript
import name from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1, member2 } from "module-name";
import { member1, member2 as alias2, [...] } from "module-name";
import defaultMember, { member [, [...]] } from "module-name";
import defaultMember, * as alias from "module-name";
import defaultMember from "module-name";
import "module-name";
```

## Proxy

프록시는 한마디로 Add-on 그 자체임.

아래 코드는 일반 객체에 프록시를 적용한 것임. 프록시의 핸들러는 13개의 기능을 제공하고 있다고 하는데, 현재 코드는 `set` 과 `get`만 사용해본다.
```javascript
const myObj = {
    name : "Yul",
}

const proxy = new Proxy(myObj, {
    get : function(target, property, receiver) {
        console.log("You called name property.");
        return target[property]
    },

    set : function(target, property, value) {
        console.log("You changed name property");
        target[property] = value;
    }
});
```
1. `target`은 `Proxy`의 첫 번째 인자인 `myObj`가 된다.
2. `propert`는 `name`등의 프로퍼티값.
3. 변수는 `myObj`에, 함수는 `proxy`에 있다는걸 인지.