import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Clickwrap.css";

const Clickwrap = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checked) {
            navigate("/next-page");
        } else {
            alert("Please accept the terms before proceeding.");
        }
    };

    return (
        <div className="clickwrap">
            <form onSubmit={handleSubmit}>
                <label htmlFor="agree">
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    I agree to the terms of service
                </label>
                <button type="submit">Proceed</button>
            </form>
        </div>
    );
};

export default Clickwrap;
