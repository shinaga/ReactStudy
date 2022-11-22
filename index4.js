const express = require('express')//모듈을 추출합니다.
const fs = require('fs')

const app = express()//서버 생성

app.get('/image',(request,response)=>{
    fs.readFile('hearthstone.png',(error,data)=>{
        //이미지 파일을 제공합니다.
        response.type('image/png')
        response.send(data)
    })
})

app.get('/audio',(request,response)=>{
    fs.readFile('audio.mp3',(error,data)=>{
        //음악 파일을 제공합니다.
        response.type('audio/mpeg')
        response.send(data)
    })
})

app.listen(52273,()=>{//서버 실행
    console.log('Server running at http://127.0.0.1:52273')
})