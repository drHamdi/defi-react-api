import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const form = useRef(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5nzgl25', 'template_hjczojq', form.current, {
        publicKey: 'n8r2WosBTiljI8_O_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccessModal(true);
          
          // Réinitialiser les valeurs des champs d'entrée
         
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {!formSubmitted ? (
        <form ref={form} onSubmit={sendEmail} className="modern-form">
          <label className="modern-label">Name</label>
          <input type="text" name="user_name" className="modern-input pilote"  />
          <label>Email</label>
          <input type="email" name="user_email" className="modern-input pilote"   />
          <label>Message</label>
          <textarea name="message" className="modern-textarea pilote"   />
          <input type="submit" value="Send" className="btn" />
        </form>
      ) : null}
      {showSuccessModal && (
        <div className="success-modal">
          <FontAwesomeIcon icon={faCheckCircle} size="5x" className="text-success mb-3" />
          <p>Votre message a été envoyé avec succès!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;