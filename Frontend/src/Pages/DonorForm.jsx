import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DonorForm.css'; // Import the CSS file
import axios from 'axios'; // Import axios

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    contactNumber: '',
    itemDescription: '',
    cookedDateTime: null,
    expirationTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      cookedDateTime: date,
    });
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData({
          ...formData,
          location: `Lat: ${latitude}, Lon: ${longitude}`,
        });
      }, (error) => {
        console.error("Error fetching location", error);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend API
      const response = await axios.post('http://localhost:5000/api/donors', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Form submitted:', response.data);
      alert('Donor data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting donor data.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Donor Information</h2>
      <form onSubmit={handleSubmit} className="donor-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="form-input"
          />
          <button type="button" onClick={handleGetCurrentLocation} className="location-button">
            Use Current Location
          </button>
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Item Description:</label>
          <select
            name="itemDescription"
            value={formData.itemDescription}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select an option</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date and Time of Cooked Food:</label>
          <DatePicker
            selected={formData.cookedDateTime}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="Pp"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Time of Expiration:</label>
          <input
            type="time"
            name="expirationTime"
            value={formData.expirationTime}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default DonorForm;
