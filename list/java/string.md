```java
package abs; 

public abstract class addonClass { 
    public abstract void funcABS(); 
}
```
**abstract** 키워드를 이용해 추상 클래스를 생성한다. 

1. 추상 클래스는 **추상 메서드를 가질 수 있다는 점**을 제외하면 일반 클래스와 다를게 없다.

2. **추상 메서드**를 던져주면 **자식 클래스에서 정의**하는 형식임.

3. 참고로 **super(a,b)**처럼 **super**키워드를 사용하면 자식 클래스에서 입력받고 부모 클래스로 값을 전송할 수 있음.
```java
package abs; 

public class originClass extends addonClass { 
    public void funcABS() { 
        System.out.println("Hello"); 
    } 
}
```
부모 클래스에서 받은 추상 메서드를 **자식 클래스에서 반드시 구현**해야한다.

```java
package abs; 

public class main { 
    public static void main(String[] args) { 
        addonClass test = new originClass(); 
        test.funcABS(); 
    } 
}
```
1. 추상클래스는 대분류에 속하지만, **인스턴스의 형태가 가지각색일때 사용해야한다.**

2. Animal 클래스의 자식 클래스인 Dog, Bird, Shark 등은 속성과 메소드가 워낙 다양하므로 **Animal 클래스는 추상 클래스**로 정의되어야 한다.

3. A기업의 지역별 체인점의 정책이 가지각색이라면 **A기업의 클래스는 추상 클래스**여야 한다.