import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const MarginLine = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #DBDBDB;
`;

class CostSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prices: [],
      totalNightlyCost: 0,
    };

    this.getPrices = this.getPrices.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    if (this.props.display) {
      this.getPrices();
    }
  }

  getPrices() {
    const url = `/booking/pricing/listingId/${this.props.listingId}/?start_date=${this.props.startDate}&end_date=${this.props.endDate}`;
    axios.get(url)
      .then((response) => {
        this.setState({
          prices: response.data,
        }, () => this.calculateTotal());
      })
      .catch(error => console.log(error)); // TO DO: what is correct error handling?
  }

  calculateTotal() {
    const currentDate = new Date(this.props.startDate);
    let durationOfStay = Date.parse(this.props.endDate) - Date.parse(this.props.startDate);
    durationOfStay = Math.floor(durationOfStay / 86400000);
    let totalNightlyCost = 0;

    for (let i = 1; i <= durationOfStay; i += 1) {
      let closestDate = this.props.startDate;
      let price = 0;
      for (let j = 0; j < this.state.prices.length; j += 1) {
        price += 1;
      }

      totalNightlyCost += price;
      currentDate.setDate(currentDate.getDate() + 1);
    }

  }

  render() {
    if (this.props.display) {
      return <div>{this.state.totalNightlyCost}</div>;
    }
    return null;
  }
}

CostSummary.propTypes = {
  display: PropTypes.bool.isRequired,
  listingId: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default CostSummary;
