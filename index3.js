const express = require('express')//모듈 추가

const app = express()//서버 생성

app.get('*', (request, response)=> {
    
    response.status(404)
    response.set('methodA','ABCDE')
    response.set({
        'methodB1':'FGHIJ',
        'methodB2':'KLMNO'
    });
    response.send('내 마음대로 본문을 입력합니다.')
});

app.listen(52273,()=>{//서버 실행
    console.log('Server running at http://127.0.0.1:52273')
})