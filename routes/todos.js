const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getByIdTodo);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;