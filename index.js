const express = require('express')//모듈 추가

const app = express()//서버 생성

app.use((request, response)=> {
    
    response.send(`<h1>Hello World</h1>`);
});

app.listen(52273,()=>{//서버 실행
    console.log('Server running at http://127.0.0.1:52273')
})