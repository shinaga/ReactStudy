const express = require('express')//모듈 추가

const app = express()//서버 생성

app.get('/page/:id', (request, response)=> {
    //변수를 선언한다.
    const id = request.params.id;
    response.send(`<h1>${id} Page</h1>`);
});

app.listen(52273,()=>{//서버 실행
    console.log('Server running at http://127.0.0.1:52273')
})