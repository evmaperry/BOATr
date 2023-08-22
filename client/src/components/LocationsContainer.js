import LocationCard from './LocationCard'
import locations from '../data/locations'
import React from 'react'

export default function LocationsContainer() {
  // setting state for the locations array
  const [locationsState, setLocationsState] = React.useState(locations)

  // function that changes that state, changes annualVisitors property 
  function incrementVisitors(id) {
    setLocationsState(prevState => {
      return prevState.map(location => {
        return location.id === id ? { ...location, annualVisitors: (location.annualVisitors + 1) } : location
      })
    })
  }

  const locationsCards = locationsState.map(location => {
    return (
      <LocationCard
        key={location.id}
        location={location}
        incrementVisitors={() => incrementVisitors(location.id)}
      />
    )
  })

  return (
    <section className="locations-super-container">
      <div className='locations-container'>
        <h1 className='locations-container-header'>Where We Are</h1>
        <h3 className='locations-container-subheader'>Find Us at Your Favorite Watering Hole</h3>
        <div className='location-cards'>{locationsCards}</div>
      </div>
    </section>
  )

}