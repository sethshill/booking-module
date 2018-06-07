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
  height: 38px;
`;

const BlankSquare = styled.td`
  border: 0px;
`;

const DateSquare = styled.td`
  border: 1px double rgb(228, 231, 231);
  text-align: center;
`;

const UnavailbleDate = styled.span`
  text-decoration: line-through;
  color: rgb(220, 224, 224);
`;

const AvailableDate = styled.span`
  color: gb(72, 72, 72);
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
                  if (date.value !== 0) {
                    if (date.available) {
                      return (
                        <DateSquare>
                          <AvailableDate>{date.value}</AvailableDate>
                        </DateSquare>
                      );
                    }
                    return (
                      <DateSquare>
                        <UnavailbleDate>{date.value}</UnavailbleDate>
                      </DateSquare>
                    );
                  }
                  return <BlankSquare />;
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