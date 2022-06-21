PORT=3000;
const express = require('express');

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
})


app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
});