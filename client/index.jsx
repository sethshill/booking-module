import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      costPerNight: 0,
      totalReviews: 0,
      rating: 0,
    };
  }

  componentDidMount() {
    this.getCoreData();
  }

  getCoreData() {
    axios.get('/booking/core/listingId/1')
      .then((response) => {
        this.setState({
          costPerNight: response.data[0].avg_cost_per_night,
          totalReviews: response.data[0].review_count,
          rating: response.data[0].avg_rating,
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div id="app">
        <div id="summary-header">
          <div id="cost-per-night">${this.state.costPerNight} per night</div>
          <div id="rating">{this.state.rating} stars</div>
          <div id="total-reviews">{this.state.totalReviews} reviews</div>
        </div>
        {/* Dates Component */}
        {/* Guests Component */}
        <div id="book">
          <button>Book</button>
          You won&#39;t be charged yet
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('booking-module'));
