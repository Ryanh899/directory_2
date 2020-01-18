const express = require('express'); 
const app = express(); 
const path = require('path'); 

const PORT = process.env.PORT || 3001; 

// send static content 
app.use(express.static(path.join(__dirname + '/views/'))); 

app.get('/api/test', (req, res) => {
    res.send('test data'); 
}); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.listen(PORT, (err) => {
    if (err) throw err; 
    console.log(`app listening on port: ${PORT}`); 
}); 