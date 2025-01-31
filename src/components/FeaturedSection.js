// import React from 'react';
// import './styles/FeaturedSection.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const FeaturedSection = () => {
//   return (
//     <section className="featured-box" id="home">
//       <div className="featured-text">
//         <div className="featured-text-card">
//           <span>Aadhil Navas</span>
//         </div>
//         <div className="featured-name">
//           <p>I'm a developer<span className="typedText"></span></p>
//         </div>
//         <div className="featured-text-info">
//           <p>Experienced frontend developer with a passion for creating visually stunning
//              and user-friendly websites.
//           </p>
//         </div>
//         <div className="featured-text-btn">
//           <button className="btn blue-btn">Hire Me</button>
//           <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
//         </div>
//         <div className="social_icons">
//           <div className="icon"><i className="uil uil-instagram"></i></div>
//           <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
//           <div className="icon"><i className="uil uil-dribbble"></i></div>
//           <div className="icon"><i className="uil uil-github-alt"></i></div>
//         </div>
//       </div>
//       <div className="featured-image">
//         <div className="image">
//           <img src="https://avatars.githubusercontent.com/u/85219718?s=400&u=0477ac9cd21eb8264f4536d5ea987d2e2b5f3d27&v=4" alt="avatar" />
//         </div>
//       </div>
//       <div className="scroll-icon-box">
//         <a href="#about" className="scroll-btn">
//           <i className="uil uil-mouse-alt"></i>
//           <p>Scroll Down</p>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;
import React from 'react';
import './styles/FeaturedSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const FeaturedSection = () => {
  return (
    <section className="featured-box bg-dark text-white py-5" id="home">
      <div className="container d-flex align-items-center justify-content-center flex-column text-center">
        {/* Developer Intro */}
        <div className="featured-name mb-3">
          <h1 className="display-4">I'm a MERN Stack Developer</h1>
        </div>

        {/* Developer Details */}
        <div className="featured-text-info mb-4">
          <p className="lead">
            Experienced Frontend Developer with a passion for crafting visually stunning, user-friendly, and scalable web applications. Skilled in the MERN stack, I excel at designing dynamic solutions, building RESTful APIs, and managing data with MongoDB. With a strong foundation in software engineering, I aim to drive business success by creating innovative IT solutions and delivering impactful, responsive designs in an international environment.
          </p>
        </div>

        {/* Buttons */}
        <div className="featured-text-btn mb-4">
          <a href="#contact" className="btn btn-primary btn-lg me-3">
            Hire Me
          </a>
          <a
            href="/AADHILNEWCV.pdf"
            download="Aadhil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg"
          >
            Download CV <i className="bi bi-file-earmark-arrow-down ms-2"></i>
          </a>
        </div>

        {/* Social Icons
        <div className="social-icons d-flex justify-content-center mb-4">
          <a href="https://www.instagram.com" className="text-white fs-4 mx-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-white fs-4 mx-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.dribbble.com" className="text-white fs-4 mx-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-dribbble"></i>
          </a>
          <a href="https://www.github.com" className="text-white fs-4 mx-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div> */}

        {/* Scroll Down Icon */}
        <div className='scroll'>
        <div className="scroll-icon-box text-center mt-4">
          <a href="#about" className="text-decoration-none text-white">
            <i className="bi bi-mouse fs-3"></i>
            <p >Scroll Down</p>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
