const express = require('express')//모듈을 추출합니다.

const app = express()//서버 생성

app.get('*',(request,response)=>{
    response.status(404)
    response.send('해당 경로에는 아무것도 없습니다.')
})

app.listen(52273,()=>{//서버 실행   
    console.log('Server running at http://127.0.0.1:52273')
})