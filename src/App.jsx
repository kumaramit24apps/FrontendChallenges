import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Template from './components/Template';

const AppLayout = () => <Template />;

const app = document.getElementById('app');
const appRoot = ReactDOM.createRoot(app);

appRoot.render(<AppLayout />);
