var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos', function(req, res){
        var starterTodos = [
            {
                username: 'test',
                todo: 'Comprar leche',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test2',
                todo: 'Comprar leche',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test3',
                todo: 'Comprar leche',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });

}