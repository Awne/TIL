예외처리를 하지않으면 프로그램 도는중 에러발생시 프로그램이멈춤

기본 : try - except
except 에러명 도 가능
except 에러명 as e는 해당에러명을 except구문에서 e로 사용한다는말
에러명 자리에 Exception을 넣으면 발생하는 모든 에러명을 할당받음
else구문은 자스의 finally

raise Exception('경고메시지')는 임의의에러를발생시킴
except구문에서 raise 쓰면 try의 raise Exception(~)를 다시실행시킴

에러객체
Exception을 상속받는 클래스 만듦
생성자에서 부모킐래스의 생성자호출하게함
이걸쓸땐 raise 에러객체명 으로 쓰면됨
아니면 클래스는 pass로 비우고 raise 객체명(메시지) 해도됨
