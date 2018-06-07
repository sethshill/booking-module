import React from 'react';
import styled from 'styled-components';
import DateSquare from './DateSquare.jsx'

const Table = styled.table`
  margin: 0 auto;
  max-width: 100%;
  border-spacing: 0px;
`;

const Header = styled.th`
  width: 39px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: rgb(117, 117, 117);
`;

const Row = styled.tr`
  height: 38px;
`;

const CalendarTable = props => (
  <Table>
    <thead>
      <tr>
        <Header>Su</Header>
        <Header>Mo</Header>
        <Header>Tu</Header>
        <Header>We</Header>
        <Header>Th</Header>
        <Header>Fr</Header>
        <Header>Sa</Header>
      </tr>
    </thead>
    <tbody>
      {
        props.dates.map((week) => {
          return (
            <Row>
              {
                week.map((date) => {
                  return <DateSquare date={date} handleDateClick={props.handleDateClick} />
                })
              }
            </Row>
          );
        })
      }
    </tbody>
  </Table>
);

export default CalendarTable;