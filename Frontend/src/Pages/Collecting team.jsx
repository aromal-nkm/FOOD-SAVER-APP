import React, { useEffect, useState } from 'react';
import './CollectingTeam.css'; // Import styles if needed
import axios from 'axios';
import { toast } from 'react-toastify';

const CollectingTeam = () => {
  const [donations, setDonations] = useState([]);

  // Fetch donations data
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('/api/donations');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  // Mark donation as collected and optionally notify donor
  const markAsCollected = async (donationId) => {
    try {
      // Send update request to server
      await axios.put(`/api/donations/${donationId}/collect`, { status: 'collected' });
      
      // Update UI
      setDonations(donations.map(donation =>
        donation.id === donationId ? { ...donation, status: 'collected' } : donation
      ));

      // Notify user
      toast.success('Donation marked as collected!');
    } catch (error) {
      console.error('Error marking donation as collected:', error);
      toast.error('Failed to mark as collected. Please try again.');
    }
  };

  return (
    <div className="collecting-team-container">
      <h2 className="header">Collection Team Dashboard</h2>
      <ul className="donations-list">
        {donations.map((donation) => (
          <li key={donation.id} className="donation-item">
            <h3>{donation.name}</h3>
            <p>Location: {donation.location}</p>
            <p>Contact: {donation.contactNumber}</p>
            <p>Date Cooked: {new Date(donation.cookedDateTime).toLocaleString()}</p>
            <p>Expiration Time: {donation.expirationTime}</p>
            <p>Status: {donation.status}</p>
            
            {donation.status !== 'collected' ? (
              <button
                className="collect-button"
                onClick={() => markAsCollected(donation.id)}
              >
                Mark as Collected
              </button>
            ) : (
              <p className="collected-status">Collected</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectingTeam;
