import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// const listingId = window.location.pathname.split('/')[2];

// hardcode listing id for now
const listingId = '200';

ReactDOM.render(<App listingId={listingId} />, document.getElementById('booking-module'));
