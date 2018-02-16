var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "greatbayDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});


function updateAuction(){
	console.log("Updating Auction...\n");
	var query = connection.query(
		"UPDATE auction SET ? WHERE ?",
		[
			{

			},
			{

			},
		],
		function(err, res){
			console.log(res.affectedRows + "Items updated!\n");

		}
		);
}