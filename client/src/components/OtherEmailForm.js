// email form using functional style, state
// taking in no props

import React from 'react'

export default function AnotherEmailForm() {

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    checkbox1: false
  })

  function updateFormData(event) {
    let {name, value, type, checked} = event.target

      setFormData(prevData =>
        ({...prevData,
          [name]: type === 'checkbox' ? checked : value
        })
    )
  }

  function handleSubmit () {
    console.log(formData);
  }


  return (
    <form>
      <input
        name='firstName'
        type='text'
        onChange={updateFormData}
        value={formData.firstName}
      />
      <p>Hello {formData.firstName}</p>
      <input
        name='lastName'
        type='text'
        onChange={updateFormData}
        value={formData.lastName}
      />
      <p>{formData.lastName}</p>
      <input
        name='email'
        type='email'
        onChange={updateFormData}
        value={formData.email}
      />
      <p>Checkbox</p>
      <input
        type="checkbox"
        name="checkbox1"
        onChange={updateFormData}
        checked={formData.checkbox1}
         />
      <button type='button' onClick={handleSubmit}>Submit</button>


    </form>
  )

}