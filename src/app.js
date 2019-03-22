import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/my-app';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<MyApp options={['Dollar', 'Junior', 'Neo']}/>, document.getElementById('app'));
