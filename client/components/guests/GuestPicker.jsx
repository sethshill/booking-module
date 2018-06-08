import React from 'react';
import styled from 'styled-components';

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
      Helveticaello
    </MainDiv>
  </OuterDiv>
);

export default GuestPicker;