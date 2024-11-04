import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to my server V7, try Router Pages!');
});

app.get('/fetch-html', async (req, res) => {
  let url = req.query.url || 'https://www.rossmann.pl/kategoria/pielegnacja-i-higiena/twarz/pielegnacja-twarzy/kremy-do-twarzy,13049';


  console.log(`Req Page ${req.query.page}`)

  // Check if 'req.query.Page' is provided and update the URL
  if (req.query.page) {
    url = `https://www.rossmann.pl/kategoria/pielegnacja-i-higiena/twarz/pielegnacja-twarzy/kremy-do-twarzy,13049?Page=${req.query.page}`;
  }

  try {
    const response = await axios.get(url);
    console.log(url)
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching HTML');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
