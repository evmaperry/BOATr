import React from 'react'
import axios from 'axios'

export default function Weather() {

  const [zip, setZip] = React.useState(49685)
  
  React.useEffect(() => {

    const options = {
      method: 'GET',
      url: `http://localhost:5051/weather/${zip}`
    }
    
    axios.request(options).then(function (response) {
      console.log(response.data)
  }).catch(function (error) {
        console.error(error);
    }
  )
  }
  )

  return (
    <div>
      <h1>Sanity Checks</h1>
    </div>
  )



}