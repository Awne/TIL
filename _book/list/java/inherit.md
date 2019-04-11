## 상속
```java
package inherit; 

public class parent { 
    public parent() { 
        System.out.println("constructor of parent"); 
    } 
    
    public void sayOh() {
         System.out.println("Oh"); 
    } 
    private void sayNo() { 
        System.out.println("No"); 
    }
}
```
1. 부모 클래스를 먼저 정의함. parent 클래스의 생성자를 추가했으며 2개의 메소드를 추가함.

2. 참고로, **sayNo** 메서드는 **private**로 선언되어있기에 자식 클래스가 상속받아 사용할 수 없음.

##오버라이드
```java
package inherit; 

public class child extends parent{ 
    public child() { 
        System.out.println("constructor of child"); 
    } 
    
    public void sayOh() { 
        System.out.println("OHHHHHHHHHHHHHHH");
    } 
}
```
1. 자식 클래스는 **extends** 키워드를 통해 parent 클래스를 상속받았음.

2. 기존에 parent 클래스에 있던 **sayOh** 메서드를 자식 클래스에서 다시 정의했으며 이를 **오버라이딩**이라고 함.

3. 이때 child 클래스는 오버라이딩한 **sayOh** 메서드를 사용하게 된다.

```java
package inherit; 

public class Main { 
    public static void main(String[] args) {
        parent first = new child(); 
        parent second = new secondchild(); 
        
        parent[] arr = new parent[2]; 
        arr[0] = first; 
        arr[1] = second; 
    } 
}
```
1. **first**와 **second**는 모두 **parent** **자료형**이기에 배열로 만들 수 있다. 

2. 위 코드의 의미는 **parent 자료형**인 **first 인스턴스**를 만들며 이는 **child 생성자**를 사용한다는 것이다.

3. 두 번째 코드는 모두 같지만 **secondchild 생성자**를 사용하는 것이다.

 
## Object 클래스, this, super
1. 모든 클래스의 조상 클래스는 **Object** 클래스이므로 모든 클래스가 이 클래스를 상속한다.
2. **this**는 **지금 속한 클래스**를, **super**는 **지금 속한 클래스의 부모 클래스**를 가리킨다.

##내부클래스
```java
OuterClass.InnerClass ic = new OuterClass.InnerClass();
```
내부 클래스는 클래스 안에 클래스가 있는 것이다.

## 익명 클래스
```java
AnonymousClass sampleClass = new AnonymousClass(); 
new AnonymousClass();
```
1. 보통 첫번째 줄처럼 클래스의 인스턴스를 생성한다. 두 번째 줄은 **익명 클래스** 선언방법이다.

2. 자료형과 인스턴스의 이름이 없음을 알 수 있다. 보통 메서드 오버라이딩 후 바로 접근하여 사용할때 사용된다. (아래 코드 참고)

```java
new parent(){ 
    public void sayHo() { 
        System.out.println("Override"); 
    }.sayHo();
```
익명 클래스는 인터페이스와 추상 클래스와 자주 사용된다.