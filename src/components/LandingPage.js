import React from 'react';
import { Link } from '@reach/router';

const LandingPage = () => {
    return (
        <div className="container">
            <h1>Welcome to the Web App</h1>
            <p>
                By clicking the button below, you acknowledge that the token you will
                purchase is for entertainment purposes only.
            </p>
            <Link to="/clickwrap">
                <button>Proceed</button>
            </Link>
        </div>
    );
};

export default LandingPage;
