import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

const generatePlayer = (id) => ({
  id,
  nickname: `Player${id}`,
  score: Math.floor(Math.random() * 100),
  state: Math.random() > 0.5 ? 'alive' : 'dead',
  kills: Math.floor(Math.random() * 10),
  deaths: Math.floor(Math.random() * 10),
});

app.get('/players', async (req, res) => {
  // fake delay
  await new Promise((res) => setTimeout(res, 500));

  res.json({
    winningTeam: Array.from({ length: 50 }, (_, i) => generatePlayer(i + 1)),
    losingTeam: Array.from({ length: 50 }, (_, i) => generatePlayer(i + 51)),
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
