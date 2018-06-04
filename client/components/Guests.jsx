import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Header = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 200;
  margin: 0px;
  padding: 0px 0px 4px 0px;
`;

const MainBox = styled.div`
  font-weight: 600;
  position: relative;
  display: block;
  border: 1px solid #DBDBDB;
  border-radius: 2px;
  width: 100%;
`;

const GuestButton = styled.button`
  position: relative;
  background: #ffffff
  text-align: left;
  border-radius: 2px;
  padding: 8px;
  line-height: normal;
  border: 1px solid #DBDBDB;
  width: 100%;
`;

const GuestButtonText = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 17px;
  color: #484848
`;

const DownArrow = styled.svg`
  height:16px;
  width:16px;
  display:inline;
  fill:#484848;
`;

const Guests = () => (
  <MainDiv>
    <Header>Guests</Header>
    <MainBox>
      <GuestButton>
        <GuestButtonText>1 guest</GuestButtonText>
        <DownArrow viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
          <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd" />
        </DownArrow>
      </GuestButton>
    </MainBox>
  </MainDiv>
);

export default Guests;
