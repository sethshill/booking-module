import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Picker from './Picker.jsx';

const OuterDiv = styled.div`
  position: absolute;
  margin-top: 16px;
  margin-bottom: 16px;
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

const SmallText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #484848;
  padding-top: 4px;
  padding-bottom: 0px;
`;

const GuestPicker = props => (
  <OuterDiv>
    <MainDiv>
      <Picker
        handleClick={props.handleClick}
        label="Adults"
        max={props.guestsAllowed.maxAdults}
        maxTotal={props.guestsAllowed.maxAdults}
        selected={props.guestsSelected.adults}
        selectedTotal={props.guestsSelected.adults + props.guestsSelected.children}
      />
      <Picker
        handleClick={props.handleClick}
        label="Children"
        smallText="Ages 2 - 12"
        max={props.guestsAllowed.maxChildren}
        maxTotal={props.guestsAllowed.maxAdults}
        selected={props.guestsSelected.children}
        selectedTotal={props.guestsSelected.adults + props.guestsSelected.children}
      />
      <Picker
        handleClick={props.handleClick}
        label="Infants"
        smallText="Under 2"
        max={props.guestsAllowed.maxInfants}
        selected={props.guestsSelected.infants}
      />
      <SmallText>
        {props.guestsAllowed.maxAdults} guests maximum.
        Infants don’t count toward the number of guests.
      </SmallText>
      <button>Close</button>
    </MainDiv>
  </OuterDiv>
);

GuestPicker.propTypes = {
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
  handleClick: PropTypes.func.isRequired,
};

export default GuestPicker;
