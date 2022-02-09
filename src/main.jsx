import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

const rootElement = document.getElementById("root");
if (!element) {
  throw new Error("should include #root in html doc.");
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)
