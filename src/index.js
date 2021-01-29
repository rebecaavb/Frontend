import React from 'react';
import { render } from 'react-dom';
import App from './App';

//renderizando h1 dentro do meu id da div do index.html
//render(<h1>Hello World</h1>, document.getElementById('app'));

render(<App />, document.getElementById('app'));