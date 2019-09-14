import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  ColorsEdit, ColorsCreate } from './Colors.js';
Enzyme.configure({ adapter: new Adapter() });

describe('Colors', () => {
    const defaultProps = {
        basePath: '/Colors',
        id: 'c1',
        resource: 'colors',
        location: {},
        match: {},
    };
    // Tests
    it('ColorsEdit', () => {
        mount(
            <TestContext>
                <ColorsEdit {...defaultProps} />
            </TestContext>
        );
    });
    it('ColorsCreate', () => {
        mount(
            <TestContext>
                <ColorsEdit {...defaultProps} />
            </TestContext>
        );
    });
});
