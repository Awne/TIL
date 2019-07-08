#개발환경
Chrome - Vue Devtool
VScode
Node.js

##VSCode 익스텐션
Vetur
Material Icon, Night Owl
Live Server
ESLint, Prettier
Auto Rename/Close Tag

##Vue.js 소개
###MVVM패턴
View - ViewModel - Model - ViewModel - View

View : HTML - DOM : 이벤트 발생시킴 ( 키입력, 버튼클릭등)
ViewModel : Vue - DOM Listener : 이벤트를 Model에 있는 data를 변화시킴.
Model : Javascript Data : 이벤트 리스너가 들은 이벤트를 전달받아 데이터 변환되고 이 데이터를 다시 Vue로 전달
ViewModel :  Vue - Data Binding : 바뀐 데이터를 View에 전달
View : 전달받은 데이터를 화면에 출력

### Reactivity
일반적 웹개바른 변수 출력 후 데이터를 바꾸면 또 그 데이터를 넣어야함.
이런걸 방지해주는게 reactivity(반응성)이다. 예를들면 
```javascript
Object.defineproperty(
    obj,
    'str', 
    {
        get: function(){
             console.log(~)
        }, 
        set: function(newValue){
            div.innerHTML = newValue
        }
    }
)
```
값 할당시 그 값을 바로 출력해줌. 이게 대표적인 리액티비티 예시
1차 - init함수에 이거 다 넣고 호출까지
2차 - 호출부까지 모두 익명 즉시실행함수에 넣음
이게 로직을 라이브러리로 만드는 과정임

### 인스턴스
꼭 있어야됨, new Vue()로 선언 - 인스턴스를 변수에 넣고 콘솔에서 확인해보면 구조를 알 수 있음.
el을 정해야 해당 태그를 Vue의 인스턴스(루트컴포) 인식함.
Vue의 생성자 함수를 인스턴스로 사용하는 구조임. 
정의는 생성자 함수에서 하고 쓸때는 인스턴스를 통해 여러군데서 사용이 가능하게 하는것,
그리고 이 인스턴스의 인자는 option이라고 생각하면됨. 이 옵션은 객체형태

### 컴포넌트
영역별로구분지어개발 - 재사용성 증가
Vue.component(컴포이름, 컴포옵션) 으로 전역컴포 생성 - 실무에서는 잘 안씀
인스턴스 내 components  : {컴포명 : 컴포옵션}으로 로컬컴포 생성 - 추적이 쉬움 - 해당 루트컴포 내에서만 사용가능(보통 루트가 하나이므로 이걸 더 사용)

###컴포넌트 통신
상위 -> 하위 : 프롭스
**v-bind:프롭스명=상위컴포명** - 프롭스는 하위컴포에있음
상자준비해뒀으니 주기만하면 받겠다는 의미

하위 -> 상위 : 이벤트
**v-on:click="passEvent"** 가 있다고 가정함. 
passEvent는 같은컴포 methods에 있어야함. 
이 메서드의 내용은 **this.$emit('pass')** 라고 가정

즉, 이거 클릭 - passEvent를 호출 - 이 메서드는 pass를 emit함. 이걸 상위컴포가 받음. 받기위해선 v-on:pass="logText"가 있다고 가정

이 logText는 그 상위 컴포에 잇는 메서드이며 이 함수를 결국 실행시킴. - 그냥 이벤트 설계 자체가 상위로 데이터교환을 하기위해 만들어진듯 
클릭시 메서드호출 -> 메서드는 이벤트 방출 -> 방출된 이벤트를 상위컴포가 **v-on:이벤트="메서드"** 를 통해 메서드 실행.

참고로 특이한점은 data안에 들어간 내용들은 다 결국 밖으로 빠져나와 this로 바로 접근이 된다.
이벤트발생시킬때 인자 더 추가해서 여러가지 데이터도 전달가능 (payload 속성에서 확인가능) 그리고 이 데이터는 메서드인자로 받아서 사용가능

이벤트 -> 프롭스 활용을 통해 같은레벨 컴포넌트 통신가능

###뷰라우터
SPA나 페이지간 이동에 사용되는 라이브러리
npm이나 cdn으로 설치 후 사용함. 라이브러리니까
뷰 라우터도 VueRouter 인스턴스로 생성하고 변수에 넣은 뒤 Vue인스턴스 옵션에 router : 변수명으로 연결시킴
라우터 인스턴스 옵션으로 routes가 배열의형태로 정의됨. 어떤url에 어떤 정보를 담을지 정의
배열 요소들은 객체이며 페이지 개수만큼 객체필요 객체내용은 
```javascript
path: '/login', component: LoginComponent (로긴컴포는 미리 생성되어있다고 가정)
```
--> 이것의 의미는 /login 주소로 들어갓을때 LoginComponent를 보여주겠다는 의미
라우터를 사용중이면 **router-view** 태그를 사용할 수있음. - 라우터 뷰가 path에 따라 달라지는 component로 대체됨.
**router-link** 태그도 사용할 수 있는데 **to="/login"** 속성을 주면 해당 링크 클릭시 /login패스로 이동. (a href와 같음)
참고로 라우터 인스턴스에 **mode:'history'**를 추가하면 주소에 # 없앨수있음.

