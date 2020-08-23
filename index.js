const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web2020'
});


mysqlConnection.connect(function(err){
    if(err)throw err;
    console.log('DB connection succeded');
    mysqlConnection.query("INSERT into user(username,password,email)values('ddsfs','1234','dssd@gmail.com')")
    if(err)throw err;
    console.log("1 entry added")
})
