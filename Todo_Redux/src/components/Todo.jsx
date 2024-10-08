import React from 'react';
import './Todo.css'
import { useSelector, useDispatch } from 'react-redux';
import { setNewTodo, addTodo, deleteTodo, toggleTodo, setEditingTodoId, updateTodo, setEditingTitle } from '../slices/todoSlice';

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const newTodo = useSelector((state) => state.todos.newTodo);
  const editingTodoId = useSelector((state) => state.todos.editingTodoId); 
  const editingTitle = useSelector((state) => state.todos.editingTitle);   
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo()); 
  };

  const handleEditTodo = (id) => {
    dispatch(setEditingTodoId(id)); 
  };

  const handleSaveTodo = () => {
    dispatch(updateTodo());
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); 
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        value={newTodo}  
        onChange={(e) => dispatch(setNewTodo(e.target.value))} 
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="todo-button">Add Todo</button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-list-item">
            {editingTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingTitle} 
                  onChange={(e) => dispatch(setEditingTitle(e.target.value))} 
                  className="edit-input"
                />
                <button onClick={handleSaveTodo} className="todo-button">Save</button>
              </>
            ) : (
              <>
                <span className={`todo-title ${todo.completed ? 'completed' : ''}`}>
                  {todo.title}
                </span>
                <button onClick={() => handleEditTodo(todo.id)} disabled={todo.completed} className="todo-button">Edit</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))} className="todo-button">Delete</button>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="todo-checkbox"
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
