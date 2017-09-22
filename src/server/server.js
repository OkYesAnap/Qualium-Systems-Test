const http = require('http');
const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "qualium_db"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("SQL Connected!");
});

server = http.createServer();

server.on("request", (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  ////////////////////////////////////////////////////////////
  if (request.url === '/model' && request.method === 'POST') {
    response.writeHead(200, { "content-type": "application/json" });
    request.on('data', function (data) {
      body = JSON.parse(data);
      console.log("ghbdtn");
        let req = `SELECT * FROM car_manufacturer ma JOIN car_model mo ON(mo.manufacturer_id = ma.id) WHERE ma.manufacturer="${body.manufacturer}"`;
        console.log(req);
        con.query(req, function (err, result, fields) {
          if (err) throw err;
          response.end(JSON.stringify(result));
        })
      });
  }
  ////////////////////////////////////////////////////////////
  
  if (request.url === '/manufacture' && request.method === 'GET') {
    response.writeHead(200, { "content-type": "application/json" });
    con.query(`SELECT * FROM car_manufacturer`
    , function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    })
  }
  ////////////////////////////////////////////////////////////
  
  if (request.url === '/allmodels' && request.method === 'GET') {
    response.writeHead(200, { "content-type": "application/json" });
    con.query(`SELECT * FROM car_model`
    , function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    })
  }
  //////////////////////////////////////////////////////////////
  if (request.url === '/carowners' && request.method === 'GET') {
    response.writeHead(200, { "content-type": "application/json" });
    con.query(`SELECT us.name, ma.manufacturer, mo.model 
    FROM car_model mo 
    JOIN car_manufacturer ma ON (mo.manufacturer_id = ma.id) 
    JOIN owner_to_car otc ON (mo.id = otc.car_id) 
    JOIN users us ON (otc.owner_id = us.id);`
    , function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    })
  }
  /////////////////////////////////////////////////////////////
  if (request.url === '/users' && request.method === 'GET') {
    response.writeHead(200, { "content-type": "application/json" });
    con.query(`SELECT * FROM users;`
    , function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    })
  }
  /////////////////////FIRST ADDING DATAТАBLES//////////////////
  else if (request.url == '/addtables' && request.method === 'POST') {
    response.writeHead(200, { "content-type": "application/json" });
    con.query("CREATE TABLE `users` (`id` INT NOT NULL AUTO_INCREMENT, `name` CHAR(50) NOT NULL, `pass` CHAR(50) NOT NULL, PRIMARY KEY(`id`));", function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    });
    con.query("CREATE TABLE `car_manufacturer` (`id` INT NOT NULL AUTO_INCREMENT, `manufacturer` CHAR(50) NOT NULL, PRIMARY KEY(`id`));", function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    });
    con.query("CREATE TABLE `car_model` (`id` INT NOT NULL AUTO_INCREMENT, `model` CHAR(50) NOT NULL,  `manufacturer_id` INT, PRIMARY KEY(`id`));", function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    });
    con.query("CREATE TABLE `owner_to_car` (`id` INT NOT NULL AUTO_INCREMENT, `owner_id` INT NOT NULL,  `car_id` INT NOT NULL, PRIMARY KEY(`id`));", function (err, result, fields) {
      if (err) throw err;
      response.end(JSON.stringify(result));
    });
  }
  ///////////////////////INSERTING WALUES/////////////////////////

  else if (request.method == 'POST' && request.url == '/adddata') {
    response.writeHead(200, { 'content-type': 'application/json' });
    var body = '';
    request.on('data', function (data) {
      body = JSON.parse(data);
      body.forEach((val) => {
        let req = `INSERT INTO ${val.table_name} (`;
        delete (val.table_name);
        for (let key in val) {
          req += key + ',';
        }
        req = req.slice(0, -1) + ') VALUES ('
        for (let key in val) {
          req += `"${val[key]}",`;
        }
        req = req.slice(0, -1) + ');';
        console.log(req);
        con.query(req, function (err, result, fields) {
          if (err) throw err;
        })
      });
    });
    request.on('end', () => console.log("All operations OK!!!"))
    response.end(JSON.stringify("OK"));
  }

});

server.listen(3001, () => console.log('SERVER ONLINE!!!'));