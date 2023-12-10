const request = require('supertest')
const app = require('../server.js')


describe('get /', function() {
    it('valid route', function (done) {
        request(app)
        .get('/')
        .expect(200, done)
    })
 })