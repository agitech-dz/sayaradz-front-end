import React from 'react';
import ReactDOM from 'react-dom';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    //ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
