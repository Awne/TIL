```java
package Wallet; 

public class Wallet { 
    static int money = 0; 
    
    public void saveMoney(int money) { 
        this.money += money; 
        System.out.printf("현재 적립금은 %d원 입니다.\n", this.money); 
    } 
}
```
```java
package Wallet; 

public class Main { 
    public static void main(String[] args) { 
    Wallet first = new Wallet(); 
    Wallet second = new Wallet(); 
    
    first.saveMoney(5000); 
    second.saveMoney(100000); 
    } 
}
```
1. **money** 변수에 static 이 없다고 가정했을때, **first** 계좌에는 5000, second 계좌에는 10000원이 있어야함.

2. 하지만 money를 **static** 변수로 선언했다면 이 변수는 **모든 인스턴스들이 공유하는 변수**가됨.

3. 즉, first 계좌에서 5000원이 적립되고, second 계좌에서 10000원을 추가해서 105000원이 적립됨.