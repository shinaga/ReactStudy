const express = require('express')//모듈을 추출합니다.

const app = express()//서버 생성

app.get('/name/:name/*',(request,response)=>{
    console.log(request.params.name)
    response.send(request.query)
})

app.listen(52273,()=>{//서버 실행   
    console.log('Server running at http://127.0.0.1:52273')
})