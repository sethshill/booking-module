import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestPicker from './GuestPicker.jsx';

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

const GuestButton = styled.button`
  position: relative;
  padding: 8px;
  width: 100%;
  background: #ffffff
  border: 0px;
  border-radius: 2px;
  text-align: left;
  line-height: normal;
`;

const GuestButtonText = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 17px;
  color: #484848
`;

const DownArrow = styled.svg`
  height: 16px;
  width: 16px;
  display: inline;
  fill: #484848;
`;

const GuestsButton = (props) => {
  let guestText;
  let guestPicker;

  if (props.totalGuestsSelected > 1) {
    guestText = <GuestButtonText>{props.totalGuestsSelected} guests</GuestButtonText>;
  } else {
    guestText = <GuestButtonText>1 guest</GuestButtonText>;
  }

  if (props.display) {
    guestPicker = (<GuestPicker
      guestsAllowed={props.guestsAllowed}
      guestsSelected={props.guestsSelected}
      handleClick={props.handleGuestPickerClick}
      handleClose={props.handleClick}
    />);
  } else {
    guestPicker = null;
  }

  return (
    <MainDiv>
      <Header>Guests</Header>
      <MainBox>
        <GuestButton onClick={props.handleClick}>
          {guestText}
          <DownArrow viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
          </DownArrow>
        </GuestButton>
      </MainBox>
      {guestPicker}
    </MainDiv>
  );
};

GuestsButton.propTypes = {
  display: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  totalGuestsSelected: PropTypes.number.isRequired,
  guestsAllowed: PropTypes.shape({
    maxAdults: PropTypes.number.isRequired,
    maxChildren: PropTypes.number.isRequired,
    maxInfants: PropTypes.number.isRequired,
  }).isRequired,
  guestsSelected: PropTypes.shape({
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
    infants: PropTypes.number.isRequired,
  }).isRequired,
  handleGuestPickerClick: PropTypes.func.isRequired,
};

export default GuestsButton;
