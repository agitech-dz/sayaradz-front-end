import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  ModelEdit, ModelCreate } from './Model.js';
Enzyme.configure({ adapter: new Adapter() });

describe('Model', () => {
    const defaultProps = {
        basePath: '/Model',
        id: '1256',
        resource: 'models',
        location: {},
        match: {},
    };
    // Tests
    it('ModelEdit', () => {
        mount(
            <TestContext>
                <ModelEdit {...defaultProps} />
            </TestContext>
        );
    });
    it('ModelCreate', () => {
        mount(
            <TestContext>
                <ModelEdit {...defaultProps} />
            </TestContext>
        );
    });
});
