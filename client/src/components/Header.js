import logo from '../images/vecteezy_boat-slipway-sign-symbol-on-transparent-background_17392568_338.png'

export default function Header () {
  return (
  <div className='App-header'>
    <div className='App-header-left'>
      <img alt='logo' className='header-logo' src= {logo}/>
      <h1 className='header-h1'>BOATr</h1>
    </div>
    <ul className='header-list'>
      <li>About</li>
      <li>Pricing</li>
      <li>Locations</li>
    </ul>
  </div>
  )
}