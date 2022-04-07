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

app.get('/signup', (req, res) => {         // 회원가입 페이지 라우트!
  res.sendFile(__dirname + '/signUp.html');
});

app.post('/main', (req, res) => {    // 메인 페이지 라우트!
  db.query('SELECT * FROM feed', function(err,feedData) {
    pbMain = html.pbMain(feedData);
    res.send(html.main(pbMain,feedData));
  })
});

app.post('/main/commentClick', (req,res) => {
  db.query('select * from feed', function(err,feedData) {
    db.query('select * from comment', function(err,comment) {
      let a = req.body;
      commentBundle = [];
      commentIdBundle = [];
      for(let i = 0 ; i < comment.length ; i++) {
        if(comment[i].feed_id == a.feed_id) {
          commentBundle.push(comment[i].commentContent);
          commentIdBundle.push(comment[i].id);
        }
      }

      data = {
        img_path: feedData[a.feed_id].img_path,
        postContent: feedData[a.feed_id].postContent,
        like: feedData[a.feed_id].like,
        comments: commentBundle,
        commentsId: commentIdBundle,
      }
      res.json(data);
    })
  })
})

app.post('/main/inputClick', (req,res) => {
  let a = req.body;
  db.query(`insert into comment (feed_id, commentContent, user_id) VALUES (${a.feed_id}, '${a.value}', 'jeli01@naver.com')`, function(err,comment) {
    if(err) {
      console.log(err);
    }

    data = {
      id : comment.insertId,
    }
    res.json(data);
 
  })
})

app.post('/main/remove', (req,res) => {
  let a = req.body;
  db.query(`delete from comment where id = ${a.id}`, function(err,comment) { // 데이터 삭제 sql문 짜는중!
    if(err) {
      console.log(err);
    }
    res.end();
  })
})

app.listen(port)