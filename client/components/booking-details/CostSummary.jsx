import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 18px;
  font-family: system-ui,Helvetica Neue,sans-serif;
`;

const CostLine = styled.div`
  display: block;
`;

const TotalLine = styled.div`
  display: block;
  font-weight: bold;
`;

const Heading = styled.span`
  display: inline;
  float: none;
  width: 100px;
`;

const Price = styled.span`
  display: block;
  float: right;
  width: 50px;
`;

const MarginLine = styled.div`
  display: block;
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

    this.calculateTotals = this.calculateTotals.bind(this);
  }

  componentDidMount() {
    if (this.props.display) {
      this.calculateTotals();
    }
  }

  componentDidUpdate(previousProps) {
    if (
      previousProps.startDate !== this.props.startDate ||
      previousProps.endDate !== this.props.endDate ||
      previousProps.guestsSelected !== this.props.guestsSelected
    ) {
      this.calculateTotals();
    }
  }

  calculateTotals() {
    let durationOfStay = Date.parse(this.props.endDate) - Date.parse(this.props.startDate);
    durationOfStay = Math.floor(durationOfStay / 86400000);

    const totalNightlyCost = durationOfStay * this.props.costPerNight;
    let totalCost = totalNightlyCost;
    totalCost += totalNightlyCost * this.props.serviceFeePerc;
    totalCost += totalNightlyCost * this.props.occTaxRatePerc;
    totalCost += this.props.additionalGuestFee * (this.props.guestsSelected - 2);
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
        <MainDiv>
          <CostLine>
            <Heading>${this.props.costPerNight} x {this.state.durationOfStay} nights</Heading>
            <Price>${this.state.totalNightlyCost}</Price>
          </CostLine>
          <MarginLine />
          <CostLine>
            <Heading>Cleaning Fee</Heading>
            <Price>${this.props.cleaningFee}</Price>
          </CostLine>
          <MarginLine />
          <CostLine>
            <Heading>Service Fee</Heading>
            <Price>${Math.floor(this.props.serviceFeePerc * this.state.totalNightlyCost)}</Price>
          </CostLine>
          <MarginLine />
          <CostLine>
            <Heading>Occupancy Taxes</Heading>
            <Price>${Math.floor(this.props.occTaxRatePerc * this.state.totalNightlyCost)}</Price>
          </CostLine>
          <MarginLine />
          <TotalLine>
            <Heading>Total</Heading>
            <Price>${Math.round(this.state.totalCost)}</Price>
          </TotalLine>
        </MainDiv>
      );
    }
    return null;
  }
}

CostSummary.propTypes = {
  display: PropTypes.bool.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  costPerNight: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
  serviceFeePerc: PropTypes.number.isRequired,
  occTaxRatePerc: PropTypes.number.isRequired,
  additionalGuestFee: PropTypes.number.isRequired,
  guestsSelected: PropTypes.number.isRequired,
};

export default CostSummary;
