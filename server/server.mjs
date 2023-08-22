import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs';
import submissions from './routes/contact-form.mjs'
import weathers from './routes/weather-data.mjs'

const PORT = process.env.port || 5051
const app = express();

app.use(express.json());
app.use(cors());
app.use('/contact-submission', submissions)
app.use('/weather', weathers)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`)
})