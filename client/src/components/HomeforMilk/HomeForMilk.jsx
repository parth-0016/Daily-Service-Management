import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function HomeForMilk() {
  const handleLogout = async () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className="home-milk-container">
      <header>
      <h1><u>Distributor Dashboard</u></h1>
      </header>
      <br />
      <br />
      <div className="link-container">
        <a href='/request' className="link">Request Of New Customers</a>
        <br />
        <br />
        <a href='/todaynotdelivery' className="link">Today's Delivery Status</a>
        <br />
        <br />
        <a href='/milkupdate' className="link">Update My Details</a>
        <br />
        <br />
      </div>
      <button className='btt btn-4' onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
