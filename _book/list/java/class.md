## 클래스, setter, getter
```java
package Score;

public class Student {
    private String name;
    public int score;
    
    public Student(String name, int score){ 
        this.name = name; 
        this.score = score; 
    }
    
    public void getinfo() { 
        System.out.printf("%s 학생의 점수는 %d점 입니다.\n", name, score); 
    } 
    
    public String getName() { 
        return name; 
    } 
    
    public void setName(String name) { 
        this.name = name; 
    }	
}
```
위 코드는 Student 클래스를 정의한 코드입니다.

1. 외부에서 접근할 수 없는 String 변수인 **name과** 어디서든 접근할 수 있는 int 변수인 **score를** 가지고 있습니다.

2. 생성자를 통해 이 클래스는 name과 score를 인자로 받아 클래스 내부에서 사용합니다.

3. **getinfo** 메서드를 호출하면 학생의 이름과 점수가 출력됩니다.

4. name 변수는 외부에서 직접 접근할 수 없지만, **setName과** **getName** 메서드를 통해 값을 변경할 수 있고 반환받을 수도 있습니다.

```java
package Score; 

public class Main { 
    public static void main(String[] args) { 
        Student st1 = new Student("Jun", 90); 
        Student st2 = new Student("Yul", 100); 
        
        st1.getinfo(); 
        st2.getinfo(); 
        
        st1.name = "JJ"; //여긴 private라 변경불가 
        st1.score = 100; 
        
        st1.setName("JJJ"); 
        
        System.out.println(st1.getName()); 
    } 
}
```
메인함수를 살펴보겠습니다.

1. Student 클래스의 st1 인스턴스는 "Jun" 이라는 이름과 90이라는 점수를 가지고 있습니다.

2. st2 인스턴스는 "Yul" 이라는 이름과 100이라는 점수를 가지고 있습니다.

3. 이후 **getinfo** 메서드를 호출하여 정보를 얻었습니다.

4. name 변수는 **private**변수이기때문에 st1.name 처럼 직접 접근할 수 없습니다.

5. 이때 **setName**, **getName** 메서드를 통해 값을 설정하고 출력할 수 있습니다.