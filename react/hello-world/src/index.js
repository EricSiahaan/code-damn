import React from 'react';
import ReactDOM from 'react-dom/client';
import abc, { add, sub } from './calculator'
import App from './components/App';

// alert(add(2, 5))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <h1>Hello World</h1>
// );

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
