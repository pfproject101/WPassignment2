
const express = require('express');
const mongoose = require('mongoose');
const team = require('./models/team.js')

const cors  = require('cors');
const app = express();
app.use(cors());

//connect to mongodb
const dbURI = 'mongodb+srv://hamna:webassign2pwd@cluster0.qhoepkd.mongodb.net/Leaderboard?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
    .then((result) => app.listen(4000))
    .catch((err)=>console.log("unable to connect to db"));

// // add data to db
// app.get('/addTeam', (req, res)=>{
//     const Team = new team({
//         name: 'Pentacore',
//         score:243435,
//         games:29,
//         image: 'https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg'
//     });
//     Team.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//         console.log(err)
//     })
// })

//retrieve data from db
app.get('/', (req, res)=>{ 
    console.log("request recieved") 
    team.find({})
    .then((data)=>{
        console.log("connected to db and data found")
        // console.log(req.url, req.method)
        // console.log(data);
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log("data not found");
    })
})
