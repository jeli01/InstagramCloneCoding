//index.js
const express = require('express') //③번 단계에서 다운받았던 express 모듈을 가져온다.
const app = express() //가져온 express 모듈의 function을 이용해서 새로운 express 앱을 만든다. 🔥
const port = 3000 //포트는 4000번 해도되고, 5000번 해도 된다. -> 이번엔 5000번 포트를 백 서버로 두겠다.

app.use(express.static(__dirname));

app.get('/', (req, res) => { //express 앱(app)을 넣고, root directory에 오면, 
  res.sendFile(__dirname + '/login.html'); //"Hello World!" 를 출력되게 해준다.
});

app.post('/main', (req, res) => {
  res.sendFile(__dirname + '/main.html');
});

app.listen(port) //포트 3000번에서 이 앱을 실행한다.