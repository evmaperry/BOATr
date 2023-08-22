import src from '../images/sunny day.png'

export default function Splash () {
  return (
    <section className='splash'>
      <div className='splash-text'>
        <h2 className='splash-top-line'>Believe Us...</h2>
        <h1 className='splash-bottom-line'><em>This</em> is your Happy Place</h1>
      </div>
      <img className="splash-image" src= {src} alt="sunny day"></img>
      
      <h1 className="splash-subtitle">Let <span className='header-h1'>BOATr</span> take your there with our streamlined services</h1>
    </section>
  )
}