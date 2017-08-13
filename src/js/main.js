import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import appApi from './utils/appApi';

appApi.getContacts();

render(<App />, document.getElementById('app'));
