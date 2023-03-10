import React, { useState } from 'react'
import { validateEmail } from '../../utilities/help'

export default function Contact() {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ( entry ) => {
    const { target } = entry;
    const inputType = target.name;
    const inputValue = target.value;
    
    // check for three form fields
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue)
    }
  }
    
  // submit processing
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(!validateEmail(email) || !firstName || !message) {
      setErrorMessage('Email, firstName or message invalid please try again');

      return;
    }

    alert(`Hello ${firstName}, you wrote: ${message}`)
    setEmail('');
    setFirstName('');
    setMessage('');

  }


  return (
    <div>
      <p>Please send feedback</p>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="Please enter name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Please enter email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Please write message"
        />
        <button>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}