###액시오스
AJAX = 원래 웹에서 view에잇는 ㄷㅔ이터를 바꿀때 서버를 갔다와서 데이터를 바꾸고 페이지를 다시 랜더링해야헤했음 근데 이건 그 부분만 바꿈(라우터 생각)
자바스크립트 비동기처리패턴변화 : 콜백 -> 프로미스 -> async await
사용법예시- 액시오스설치후(npm이나cdn) axios.get(url).then~catch 그냥 http모듈 중 하나라고 생각하면 된다, 이 코드는 데이터 가져와서 작업한다는 의미임.
브라우저가 서버에 HTTP요청 - URL보냄, 서버는 브라우저에 HTTP응답 - 데이터(JSON)받음(데이터는 DB뒤져서 찾음)

###템플릿문법
**데이터바인딩** : data 안에 있는건 {{~}}로 호출가능 (데이터가 연결되서 출력됨)
**디렉티브** : v-가 달려잇는 속성을 의미함. 긴 코드를 이렇게 짧게 해서 사용하는것임.
**computed** : 계산된 속성임.
만약 data>num : 10일때 num*2의 값을 가지는 doubledNum을 가지고 싶다면 data가 아닌 computed속성에 함수로 선언한다.
```javascript
computed : {
    doubledNum : function() {
         return num*2 
        }
}
```
만약 id값을 data > num으로 만들고 싶다면 >> v-bind를 이용한다 --> **v-bind:id="num"**

**v-if="bool값을갖는데이터" + v-else** 도 사용가능, 
**v-show="bool데이터"** 에서 bool이 false라면 display:none이 적용되어 보이진 않지만 DOM엔 있음.

**input v-model="num"** 의 의미 --> input에 입력하는 값은 data>num이 된다는 의미이다.
**v-on:이벤트="메서드"** -> 이벤트 발생시 메서드 실행
참고로 **v-on:keyup.enter=~** 에서 **.enter**는 이벤트 모디파이어라고 하며 엔터키에만 적용시키는 예시임.

**watch** 속성은 특정 데이터가 바뀔때 특정 메서드를 실행하는 속성임. 즉 watch>num : function(){~} 라면 data>num이 변할때마다 해당 메서드가 실행됨.

**computed** : 캐싱해놓음 (동작저장?) 그래서 자주 연산할때 사용하면 좋음.
**methods** : 실행될때마다 매번 재 랜더링함. 
**watch** : 데이터 호출같은 시간걸리는 비동기 작업에 적합.
웬만하면 **computed** 사용추천

###vue-cli
npm으로 설치
2버전 : vue init 템플릿유형 프로젝트명 : vue init webpack-simple my-project
3버전 : vue create 프로젝트명 : **vue create my-project**
npm run 스크립트정의명령
vue확장자 파일(싱글파일 컴포넌트)의 구성 : scf --> template (템플릿의 내용이 그대로 들어감), script (methods, data 등), style(CSS)
그냥 script는 new Vue의 옵션들 중 템플릿만 뺀거라고 생각하면됨

###싱글파일컴포넌트
template 내엔 루트(div태그)는 하나여야됨, data는 함수형식으로 사용
파일명은 두단어 파스칼케이스 조합 추천 : 이유는 만약 main.vue로 만들었따했을때 App.vue의 템플릿에서 사용할때 main태그로 불러야하는데 이건 HTML표준태그와 겹침
참고로 위 경우 다른 파일 컴포넌트를 가져오므로 script단에서 import하고 components 에 추가해줘야함.

###사용자입력폼
```html
<form>
    <label for='username'>id: </label>
    <input id='username' type='text'>
</form>
```
label이 무엇을위한 레이블인지 for로 id를 가리킴
data에 username선언하고 input태그에 v-model로 username이어주기
버튼타입을 submit으로 만들고 form이 submit이벤트를 받으면 메서드를 실행하도록함. (v-on:submit)
그 메서드는 인자로 이벤트 객체(e)를 받고, e.preventDefault() 를 추가해 기본동작인 새로고침을 막아줌. (근데 이건 전통적JS에서 사용하는것)
from의 디렉티브인 v-on:submit에 이벤트 모디파이어 .prevent를 추가해줘도 동일한 결과 얻음
npm i axios --> import axios from 'axios' 하고 데이터보내기위해 axios.post(url, data).then~catch~