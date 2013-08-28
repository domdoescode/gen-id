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

  // it('should run a bunch and never get duplicates', function (done) {
  //   var ids = {}
  //     , id
  //     , i=1000

  //   genId.setFormat('nnnnnnnc')

  //   while(i--) {
  //     id = genId.generate()
  //     should.equal(undefined, ids[id])
  //     id.should.have.length(8)
  //     ids[id] = 1
  //   }
  //   done()
  // })

})