import React from 'react';
import './contact.css';

const Contact = () => {
  let submitFeedback = () => {
    let email = document.querySelector('#umail').value
    let feedback = document.querySelector('#ufeed').value

    if (email == '' || feedback == '') {
      alert('Please complete the form!')
      document.querySelector('#umail').value = ''
      document.querySelector('#ufeed').value = ''
    } else {
      alert('Feedback submitted!');
      document.querySelector('#umail').value = ''
      document.querySelector('#ufeed').value = ''
    }
  };

  return (
    <div className='contact' id='contact'>
      <hr />
      <div className="moto">Contact Me</div>

      <div className="contactMe">
        <div className="cdetails" id='tile'>
          <h2><b>Email :</b> adityaxia9237@gmail.com</h2>
          <h2><b>Ph. Number :</b> +91 1234567890</h2>
        </div>

        <div className="send" id='tile'>
          <h1>Submit a Feedback</h1>
          <form action="">
            <input type="email" name='umail' id='umail' placeholder='Email Address' required 
            />
            <textarea name="ufeed" id="ufeed" placeholder='Your feedback' required 
            />
            <button type='button' onClick={submitFeedback}>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
