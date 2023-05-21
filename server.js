const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     // res.send('Hello from express');  // text/html; charset=utf-8
//     // res.json({msg: 'Hello'}); //application/json; charset=utf-8
//     //res.send(req.header('host')); // localhost:5000  text/html; charset=utf-8
//     //res.send(req.header('user-agent')); // related browser details
//     //res.send(req.header('Content-Type')); //applicatin/x-www-form-urlencoded
//     //res.send(req.rawHeaders);
//     // res.send(req.body);
//     // res.send(req.body.name);
// });

// app.post('/contact', (req, res) => {
//     if(!req.body.name){
//         return res.status(400).send('Name is not available');
//     }
//     //Database Stuff
//     res.status(201).send(`Thank You ${req.body.name}`);
// })

// app.post('/login', (req, res)=>{
//     if(!req.header('x-auth-token')){
//         return res.status(400).send('No Token');
//     }
//     if(req.header('x-auth-token') != '123456'){
//         return res.status(401).send('Not authorized');
//     }
//     res.send('Logged In');
// })

app.put('/post/:id', (req, res) => {
    //Database stuff    
    req.json({
        id:req.params.id,
        title:req.body.title
    });     
});

app.delete('/post/:id', (req,res)=> {
    req.json({msg:`Post ${req.params.id} deleted`});
})

app.listen(5000, ()=> console.log('Server started on 5000'))