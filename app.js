import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
  res.send("Hello World");
})

app.post('/svg-converter', async (req, res) => {

  try {
    let svgTags = req.body.svgTags;
    console.log('====================================');
    console.log(svgTags);
    console.log('====================================');

    //convert svg tags to base64
    let base64 = await Buffer.from(svgTags).toString('base64');
    console.log('====================================');
    console.log(base64);
    console.log('====================================');

    //return base64
    res.status(200).send({ data: base64 });

  } catch (err) {
    res.status(500).send(err);
  }

})



app.listen(5000, () => {
  console.log("Server running on port 5000")
});