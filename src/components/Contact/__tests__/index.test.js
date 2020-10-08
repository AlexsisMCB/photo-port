import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('ContactForm h1 tag match text', () => {
    it('matches Contact me', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('contact-title')).toHaveTextContent('Contact me');
    });
})

describe('Button match text', () => {
    it('matches "Submit"', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>);
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    });
})