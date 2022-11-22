//모듈을 추출합니다.
const express = require('express')
const morgan= require('morgan')
const bodyParser = require('body-parser')
 
//서버를 생성합니다.
const app = express();
app.use(express.static('public'));// public이 상위 경로에 있어야함 즉, 이 파일이 public 밑에 있어야함, 그렇지 않으면 화면이 안나옴
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: false}))

//request 이벤트 리스너를 설정합니다.
app.get('/',(request,response)=>{
    //HTML 형식의 문자열을 생성합니다.
    let output = '';
    output += '<from method="post">'
    output +=    '<input type="text" name="a"/>'
    output +=    '<input type="text" name="b"/>'
    output +=    '<input type="submit"/>'
    output += '</from>'
    
    response.send(output)
})

app.post('/',(request,response)=>{
  
    response.send(request.body)
})

//서버를 실행합니다.
app.listen(52273,()=>{
    console.log('Server running at http://127.0.0.1:52273')
})