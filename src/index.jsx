import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Main from './pages/Main/container';
// import { Formik } from 'formik';

import store from './store';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));
