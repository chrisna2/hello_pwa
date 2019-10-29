//서비스 워커

//install 이벤트
self.addEventListener('install', function(event){
    console.log('[서비스워커] 서비스 워커 설치 완료 ....', event);
    /*
    static assets 설치 시도
    ---------------------------------------------------
    1] Pre-caching 수행
    2] 모든 파일이 성공적으로 캐시되면 서비스 워커는 설치됨
    3] 파일 다운로드 및 캐시가 실패하면 설치 단계가 실패하고 활성화되지 않음
    4] 실패시 다음에 다시 시도하고 설치가 이루어지면 캐시완료
    */
   //pre-caching
   event.waitUntil(
       caches.open('static')
       .then(function(caches){
           console.log("[서비스워커] App shall 프리캐싱 완료...");
           caches.addAll(['/js/app.js','/css/main.css','/index.html']);
        })
    );    
});
    
//activate 이벤트
self.addEventListener('activate', function(event){
    console.log('[서비스워커] 활성화 됨');
    return self.clients.claim();
});

// fetch 이벤트
self.addEventListener('fetch', function(event){
    console.log('[서비스워커] 패치 데이터', event);
})