## 클라이언트와 브라우저의 관계
브라우저를 통해 클라이언트의 기능을 수행

## api 
서버의 메뉴판
서버의 리소스를 클라이언트에서 사용할 수 있도록 마련해 둔 인터페이스
없는 걸 요청하면 404 에러

서버와 클라이언트 간 하나의 약속

## HTTP
서버와 클라이언트에서 교환하는 규칙, 양식
ex) 발주서

## AJAX
Asynchronous JavaScript
and XML (파일 형식) 

- XMLHTTPRequest (가독성 down) 
- fetch API -> promise return (callback 지옥 방지, 가독성 up)
- JQurey

정적 렌더링(화면 깜빡임) vs 동적 렌더링(seamless)

## 메소드 체이닝
객체를 연결고리로 함수를 지속적으로 호출
객체를 return하는 메소드에 바로 메소드를 또 붙여주는 방법

// EXAMPLE 
string.filter(el => el !== "").filter(el => el === 'a')
각 filter 메소드는 return을 통해 다음 메소드에게 데이터를 넘겨주고 있다.

