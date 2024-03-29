const { Todo } = require('../models');
const { TodoItem } = require('../models');

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Todo
      .findByPk(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then((todo) => {
        // eslint-disable-next-line no-unused-expressions
        !todo ? res.status(404).send({
          message: 'Todo not found',
        }) : res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Todo
      .findByPk(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then((todo) => {
        // eslint-disable-next-line no-unused-expressions
        !todo ? res.status(404).send({
          message: 'Todo not found',
        }) : todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Todo
      .findByPk(req.params.todoId)
      .then((todo) => {
        // eslint-disable-next-line no-unused-expressions
        !todo ? res.status(404).send({
          message: 'Todo not found',
        }) : todo
          .destroy()
          .then(() => res.status(200).send({
            message: 'Deleted successfully',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
