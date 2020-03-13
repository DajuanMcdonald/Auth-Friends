import React from 'react';
import {render} from '@testing-library/react';
import App from './App';


describe('App.js component tests', () => {

    test('renders Link of Friends from App.js', () => {
        const {getByText} = render(<App/>);
        const linkElement = getByText(/Friends/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Link of Login from App.js', () => {
        const {getByText} = render(<App/>);
        const linkElement = getByText(/Login/i);
        expect(linkElement).toBeInTheDocument();
    });

})

