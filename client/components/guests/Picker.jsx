import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;

`;

const Picker = props => (
  <MainDiv>
    {props.label}
  </MainDiv>
);

export default Picker;
