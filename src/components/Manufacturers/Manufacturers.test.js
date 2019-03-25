import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ManufacturerEdit, ManufacturerCreate } from './Manufacturers';
Enzyme.configure({ adapter: new Adapter() });

describe('Manufacturers', () => {
    const defaultProps = {
        basePath: '/manufacturers',
        id: '1',
        resource: 'manufacturers',
        location: {},
        match: {},
    };
    // Tests
    it('ManufacturerEdit', () => {
        mount(
            <TestContext>
                <ManufacturerEdit {...defaultProps} />
            </TestContext>
        );
    });
    it('ManufacturerCreate', () => {
        mount(
            <TestContext>
                <ManufacturerEdit {...defaultProps} />
            </TestContext>
        );
    });
});
