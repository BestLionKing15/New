const students =  [{
    "id": 100,
    "name": "Tinela",
    "car": "Honda"
}, {
    "id": 2,
    "name": "Gescu",
    "car": "Lada"
}, {
    "id": 33,
    "name": "Emy",
    "car": "BMW"
}] 



const express = require('express');
const app = express();
 
app.get('/', function(req, res) {
    res.send("Hello World");
});
app.get('/api/students', function(req, res) {
    res.send(students);
});
app.get('/api/students/:id', function(req, res) {
    res.send(students[req.params.id]);
});
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listening on port ${port}!`))
