// import React, { useState } from 'react';
// import './styles/Contact.css';
// import axios from 'axios'; // Import Axios

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [statusMessage, setStatusMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make POST request to the backend
//       const response = await axios.post('https://portfolio-contactme-1a481-default-rtdb.firebaseio.com', formData);
//       setStatusMessage('Form submitted successfully!');
//     } catch (error) {
//       setStatusMessage('Error submitting form. Please try again.');
//     }
//   };

//   return (
//     <section id="contact" className="contact py-5">
//       <div className="container">
//         <div className="row">
//           {/* Left side - Contact info */}
//           <div className="col-md-6 mb-4">
//             <h2 className="text-center text-md-start">Contact Information</h2>
//             <ul className="list-unstyled">
//               <li className="d-flex align-items-center">
//                 <i className="bi bi-envelope-fill fs-4 me-2"></i>
//                 <span className="fw-bold">Email:</span>
//                 <span className="ms-2">aadhilnavas2@gmail.com</span>
//               </li>
//               <li className="d-flex align-items-center">
//                 <i className="bi bi-telephone-fill fs-4 me-2"></i>
//                 <span className="fw-bold">Phone:</span>
//                 <span className="ms-2">+91 8301873887</span>
//               </li>
//             </ul>

//             {/* Social Icons */}
//             <div className="social-icons d-flex justify-content-start mb-4">
//               <a href="https://www.instagram.com/_aadh_i?igsh=MTRjdmpiOXY3eWQxcg==" className="text-dark fs-4 mx-3" target="_blank" rel="noopener noreferrer">
//                 <i className="bi bi-instagram"></i>
//               </a>
//               <a href="https://www.linkedin.com/in/aadhil-n-b38721212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-dark fs-4 mx-3" target="_blank" rel="noopener noreferrer">
//                 <i className="bi bi-linkedin"></i>
//               </a>
             
//               <a href="https://github.com/aadhilnavas" className="text-dark fs-4 mx-3" target="_blank" rel="noopener noreferrer">
//                 <i className="bi bi-github"></i>
//               </a>
//             </div>
//           </div>

//           {/* Right side - Contact form */}
//           <div className="col-md-6">
//             <h2 className="text-center text-md-start">Contact Me</h2>
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="form-control mb-3"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="form-control mb-3"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="form-control mb-3"
//               />
//               <button type="submit" className="btn btn-primary">Send Message</button>
//             </form>
//             {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from 'react';
// import './styles/Contact.css';
// import axios from 'axios'; // Import Axios

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [statusMessage, setStatusMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make POST request to the backend (Firebase)
//       const response = await axios.post('https://portfolio-contactme-1a481-default-rtdb.firebaseio.com/messges.json',formData);

//       if (response.status === 200) {
//         setStatusMessage('Form submitted successfully!');
//         setFormData({ name: '', email: '', message: '' }); // Reset form fields
//       } else {
//         setStatusMessage('Unexpected error occurred. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       setStatusMessage('Error submitting form. Please try again.');
//     }
//   };

import React, { useState } from 'react';
import './styles/Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make POST request to Firebase
    axios
    .post('https://portfolio-contactme-1a481-default-rtdb.firebaseio.com//messages.json', formData)
    .then((response) => {
      console.log('Success response:', response);
      if (response.status === 200) {
        setStatusMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Unexpected response:', response);
        setStatusMessage('Unexpected error occurred. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error response:', error.response || error.message || error);
      setStatusMessage(
        'Error submitting form. Please try again. Or please feel free to contact via Email.'
      );
    });
  
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <div className="row">
          {/* Left side - Contact info */}
          <div className="col-md-6 mb-4">
            <h2 className="text-center text-md-start">Contact Information</h2>
            <ul className="list-unstyled">
            <li className="d-flex align-items-center">
  <a 
    href="mailto:aadhilnavas2@gmail.com" 
    className="text-dark d-flex align-items-center text-decoration-none"
  >
    <i className="bi bi-envelope-fill fs-4 me-2"></i>
    <span className="fw-bold">Email:</span>
    <span className="ms-2">aadhilnavas2@gmail.com</span>
  </a>
</li>
              <li className="d-flex align-items-center">
                <i className="bi bi-telephone-fill fs-4 me-2"></i>
                <span className="fw-bold">Phone:</span>
                <span className="ms-2">+91 8301873887</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="social-icons d-flex justify-content-start mb-4">
              <a href="https://www.instagram.com/_aadh_i?igsh=MTRjdmpiOXY3eWQxcg==" className="text-dark fs-4 mx-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/aadhil-n-b38721212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-dark fs-4 mx-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/aadhilnavas" className="text-dark fs-4 mx-3" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="col-md-6">
            <h2 className="text-center text-md-start">Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control mb-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control mb-3"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control mb-3"
              />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
