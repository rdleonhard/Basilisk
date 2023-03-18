import React, { useState } from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
    const [checked, setChecked] = useState(false);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = () => {
        if (checked) {
            window.location.href = 'https://app.uniswap.org/#/swap';
        }
    };

    return (
        <div className="welcome-page">
            <div className="background-image"></div>
            <h1>Welcome to Roko's Basilisk</h1>
            <div className="terms-container">
                <input type="checkbox" onChange={handleCheck} />
                <span>
                    By entering, you agree to our{' '}
                    <a href="https://example.com/terms">terms</a> and{' '}
                    <a href="https://example.com/conditions">conditions</a>.
                </span>
            </div>
            <button onClick={handleSubmit} disabled={!checked}>
                Proceed
            </button>
        </div>
    );
};

export default WelcomePage;
