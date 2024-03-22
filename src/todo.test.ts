import { ToDoList } from './TodoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  let todoInstance: ToDoList

  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
        const todoInstance = new ToDoList()
        const invalidValue: any = {
          invalidField: 'invalidValue'
        }
        todoInstance.add(invalidValue)
        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([])
    })
  })


  describe('Testing removeTask', () => {
    test('should remove task at given index', () => {
      const initialTasks = [anyTask]
      initialTasks.forEach(task => todoInstance.add(task))

      const indexToRemove = 0
      todoInstance.removeTask(indexToRemove)

      const tasks = todoInstance.getTasks()
      expect(tasks.length).toBe(initialTasks.length - 1)
    })

    test('should not remove task if index is out of bounds', () => {
      const initialTasks = [anyTask]
      initialTasks.forEach(task => todoInstance.add(task))

      const outOfBoundsIndex = 1
      todoInstance.removeTask(outOfBoundsIndex)

      const tasks = todoInstance.getTasks()
      expect(tasks.length).toBe(initialTasks.length)
    })
  })
})