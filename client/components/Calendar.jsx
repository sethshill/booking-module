import React from 'react';
import styled from 'styled-components';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarTable from './CalendarTable.jsx';
import axios from 'axios';

const OuterDiv = styled.div`
  position: absolute;
  margin: 20px 0px 20px 45px;
  font-family: Helvetica Neue,sans-serif;
`;

const MainDiv = styled.div`
  position: relative;
  width: 319px;
  height: 354px;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  text-align: left;
`;

const SmallText = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #484848
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    this.state = ({
      date: new Date(),
      month: '',
      year: '',
      reservedDates: [],
      dates: [
        [1,1,1,1,1,1,1,],
        [1,1,1,1,1,1,1,],
        [1,1,1,1,1,1,1,],
        [1,1,1,1,1,1,1,],
        [1,1,1,1,1,1,1,],
      ],
    });
  }

  // dates
  // [
  //   [{value: 0}, {value:0}, {value:1, price: 270, available: true}],
  //   ..
  // ]

  getReservedDates() {
    const url = `/booking/availability/listingId/${this.props.listingId}?start_date=${this.state.date.getUTCFullYear()}-${this.state.date.getMonth() + 1}-01&end_date=${this.state.date.getUTCFullYear()}-${this.state.date.getMonth() + 1}-31`;
    console.log(url);
    axios.get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch(error => console.log(error)); // TO DO: what is correct error handling?
  }

  calculateCalendarMatrix() {
    // given reservations and current date, create dates matrix
  }

  componentDidMount() {
    this.getReservedDates();

    this.setState({
      month: this.monthNames[this.state.date.getMonth()],
      year: this.state.date.getUTCFullYear(),
    });
  }

  render() {
    return (
      <OuterDiv>
        <MainDiv>
          <CalendarHeader month={this.state.month} year={this.state.year} />
          <CalendarTable dates={this.state.dates} />
          <SmallText>Minimum stay varies</SmallText>
        </MainDiv>
      </OuterDiv>
    );
  }
}

export default Calendar;
