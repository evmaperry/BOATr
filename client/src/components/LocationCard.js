import React from 'react'

// this is a functional component, and uses hooks
export default function LocationCard (props) {

  // declaring state
  const [isHovered, setIsHovered] = React.useState(false);
  const [weather, setWeather] = React.useState({
    current: {
      condition: {text: ''},
      temp_f: '45'
  }
})

  // saves all metros and drive times as single string
  const closeTo = props.location.closeTo.reduce((accumulator, current, i, array) => {
    accumulator += current.city + ' (' + current.driveTime + ' hr drive)';
    if (i < array.length - 1){
      accumulator += ' // '
    }
    return accumulator;
  }, '')

  // saves pops of all metros as single number
  const totalPop = props.location.closeTo.reduce((accumulator, current) => {
    accumulator += current.population;
    return accumulator;
  }, 0)

  const styles = {
    backgroundColor: isHovered ? 'rgb(45, 64, 125)' : 'rgb(166, 84, 84)',
    filter: isHovered ? 'none' : 'grayscale(80%)'
  };

  function handleHover () {
    setIsHovered(prevIsHovered => !prevIsHovered)
  }

  React.useEffect(() => {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${props.location.zip}`;
      const options = {
	      method: 'GET',
	      headers: {
		    'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
		    'X-RapidAPI-Host': process.env.REACT_APP_WEATHER_API_HOST
	      }
      };

    try {
        fetch(url, options)
	      .then(res => res.json())
        .then(data => setWeather(data))
      } catch (error) {
        alert(error);
      }
  }, [props.location.zip])

  return (
    <div onClick={props.incrementVisitors} onMouseEnter={handleHover} onMouseLeave={handleHover} style={styles} className='location-card'>
      <h2>{props.location.location}</h2>
      <img src={props.location.img} alt='facility location'/>
      <ul className='location-card-list'>
        <li><b>{props.location.annualVisitors.toLocaleString()}</b> annual tourists</li>
        <hr/>
        <li><b>Nearby Metros</b></li>
        <li>{closeTo}</li>
        <li><b>Population in range: </b>{totalPop.toLocaleString()}+</li>
        <hr/>
        <li><b>Current Weather</b></li>
        <li>{weather.current.condition.text}</li>
        <li>{weather.current.temp_f} degrees</li>
      </ul>
    </div>

  )
}