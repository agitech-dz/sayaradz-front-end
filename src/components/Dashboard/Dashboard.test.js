import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../Dashboard/Dashboard';
Enzyme.configure({ adapter: new Adapter() });

describe('Dashboard', () => {
    // Tests
    it('Dashboard', () => {
        mount(
            <TestContext>
                <Dashboard/>
            </TestContext>
        );
    });
});
