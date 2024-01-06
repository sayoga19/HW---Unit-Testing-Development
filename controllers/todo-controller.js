const todoRepository = require('../repositories/todo-repository');

class todoController {
  static async getAllTodos(req, res, next) {
    try {
      const todo = await todoRepository.getAllTodos();
      res.status(200).json({message:'List all todos', Todo:todo});
    } catch (error) {
      next(error);
    }
  }
  static async getByIdTodo(req, res, next) {
    try {
      const todo = await todoRepository.getByIdTodo(req.params.id);
      if(todo) {
        res.status(200).json({message:'Detail todo', Todo:todo});
      } else {
        res.status(404).json({message:'Todo not found'});
      }
    } catch (error) {
      next(error);
    }
  }
  static async createTodo(req, res, next) {
    try {
      const todo = await todoRepository.createTodo(req.body.title, req.body.status);
      res.status(201).json({message:'Todo created', Todo:todo});
    } catch (error) {
      next(error);
    }
  }
  static async deleteTodo(req, res, next) {
    try {
      const todo = await todoRepository.getByIdTodo(req.params.id);
      if(todo) {
        await todoRepository.deleteTodo(req.params.id);
        res.status(200).json({message:'Todo deleted'});
      } else {
        res.status(404).json({message:'Todo not found'});
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = todoController;