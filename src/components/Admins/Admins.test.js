import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AdminEdit, AdminCreate } from './Admins';
Enzyme.configure({ adapter: new Adapter() });

describe('Admins', () => {
    const defaultProps = {
        basePath: '/admins',
        id: '1',
        resource: 'admins//',
        location: {},
        match: {},
    };
    // Tests
    it('AdminList', () => {
        mount(
            <TestContext>
                <AdminEdit {...defaultProps}/>
            </TestContext>
        );
    });
    it('ManufacturerCreate', () => {
        mount(
            <TestContext>
                <AdminCreate {...defaultProps} />
            </TestContext>
        );
    });
});
