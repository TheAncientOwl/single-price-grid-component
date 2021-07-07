import styled, { css } from 'styled-components';
import Breakpoints from '../../Breakpoints';
import Colors from '../../Colors';

const CardPadding = '2em';

export const Card = styled.div`
  margin: auto;
  width: 35em;
  min-height: 25em;

  border-radius: 0.5em;
  overflow: hidden;

  display: grid;
  grid-template-rows: 45% 55%;

  box-shadow: 0.35em 0.35em 0.6em ${Colors.blue};

  @media (max-width: ${Breakpoints.mobile}) {
    display: block;
  }
`;

export const Top = styled.section`
  background: white;

  padding: ${CardPadding};
`;

export const Title = styled.div(
  ({ color, fontSize }) => css`
    color: ${color || 'red'};
    font-weight: bold;
    font-size: ${fontSize || '1.2em'};
  `
);

export const Subtitle = styled.div(
  ({ color }) => css`
    color: ${color || 'red'};
    font-weight: bold;
    margin-top: 1.2em;
  `
);

export const Paragraph = styled.div(
  ({ color }) => css`
    color: ${color || 'red'};
    margin-top: 1em;
    font-size: 0.9em;
    line-height: 1.2em;
  `
);

export const Bottom = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: ${Breakpoints.mobile}) {
    display: block;
  }
`;

export const BottomSection = styled.section(
  ({ bgColor }) => css`
    display: flex;
    flex-direction: column;
    background: ${bgColor || 'white'};
    padding: ${CardPadding};
  `
);

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Em = styled.span`
  font-size: 2em;
  margin: 0em 0.2em 0.3em 0;
`;

export const SignUpButton = styled.div`
  margin: 1em auto;
  border-radius: 0.5em;
  background: ${Colors.yellow};
  border-color: 1px solid ${Colors.blue};
  box-shadow: 0.2em 0.2em 0.6em ${Colors.blue};
  color: white;
  font-weight: bold;
  width: 70%;
  text-align: center;
  padding: 1em;
  cursor: pointer;
  transition: 100ms linear;

  :hover {
    transform: scale(1.05);
    transition: 100ms linear;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 0.1em;
`;
