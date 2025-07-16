import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_mk6pnn3',
      'template_2x9x90r',
      form.current,
      'MAa6qwez2k-Nwkeun'
    )
    .then((result) => {
      console.log(result.text);
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    });
  };

  return (
    <div>
       <div className="contact-header">
        <h1 className="main-title"><span>C</span>ontact</h1>
      </div>
    <section id="contact" className="contact-section" ref={sectionRef}>
     
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>shreyshahworldtech@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 9265075114</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Gujarat, India</p>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                className="form-control" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                className="form-control" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                className="form-control" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="form-control" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {message.text && (
              <div className={`message ${message.type}`}>
                {message.text}
              </div>
            )}
          </form>
        </div>
       </div>
    </section>
    </div>
  );
};

export default Contact;