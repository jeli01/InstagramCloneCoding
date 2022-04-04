CREATE TABLE `user`(
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO user (id, name, nickname, password) VALUES ('jeli01@naver.com','송재민','songjaemin178','111111');

CREATE TABLE `feed`(
  `id` int NOT NULL AUTO_INCREMENT,
  `img_path` VARCHAR(255) NOT NULL,
  `postContent` VARCHAR(255) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO feed (img_path, postContent, user_id) VALUES ('./image/examplePicture2.png','하하 날씨가 좋군요', 'jeli01@naver.com');
INSERT INTO feed (img_path, postContent, user_id) VALUES ('./image/landscape1.jpg','데이터베이스 어렵다ㅜㅜ', 'jeli01@naver.com');
INSERT INTO feed (img_path, postContent, user_id) VALUES ('./image/landscape2.jpg','발표준비도 해야된다...', 'jeli01@naver.com');
INSERT INTO feed (img_path, postContent, user_id) VALUES ('./image/landscape3.jpg','강의는 언제듣지? ㅜㅜ', 'jeli01@naver.com');

CREATE TABLE `comment`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `feed_id` int(11) NOT NULL,
  `commentContent` VARCHAR(255) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES user(id),
  FOREIGN KEY (`feed_id`) REFERENCES feed(id),
  PRIMARY KEY (`id`)
);

INSERT INTO comment (feed_id, commentContent, user_id) VALUES ( 1, '사람 이미진데 날씨?', 'jeli01@naver.com');
INSERT INTO comment (feed_id, commentContent, user_id) VALUES (2, '하면 되지', 'jeli01@naver.com');
INSERT INTO comment (feed_id, commentContent, user_id) VALUES (2, 'ㅇㅇ; 하면 되는거아니냐', 'jeli01@naver.com');
INSERT INTO comment (feed_id, commentContent, user_id) VALUES (3, 'ㅅㄱ ㅋㅋㅋ', 'jeli01@naver.com');