// ServiceCard is a class component that inherits
// from React.Component; it is not a functional component
// and does not use hooks via the React.useState method

import React from 'react'

class ServiceCard extends React.Component {

  // constructor function takes in props passed in from ServiceCardContainer
  constructor(props) {
    // Super keyword invokes the constructor of the superclass (in this case
    // React.Component) and adds all additional props to this object
    super(props)
    this.name = props.service.id;
    this.state = {
      isHovered: false,
    }

    this.handleHover = this.handleHover.bind(this); // binds the function to the instance
  }

  handleHover = (e) => {
    e.preventDefault();
    this.setState({isHovered: !this.state.isHovered}) // switches isClicked state

  }

  render() {

    const styles = {
      backgroundColor: this.state.isHovered ? "#a0ada0" : "#768977"
    }

    return (
      <div className='service-card' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      <div style= {styles} className='service-card-background'>
              <img className='service-card-img' src={this.props.service.img} alt='BOATr service icon'/>
      </div>
      <h3 className='service-card-header'>{this.props.service.service}</h3>
      <p className='service-card-description'>{this.props.service.description}</p>
    </div>
    )
}

// export default function ServiceCard (props) {

//   const styles = {
//     backgroundColor: props.service.service.length > 15 ? "black" : "green"
//   }
//   return (
//     <div className='service-card'>
//       <h3 className='service-card-header'>{props.service.service}</h3>
//       <div style= {styles} className='service-card-background'>
//               <img className='service-card-img' src={props.service.img} alt='BOATr service icon'/>
//       </div>
//       <p className='service-card-description'>{props.service.description}</p>
//     </div>
//   )
// }
}

export default ServiceCard