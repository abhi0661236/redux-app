import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App/App.jsx';
import store from './Store.js';
import { Provider } from 'react-redux';

store.subscribe(() => {
    // console.log(store.getStore());
});


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<>
    <Provider store={store}>
        <App />
    </Provider>
</>)