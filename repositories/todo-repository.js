const { Todo } = require('../models')

class todoRepository {
  static async getAllTodos() {
    return await Todo.findAll(
      {
        where: {
          status: 'active'
        }
      }
    )
  }
  static async getByIdTodo(id) {
    return await Todo.findByPk(id)
  }
  static async createTodo(title, status) {
    return await Todo.create({
      title,
      status
    })
  }
  static async deleteTodo(id) {
    return await Todo.update(
      {status: 'inactive'},
      {
        where: {
          id
        }
      }
    )
  }
}

module.exports = todoRepository;