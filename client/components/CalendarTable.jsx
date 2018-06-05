import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  margin: 0 auto;
  border-spacing: 0px;
`;

const Header = styled.th`
  width: 39px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: rgb(117, 117, 117);
`;

const Row = styled.tr`

`;

const BlankSquare = styled.td`
  width: 38px;
  height: 38px;
  border: 1px solid;
`;

const AvailableDate = styled.td`

`;

const UnavailbleDate = styled.td`

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
                week.map(date => <BlankSquare />)
              }
            </Row>
          );
        })
      }
    </tbody>
  </Table>
);

export default CalendarTable;