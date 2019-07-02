const { TodoItem } = require('../models');

module.exports = {
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId,
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return TodoItem
      .findOne({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then((todoItem) => {
        // eslint-disable-next-line no-unused-expressions
        !todoItem ? res.status(404).send({
          message: 'Todo item not found',
        }) : todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete,
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return TodoItem
      .findOne({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then((todoItem) => {
        // eslint-disable-next-line no-unused-expressions
        !todoItem ? res.status(404).send({
          message: 'Todo item not found',
        }) : todoItem
          .destroy()
          .then(() => res.status(200).send({ message: 'Todo item deleted successfully' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
