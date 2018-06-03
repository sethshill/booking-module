import React from 'react';
import styled from 'styled-components';

const Price = styled.span`
  word-warp: break-word;
  font-size: 19px;
  line-height: 26px;
  letter-spacing: normal;
  padding-top: 0px;
  padding-bottom: 0px;
  color: rgb(72, 72, 72);
  font-weight: 800;
  display: inline;
  margin: 0px;
`;

const PerNight = styled.span`
  font-weight: 600;
  margin: 0px;
  word-wrap: break-word;
  font-size: 12px;
  line-height: 16px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  display: inline;
`;

const PricePerNight = props => (
  <div id="price-per-night">
    <Price>${props.costPerNight}</Price>
    <PerNight> per night</PerNight>
  </div>
);

export default PricePerNight;
