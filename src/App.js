import styled from 'styled-components';
import Breakpoints from './Breakpoints';
import PriceGrid from './components/price-grid';

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  padding: 1em;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 2em 3em;
  }
`;

export default function App() {
  return (
    <Container>
      <PriceGrid />
    </Container>
  );
}
