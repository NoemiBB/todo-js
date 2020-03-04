import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml(todo) ); // Cuando el argumento que tenemos, 'todo', es el único que se envía a otra función, 'crearTodoHtml' => lo podemos acortar:
todoList.todos.forEach(crearTodoHtml); // El primer argumento del callback del forEach es el que se manda a la función 'crearTodoHtml'


// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('clave', 'valorLocal');
// sessionStorage.setItem('clave', 'valorSession');