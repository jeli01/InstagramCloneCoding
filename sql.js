let mysql = require('mysql');
let db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1111',
  database : 'instagramCloneCoding'
});
db.connect();
module.exports = db;