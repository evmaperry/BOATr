// Class component style form
// Not taking in any props?


import React from 'react'

class EmailForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      wantsInvestmentLetter: false,
      wantsTipsLetter: false,
      wantsPromosLetter: false,
      modalShows: false,
      responseObject: '',
    }
    this.updateForm = this.updateForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.Modal = this.Modal.bind(this);
  }

  updateForm(event) {
    let { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      this.setState({ ...this.state, [name]: checked })
    }
    else { this.setState({ ...this.state, [name]: value }) }
  }

  async handleClick(event) {
    event.preventDefault()
    const newSubmission = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      wantsInvestmentLetter: this.state.wantsInvestmentLetter,
      wantsTipsLetter: this.state.wantsTipsLetter,
      wantsPromosLetter: this.state.wantsPromosLetter
    };

    await fetch('http://localhost:5051/contact-submission', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubmission),
    }).catch((error) => {
      this.setState(prevState => {
        return {...prevState, responseObject: `Error: ${error}`}
      })
      return;
    }).then(res=> {
      console.log('here', res)
      this.setState(prevState => {
      return {
        ...prevState,
        responseObject: res.statusText === 'OK' ? `${res.statusText}, you're in the books` : `Oops, try again. Status: ${res.statusText}`,
      }
    })});

    // resets form values and sets modal to pop up
    this.setState(prevState=> {
    return {...prevState,
      firstName: '',
      lastName: '',
      email: '',
      wantsInvestmentLetter: false,
      wantsTipsLetter: false,
      wantsPromosLetter: false,
      modalShows: true,
  }})

  }

  handleModalClick () {
    this.setState(prevState => {
      return {...prevState, modalShows: !this.state.modalShows}})
  }

  Modal () {
    return (
      <div style={{display: this.state.modalShows ? 'flex' : 'none',}} className="modal">
        <div style={{padding: '20px', marginTop: 'auto', marginBottom: 'auto'}}>
        <h1 style={{fontWeight: '200', letterSpacing: '-.05em'}}>{this.state.responseObject}</h1>
        <button onClick={this.handleModalClick} > Close </button>
      </div>
    </div>
    )
  }

  render() {
    return (
    <div className="email-form-super-container">
    <div className="email-form-container">
      <this.Modal />
      <h1>Want More Info?</h1>
      <h3>Select Your Newsletters and We'll Send You the Goods</h3>
      <form>

        <div className="form-info-inputs">
          <div className="label-and-input">
            <label htmlFor="firstName">First Name </label>
            <input
              type='text'
              name='firstName'
              value= {this.state.firstName}
              onChange={this.updateForm}
            />
          </div>

        <div className="label-and-input">
          <label htmlFor="lastName">Last Name </label>
          <input
            type='text'
            name='lastName'
            onChange={this.updateForm}
            value={this.state.lastName}
          />
        </div>
        <div className="label-and-input">
          <label htmlFor="email">Email </label>
          <input
            type='email'
            name='email'
            onChange={this.updateForm}
            value={this.state.email}
          />
        </div>
      </div>


    <h2>Select All That Apply</h2>
    <div className="newsletter-checkboxes">
          <div className='newsletter-selection'>
            <input
              type="checkbox"
              id="wantsInvestmentLetter"
              name="wantsInvestmentLetter"
              onChange={this.updateForm}
              checked={this.state.wantsInvestmentLetter}
              />
            <label htmlFor="wantsInvestmentLetter">Investment & Franchising</label>
          </div>
          <div className='newsletter-selection'>
            <input
              type="checkbox"
              id="wantsTipsLetter"
              name="wantsTipsLetter"
              onChange={this.updateForm}
              checked={this.state.wantsTipsLetter}
              />
            <label htmlFor="wantsTipsLetter">Travel & Trip Tips</label>
          </div>
          <div className='newsletter-selection'>
            <input
              id="wantsPromosLetter"
              name="wantsPromosLetter"
              type="checkbox"
              onChange={this.updateForm}
              checked={this.state.wantsPromosLetter}
              />
            <label htmlFor="wantsPromosLetter">BOATr Promos</label>
          </div>
        </div>
        <button type="button" onClick={this.handleClick}>Send it!</button>
      </form >
    </div>
    </div>)
  }
}

export default EmailForm