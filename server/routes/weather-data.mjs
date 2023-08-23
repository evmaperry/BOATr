import express from 'express'
import fetch from 'node-fetch'
import axios from 'axios'

const router = express.Router();

router.get('/49685', (req, res) => {
  // res.status(404).send('Sorry, we cannot find that!')
  const options = {
    url: `https://weatherapi-com.p.rapidapi.com/current.json?q=49685`,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
      'X-RapidAPI-Host': process.env.WEATHER_API_HOST
    } 
  }
  
  

  axios.request(options).then(function (response) {
    console.log(response)
    res.json(response.data);
}).catch(function (error) {
    console.error(error);
});
  // const weather = await response.json()
  // await console.log(weather);
  // res.weather = weather;
  // console.log('res', res);
  // res.send(res);
}

)

export default router