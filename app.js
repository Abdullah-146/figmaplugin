import express from 'express';
const app = express();


app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/svg-converter', (req, res) => {
    
  try{
    let svgTags = req.body.svgTags;

    //convert svg tags to base64
    let base64 = Buffer.from(svgTags).toString('base64');

    //return base64
    res.send(base64);

  }catch(err){
    res.status(500).send(err);
  }

})



app.listen(5000, () => {
    console.log("Server running on port 5000")
});