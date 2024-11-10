import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './collectionTeam.css'; // Import corresponding CSS for styling

const CollectionTeam = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/collections/donors'); // Update endpoint as per backend
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div className="collection-container">
      <h2 className="collection-title">Donor Submissions</h2>
      <div className="card-container">
        {donors.map((donor) => (
          <div key={donor._id} className="card">
            <h3>{donor.name}</h3>
            <p><strong>Location:</strong> {donor.location}</p>
            <p><strong>Contact:</strong> {donor.contactNumber}</p>
            <p><strong>Item:</strong> {donor.itemDescription}</p>
            <p><strong>Cooked On:</strong> {new Date(donor.cookedDateTime).toLocaleString()}</p>
            <p><strong>Expiration:</strong> {donor.expirationTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionTeam;
