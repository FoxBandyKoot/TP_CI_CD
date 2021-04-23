var chai = require('chai');
var request = require('supertest')("http://localhost:3000/");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);

var expect = chai.expect;


describe('User API Routes', function () {
    // In this test it's expected a task list of two tasks
    describe('GET /user', function () {
        it('returns a list of user', async function () {
            const response = await request.get("usereazeaz");
            expect(response.status).to.eql(200);
        });
    });

    // });
    // // Testing the save task expecting status 201 of success
    // describe('POST /user', function() {
    //   it('saves a new user', function(done) {
    //     request.post('/user')
    //       .send({ title: 'run', user: false })
    //       .expect(201)
    //       .end(function(err, res) {
    //         done(err);
    //       });
    //   });
    // });
    // // Here it'll be tested two behaviors when try to find a task by id
    // describe('GET /user/:id', function() {
    //   // Testing how to find a task by id
    //   it('returns a user by id', function(done) {
    //     var user = app.db('user').first();
    //     request.get('/user' + user.id)
    //       .expect(200)
    //       .end(function(err, res) {
    //         expect(res.body).to.eql(user);
    //         done(err);
    //       });
    //   });
    //   // Testing the status 404 for task not found
    //   it('returns status 404 when id is not found', function(done) {
    //     var user = { id: 'fakeId' }
    //     request.get('/user' + user.id)
    //       .expect(404)
    //       .end(function(err, res) {
    //         done(err);
    //       });
    //   });
    // });
    // // Testing how to update a task expecting status 201 of success
    // describe('PUT /user/:id', function() {
    //   it('updates a user', function(done) {
    //     var task = app.db('users').first();
    //     request.put('/users/' + task.id)
    //       .send({ title: 'travel', done: false })
    //       .expect(201)
    //       .end(function(err, res) {
    //         done(err);
    //       });
    //   });
    // });
    // // Testing how to delete a task expecting status 201 of success
    // describe('DELETE /user/:id', function() {
    //   it('removes a user', function(done) {
    //     var task = app.db('user').first();
    //     request.put('/user/' + task.id)
    //       .expect(201)
    //       .end(function(err, res) {
    //         done(err);
    //       });
    //   });
});