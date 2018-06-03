import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import PricePerNight from './components/PricePerNight.jsx';
import Rating from './components/Rating.jsx';
import Dates from './components/Dates.jsx';
import BookButton from './components/BookButton.jsx';

const OuterDiv = styled.div`
  width: 376px;
  margin-left: 45px;
  font-size: 14px;
  line-height; 1.43;
  color: #484848;
`;

const MainDiv = styled.div`
  display: block;
  padding-left: 24px;
  padding-right: 24px;
  margin: 16px 0px 24px 0px;
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const MarginLine = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #DBDBDB;
`;

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
        const listing = response.data[0];
        this.setState({
          costPerNight: listing.avg_cost_per_night,
          totalReviews: listing.review_count,
          rating: listing.avg_rating,
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <OuterDiv>
        <MainDiv id="app">
          <div id="summary-header">
            <PricePerNight costPerNight={this.state.costPerNight} />
            <Rating rating={this.state.rating} totalReviews={this.state.totalReviews} />
          </div>
          <MarginLine />
          <Dates />
          {/* Guests Component */}
          <BookButton />
        </MainDiv>
      </OuterDiv>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('booking-module'));
