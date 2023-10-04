const express = require("express");
const dotenv = require("dotenv")
dotenv.config()

const ejs = require("ejs");


const app = express();


app.set('view engine', 'ejs');



// const { Pool } = require("pg");
// const dotenv = require("dotenv");
// dotenv.config();
 
// const connectDb = async () => {
//     try {
//         const client = new Client({
//             user: process.env.PGUSER,
//             host: process.env.PGHOST,
//             database: process.env.PGDATABASE,
//             password: process.env.PGPASSWORD,
//             port: process.env.PGPORT
//         })
 
//         await client.connect()
//         const res = await client.query('SELECT * FROM some_table')
//         console.log(res)
//         await client.end()
//     } catch (error) {
//         console.log(error)
//     }
// }
// connectDb()


app.get("/data",function(req,res){

    // client.query("Aja ko data lyaune sub-query",(err,resToday)=>{
    //     client.query("Hijo ko data lyaune sub-query",(err,resYesterday)=>{
    //         client.query("Asti ko data lyaune sub-query",(err,resDayBeforeYestereday)=>{
        
    //                 res.render("Table", {Table1:resToday, Table2:resYesterday, Table3:resDayBeforeYestereday})
    //         })
    //     })
    // })


    res.render("Table");

  });


   app.listen(3000, function(){
     console.log("listening on 3000");
   });