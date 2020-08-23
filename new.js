const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.set('view engine','pug')


app.use(bodyParser.urlencoded({extended:false}))
app.get('/', function(req,res){
    res.sendFile('Registration.html', {root:__dirname})
    });

var mysqlConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'web2020'
    });

    mysqlConnection.connect(function(err){
        if(err)throw err;
        console.log('DB connection succeded');
        
    })

app.post('/submit',function(req ,res){
    let variab = req.body;
    console.log(req.body);

    var sql = "insert into user values('"+ variab.email + "','"+ variab.name + "','"+ variab.password + "')";
    mysqlConnection.query(sql , function(err){
        if (err) throw err
        res.render('Registration',{title:'Data saved',
        message:'Data saved successfully.'}) 
        });
        mysqlConnection.end();
        
    })


app.listen(port,() => console.log('App listening on port 3000'))   
