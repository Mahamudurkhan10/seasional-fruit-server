const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
     res.send('My seasional fruits are running')

})
app.listen(port, ()=>{
  console.log(`my seasional fruits are running on port ${port}`);
})
