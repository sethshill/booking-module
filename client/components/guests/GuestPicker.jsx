import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  position: absolute;
  left: 0px;
  min-width: 280px;
  margin-bottom: 16px;
  padding: 0px 16px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: left;
`;

const GuestPicker = () => (
  <MainDiv>
    Hello
  </MainDiv>
);

export default GuestPicker;