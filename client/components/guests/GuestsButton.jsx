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

  if (props.guestsSelected > 1) {
    guestText = <GuestButtonText>{props.guestsSelected} guests</GuestButtonText>;
  } else {
    guestText = <GuestButtonText>1 guest</GuestButtonText>;
  }

  return (
    <MainDiv>
      <Header>Guests</Header>
      <MainBox>
        <GuestButton>
          {guestText}
          <DownArrow viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
          </DownArrow>
        </GuestButton>
      </MainBox>
    </MainDiv>
  );
};

GuestsButton.propTypes = {
  guestsSelected: PropTypes.number.isRequired,
};

export default GuestsButton;
