import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #f0f0f0;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
  }
`;


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Home/>
      </div>
  );
}

export default App;
