import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  OptionsEdit, OptionsCreate } from './Options.js';
Enzyme.configure({ adapter: new Adapter() });

describe('Options', () => {
    const defaultProps = {
        basePath: '/Options',
        id: 'o1',
        resource: 'options',
        location: {},
        match: {},
    };
    // Tests
    it('OptionsEdit', () => {
        mount(
            <TestContext>
                <OptionsEdit {...defaultProps} />
            </TestContext>
        );
    });
    it('OptionsCreate', () => {
        mount(
            <TestContext>
                <OptionsEdit {...defaultProps} />
            </TestContext>
        );
    });
});
