import React from 'react';
import styled from 'styled-components';

const BlueStar = styled.svg`
  height: 1em;
  width: 1em;
  display: in-line;
  fill: #008489;
  font-size: 9px;
`;

const EmptyStar = styled.svg`
  height: 1em;
  width: 1em;
  display: in-line;
  fill: #D8D8D8;
  font-size: 9px;
`;

const Star = (props) => {
  if (props.fill === '1') {
    return (
      <BlueStar viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
      </BlueStar>
    );
  } else if (props.fill === '.5') {
    return (
      <span>
        <span>
          <EmptyStar viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
            <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
          </EmptyStar>
        </span>
        <span>
          <BlueStar viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
            <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
          </BlueStar>
        </span>
      </span>
    );
  } else if (props.fill === '0') {
    return (
      <EmptyStar viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
      </EmptyStar>
    );
  }
};

export default Star;
