let express = require('express');
let db = require('./sql.js');

let app = express();
let port = 3000;

app.use(express.static(__dirname));     // 정적 파일 제공!

app.get('/', (req, res) => {                 // 로그인 페이지 라우트!
  res.sendFile(__dirname + '/login.html');
});

app.post('/main', (req, res) => {            // 메인 페이지 라우트!
  res.sendFile(__dirname + '/main.html');
});

app.listen(port)