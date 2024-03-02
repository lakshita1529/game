// CommunityPage.js

import React from 'react';
import './Community.css'; 

const Community = () => {
    return (
        <div className="community-page">
            <div className="feedback-section">
                <h2>Community Feedback</h2>
                <p>Have feedback or suggestions? Let us know!</p>
                <button className="feedback-button">Give Feedback</button>
                <div className="contact-info">
                    <p>Contact us:</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: support@gamingcommunity.com</p>
                </div>
            </div>
            <div className="footer">
                <div className="copyright">
                    <p>&copy; 2024 Gaming Community. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Community