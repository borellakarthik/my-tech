// src/components/Timesheet.js

import React, { useState } from 'react';
import './Timesheet.css';

function Timesheet() {
  const [hours, setHours] = useState({
    '2024-05-01': 8,
    '2024-05-02': 8,
    '2024-05-03': 8,
    // Initialize other dates similarly
  });

  const handleHoursChange = (date, value) => {
    setHours({
      ...hours,
      [date]: value,
    });
  };

  const renderDays = () => {
    const daysInMonth = new Date(2024, 5, 0).getDate(); // May 2024 has 31 days
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `2024-05-${i.toString().padStart(2, '0')}`;
      days.push(
        <div className="timesheet__day" key={date}>
          <span className="timesheet__date">{i}</span>
          <input
            type="number"
            className="timesheet__input"
            value={hours[date] || 0}
            onChange={(e) => handleHoursChange(date, e.target.value)}
          />
        </div>
      );
    }

    return days;
  };

  return (
    <div className="timesheet">
      <header className="timesheet__header">
        <h2>My Timesheet</h2>
        <div className="timesheet__summary">
          <span>Total Hours: {Object.values(hours).reduce((a, b) => a + Number(b), 0)}</span>
          <span>Billable Hours: {Object.values(hours).reduce((a, b) => a + Number(b), 0)}</span>
        </div>
      </header>
      <div className="timesheet__grid">
        {renderDays()}
      </div>
      <footer className="timesheet__footer">
        <button className="timesheet__submit-btn">Submit Timesheet</button>
      </footer>
    </div>
  );
}

export default Timesheet;
