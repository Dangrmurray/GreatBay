DROP DATABASE IF EXISTS greatbayDB;

CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE auction (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  catergory VARCHAR(45) NOT NULL,
  starting_bid DECIMAL(100,2)
  current_bid DECIMAL(100,2)
  highest_bid DECIMAL(100,2)

  PRIMARY KEY (id)
);

INSERT INTO auction (item, catergory, starting_bid, current_bid, highest_bid)
VALUES ("sweater", "clothing", 45.50);

INSERT INTO auction (item, catergory, starting_bid, current_bid, highest_bid)
VALUES ("morotcycle", "automotive" 4399.00);

INSERT INTO auction (item, catergory, starting_bid, current_bid, highest_bid)
VALUES ("iphone", "technology" 890.99);
