const ToDo = require('../models/todo');

function getAll(req, res) {
    res.render('index', { todos: ToDo.toDoArray });
}

function insertTodo(req, res) {

    ToDo.toDoArray.push({ todo: req.body.todo, done: false });

    res.redirect('/');
}

function deleteTodo(req, res) {

    ToDo.toDoArray.splice(req.params.id, 1);

    res.redirect('/');
}
module.exports = {
    getAll,
    insertTodo,
    deleteTodo
}