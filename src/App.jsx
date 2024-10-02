import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [userData, setUserData] = ({
    name : '',
    address : '',
    phone : '',
    email : '',
    contact : '',
    consent : false
  })

  function handleChange(event) {
    const inputName = event.target.name
    const inputValue = event.target.value
    const inputType = event.target.type

    if(inputName === 'name'){
      setUserData({...userData, name: inputValue})
    }
    if(inputName === 'address'){
      setUserData({...userData, address: inputValue})
    }
    if(inputName === 'phone'){
      setUserData({...userData, phone: inputValue})
    }
    if(inputName === 'email'){
      setUserData({...userData, email: inputValue})
    }

    if(inputType === 'radio' && inputName === 'contact'){
      setUserData({...userData, contact: inputValue})
    }

    if(inputType === 'check-box' && inputName === 'consent'){
      setUserData({...userData, contact: inputValue})
    }
  }

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required />
          </label>
          <label>
            Address
            <input type="text" name="address" />
          </label>
          <label>
            Phone Number
            <input
             onChange={handleChange}
             type="tel"
             name="phone"
              />
          </label>

          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
