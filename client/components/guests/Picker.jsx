import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  height: 34px;
  display: table; 
`;

const LabelContainer = styled.div` 
  float: left;
  width: 120px;
  vertical-align: middle;
`;

const SmallText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #484848;
  padding-top: 4px;
  padding-bottom: 0px;
`;

const ButtonContainer = styled.div`
  display: table;
  width: 120px;
  float: left;
  text-align: center;
`;

const CircleButton = styled.button`
  display: inline-block;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  position: relative;
  touch-action: manipulation;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgb(0, 132, 137);
  background: transparent;
`;

const PlusMinusContainer = styled.span`
  top: 50%;
  left 50%;
  font-size: 16px;
`;

const PlusMinus = styled.svg`
  height: 1em; 
  width: 1em; 
  display: block; 
  fill: rgb(0, 132, 137);
`;

const Count = styled.span`
  vertical-align: middle;
  display: table-cell;
`;

const Picker = props => (
  <MainDiv>
    <LabelContainer>
      {props.label}
      <SmallText>{props.smallText}</SmallText>
    </LabelContainer>
    <ButtonContainer>
      <CircleButton
        onClick={(e) => {
          if ((props.label === 'Adults' && props.selected > 1) || (props.label !== 'Adults' && props.selected > 0)) {
            props.handleClick(e, props.label, -1);
          }
        }}
      >
        <PlusMinusContainer>
          <PlusMinus viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </PlusMinus>
        </PlusMinusContainer>
      </CircleButton>
      <Count>{props.selected}</Count>
      <CircleButton
        onClick={(e) => {
          if (props.selected < props.max && props.selectedTotal < props.maxTotal) {
            props.handleClick(e, props.label, 1);
          }
        }}
      >
        <PlusMinusContainer>
          <PlusMinus viewBox="0 0 24 24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" />
          </PlusMinus>
        </PlusMinusContainer>
      </CircleButton>
    </ButtonContainer>
  </MainDiv>
);

Picker.propTypes = {
  label: PropTypes.string.isRequired,
  smallText: PropTypes.string,
  max: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  maxTotal: PropTypes.number,
  selectedTotal: PropTypes.number,
};

Picker.defaultProps = {
  smallText: '',
  maxTotal: 100,
  selectedTotal: 0,
};

export default Picker;
