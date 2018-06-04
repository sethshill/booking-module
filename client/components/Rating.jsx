import React from 'react';
import styled from 'styled-components';
import Star from './Star.jsx';

const ReviewCount = styled.span`
  margin: 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #484848;
`;

const Rating = props => (
  <div>
    <span>{props.rating}</span>
    <span>
      <Star fill="1" />
      <Star fill="1" />
      <Star fill="1" />
      <Star fill=".5" />
      <Star fill="0" />
    </span>
    <ReviewCount>{props.totalReviews}</ReviewCount>
  </div>
);

export default Rating;
