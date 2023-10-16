const mysql = require('mysql2');
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    databasse:'employeedb'
})

var connection = mysqlConnection.connect((err)=>{
    if(err){
        console.log('Error in DB Connection: '+JSON.stringify(err,undefined,2));
    }else{
        console.log('DB Connected Successfully');
    }
})

module.exports=connection;  