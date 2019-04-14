```javascript
response.writeHead(200);
response.end("Finished");
```
1. 200은 정상적인 완료를 의미함 이외에도, 리다이렉션(302), 실패(404) 등이 있음.
2. 정상적으로 완료되면 브라우저에 Finished 를 출력함.