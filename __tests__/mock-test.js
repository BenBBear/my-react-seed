"use strict";

jest.dontMock('../index.js');

import React from 'react/addons';
let T = React.addons.TestUtils;


/*
 Reference: https://facebook.github.io/react/docs/test-utils.html
 */
describe('Mock Test', function() {
    
    it('Should be OK', function() {
        expect('true').toBe('true');
    });

});
