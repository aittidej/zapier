require('should');

require('../entry'); // must import me to babel polyfill!

var utils = require('../utils');

describe('utils', () => {
  it('should have babel polyfill set up', () => {
    global._babelPolyfill.should.eql(true);
  });

  it('should print a nice little table', () => {
    var table = utils.makeTable(
      [{id: 123, title: 'hello'}, {id: 456, title: 'world'}],
      [
        ['ID', 'id'],
        ['Title', 'title'],
        ['Missing', 'missing'],
      ]
    );
    table.indexOf('ID').should.be.above(0);
    table.indexOf('Title').should.be.above(0);
    table.indexOf('Missing').should.be.above(0);
    table.indexOf('123').should.be.above(0);
    table.indexOf('hello').should.be.above(0);
    table.indexOf('456').should.be.above(0);
    table.indexOf('world').should.be.above(0);
  });

  it('should parse some args', () => {
    var [args, opts] = utils.argParse(['hello', 'world', '--cat', '--lolz=hahaha']);
    args.should.eql(['hello', 'world']);
    opts.should.eql({cat: true, lolz: 'hahaha'});
  });

});
