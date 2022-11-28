const mysql=require('mysql')

function openConnection(){
    const connection = mysql.createConnection({
       host :"localhost",
       port:3306,
       user:'root',
       password:'root',
       database:'blog_db'
     })
     connection.connect()
     
      return connection
  }
  module.exports={
    openConnection,
  }