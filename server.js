const express = require('express');
const scoreRoutes = require('./routes/score');
const leaderboardRoutes = require('./routes/leaderboard');


const app = express();
const port = 3000; 

app.use(express.json());
app.use('/api/scores', scoreRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

