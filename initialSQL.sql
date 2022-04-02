CREATE TABLE `feed`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_path` VARCHAR(255) NOT NULL,
  `postContent` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO feed (img_path, postContent) VALUES ('./image/examplePicture2.png','하하 날씨가 좋군요');
INSERT INTO feed (img_path, postContent) VALUES ('./image/landscape1.jpg','데이터베이스 어렵다ㅜㅜ');
INSERT INTO feed (img_path, postContent) VALUES ('./image/landscape2.jpg','발표준비도 해야된다...');
INSERT INTO feed (img_path, postContent) VALUES ('./image/landscape3.jpg','강의는 언제듣지? ㅜㅜ');

CREATE TABLE `comment`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `feed_id` int(11) NOT NULL,
  `commentContent` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO comment (feed_id, commentContent) VALUES (1,'사람 이미진데 날씨?');
INSERT INTO comment (feed_id, commentContent) VALUES (2,'하면 되지');
INSERT INTO comment (feed_id, commentContent) VALUES (2,'ㅇㅇ; 하면 되는거아니냐');
INSERT INTO comment (feed_id, commentContent) VALUES (3,'ㅅㄱ ㅋㅋㅋ');

-- 참고하라구!