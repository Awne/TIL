 프로미스 

```javascript
// 프로미스는 비동기 처리를 위해 등장
// 콜백함수는 대기열에 들어갔다가 모든 명령이 처리된 후 실행됨.

function form (tier) {
    return new Promise (
        function (resolve, reject) {
            if (tier === "challenger") {
                resolve (console.log("You can join this league."))  //함수처리에 성공했다면 resolve 함수실행
            } else {
                reject (console.log("Sorry, you can't join with us.")) // 실패했다면 reject 함수실행
            }
        }
    )
}

let myTier = "gold"
form(myTier)
.then(()=>console.log("Nice!")) // resolve 실행시 then 실행
.catch(()=>console.log("Fuck")) // reject 실행시 catch 실행

console.log("Hmm..")

let yourTier = "challenger"
form(yourTier)
Promise.all([form])
.then(console.log("What is it?"))

//출력결과 살펴보면 gold reject - Hmm - challenger resolve - challenger then - gold catch
// 우선 1함수 결과출력 - 일반텍스트출력 - 2함수 결과출력 - 2then은 all메소드를 통해 병렬처리되어서 빠르게 출력 - 콜백은마지막에출력 
```