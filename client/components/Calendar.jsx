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

const SmallText = styled.div`
  margin: 16px 16px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #484848;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    this.state = ({
      date: new Date(),
      month: 0,
      year: 0,
      reservedDates: [],
      dates: [],
    });
  }

  // dates will look like this
  // [
  //   [{value: 0}, {value:0}, {value:1, price: 270, available: true}],
  //   ..
  // ]

  componentDidMount() {
    this.setState({
      month: this.state.date.getMonth(),
      year: this.state.date.getUTCFullYear(),
    }, () => this.getReservedDates());
  }

  getReservedDates() {
    const url = `/booking/availability/listingId/${this.props.listingId}/?start_date=${this.state.year}-${this.state.month + 1}-01&end_date=${this.state.year}-${this.state.month + 2}-01`;
    console.log(url);
    axios.get(url)
      .then((response) => {
        this.setState({
          reservedDates: response.data,
        }, () => this.calculateCalendarMatrix());
      })
      .catch(error => console.log(error)); // TO DO: what is correct error handling?
  }

  calculateCalendarMatrix() {
    const dateMatrix = [[]];

    const currentDate = new Date();
    const firstDay = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 1);
    const lastDay = new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1, 0);

    const dayOfWeekOfFirstDay = firstDay.getDay();
    const lastDate = lastDay.getDate();

    // fill beginning of first week array with empty dates
    for (let i = 0; i < dayOfWeekOfFirstDay; i += 1) {
      dateMatrix[0].push({ value: 0 });
    }

    let isAvailable = true;
    for (let i = 1; i <= lastDate; i += 1) {
      // get availability
      this.state.reservedDates.forEach((reservation) => {
        const start = new Date(reservation.start_date);
        const end = new Date(reservation.end_date);

        if (currentDate.getMonth() === this.state.month && currentDate.getDate() >= i) {
          isAvailable = false;
        }

        if (end.getMonth() === this.state.month && end.getDate() === i) {
          isAvailable = !isAvailable;
        }

        if (start.getMonth() === this.state.month && start.getDate() === i) {
          isAvailable = !isAvailable;
        }
      });

      const dateObj = { value: i, available: isAvailable };

      if (dateMatrix[dateMatrix.length - 1].length < 7) {
        dateMatrix[dateMatrix.length - 1].push(dateObj);
      } else {
        dateMatrix.push([dateObj]);
      }
    }

    // fill end of last week array with empty dates
    while (dateMatrix[dateMatrix.length - 1].length < 7) {
      dateMatrix[dateMatrix.length - 1].push({ value: 0 });
    }

    this.setState({
      dates: dateMatrix,
    }, () => console.log(this.state));
  }


  render() {
    return (
      <OuterDiv>
        <MainDiv>
          <CalendarHeader month={this.monthNames[this.state.month]} year={this.state.year} />
          <CalendarTable dates={this.state.dates} />
          <SmallText>Minimum stay varies</SmallText>
        </MainDiv>
      </OuterDiv>
    );
  }
}

export default Calendar;
