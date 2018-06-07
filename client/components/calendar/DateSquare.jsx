import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlankSquare = styled.td`
  border: 0px;
`;

const Square = styled.td`
  border: 1px double rgb(228, 231, 231);
  text-align: center;
`;

const ClickedSquare = styled.td`
  background-color: rgb(0, 166, 153);
  border: 1px double rgb(0, 166, 153);
  color: white;
  text-align: center;
  cursor: pointer;
`;

const UnavailbleDate = styled.span`
  text-decoration: line-through;
  color: rgb(220, 224, 224);
`;

const AvailableDate = styled.span`
  color: gb(72, 72, 72);
  cursor: pointer;
`;

class DateSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const dateClicked = e.currentTarget.textContent;
    if (this.props.endDate === '' && (this.props.startDate === '' || parseInt(this.props.startDate) < dateClicked)) {
      this.setState({
        clicked: !this.state.clicked,
      }, () => this.props.handleDateClick(e, this.state.clicked, dateClicked));
    }
  }

  render() {
    if (this.props.date.value !== 0) {
      if (this.props.date.available) {
        if (!this.state.clicked) {
          return (
            <Square onClick={this.handleClick}>
              <AvailableDate>{this.props.date.value}</AvailableDate>
            </Square>
          );
        }
        return (
          <ClickedSquare onClick={this.handleClick}>
            <AvailableDate>{this.props.date.value}</AvailableDate>
          </ClickedSquare>
        );
      }
      return (
        <Square>
          <UnavailbleDate>{this.props.date.value}</UnavailbleDate>
        </Square>
      );
    }
    return <BlankSquare />;
  }
}

DateSquare.propTypes = {
  endDate: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  date: PropTypes.shape({
    value: PropTypes.number,
    available: PropTypes.bool,
  }).isRequired,
  handleDateClick: PropTypes.func.isRequired,
};

export default DateSquare;
