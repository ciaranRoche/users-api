var logger = require('winston');
var server = require('../../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var seed = require('../../seed/seed');
var User = require('../../models/user');
var expect = require('chai').expect;

chai.should();
chai.use(chaiHttp);

var url = 'http://127.0.0.1:8001';


describe('Users', function() {

  // Before our test suite
  before(function(done) {
    // Start our app on an alternative port for acceptance tests
    server.listen(8001, function() {
      logger.info('Listening at http://localhost:8001 for acceptance tests');

      // Seed the DB with our users
      seed(function(err) {
        done(err);
      });
    });
  });

  describe('/GET users', function() {
    it('should return a list of users', function(done) {
      chai.request(url)
        .get('/users')
        .end(function(err, res) {
          res.body.should.be.a('array');
          res.should.have.status(200);
          res.body.length.should.be.eql(100);
          done();
        });
    });
  });

  describe('/GET users/:id', function() {
    it('should return a single user', function(done) {
      // Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;

        // Read this user by id
        chai.request(url)
          .get('/users/' + id)
          .end(function(err, res) {
            res.should.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body.name.first).to.be.a('string');
            done();
          });
      });
    });
  });

  describe('/DELETE users/delete/:id', function() {
    it('should delete a single user', function(done) {
      //Find a user in the DB
      User.findOne({}, function(err, user) {
        var id = user._id;
        // Delete user by id
        chai.request(url)
          .delete('/users/delete/' + id)
          .end(function(err, res) {
            res.should.have.status(200);
            // Find user with same id should be null
            User.findById(id, function(err, user) {
              expect(user).to.be.a('null');
              done();
            });
          });
      });
    });
  });

  // This is failing, despite the add function working
  describe('/POST users/add/', function() {
    it('should create a single user', function(done) {
      var user = {
        'gender' : 'male',
        'name' : {
          'title' : 'mr',
          'first' : 'test',
          'last' : 'roche'
        },
        'location' : {
          'street' : 'street name',
          'city' : 'waterford',
          'state' : 'ireland',
          'zip' : 12344
        },
        'email' : 'mail@mail.com',
        'username' : 'muldoon',
        'password' : '12345',
        'dob' : 234143432,
        'phone' : '3423423',
        'cell' : '23423423',
        'PPS' : 2342434,
        'picture' : {
          'large' : 'https://randomuser.me/api/portraits/med/women/60.jpg',
          'medium' : 'https://randomuser.me/api/portraits/med/women/60.jpg',
          'thumbnail' : 'https://randomuser.me/api/portraits/med/women/60.jpg'
        }};


      // Create a new user
      chai.request(url)
        .post('/users/add/')
        .send(user)
        .end(function(err, res) {
          res.should.have.status(200);
          expect(res.body.gender).to.be.a('string');
          done();
        });
    });
  });
});


