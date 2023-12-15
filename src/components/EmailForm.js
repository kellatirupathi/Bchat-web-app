// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const EmailForm = () => {
//   const [to, setTo] = useState('');
//   const [subject, setSubject] = useState('');
//   const [text, setText] = useState('');
//   const [formVisible, setFormVisible] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const templateParams = {
//         to_email: to,
//         subject,
//         message: text,
//       };

//       // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
//       await emailjs.send('service_xv1fm7b', 'template_249cxg2', templateParams, 'fFVfMurPvOKJn_ohN');

//       console.log('Email sent successfully');
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <div className={`email-form ${formVisible ? 'active' : ''}`}>
//       <button className="contact-icon" onClick={() => setFormVisible(!formVisible)}>
//         📧
//       </button>

//       {formVisible && (
//         <form onSubmit={handleSubmit}>
//           <label>To:</label>
//           <input type="email" value={to} onChange={(e) => setTo(e.target.value)} required />

//           <label>Subject:</label>
//           <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />

//           <label>Message:</label>
//           <textarea value={text} onChange={(e) => setText(e.target.value)} required />

//           <button type="submit">Send Email</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default EmailForm;






import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        user_name: name,
        user_email: email,
        message,
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
      await emailjs.send('service_xv1fm7b', 'template_249cxg2', templateParams, 'fFVfMurPvOKJn_ohN');

      setEmailSent(true);
      setFormVisible(false);
      setShowNotification(true);

      // Hide notification after 1 second
      setTimeout(() => {
        setShowNotification(false);
      }, 1000);

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setEmailSent(false);
    setFormVisible(true);
  };

  const handleClose = () => {
    setFormVisible(false);
  };

  return (
    <div className={`email-form ${formVisible ? 'active' : ''}`}>
      <button className="contact-icon" onClick={() => setFormVisible(!formVisible)}>
        📧
      </button>

      {formVisible ? (
        <div className="email-form-overlay">
          <form onSubmit={handleSubmit} className="form-content">
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

            <button type="submit">Send Email</button>
          </form>
        </div>
      ) : emailSent ? (
        <p className={`sent ${showNotification ? 'show' : ''}`}>Email successfully sent!</p>
      ) : null}
    </div>
  );
};

export default EmailForm;
