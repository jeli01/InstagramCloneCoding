let express = require('express');
let html = require('./mainTemplate.js')
let db = require('./sql.js');
let bodyParser = require('body-parser')

let app = express();
let port = 3000;

app.use(express.static(__dirname));     // 정적 파일 제공!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {         // 로그인 페이지 라우트!
  res.sendFile(__dirname + '/login.html');
});

app.post('/main', (req, res) => {    // 메인 페이지 라우트!
  db.query('SELECT * FROM feed', function(err,feedData) {
    pbMain = html.pbMain(feedData);
    res.send(html.main(pbMain,feedData));
  })
});

app.post('/main/test', (req,res) => {
  let a = req.body;
  console.log(a);
  data = {
    id : 'jeli01',
    password : '1234',
  }
  res.json(data);
})



app.listen(port)