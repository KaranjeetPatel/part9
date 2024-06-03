import express from 'express';
import  bmiCalculator from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    if (isNaN(height) || isNaN(weight)) {
        return res.status(400).json({ error: 'malformatted parameters' });
    }
    const bmi = bmiCalculator(height, weight);
    return res.json({ height, weight, bmi });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target} = req.body;
  console.log(daily_exercises);
  console.log(target);
  console.log(req.body);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  for (let i = 0; i < daily_exercises.length; i++) {
     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (isNaN(Number(daily_exercises[i]))) {
      return res.status(400).json({ error: 'malformatted parameters'});
    }
  }
  if (isNaN(Number(target))) {
    return res.status(400).json({ error: 'malformatted parameters'});
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(daily_exercises, target);
  return res.json({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});