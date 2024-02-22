import emailjs from 'emailjs-com';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_drhqnhf',
        'template_k4iie7g',
        formData,
        'Z7fBmmhLv6-AmyHgh'

      );

      
      alert('Email sent successfully', response);
    } catch (error) {
      
      console.error('Error sending email', error);
    }
  };

  useEffect(() => {
    const setClass = () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    };
    setClass();
  }, []);

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello there! I'm Vishal, a passionate and results-driven Data Scientist with a relentless curiosity for unlocking the hidden insights within data. My mission is to leverage the power of data to make informed decisions, drive innovation, and create positive impact.
          </p>

          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
              <ul>
                <li className='half'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li className='half'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li className='half-subject'>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder='Message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Contact;