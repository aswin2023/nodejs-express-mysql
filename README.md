# nodejs-express-mysql

npm init
npm install express mysql cors --save
npm install nodemon -D
npm i dotenv -D

# Create MySQL table
CREATE TABLE IF NOT EXISTS `tutorials` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

 