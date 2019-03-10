import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import theme from './theme';
import MainRouting from './routing/MainRouting/MainRouting';
import { client } from './api/client';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../node_modules/react-vis/dist/style.css';

/* Render React in DOM element with ID root. */
ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <MainRouting />
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
