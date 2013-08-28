var genId = require('../index')()
  , should = require('should')

describe('testing gen-id', function (done) {

  beforeEach(function (){
  })

  it('should error if no format is set', function (done) {
    (function () {
      genId.generate()
    }).should.throw()

    done()
  })

  it('should error if invalid format is set', function (done) {
    (function () {
      genId.setFormat('not correct')
    }).should.throw()

    done()
  })

  it('should not error if valid format is set', function (done) {
    genId.setFormat('nnnnnnc')
    done()
  })

})