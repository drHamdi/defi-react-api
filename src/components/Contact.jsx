import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9y4do6j', 'template_hk6iqp4', form.current, {
        publicKey: 'n8r2WosBTiljI8_O_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="modern-form pilote">
      <label className="modern-label">Name</label>
      <input type="text" name="from_name" className="modern-input pilote" />
      <label>Email</label>
      <input type="email" name="from_email"  className="modern-input pilote" />
      <label>Message</label>
      <textarea name="message"  className="modern-textarea pilote"/>
      <input type="submit" value="Send" className="btn pilote" />
    </form>
  );
};

export default Contact