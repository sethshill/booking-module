import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  margin-top: 24px;
`;

const Button = styled.button`
  display: inline-block;
  margin: 0px;
  padding: 12px 24px 12px 24px;
  width 100%;
  min-width: 77.66563145999496px;
  background: #FF5A5F;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  line-height: 21px;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: transparent;
  color: #ffffff;
  cursor: pointer;
`;

const DeleteButton = (props) => (
  <Button onClick={ () => props.handleClick() }>DELETE</Button>
);

export default DeleteButton;
