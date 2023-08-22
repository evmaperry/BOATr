import ServiceCard from './ServiceCard'
import services from '../data/services'

export default function ServicesContainer () {
  const serviceCards = services.map((service) => {
  return (
    <ServiceCard
      key={service.id}
      service={service}
      />
    )
  })

  return (
    <section className='services-super-container'>
        <div className='services-container'>
          <h1>What We Do</h1>
          <h3>Premium Service with a Smile</h3>
          <div className='service-cards'>{serviceCards}</div>
        </div>
    </section>
  )
}