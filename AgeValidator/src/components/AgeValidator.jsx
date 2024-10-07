import { useState } from 'react';
import './AgeValidator.css'; 

const AgeValidator = () => {
  const [dob, setDob] = useState('');
  const [isEligible, setIsEligible] = useState(null);
  const [error, setError] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!dob) {
      setError('Date of Birth is required.');
      return;
    }

    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    const isEligibleUser = age >= 18;

    setIsEligible(isEligibleUser);
  };

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  const resetForm = () => {
    setDob('');
    setIsEligible(null);
    setError('');
  };

  const today = new Date();
  const maxDate = today.toISOString().split('T')[0]; 

  return (
    <div className="age-validator-container">
      <h1>Age Validator</h1>
      {isEligible === null ? (
        <form className="age-validator-form" onSubmit={handleSubmit}>
          <label>
            Date of Birth:
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={maxDate} 
              className="date-input"
            />
          </label>
          <div className="buttons">
            <button type="submit" className="submit-button">Check Eligibility</button>
            <button type="button" className="info-button" onClick={toggleInfo}>
              Why do we need to know this?
            </button>
          </div>
          {showInfo && (
            <div className="info-text">
              <p>Your age must be 18 years or older to use our services.</p>
            </div>
          )}
          {error && <div className="error-text">{error}</div>}
        </form>
      ) : (
        <div className="result">
          {isEligible ? (
            <h2>You are eligible to use the services.</h2>
          ) : (
            <h2>Not eligible. You must be at least 18 years old.</h2>
          )}
          <button className="back-button" onClick={resetForm}>Back</button>
        </div>
      )}
    </div>
  );
};

export default AgeValidator;
