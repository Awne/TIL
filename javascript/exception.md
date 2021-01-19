# Error instance
> 에러 객체의 인스턴스를 사용하여 원할 때 에러를 출력할 수 있습니다.
```javascript
function checkMail(mail) {
	const error = new Error('Wrong mail.')
	const validate = mail.match(/@/)
	return validate ? mail : error
}

const myMail = 'junseongpark.dev@gmail.com'
const ans = checkMail(myMail)

if (ans instanceof Error) {
	console.log('Please retry.')
} else {
	console.log('OK')
}
```
> 참고로 에러 객체가 조건식에 올 경우 `false`가 아닌 `true`를 반환합니다.
# try-catch-finally
> 작업을 시도 블록, 에러 발생 시 처리할 블록, 항상 처리할 블록을 정의합니다.
```javascript
function checkMail(mail) {
	const validate = mail.match(/@/)
	return validate ? true : false
}

try {
	let login = false
	const myMail = 'junseongpark.dev@gmail.com'
	const ans = checkMail(myMail)
	if (ans) {
		login = true
		console.log(`You entered : ${myMail}`)
		console.log('LOGIN : OK')
	} else {
		throw 'Invalid mail'
	}
} catch {
	console.error('Error occured')
} finally {
	console.log(`You try to login <${new Date()}>`)
}
```
## throw
`throw`는 원하는 상황에서 예외를 발생시키고 싶을 때 사용할 수 있습니다.

`throw`의 대상은 `에러객체` 뿐만이 아니라 모든 데이터 형식이 올 수 있습니다.