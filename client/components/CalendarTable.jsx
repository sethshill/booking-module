import React from 'react';
import styled from 'styled-components';

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

`;

const BlankSquare = styled.td`

`;

const DateSquare = styled.td`
  border: 1px solid;
`;

const UnavailbleDate = styled.span`

`;

const AvailableDate = styled.span`

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
                  return (
                    <DateSquare>
                      <AvailableDate>{date}</AvailableDate>
                    </DateSquare>
                  );
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