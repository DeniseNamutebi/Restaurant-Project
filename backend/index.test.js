const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const server = require('../server');



describe("Connection", () => {

    var server;

    beforeEach(function() {
        server = require('./server').default;
      });

    test('Server is running', async() => {
        
        expect(console.log).toHaveBeenCalledWith('server is running')
    })

})
