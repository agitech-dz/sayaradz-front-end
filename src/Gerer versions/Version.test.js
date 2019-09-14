import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  VersionEdit, VersionCreate } from './Version.js';
Enzyme.configure({ adapter: new Adapter() });

describe('Version', () => {
    const defaultProps = {
        basePath: '/Version',
        id: 'v1',
        resource: 'versions',
        location: {},
        match: {},
    };
    // Tests
    it('VersionEdit', () => {
        mount(
            <TestContext>
                <VersionEdit {...defaultProps} />
            </TestContext>
        );
    });
    it('VersionCreate', () => {
        mount(
            <TestContext>
                <VersionEdit {...defaultProps} />
            </TestContext>
        );
    });
});
