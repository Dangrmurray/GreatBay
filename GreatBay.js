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

var NewIName = input.name;
var category = input.category;
var startBid = input.startBid;
var currBid = input.currBid;
var highBid = input.highBid;


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

<<<<<<< HEAD


=======
function createProduct() {
  console.log("Adding new item...");
  connection.query("INSERT INTO auction SET ?",
    {
      item: itemName,
      category: category,
      starting_bid: startBid,
      current_bid: currBid,
      highest_bid: highBid
    },
    function(err, res) {
      console.log(res.affectedRows + " item added!\n");
    }
  );
}
>>>>>>> 1b3a5a3b1298beec3647e815637fe150e9a41377

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
