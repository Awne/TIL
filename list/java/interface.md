## 인터페이스
```java
package inter; 

public interface interfaceA { 
    public void funcA(); 
}
```
```java
package inter; 

public interface interfaceB { 
    public void funcB(); 
}
```
인터페이스는 내용의 프로토타입만 나타내지, 정의는 구현 클래스에서 한다.

설명서에 하는 방법은 나와있는데 용어의 의미는 다른곳에서 찾는것을 생각하면 된다.

참고로 여기 있는 메소드들은 구현되지 않았다고 해서 **추상메소드**라고 한다.

```java
package inter; 

public class interfaceOperator implements interfaceA, interfaceB { 
    public interfaceOperator() { 
        System.out.println("Constructor is operating."); 
    } 
    
    public void funcA() { 
        System.out.println("funcA was called"); 
    } public void funcB() { 
        System.out.println("funcB was called"); 
    } 
}
```
위 코드는 인터페이스를 구현하는 코드이다. 상속은 하나의 클래스만 가능하지만 **여러개의 인터페이스를 구현할 수 있다.**

인터페이스 구현체의 생성자를 정의하고 인터페이스에서 볼 수 있던 메서드의 내용을 포함하고 있다.

```java
package inter; 

public class Main { 
    public static void main(String[] args) { 
        interfaceA inta = new interfaceOperator(); 
        interfaceB intb = new interfaceOperator(); 
        
        inta.funcA(); 
        intb.funcB(); 
    } 
}
```
메인함수에서 인터페이스의 인스턴스를 선언했다.
**인터페이스명 인스턴스명 = new 구현체** 순으로 작성하여 선언함.

## 람다식
```java
package inter; 

public class Main { 
    public static void main(String[] args) { 
        interfaceA inta = (int a, int b) -> {System.out.println("Hi")}; 
    } 
}
```
인터페이스 구현체에서 메서드 내용을 정의하지 않고 메인함수에서 화살표를 이용해 정의하는 것을 **람다식**이라고 한다.

