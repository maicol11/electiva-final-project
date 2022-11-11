const user_route =require("./models/routes/user.routes")
const express = require("express")
const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const {API_VERSION,IP_SERVER,PORT_DB } = require ("./config");

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
{useNewUrlParser: true, useUnifiedTopology: true },
(err, res)=> {
    if(err) {
        throw err;
    }else {
        console.log("Success conection to db ");
        app.listen(PORT_SERVER, () => {
            console.log("##############");
            console.log("####API RES###");
            console.log("##############");
            console.log(`http:/${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
          });
        }
    }
)
app.use(express.json());
app.use("/api/v1/people", user_route)

require('dotenv').config('../.env');
console.log(process.env.TWILIO_ACCOUNT_SID)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Prueba de twilio Grupo ing sistemas y telecomunicaciones UM',
     from: '+15017122661',
     to: '+573225878319'
   })
  .then(message => console.log(message.sid));

console.log('llego')