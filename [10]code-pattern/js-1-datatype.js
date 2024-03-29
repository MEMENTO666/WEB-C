/*

! 딱딱한 내용이므로 재미없음 -> 더욱 정확한 명세를 강의하기 위한 정보이므로
! 간단하게 읽어보는 것으로 대신 할 것

* '타입' 이란 자바스크립트 엔진, 개발자 모두에게 어떤 값을 다른 값과 분별할 수 있는, 고유한 내부 특성의 집합이다. 다시말해, 기계(엔진)와 사람(개발자)이 42(숫자)란 값을 "42"(문자열)란 값과 다르게 취급한다면, 두 값은 타입(즉, 숫자와 문자열)이 서로 다르다. 42는 수학 연산 같이 계산을 하려는 의도지만 "42"는 필경 페이지에 출력할 문자열 비슷한 것으로 쓸 의도로 만든 값이다. 

* 어쨌든 이 두 값은 상이한 타입을 가지고 있다.

* 42를 문자열로 보고 위치 1에서 "2"라는 문자를 추출하려면, 먼저 숫자 42 -> 문자열 "42"로 변경(강제변환) 해야 한다.

? 자바스크립트에는 다음 7가지 내장 타입이 있다.

* null
* undefined
* boolean
* number
* string
* object "참조 타입 reference type"
* symbol (ES6버전에 도입)

! typeof null === "object"; // true 이것은 버그이다.
! null 을 반환하는 것이 정상이다. (하지만 null 이란 값은 나타나지 않는다.)

* var a = null;
* (!a && typeof a === "object") // true
? !은 not 변환으로 null이 '아니거나' && 논리합 and 연산자 object 이거나 

* typeof [1,2,3] === "object"; // true
* 배열은 그저 객체이다. 배열(키가 문자열인 객체와 반대로) 숫자 인덱스를 가지며, length 프로퍼티가 자동으로 관리되는 등 추가 특성을 지닌, 객체의 '하위 타입'이라 할 수 있다.

*/

/*

Todo : 값은타입을 가진다.

* 값에는 타입이 있지만, 변수엔 타입이란 없다. 변수는 언제라도, 어떤 형태의 값이라도 가질 수 있다. 

* 자바스크립트는 '타입 강제 Type Enforcement'를 하지 않는다. 변수값이 처음에 할당된 값과 동일한 타입일 필요는 없다. 문자열을 넣었다가 나중에 숫자를 넣어도 상관없다.

* 변수에 typeof 연산자를 대어보는 건 "이 변수의 타입은 무엇이니?"라는 질문과 같지만, 실은 타입이란 개념은 변수에 없으므로 정확히는 "이 변수에 들어있는 값의 타입은 무엇이니?" 라고 묻는 것이다.

*/

/* 

 * 자바스크립트에는 7가지 내장 타입(null, undefined, boolean, number, string, object, symbol)이 있으며, typeof 연산자로 타입명을 알아낸다.
 * 변수는 타입이 없지만 값은 타입이 있고, 타입은 값의 내재된 특성을 정의한다.
 * "undefined"와 "undeclared"가 대충 같다고 보는 개발자들이 많은데, 자바스크립트 엔진은 둘을 전혀 다르게 취급한다. undefined는 선언된 변수에 할당할 수 있는 값이지만, undeclared는 변수 자체가 선언된 적이 없음을 나타낸다.
 * 불행히도 자바스크립트는 이 두 용어를 대충 섞어버려, 에러 메시지("ReferenceError: a is not defined")뿐만 아니라 typeof 반환 값도 모두 "undefined"로 뭉뚱그린다.
 * 그래도 (에러를 내지 않는) typeof 안전 가드 덕분에 선언되지 않은 변수에 사용하면 제법 쓸 만하다. 

*/