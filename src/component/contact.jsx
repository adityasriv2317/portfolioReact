import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div className='contact'>
        <hr />
        <div className="moto">Contact Me</div>

        <div className="contactMe">
          <div className="cdetails">
            <h2><b>Email :</b> adityaxia9237@gmail.com</h2>
            <h2><b>Number :</b> +91 1234567890</h2>
          </div>

          <div className="send">
            <h1>Submit a feedback</h1>
            <form action="">
              <label htmlFor="umail"></label>
              <input type="email" name='umail' id='umail'/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default contact