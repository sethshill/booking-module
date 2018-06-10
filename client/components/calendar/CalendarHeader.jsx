import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin: 0 auto;
  width: 274px;
  height 25px;
  padding-top: 22px;
  padding-bottom: 22px;
`;

const LeftArrowButton = styled.button`
  position: absolute;
  float: left;
  cursor: pointer;
  line-height: 0.78;
  color: rgb(117, 117, 117);
  top: 18px;
  left: 22px;
  border: solid 1px rgb(228, 231, 231);
  border-radius: 3px;
  padding: 6px 9px;
`;

const RightArrowButton = styled.button`
  position: absolute;
  float: right;
  cursor: pointer;
  line-height: 0.78;
  color: rgb(117, 117, 117);
  top: 18px;
  right: 22px;
  border: solid 1px rgb(228, 231, 231);
  border-radius: 3px;
  padding: 6px 9px;
`;

const Arrow = styled.svg`
  height: 19px;
  width: 19px;
  fill: rgb(130, 136, 138);
`;

const Month = styled.div`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  vertical-align: center;
  font-weight: bold;
  color: rgb(72, 72, 72);
`;

const CalendarHeader = props => (
  <MainDiv>
    <LeftArrowButton onClick={props.handleLeftArrowClick}>
      <Arrow viewBox="0 0 1000 1000">
        <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" />
      </Arrow>
    </LeftArrowButton>
    <Month>{props.month} {props.year}</Month>
    <RightArrowButton onClick={props.handleRightArrowClick}>
      <Arrow viewBox="0 0 1000 1000">
        <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" />
      </Arrow>
    </RightArrowButton>
  </MainDiv>
);

CalendarHeader.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
};

export default CalendarHeader;
