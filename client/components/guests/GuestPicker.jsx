import React from 'react';
import styled from 'styled-components';
import Picker from './Picker.jsx';

const OuterDiv = styled.div`
  position: absolute;
  margin: 16px 16px 16px 16px;
  font-family: Helvetica Neue,sans-serif;
`;

const MainDiv = styled.div`
  position: relative;
  width: 319px;
  height: 330px;
  padding: 0px 16px;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  text-align: left;
`;

const GuestPicker = () => (
  <OuterDiv>
    <MainDiv>
      <Picker label="Adults" />
      <Picker label="Children" smallText="Ages 2 - 12" />
      <Picker label="Infants" smallText="Under 2" />
      <span>2 guests maximum. Infants don’t count toward the number of guests.</span>
      <button>Close</button>
    </MainDiv>
  </OuterDiv>
);

export default GuestPicker;