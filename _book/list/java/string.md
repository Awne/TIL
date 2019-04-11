## StringBuffer, StringBuilder
```java
package test; 

public class Hello { 
    public static void main(String[] args) { 
        String str = "JAVA"; 
        str = str+ "_8"; 
        
        StringBuffer sb = new StringBuffer("JAVA"); 
        sb.append("_8"); 

        StringBuilder sbuild = new StringBuilder("JAVA");
        sbuild.append("_8"); 
    } 
}
```
1. 기존에 있던 문자열 **str**에 문자열을 추가하면 해당 메모리에 데이터가 추가되는것이 아니라 새로운 주소에 모두 합쳐진 데이터가 할당된다. 

2. 그리고 기존 메모리 공간은 GC가 수거해간다. 사실 매우 비효율적이다.

3. 이럴때 **StringBuffer, StringBuilder** 를 사용하면 그 자리에서 데이터를 추가할 수 있다.

## StringBuffer
```java
StringBuffer sb = new StringBuffer("JAVA"); 
sb.append("_8");
```
**StringBuffer**는 **동기적**으로 작동하기때문에 순차적으로 값이 들어오므로 **데이터 안정성이 높다**.

##StringBuilder
```java
StringBuilder sbuild = new StringBuilder("JAVA"); 
sbuild.append("_8");
```
1. **StringBuilder**는 **비동기적**으로 작동하기에 **속도가 빠르지만** **안정성이 떨어지는 단점**이 있다.

2. 물론 둘의 차이는 체감되는 정도가 아니지만, 최근엔 속도가 중요하기에 StringBuilder를 사용하는 추세임.

##ArrayList
```java
package test; 

import java.util.ArrayList; 

public class Hello { 
    public static void main(String[] args) { 
        ArrayList<String> list = new ArrayList<String>(); 
        
        list.add("Hello"); 
        list.add("JAVA"); 
        list.add("World"); 
        System.out.println(list); 
        
        list.add(1, "Welcome"); 
        System.out.println(list); 
        
        list.set(2, "Kotlin"); 
        System.out.println(list); 
        
        String newLanguage = list.get(2); 
        System.out.println(newLanguage); 
        
        list.remove(1); 
        System.out.println(list); 
    } 
}
```
1. **ArrayList**는 사이즈를 표기하지 않기에 크기가 유동적이다. 

2. 그리고 **인덱스를 통해** 원하는 위치에 값을 **추가, 변경, 추출, 제거**를 할 수 있다.

##HashMap
```java
package test; 

import java.util.HashMap; 

public class Hello { 
    public static void main(String[] args) { 
        HashMap<Integer, String> map = new HashMap<Integer, String >(); 
        
        map.put(5, "Hello"); 
        map.put(6, "JAVA"); 
        map.put(7, "World"); 
        System.out.println(map); 
        
        map.put(6, "Kotlin"); 
        System.out.println(map); 
        
        String lang = map.get(6); 
        System.out.println(lang); 
    } 
}
```
**HashMap**은 **키-값 쌍을 가진 데이터의 집합**이다.