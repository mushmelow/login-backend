create database chat_box;

use chat_box;

CREATE TABLE user (
  user_id INT AUTO_INCREMENT,
  email VARCHAR(80) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE INDEX (username),
  UNIQUE INDEX (email)
);
