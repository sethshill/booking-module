import React from 'react';
import styled from 'styled-components';

const Price = styled.span`
  display: inline;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 19px;
  font-weight: 800;
  line-height: 26px;
  color: rgb(72, 72, 72);
`;

const PerNight = styled.span`
  display: inline;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #484848;
`;

const PricePerNight = props => (
  <div id="price-per-night">
    <Price>${props.costPerNight}</Price>
    <PerNight> per night</PerNight>
  </div>
);

export default PricePerNight;
