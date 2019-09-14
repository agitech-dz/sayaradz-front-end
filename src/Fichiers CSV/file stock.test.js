import React from 'react';
import { TestContext } from 'react-admin';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {handleForce} from './file stock.js';
Enzyme.configure({ adapter: new Adapter() });

describe("filestock", () => {
  
  const defaultProps = { data: [
    {
    numChassis: 12,
    color: 'c1',
    version: 'v1',
    options: 'o1',
    seller:'seller15'}]
};

it('handleForce', () => {
  mount(
      <TestContext>
          <handleForce {...defaultProps} />
      </TestContext>
  );
});
 
/*
  beforeEach(function() {
    
      global.fetch = jest.fn().mockImplementation(() => {
          var p = new Promise((resolve, reject) => {
            resolve({
              ok: true, 
              data: [
                {
                  numChassis: 12,
                  color: 'c1',
                  version: 'v1',
                  options: 'o1',
                  seller:'seller15'

                }
              ]
           , 
              json: function() { 
                return { data: [
                  {
                    numChassis: 12,
                    color: 'c1',
                    version: 'v1',
                    options: 'o1',
                    seller:'seller15'
                  }
                ]}
              }
            });
          });
    
          return p;
      });
    
    });
    it("handleForce", async function() {
      const response = await handleForce({...defaultProps});  
      console.log(response);
      expect(response.Id).toBe(1); 
    });*/
  });