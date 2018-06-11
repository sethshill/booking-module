import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Header = styled.span`
  display: block;
  margin: 0px;
  padding: 0px 0px 4px 0px;
  font-size: 17px;
  font-weight: 200;
`;

const MainBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  border: 1px solid #DBDBDB;
  border-radius: 2px;
  font-weight: 600;
`;

const InputBox = styled.div`
  display: inline-block;
  position: relative;
  margin: 0px;
  padding: 8px;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
`;

const Input = styled.input`
  width: calc(50% - 36px);
  vertical-align: middle;
  height: 24px;
  line-height: 100%;
  border: 0px;
  font-size: 17px;
  color: #484848
`;

const Arrow = styled.svg`
  height: 24px;
  width: 24px;
  padding-right: 8px;
  vertical-align: middle;
`;

const Dates = props => (
  <MainDiv>
    <Header>Dates</Header>
    <MainBox>
      <InputBox>
        <Input type="text" placeholder="Check In" value={props.startDate} />
        <Arrow viewBox="0 0 24 24" focusable="false">
          <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
        </Arrow>
        <Input type="text" placeholder="Check Out" value={props.endDate} />
      </InputBox>
    </MainBox>
  </MainDiv>
);

Dates.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default Dates;
