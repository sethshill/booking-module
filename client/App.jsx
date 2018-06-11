import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import PricePerNight from './components/booking-details/PricePerNight.jsx';
import Rating from './components/booking-details/Rating.jsx';
import DatesButtons from './components/calendar/DatesButtons.jsx';
import GuestsButton from './components/guests/GuestsButton.jsx';
import CostSummary from './components/booking-details/CostSummary.jsx';
import BookButton from './components/BookButton.jsx';
import GuestPicker from './components/guests/GuestPicker.jsx'
import Calendar from './components/calendar/Calendar.jsx';

const OuterDiv = styled.div`
  width: 376px;
  margin-left: 45px;
`;

const MainDiv = styled.div`
  display: block;
  padding: 24px 24px 24px 24px;
  margin: 16px 0px 24px 0px;
  border: 1px solid #e4e4e4;
  background-color: #ffffff;
  font-family: Helvetica Neue,sans-serif;
  font-size: 14px;
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
      stars: [],
      costSummaryDisplayed: false,
      selectedStartDate: '',
      selectedEndDate: '',
      cleaningFee: 0,
      serviceFeePerc: 0,
      occTaxRatePerc: 0,
      additionalGuestFee: 0,
      guestsAllowed: {
        maxAdults: 0,
        maxChildren: 0,
        maxInfants: 0,
      },
      guestsSelected: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    };

    this.handleDateSelection = this.handleDateSelection.bind(this);
    this.changeSelectedGuests = this.changeSelectedGuests.bind(this);
  }

  componentDidMount() {
    this.getCoreData();
  }

  getCoreData() {
    axios.get(`/listings/${this.props.listingId}/booking/core`)
      .then((response) => {
        const listing = response.data[0];
        this.setState({
          costPerNight: listing.avg_cost_per_night,
          totalReviews: listing.review_count,
          rating: listing.avg_rating,
          cleaningFee: listing.cleaning_fee,
          serviceFeePerc: listing.service_fee_perc,
          occTaxRatePerc: listing.occ_tax_rate_perc,
          additionalGuestFee: listing.additional_guest_fee,
          guestsAllowed: {
            maxAdults: listing.max_adults,
            maxChildren: listing.max_children,
            maxInfants: listing.max_infants,
          },
        }, this.getStarArray);
      })
      .catch(error => console.log(error)); // TO DO: what is correct error handling?
  }


  getStarArray() {
    const stars = [];
    // get whole stars
    for (let i = 0; i < Math.floor(this.state.rating); i += 1) {
      stars.push('1');
    }

    if (this.state.rating < 5) {
      // check if half star is needed
      if (this.state.rating % 1 >= 0.5) {
        stars.push('.5');
      } else {
        stars.push('0');
      }

      // fill in rest of array
      while (stars.length < 5) {
        stars.push('0');
      }
    }

    this.setState({ stars });
  }

  handleDateSelection(startDate, endDate) {
    this.setState({
      selectedStartDate: startDate,
      selectedEndDate: endDate,
    }, () => {
      this.setState({
        costSummaryDisplayed: !!(this.state.selectedStartDate && this.state.selectedEndDate),
      });
    });
  }

  changeSelectedGuests(e, type, incrementor) {
    const guestsSelected = this.state.guestsSelected;
    guestsSelected[type.toLowerCase()] += incrementor;

    this.setState({
      guestsSelected,
    });
  }

  render() {
    return (
      <div>
        <OuterDiv>
          <MainDiv id="app">
            <div id="summary-header">
              <PricePerNight costPerNight={this.state.costPerNight} />
              <Rating stars={this.state.stars} totalReviews={this.state.totalReviews} />
            </div>
            <MarginLine />
            <DatesButtons
              startDate={this.state.selectedStartDate}
              endDate={this.state.selectedEndDate}
            />
            <GuestsButton
              guestsSelected={this.state.guestsSelected.adults +
                this.state.guestsSelected.children +
                this.state.guestsSelected.infants
              }
            />
            <CostSummary
              display={this.state.costSummaryDisplayed}
              listingId={this.props.listingId}
              startDate={this.state.selectedStartDate}
              endDate={this.state.selectedEndDate}
              costPerNight={this.state.costPerNight}
              cleaningFee={this.state.cleaningFee}
              serviceFeePerc={this.state.serviceFeePerc}
              occTaxRatePerc={this.state.occTaxRatePerc}
              additionalGuestFee={this.state.additionalGuestFee}
              guestsSelected={this.state.guestsSelected.adults + this.state.guestsSelected.children}
            />
            <BookButton />
          </MainDiv>
        </OuterDiv>
        <Calendar
          listingId={this.props.listingId}
          handleDateSelection={this.handleDateSelection}
        />
        <GuestPicker
          guestsAllowed={this.state.guestsAllowed}
          guestsSelected={this.state.guestsSelected}
          handleClick={this.changeSelectedGuests}
        />
      </div>
    );
  }
}

App.propTypes = {
  listingId: PropTypes.number.isRequired,
};

export default App;
