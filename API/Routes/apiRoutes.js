import users from '../Controller/userModelController';

export default function(app) {
    // Users
    app.route('/user')
        .get(users.getAll)
        .post(users.create);

    app.route('/user/:id')
        .get(users.get)
        .put(users.update)
        .delete(users.delete);
    
    app.get('/test', function(req, res) {
        res.send('Container works');
      });
      
}