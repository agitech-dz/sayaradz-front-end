import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';
Enzyme.configure({ adapter: new Adapter() });

describe('Dashboard', () => {
    // Tests
    it('renders without crashing', () => {
        mount(
            <TestContext>
                <Dashboard/>
            </TestContext>
        );
    });
});
