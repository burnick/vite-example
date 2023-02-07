import { HashRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

function AppContainer() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

const Container = styled.div`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  margin: 0;
  display: flex;
  place-items: center;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  min-height: 100vh;
`;

export default AppContainer;
