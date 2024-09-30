import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const SelectTimePage = () => {
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const preferredTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    alert(`Preferred notification time: ${preferredTime}`);
    navigate('/welcomep');
  };

  const incrementHours = () => setHours((prev) => (prev < 23 ? prev + 1 : 0));
  const decrementHours = () => setHours((prev) => (prev > 0 ? prev - 1 : 23));
  const incrementMinutes = () => setMinutes((prev) => (prev < 59 ? prev + 1 : 0));
  const decrementMinutes = () => setMinutes((prev) => (prev > 0 ? prev - 1 : 59));

  return (
    <div className="select-time-page">
      <div className="header">
        <h2>Select Your Preferred</h2>
        <h2>Notification Time</h2>
      </div>
      <div className="main-content">
        <form onSubmit={handleSubmit}>
          <div className="time-picker">
            <div className="time-control">
              <button type="button" onClick={incrementHours}>+</button>
                <span>{hours.toString().padStart(2, '0')}</span>
              <button type="button" onClick={decrementHours}>-</button>
            </div>
            <span>:</span>
            <div className="time-control">
              <button type="button" onClick={incrementMinutes}>+</button>
                <span>{minutes.toString().padStart(2, '0')}</span>
              <button type="button" onClick={decrementMinutes}>-</button>
            </div>
          </div>
        </form>
      </div>
      <div className="footer">
      <Link to="/welcomep">
        <button type="submit" onClick={handleSubmit}>SUBMIT</button>
      </Link>
      </div>
    </div>
  );
};

export default SelectTimePage;
