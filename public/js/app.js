// 서비스 워커 등록
// 브라우저가 서비스 워커를 지원하는 확인
if ('serviceWorker' in navigator){
    // 서비스 워커 등록
    navigator.serviceWorker.register('/sw.js')
                           .then(function(){
                                //call back 이 실행
                                console.log("서비스 워커 등록 완료....")
                                //메인 쓰레드와 별도에 쓰레드가 백그라운드에서 동작 가능해 진다.
                                //요즘은 싱글 쓰레드가 대세

                            }); // promise 방식

    /*
        자바 스크립트의 문화적 차이
        ---------------0----------
        1. 모든 코드를 비동기로 처리한다. -> 쓰레드가 1개 밖에 없기 때문
            1) 콜백 방식 => 콜백 지옥 발생
            2) 프로미스 방식 (현재 주로 사용하는 방식)
            3) async ~ await => 2017년 이후 비동기 코드인데 동기코드처럼 됨 : 자바랑 비슷해짐
        (다른 언어는 동기 방식으로 처리함 : 멀티 스레드)

        깃 연동
    */

}

//동기식 문화 : var result = function(); if(result != data) function(); else function2();
//비동기식 문화 
fetch('http://httpbin.org/ip')
    .then(function(response){
        console.log('응답....')
        return response.json();
    })
    .then(function(json){
        console.log(json);
    })
    .catch(function(error){
        console.log('에러....', error);
    });

console.log('종료....');

