const express = require ('express'); 
const chai = require ('chai'); 
const request = require ('supertest');

const app = express ();

describe('Task API Routes', function() {
    // This function will run before every test to clear database
    beforeEach(function(done) {
      app.db.object = {};
      app.db.object.tasks = [
        { id: uuid(), title: 'study', done: false },
        { id: uuid(), title: 'work', done: true }
      ];
      app.db.write();
      done();
    });
    // In this test it's expected a task list of two tasks
    describe('GET /user', function() {
      it('returns a list of user', function(done) {
        request.get('/user')
          .expect(200)
          .end(function(err, res) {
            expect(res.body).to.have.lengthOf(2);
            done(err);
          });
      });
    });
    // Testing the save task expecting status 201 of success
    describe('POST /user', function() {
      it('saves a new user', function(done) {
        request.post('/user')
          .send({ title: 'run', done: false })
          .expect(201)
          .end(function(err, res) {
            done(err);
          });
      });
    });
    // Here it'll be tested two behaviors when try to find a task by id
    describe('GET /user/:id', function() {
      // Testing how to find a task by id
      it('returns a user by id', function(done) {
        var task = app.db('user').first();
        request.get('/user' + task.id)
          .expect(200)
          .end(function(err, res) {
            expect(res.body).to.eql(task);
            done(err);
          });
      });
      // Testing the status 404 for task not found
      it('returns status 404 when id is not found', function(done) {
        var task = { id: 'fakeId' }
        request.get('/user' + task.id)
          .expect(404)
          .end(function(err, res) {
            done(err);
          });
      });
    });
    // Testing how to update a task expecting status 201 of success
    describe('PUT /user/:id', function() {
      it('updates a task', function(done) {
        var task = app.db('tasks').first();
        request.put('/tasks/' + task.id)
          .send({ title: 'travel', done: false })
          .expect(201)
          .end(function(err, res) {
            done(err);
          });
      });
    });
    // Testing how to delete a task expecting status 201 of success
    describe('DELETE /user/:id', function() {
      it('removes a task', function(done) {
        var task = app.db('user').first();
        request.put('/user/' + task.id)
          .expect(201)
          .end(function(err, res) {
            done(err);
          });
      });
    });
  });