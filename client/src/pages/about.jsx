import React, { useState } from 'react';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formUrl = 'https://sheetdb.io/api/v1/lanybcmu8ekg1';
  
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: new FormData(e.target) // Send form data directly
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({ name: '', email: '', feedback: '' });
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-black p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Welcome to Apna Market</h1>
        <p className="font-bold mb-4 text-gray-100">
          The Apna Market web application is being developed to facilitate resource sharing and selling exclusively for Red Deer Polytechnic students. Unlike other marketplaces, this platform allows students to not only sell their resources but also share and donate them with others. Additionally, users can collaborate to purchase specific resources together or find partners for projects. This comprehensive solution aims to unite students, providing them with a platform to come together, share knowledge, and grow collectively. Moreover, by encouraging resource sharing and collaboration.
        </p>
        <p className="font-bold mb-4 text-gray-100">
          <span className="font-bold mb-6 text-blue-200">Apna Market is a step towards sustainable development, promoting responsible consumption and maximizing the utility of resources within the student community.</span>
        </p>
        <p className="mb-6 text-gray-100">
          Our team consists of two members: Akshun Chauhan and Rohit.
        </p>
      </div>
      <div className="mt-8 rounded-lg overflow-hidden bg-gray-200 shadow-md">
        <iframe
          className="w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4597.863804831129!2d-113.82927427384955!3d52.24735391737492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sca!4v1712627466602!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-white">Leave Feedback</h2>
        {isSubmitted ? (
          <p className="text-green-500 mb-4">Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-100">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-100">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-gray-100">Feedback:</label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows="4"
                className="bg-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
