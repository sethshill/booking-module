import React from 'react';
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
`;

const UnavailbleDate = styled.span`
  text-decoration: line-through;
  color: rgb(220, 224, 224);
`;

const AvailableDate = styled.span`
  color: gb(72, 72, 72);
`;

class DateSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick(e) {
    e.preventDefault();

    this.props.handleDateClick();

    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    if (this.props.date.value !== 0) {
      if (this.props.date.available) {
        if (!this.state.clicked) {
          return (
            <Square onClick={this.props.handleDateClick}>
              <AvailableDate>{this.props.date.value}</AvailableDate>
            </Square>
          );
        }
        return (
          <ClickedSquare onClick={this.props.handleDateClick}>
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
  };
};

export default DateSquare;
