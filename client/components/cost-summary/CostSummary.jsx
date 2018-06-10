import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

const CostLine = styled.div`

`;

const MarginLine = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #DBDBDB;
`;

class CostSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      durationOfStay: 0,
      totalNightlyCost: 0,
      totalCost: 0,
    };

    // this.getPrices = this.getPrices.bind(this);
    this.calculateTotals = this.calculateTotals.bind(this);
  }

  componentDidMount() {
    if (this.props.display) {
      this.calculateTotals();
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.costPerNight !== this.props.costPerNight) {
      this.calculateTotals();
    }
  }

  // getPrices() {
  //   const url = `/booking/pricing/listingId/${this.props.listingId}/?start_date=${this.props.startDate}&end_date=${this.props.endDate}`;
  //   axios.get(url)
  //     .then((response) => {
  //       this.setState({
  //         prices: response.data,
  //       }, () => this.calculateTotals());
  //     })
  //     .catch(error => console.log(error)); // TO DO: what is correct error handling?
  // }

  calculateTotals() {
    let durationOfStay = Date.parse(this.props.endDate) - Date.parse(this.props.startDate);
    durationOfStay = Math.floor(durationOfStay / 86400000);

    const totalNightlyCost = durationOfStay * this.props.costPerNight;
    let totalCost = totalNightlyCost;
    totalCost += totalNightlyCost * this.props.serviceFeePerc;
    totalCost += totalNightlyCost * this.props.occTaxRatePerc;
    totalCost += this.props.cleaningFee;

    this.setState({
      durationOfStay,
      totalNightlyCost,
      totalCost,
    });
  }

  render() {
    if (this.props.display) {
      return (
        <div>
          <MarginLine />
          <CostLine>
            ${this.props.costPerNight} x {this.state.durationOfStay} nights
            ${this.state.totalNightlyCost}
          </CostLine>
          <MarginLine />
          <CostLine>Cleaning Fee ${this.props.cleaningFee}</CostLine>
          <MarginLine />
          <CostLine>
            Service Fee ${Math.floor(this.props.serviceFeePerc * this.state.totalNightlyCost)}
          </CostLine>
          <MarginLine />
          <CostLine>
            Occupancy Taxes ${Math.floor(this.props.occTaxRatePerc * this.state.totalNightlyCost)}
          </CostLine>
          <MarginLine />
          <CostLine>Total ${this.state.totalCost}</CostLine>
        </div>
      );
    }
    return null;
  }
}

CostSummary.propTypes = {
  display: PropTypes.bool.isRequired,
  listingId: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  costPerNight: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
  serviceFeePerc: PropTypes.number.isRequired,
  occTaxRatePerc: PropTypes.number.isRequired,
  additionalGuestFee: PropTypes.number.isRequired,
};

export default CostSummary;
