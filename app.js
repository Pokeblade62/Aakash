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



  // var query = "";
  // db.query(query,(req,res)=>{


  // })

  var res1 = [
    {
      "time": "00-04",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 2,
      "Amount": 50500
    },
    {
      "time": "00-04",
      "bank": "Citizens Bank International Limited",
      "Count": 14,
      "Amount": 942675
    },
    {
      "time": "00-04",
      "bank": "Everest Bank Limited",
      "Count": 21,
      "Amount": 699568
    },
    {
      "time": "00-04",
      "bank": "Garima Bikas Bank Limited",
      "Count": 1,
      "Amount": 100000
    },
    {
      "time": "00-04",
      "bank": "Global IME Bank Limited",
      "Count": 335,
      "Amount": 7472433
    },
    {
      "time": "00-04",
      "bank": "Himalayan Bank Limited",
      "Count": 39,
      "Amount": 1093190
    },
    {
      "time": "00-04",
      "bank": "Jyoti Bikash Bank Ltd",
      "Count": 2,
      "Amount": 62500
    },
    {
      "time": "00-04",
      "bank": "Kumari Bank Limited",
      "Count": 25,
      "Amount": 677865
    },
    {
      "time": "00-04",
      "bank": "Lumbini Bikas Bank Limited",
      "Count": 1,
      "Amount": 4000
    },
    {
      "time": "00-04",
      "bank": "Mahalaxmi Bikas Bank Ltd.",
      "Count": 1,
      "Amount": 200
    },
    {
      "time": "00-04",
      "bank": "Muktinath Bikas Bank Limited",
      "Count": 13,
      "Amount": 532900
    },
    {
      "time": "00-04",
      "bank": "Machhapuchchhre Bank Limited",
      "Count": 8,
      "Amount": 441839
    },
    {
      "time": "00-04",
      "bank": "Nabil Bank Limited",
      "Count": 19,
      "Amount": 624200
    },
    {
      "time": "00-04",
      "bank": "Nepal Bank Limited",
      "Count": 4,
      "Amount": 259000
    },
    {
      "time": "00-04",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 1,
      "Amount": 30000
    },
    {
      "time": "00-04",
      "bank": "NIC Asia Bank Limited",
      "Count": 35,
      "Amount": 1426111
    },
    {
      "time": "00-04",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 8,
      "Amount": 300396
    },
    {
      "time": "00-04",
      "bank": "NMB Bank Limited",
      "Count": 135,
      "Amount": 2270124
    },
    {
      "time": "00-04",
      "bank": "Prabhu Bank Limited",
      "Count": 24,
      "Amount": 834709
    },
    {
      "time": "00-04",
      "bank": "Prime Commercial Bank Limited",
      "Count": 5,
      "Amount": 62966
    },
    {
      "time": "00-04",
      "bank": "Rastriya Banijya Bank Limited",
      "Count": 12,
      "Amount": 145110
    },
    {
      "time": "00-04",
      "bank": "Sanima Bank Ltd.",
      "Count": 10,
      "Amount": 188897
    },
    {
      "time": "00-04",
      "bank": "Standard Chartered Bank Nepal Limited",
      "Count": 17,
      "Amount": 933400
    },
    {
      "time": "00-04",
      "bank": "Shine Resunga Development Bank Ltd.",
      "Count": 1,
      "Amount": 78924
    },
    {
      "time": "00-04",
      "bank": "Siddhartha Bank Limited",
      "Count": 14,
      "Amount": 340018
    },
    {
      "time": "00-04",
      "bank": "Laxmi Sunrise Bank Limited",
      "Count": 20,
      "Amount": 535732
    },
    {
      "time": "00-04",
      "bank": "Nepal SBI Bank Limited",
      "Count": 8,
      "Amount": 144250
    },
    {
      "time": "04-08",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 32,
      "Amount": 357542
    },
    {
      "time": "04-08",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 2,
      "Amount": 35900
    },
    {
      "time": "04-08",
      "bank": "Citizens Bank International Limited",
      "Count": 40,
      "Amount": 1450033
    },
    {
      "time": "04-08",
      "bank": "Everest Bank Limited",
      "Count": 72,
      "Amount": 2363533
    },
    {
      "time": "04-08",
      "bank": "Garima Bikas Bank Limited",
      "Count": 9,
      "Amount": 287547
    },
    {
      "time": "04-08",
      "bank": "Global IME Bank Limited",
      "Count": 874,
      "Amount": 18951445.19
    },
    {
      "time": "04-08",
      "bank": "Guheswori Merchant Banking and Finance Limited",
      "Count": 1,
      "Amount": 10000
    },
    {
      "time": "04-08",
      "bank": "Himalayan Bank Limited",
      "Count": 157,
      "Amount": 3979795
    },
    {
      "time": "04-08",
      "bank": "Jyoti Bikash Bank Ltd",
      "Count": 5,
      "Amount": 136300
    },
    {
      "time": "04-08",
      "bank": "Kamana Sewa Bikas Bank Ltd.",
      "Count": 7,
      "Amount": 111624
    },
    {
      "time": "04-08",
      "bank": "Kumari Bank Limited",
      "Count": 91,
      "Amount": 2179311
    },
    {
      "time": "04-08",
      "bank": "Lumbini Bikas Bank Limited",
      "Count": 1,
      "Amount": 50000
    },
    {
      "time": "04-08",
      "bank": "Manjushree Finance Limited",
      "Count": 1,
      "Amount": 3200
    },
    {
      "time": "04-08",
      "bank": "Mahalaxmi Bikas Bank Ltd.",
      "Count": 2,
      "Amount": 31600
    },
    {
      "time": "04-08",
      "bank": "Muktinath Bikas Bank Limited",
      "Count": 26,
      "Amount": 539660
    },
    {
      "time": "04-08",
      "bank": "Machhapuchchhre Bank Limited",
      "Count": 33,
      "Amount": 490960
    },
    {
      "time": "04-08",
      "bank": "Nabil Bank Limited",
      "Count": 124,
      "Amount": 4016754.5
    },
    {
      "time": "04-08",
      "bank": "Nepal Bank Limited",
      "Count": 49,
      "Amount": 1500406.91
    },
    {
      "time": "04-08",
      "bank": "Nepal Finance Limited",
      "Count": 3,
      "Amount": 248700
    },
    {
      "time": "04-08",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 7,
      "Amount": 84350
    },
    {
      "time": "04-08",
      "bank": "NIC Asia Bank Limited",
      "Count": 142,
      "Amount": 3060326
    },
    {
      "time": "04-08",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 36,
      "Amount": 979185
    },
    {
      "time": "04-08",
      "bank": "NMB Bank Limited",
      "Count": 481,
      "Amount": 8554817
    },
    {
      "time": "04-08",
      "bank": "Prabhu Bank Limited",
      "Count": 60,
      "Amount": 1014031
    },
    {
      "time": "04-08",
      "bank": "Prime Commercial Bank Limited",
      "Count": 22,
      "Amount": 215192
    },
    {
      "time": "04-08",
      "bank": "Progressive Finance Co. Ltd.",
      "Count": 1,
      "Amount": 4250
    },
    {
      "time": "04-08",
      "bank": "Rastriya Banijya Bank Limited",
      "Count": 54,
      "Amount": 897101
    },
    {
      "time": "04-08",
      "bank": "Sanima Bank Ltd.",
      "Count": 50,
      "Amount": 1155882.65
    },
    {
      "time": "04-08",
      "bank": "Standard Chartered Bank Nepal Limited",
      "Count": 57,
      "Amount": 3678795
    },
    {
      "time": "04-08",
      "bank": "Samriddhi Finance Company Ltd.",
      "Count": 1,
      "Amount": 4020
    },
    {
      "time": "04-08",
      "bank": "Shangrila Development Bank Limited",
      "Count": 7,
      "Amount": 190215.36
    },
    {
      "time": "04-08",
      "bank": "Shine Resunga Development Bank Ltd.",
      "Count": 14,
      "Amount": 175920
    },
    {
      "time": "04-08",
      "bank": "Siddhartha Bank Limited",
      "Count": 6,
      "Amount": 104500
    },
    {
      "time": "04-08",
      "bank": "Sindhu Bikash Bank Ltd.",
      "Count": 1,
      "Amount": 50000
    },
    {
      "time": "04-08",
      "bank": "Laxmi Sunrise Bank Limited",
      "Count": 86,
      "Amount": 1716815.14
    },
    {
      "time": "04-08",
      "bank": "Nepal SBI Bank Limited",
      "Count": 28,
      "Amount": 1087096
    },
    {
      "time": "08-10",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 27,
      "Amount": 344212
    },
    {
      "time": "08-10",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 1,
      "Amount": 2800
    },
    {
      "time": "08-10",
      "bank": "Citizens Bank International Limited",
      "Count": 73,
      "Amount": 2050007
    },
    {
      "time": "08-10",
      "bank": "Everest Bank Limited",
      "Count": 124,
      "Amount": 2386733
    },
    {
      "time": "08-10",
      "bank": "Excel Development Bank Ltd.",
      "Count": 1,
      "Amount": 15000
    },
    {
      "time": "08-10",
      "bank": "Garima Bikas Bank Limited",
      "Count": 14,
      "Amount": 154233
    },
    {
      "time": "08-10",
      "bank": "Global IME Bank Limited",
      "Count": 2143,
      "Amount": 32282872
    },
    {
      "time": "08-10",
      "bank": "Green Development Bank Ltd.",
      "Count": 3,
      "Amount": 33800
    },
    {
      "time": "08-10",
      "bank": "Himalayan Bank Limited",
      "Count": 371,
      "Amount": 7134249
    },
    {
      "time": "08-10",
      "bank": "ICFC Finance Limited",
      "Count": 1,
      "Amount": 3000
    },
    {
      "time": "08-10",
      "bank": "Jyoti Bikash Bank Ltd",
      "Count": 8,
      "Amount": 125160
    },
    {
      "time": "08-10",
      "bank": "Janaki Finance Ltd.",
      "Count": 1,
      "Amount": 3300
    },
    {
      "time": "08-10",
      "bank": "Kamana Sewa Bikas Bank Ltd.",
      "Count": 4,
      "Amount": 308000
    },
    {
      "time": "08-10",
      "bank": "Kumari Bank Limited",
      "Count": 208,
      "Amount": 4791898
    },
    {
      "time": "08-10",
      "bank": "Lumbini Bikas Bank Limited",
      "Count": 8,
      "Amount": 91000
    },
    {
      "time": "08-10",
      "bank": "Manjushree Finance Limited",
      "Count": 1,
      "Amount": 15000
    },
    {
      "time": "08-10",
      "bank": "Mahalaxmi Bikas Bank Ltd.",
      "Count": 7,
      "Amount": 19400
    },
    {
      "time": "08-10",
      "bank": "Muktinath Bikas Bank Limited",
      "Count": 53,
      "Amount": 1351156
    },
    {
      "time": "08-10",
      "bank": "Miteri Development Bank Limited",
      "Count": 3,
      "Amount": 222000
    },
    {
      "time": "08-10",
      "bank": "Machhapuchchhre Bank Limited",
      "Count": 58,
      "Amount": 1069642
    },
    {
      "time": "08-10",
      "bank": "Nabil Bank Limited",
      "Count": 184,
      "Amount": 4881525
    },
    {
      "time": "08-10",
      "bank": "Nepal Bank Limited",
      "Count": 59,
      "Amount": 1467785
    },
    {
      "time": "08-10",
      "bank": "Nepal Finance Limited",
      "Count": 1,
      "Amount": 1500
    },
    {
      "time": "08-10",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 29,
      "Amount": 385455
    },
    {
      "time": "08-10",
      "bank": "NIC Asia Bank Limited",
      "Count": 264,
      "Amount": 5728938.67
    },
    {
      "time": "08-10",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 73,
      "Amount": 1125373
    },
    {
      "time": "08-10",
      "bank": "NMB Bank Limited",
      "Count": 1083,
      "Amount": 15909482
    },
    {
      "time": "08-10",
      "bank": "Prabhu Bank Limited",
      "Count": 113,
      "Amount": 2192177.37
    },
    {
      "time": "08-10",
      "bank": "Prime Commercial Bank Limited",
      "Count": 35,
      "Amount": 306108
    },
    {
      "time": "08-10",
      "bank": "Progressive Finance Co. Ltd.",
      "Count": 5,
      "Amount": 141550
    },
    {
      "time": "08-10",
      "bank": "Rastriya Banijya Bank Limited",
      "Count": 95,
      "Amount": 1111827
    },
    {
      "time": "08-10",
      "bank": "Sanima Bank Ltd.",
      "Count": 74,
      "Amount": 1738859
    },
    {
      "time": "08-10",
      "bank": "Standard Chartered Bank Nepal Limited",
      "Count": 94,
      "Amount": 2896716.03
    },
    {
      "time": "08-10",
      "bank": "Samriddhi Finance Company Ltd.",
      "Count": 2,
      "Amount": 3155
    },
    {
      "time": "08-10",
      "bank": "Shangrila Development Bank Limited",
      "Count": 12,
      "Amount": 546600
    },
    {
      "time": "08-10",
      "bank": "Shine Resunga Development Bank Ltd.",
      "Count": 11,
      "Amount": 490900
    },
    {
      "time": "08-10",
      "bank": "Siddhartha Bank Limited",
      "Count": 102,
      "Amount": 2596989
    },
    {
      "time": "08-10",
      "bank": "Laxmi Sunrise Bank Limited",
      "Count": 171,
      "Amount": 3659387
    },
    {
      "time": "08-10",
      "bank": "Nepal SBI Bank Limited",
      "Count": 67,
      "Amount": 1543532
    },
    {
      "time": "10-12",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 37,
      "Amount": 409791
    },
    {
      "time": "10-12",
      "bank": "Citizens Bank International Limited",
      "Count": 87,
      "Amount": 2026262
    },
    {
      "time": "10-12",
      "bank": "Everest Bank Limited",
      "Count": 154,
      "Amount": 3455060
    },
    {
      "time": "10-12",
      "bank": "Excel Development Bank Ltd.",
      "Count": 7,
      "Amount": 143500
    },
    {
      "time": "10-12",
      "bank": "Garima Bikas Bank Limited",
      "Count": 29,
      "Amount": 807083
    },
    {
      "time": "10-12",
      "bank": "Global IME Bank Limited",
      "Count": 2735,
      "Amount": 42269625.81
    },
    {
      "time": "10-12",
      "bank": "Guheswori Merchant Banking and Finance Limited",
      "Count": 1,
      "Amount": 50000
    },
    {
      "time": "10-12",
      "bank": "Green Development Bank Ltd.",
      "Count": 1,
      "Amount": 1000
    },
    {
      "time": "10-12",
      "bank": "Himalayan Bank Limited",
      "Count": 441,
      "Amount": 7075609
    },
    {
      "time": "10-12",
      "bank": "ICFC Finance Limited",
      "Count": 3,
      "Amount": 70000
    },
    {
      "time": "10-12",
      "bank": "Jyoti Bikash Bank Ltd",
      "Count": 8,
      "Amount": 92355
    },
    {
      "time": "10-12",
      "bank": "Kamana Sewa Bikas Bank Ltd.",
      "Count": 3,
      "Amount": 5071
    },
    {
      "time": "10-12",
      "bank": "Kumari Bank Limited",
      "Count": 234,
      "Amount": 5111367
    },
    {
      "time": "10-12",
      "bank": "Lumbini Bikas Bank Limited",
      "Count": 6,
      "Amount": 57817
    },
    {
      "time": "10-12",
      "bank": "Mahalaxmi Bikas Bank Ltd.",
      "Count": 12,
      "Amount": 165756
    },
    {
      "time": "10-12",
      "bank": "Muktinath Bikas Bank Limited",
      "Count": 61,
      "Amount": 1271795
    },
    {
      "time": "10-12",
      "bank": "Machhapuchchhre Bank Limited",
      "Count": 67,
      "Amount": 1460054
    },
    {
      "time": "10-12",
      "bank": "Nabil Bank Limited",
      "Count": 234,
      "Amount": 5307812
    },
    {
      "time": "10-12",
      "bank": "Nepal Bank Limited",
      "Count": 62,
      "Amount": 1194014
    },
    {
      "time": "10-12",
      "bank": "Nepal Finance Limited",
      "Count": 1,
      "Amount": 40000
    },
    {
      "time": "10-12",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 30,
      "Amount": 736830
    },
    {
      "time": "10-12",
      "bank": "NIC Asia Bank Limited",
      "Count": 352,
      "Amount": 8533115
    },
    {
      "time": "10-12",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 115,
      "Amount": 2026352
    },
    {
      "time": "10-12",
      "bank": "NMB Bank Limited",
      "Count": 1340,
      "Amount": 22631061
    },
    {
      "time": "10-12",
      "bank": "Prabhu Bank Limited",
      "Count": 126,
      "Amount": 2649191
    },
    {
      "time": "10-12",
      "bank": "Prime Commercial Bank Limited",
      "Count": 51,
      "Amount": 437150
    },
    {
      "time": "10-12",
      "bank": "Rastriya Banijya Bank Limited",
      "Count": 119,
      "Amount": 1423565
    },
    {
      "time": "10-12",
      "bank": "Sanima Bank Ltd.",
      "Count": 99,
      "Amount": 1947688
    },
    {
      "time": "10-12",
      "bank": "Standard Chartered Bank Nepal Limited",
      "Count": 125,
      "Amount": 4196848
    },
    {
      "time": "10-12",
      "bank": "Shangrila Development Bank Limited",
      "Count": 5,
      "Amount": 93675
    },
    {
      "time": "10-12",
      "bank": "Shine Resunga Development Bank Ltd.",
      "Count": 17,
      "Amount": 273750
    },
    {
      "time": "10-12",
      "bank": "Siddhartha Bank Limited",
      "Count": 135,
      "Amount": 2975509.18
    },
    {
      "time": "10-12",
      "bank": "Sindhu Bikash Bank Ltd.",
      "Count": 1,
      "Amount": 5000
    },
    {
      "time": "10-12",
      "bank": "Laxmi Sunrise Bank Limited",
      "Count": 187,
      "Amount": 4694820
    },
    {
      "time": "10-12",
      "bank": "Nepal SBI Bank Limited",
      "Count": 56,
      "Amount": 1919421
    },
    {
      "time": "12-14",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 17,
      "Amount": 216030
    },
    {
      "time": "12-14",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 3,
      "Amount": 10500
    },
    {
      "time": "12-14",
      "bank": "Central Finance Ltd",
      "Count": 1,
      "Amount": 1500
    },
    {
      "time": "12-14",
      "bank": "Citizens Bank International Limited",
      "Count": 63,
      "Amount": 2083704
    },
    {
      "time": "12-14",
      "bank": "Everest Bank Limited",
      "Count": 68,
      "Amount": 1244587
    },
    {
      "time": "12-14",
      "bank": "Excel Development Bank Ltd.",
      "Count": 5,
      "Amount": 48900
    },
    {
      "time": "12-14",
      "bank": "Garima Bikas Bank Limited",
      "Count": 11,
      "Amount": 362750
    },
    {
      "time": "12-14",
      "bank": "Global IME Bank Limited",
      "Count": 1924,
      "Amount": 29266498.94
    },
    {
      "time": "12-14",
      "bank": "Himalayan Bank Limited",
      "Count": 284,
      "Amount": 6637855
    },
    {
      "time": "12-14",
      "bank": "Jyoti Bikash Bank Ltd",
      "Count": 11,
      "Amount": 241500
    },
    {
      "time": "12-14",
      "bank": "Janaki Finance Ltd.",
      "Count": 1,
      "Amount": 5000
    },
    {
      "time": "12-14",
      "bank": "Kamana Sewa Bikas Bank Ltd.",
      "Count": 4,
      "Amount": 53675
    },
    {
      "time": "12-14",
      "bank": "Kumari Bank Limited",
      "Count": 161,
      "Amount": 3552561
    },
    {
      "time": "12-14",
      "bank": "Lumbini Bikas Bank Limited",
      "Count": 3,
      "Amount": 38790
    },
    {
      "time": "12-14",
      "bank": "Manjushree Finance Limited",
      "Count": 1,
      "Amount": 22000
    },
    {
      "time": "12-14",
      "bank": "Mahalaxmi Bikas Bank Ltd.",
      "Count": 11,
      "Amount": 223700
    },
    {
      "time": "12-14",
      "bank": "Muktinath Bikas Bank Limited",
      "Count": 46,
      "Amount": 1251710
    },
    {
      "time": "12-14",
      "bank": "Miteri Development Bank Limited",
      "Count": 1,
      "Amount": 80000
    },
    {
      "time": "12-14",
      "bank": "Machhapuchchhre Bank Limited",
      "Count": 44,
      "Amount": 1332659
    },
    {
      "time": "12-14",
      "bank": "Nabil Bank Limited",
      "Count": 155,
      "Amount": 2452284.75
    },
    {
      "time": "12-14",
      "bank": "Nepal Bank Limited",
      "Count": 36,
      "Amount": 782250
    },
    {
      "time": "12-14",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 15,
      "Amount": 235845
    },
    {
      "time": "12-14",
      "bank": "NIC Asia Bank Limited",
      "Count": 200,
      "Amount": 3779868
    },
    {
      "time": "12-14",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 62,
      "Amount": 1377961
    },
    {
      "time": "12-14",
      "bank": "NMB Bank Limited",
      "Count": 975,
      "Amount": 16568888
    },
    {
      "time": "12-14",
      "bank": "Prabhu Bank Limited",
      "Count": 113,
      "Amount": 2151081.45
    },
    {
      "time": "12-14",
      "bank": "Prime Commercial Bank Limited",
      "Count": 25,
      "Amount": 190560
    },
    {
      "time": "12-14",
      "bank": "Rastriya Banijya Bank Limited",
      "Count": 76,
      "Amount": 1152040
    },
    {
      "time": "12-14",
      "bank": "Reliance Finance Ltd.",
      "Count": 1,
      "Amount": 100000
    },
    {
      "time": "12-14",
      "bank": "Sanima Bank Ltd.",
      "Count": 71,
      "Amount": 1164127
    },
    {
      "time": "12-14",
      "bank": "Standard Chartered Bank Nepal Limited",
      "Count": 77,
      "Amount": 3571025
    },
    {
      "time": "12-14",
      "bank": "Samriddhi Finance Company Ltd.",
      "Count": 2,
      "Amount": 2000
    },
    {
      "time": "12-14",
      "bank": "Shangrila Development Bank Limited",
      "Count": 10,
      "Amount": 450940
    },
    {
      "time": "12-14",
      "bank": "Shine Resunga Development Bank Ltd.",
      "Count": 10,
      "Amount": 587480
    },
    {
      "time": "12-14",
      "bank": "Siddhartha Bank Limited",
      "Count": 90,
      "Amount": 2430857.8
    },
    {
      "time": "12-14",
      "bank": "Laxmi Sunrise Bank Limited",
      "Count": 116,
      "Amount": 1923258
    },
    {
      "time": "12-14",
      "bank": "Nepal SBI Bank Limited",
      "Count": 39,
      "Amount": 956941
    },
    {
      "time": "T-1",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 358,
      "Amount": 5929315
    },
    {
      "time": "T-1",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 16,
      "Amount": 216000
    },
    {
      "time": "T-1",
      "bank": "Best Finance Company Ltd.",
      "Count": 2,
      "Amount": 52000
    },
    {
      "time": "T-1",
      "bank": "Central Finance Ltd",
      "Count": 5,
      "Amount": 44500
    },
    {
      "time": "T-1",
      "bank": "Citizens Bank International Limited",
      "Count": 1218,
      "Amount": 42009938.1
    },
    {
      "time": "T-1",
      "bank": "Everest Bank Limited",
      "Count": 533,
      "Amount": 14441986.51
    },
    {
      "time": "T-1",
      "bank": "Excel Development Bank Ltd.",
      "Count": 69,
      "Amount": 1416430
    },
    {
      "time": "T-1",
      "bank": "Garima Bikas Bank Limited",
      "Count": 205,
      "Amount": 4998392
    },
    {
      "time": "T-1",
      "bank": "Global IME Bank Limited",
      "Count": 26032,
      "Amount": 543964909.31
    },
    {
      "time": "T-1",
      "bank": "Guheswori Merchant Banking and Finance Limited",
      "Count": 3,
      "Amount": 14250
    },
    {
      "time": "T-1",
      "bank": "Green Development Bank Ltd.",
      "Count": 5,
      "Amount": 72916
    },
    {
      "time": "T-1",
      "bank": "Goodwill Finance Limited",
      "Count": 9,
      "Amount": 753776
    },
    {
      "time": "T-1",
      "bank": "Himalayan Bank Limited",
      "Count": 4119,
      "Amount": 93014278.8
    },
    {
      "time": "T-1",
      "bank": "ICFC Finance Limited",
      "Count": 33,
      "Amount": 918016
    },
    {
      "time": "T-1",
      "bank": "Jyoti Bikash Bank Ltd",
      "Count": 199,
      "Amount": 5411879
    },
    {
      "time": "T-1",
      "bank": "Janaki Finance Ltd.",
      "Count": 3,
      "Amount": 105780
    },
    {
      "time": "T-1",
      "bank": "Kamana Sewa Bikas Bank Ltd.",
      "Count": 106,
      "Amount": 3856883
    },
    {
      "time": "T-1",
      "bank": "Kumari Bank Limited",
      "Count": 2674,
      "Amount": 70959178.98
    },
    {
      "time": "T-1",
      "bank": "Lumbini Bikas Bank Limited",
      "Count": 68,
      "Amount": 1001560
    },
    {
      "time": "T-1",
      "bank": "Manjushree Finance Limited",
      "Count": 8,
      "Amount": 87849
    },
    {
      "time": "T-1",
      "bank": "Mahalaxmi Bikas Bank Ltd.",
      "Count": 133,
      "Amount": 3197778.84
    },
    {
      "time": "T-1",
      "bank": "Muktinath Bikas Bank Limited",
      "Count": 763,
      "Amount": 22098083.28
    },
    {
      "time": "T-1",
      "bank": "Miteri Development Bank Limited",
      "Count": 16,
      "Amount": 742100
    },
    {
      "time": "T-1",
      "bank": "Machhapuchchhre Bank Limited",
      "Count": 674,
      "Amount": 19362898.67
    },
    {
      "time": "T-1",
      "bank": "Multipurpose Finance Limited",
      "Count": 2,
      "Amount": 87600
    },
    {
      "time": "T-1",
      "bank": "Nabil Bank Limited",
      "Count": 2410,
      "Amount": 64544800.21
    },
    {
      "time": "T-1",
      "bank": "Nepal Bank Limited",
      "Count": 637,
      "Amount": 19086292.55
    },
    {
      "time": "T-1",
      "bank": "Nepal Finance Limited",
      "Count": 4,
      "Amount": 12230
    },
    {
      "time": "T-1",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 215,
      "Amount": 4925767
    },
    {
      "time": "T-1",
      "bank": "NIC Asia Bank Limited",
      "Count": 3390,
      "Amount": 90644035.4
    },
    {
      "time": "T-1",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 1127,
      "Amount": 31606272.4
    },
    {
      "time": "T-1",
      "bank": "NMB Bank Limited",
      "Count": 12660,
      "Amount": 234346995.85
    },
    {
      "time": "T-1",
      "bank": "Prabhu Bank Limited",
      "Count": 1680,
      "Amount": 42149332.62
    },
    {
      "time": "T-1",
      "bank": "Prime Commercial Bank Limited",
      "Count": 424,
      "Amount": 4567965.12
    },
    {
      "time": "T-1",
      "bank": "Progressive Finance Co. Ltd.",
      "Count": 10,
      "Amount": 130247
    },
    {
      "time": "T-1",
      "bank": "Rastriya Banijya Bank Limited",
      "Count": 1013,
      "Amount": 15997021.53
    },
    {
      "time": "T-1",
      "bank": "Reliance Finance Ltd.",
      "Count": 11,
      "Amount": 213050
    },
    {
      "time": "T-1",
      "bank": "Sanima Bank Ltd.",
      "Count": 1032,
      "Amount": 28560668.36
    },
    {
      "time": "T-1",
      "bank": "Standard Chartered Bank Nepal Limited",
      "Count": 1146,
      "Amount": 77302883.13
    },
    {
      "time": "T-1",
      "bank": "Samriddhi Finance Company Ltd.",
      "Count": 14,
      "Amount": 169313
    },
    {
      "time": "T-1",
      "bank": "Shangrila Development Bank Limited",
      "Count": 176,
      "Amount": 8684764.06
    },
    {
      "time": "T-1",
      "bank": "Shine Resunga Development Bank Ltd.",
      "Count": 219,
      "Amount": 8393887.77
    },
    {
      "time": "T-1",
      "bank": "Siddhartha Bank Limited",
      "Count": 1247,
      "Amount": 39131062.6
    },
    {
      "time": "T-1",
      "bank": "Sindhu Bikash Bank Ltd.",
      "Count": 2,
      "Amount": 80000
    },
    {
      "time": "T-1",
      "bank": "Laxmi Sunrise Bank Limited",
      "Count": 2169,
      "Amount": 64280378.59
    },
    {
      "time": "T-1",
      "bank": "Nepal SBI Bank Limited",
      "Count": 672,
      "Amount": 21925308.16
    },
    {
      "time": "T-2",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 389,
      "Amount": 5899009
    },
    {
      "time": "T-2",
      "bank": "Agricultural Development Bank Ltd.",
      "Count": 15,
      "Amount": 91885
    },
    {
      "time": "T-2",
      "bank": "Best Finance Company Ltd.",
      "Count": 5,
      "Amount": 73650
    },
    {
      "time": "T-2",
      "bank": "Central Finance Ltd",
      "Count": 5,
      "Amount": 23400
    },
    {
      "time": "T-2",
      "bank": "Citizens Bank International Limited",
      "Count": 1185,
      "Amount": 36576003.68
    },
    {
      "time": "T-2",
      "bank": "Everest Bank Limited",
      "Count": 1229,
      "Amount": 36095696.45
    },
    {
      "time": "T-2",
      "bank": "Excel Development Bank Ltd.",
      "Count": 50,
      "Amount": 1258470
    },
    {
      "time": "T-2",
      "bank": "Garima Bikas Bank Limited",
      "Count": 238,
      "Amount": 6383317.85
    },
    {
      "time": "T-2",
      "bank": "Global IME Bank Limited",
      "Count": 27159,
      "Amount": 564425229.9
    },
    {
      "time": "T-2",
      "bank": "Guheswori Merchant Banking and Finance Limited",
      "Count": 10,
      "Amount": 102900
    },
    {
      "time": "T-2",
      "bank": "Green Development Bank Ltd.",
      "Count": 10,
      "Amount": 133800
    },
    {
      "time": "T-2",
      "bank": "Goodwill Finance Limited",
      "Count": 7,
      "Amount": 211360
    },
    {
      "time": "T-2",
      "bank": "Himalayan Bank Limited",
      "Count": 4264,
      "Amount": 95004483.96
    },
    {
      "time": "T-2",
      "bank": "ICFC Finance Limited",
      "Count": 35,
      "Amount": 1072912.08
    },
    {
      "time": "T-2",
      "bank": "Jyoti Bikash Bank Ltd",
      "Count": 171,
      "Amount": 4545487.62
    },
    {
      "time": "T-2",
      "bank": "Janaki Finance Ltd.",
      "Count": 3,
      "Amount": 55000
    },
    {
      "time": "T-2",
      "bank": "Kamana Sewa Bikas Bank Ltd.",
      "Count": 129,
      "Amount": 4581559
    },
    {
      "time": "T-2",
      "bank": "Kumari Bank Limited",
      "Count": 2924,
      "Amount": 77671909.81
    },
    {
      "time": "T-2",
      "bank": "Lumbini Bikas Bank Limited",
      "Count": 83,
      "Amount": 963318.71
    },
    {
      "time": "T-2",
      "bank": "Manjushree Finance Limited",
      "Count": 26,
      "Amount": 450628
    },
    {
      "time": "T-2",
      "bank": "Mahalaxmi Bikas Bank Ltd.",
      "Count": 156,
      "Amount": 2535916.6
    },
    {
      "time": "T-2",
      "bank": "Muktinath Bikas Bank Limited",
      "Count": 805,
      "Amount": 22005375.15
    },
    {
      "time": "T-2",
      "bank": "Miteri Development Bank Limited",
      "Count": 14,
      "Amount": 329596
    },
    {
      "time": "T-2",
      "bank": "Machhapuchchhre Bank Limited",
      "Count": 821,
      "Amount": 24425993.67
    },
    {
      "time": "T-2",
      "bank": "Multipurpose Finance Limited",
      "Count": 5,
      "Amount": 67400
    },
    {
      "time": "T-2",
      "bank": "Nabil Bank Limited",
      "Count": 2866,
      "Amount": 73619115.54
    },
    {
      "time": "T-2",
      "bank": "Nepal Bank Limited",
      "Count": 664,
      "Amount": 17405859.62
    },
    {
      "time": "T-2",
      "bank": "Nepal Finance Limited",
      "Count": 6,
      "Amount": 156180
    },
    {
      "time": "T-2",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 236,
      "Amount": 4317430.67
    },
    {
      "time": "T-2",
      "bank": "NIC Asia Bank Limited",
      "Count": 3797,
      "Amount": 90322570.14
    },
    {
      "time": "T-2",
      "bank": "Nepal Investment Mega Bank Limited",
      "Count": 1272,
      "Amount": 32140910.98
    },
    {
      "time": "T-2",
      "bank": "NMB Bank Limited",
      "Count": 12899,
      "Amount": 236913188.79
    },
    {
      "time": "T-2",
      "bank": "Prabhu Bank Limited",
      "Count": 1914,
      "Amount": 43691179.13
    },
    {
      "time": "T-2",
      "bank": "Prime Commercial Bank Limited",
      "Count": 489,
      "Amount": 4936134.55
    },
    {
      "time": "T-2",
      "bank": "Progressive Finance Co. Ltd.",
      "Count": 19,
      "Amount": 282050
    },
    {
      "time": "T-2",
      "bank": "Rastriya Banijya Bank Limited",
      "Count": 1233,
      "Amount": 15892017.55
    },
    {
      "time": "T-2",
      "bank": "Reliance Finance Ltd.",
      "Count": 10,
      "Amount": 237480
    },
    {
      "time": "T-2",
      "bank": "Sanima Bank Ltd.",
      "Count": 1258,
      "Amount": 32292343.61
    },
    {
      "time": "T-2",
      "bank": "Standard Chartered Bank Nepal Limited",
      "Count": 1108,
      "Amount": 72332481.35
    },
    {
      "time": "T-2",
      "bank": "Samriddhi Finance Company Ltd.",
      "Count": 13,
      "Amount": 84826
    },
    {
      "time": "T-2",
      "bank": "Shangrila Development Bank Limited",
      "Count": 196,
      "Amount": 6947121.87
    },
    {
      "time": "T-2",
      "bank": "Shine Resunga Development Bank Ltd.",
      "Count": 299,
      "Amount": 11506468.48
    },
    {
      "time": "T-2",
      "bank": "Siddhartha Bank Limited",
      "Count": 1467,
      "Amount": 43928224.28
    },
    {
      "time": "T-2",
      "bank": "Sindhu Bikash Bank Ltd.",
      "Count": 1,
      "Amount": 1100
    },
    {
      "time": "T-2",
      "bank": "Laxmi Sunrise Bank Limited",
      "Count": 2350,
      "Amount": 63874566.31
    },
    {
      "time": "T-2",
      "bank": "Nepal SBI Bank Limited",
      "Count": 670,
      "Amount": 20748903.95
    }
  ]

  res.render("Table",{Allo:res1})
  

    // client.query("Aja ko data lyaune sub-query",(err,resToday)=>{
    //     client.query("Hijo ko data lyaune sub-query",(err,resYesterday)=>{
    //         client.query("Asti ko data lyaune sub-query",(err,resDayBeforeYestereday)=>{
        
    //                 res.render("Table", {Table1:resToday, Table2:resYesterday, Table3:resDayBeforeYestereday})
    //         })
    //     })
    // })


  });


   app.listen(3000, function(){
     console.log("listening on 3000");
   });