import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/main/ui/MainPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import s from './index.module.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MainPage />
    </Provider>
);