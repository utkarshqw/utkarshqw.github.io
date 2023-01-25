
import "./Email.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z0t2vdf', 'template_zpy4v8y', form.current, 'uBWh0866fF0kS3WnF')
        .then((result) => {
            console.log(result.text);
            alert("Message Send")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="emailparent">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className="textarea" name="message" />
      <input className="lastinput" type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Email