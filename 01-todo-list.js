/*
CRUD

Create
Read
Update
Delete

BREAD

Browse
Read
Edit
Add
Delete

REST
Mapping BREAD actions to resources

Routes for Todos:

Browse - GET /todos
Read   - GET /todos/:id
Edit   - POST /todos/:id
Add    - POST /todos
Delete - POST /todos/:id/delete

Unconventional "Edits":
Complete   - POST /todos/:id/complete
Archive    - POST /todos/:id/archive
*/

const todos = [
  "Get milk",
  "Wash car",
  "Walk dog",
];

// Add
function addTodo(todoText) {
  todos.push(todoText);
}

// Delete
function deleteTodo(idx) {
  if (!todos[idx]) throw new Error(`No todo at index ${idx}!`);
  todos.splice(idx, 1);
}

// Edit
function editTodo(idx, newText) {
  if (!todos[idx]) throw new Error(`No todo at index ${idx}!`);
  todos[idx] = newText;
}

// Browse
function viewTodos() {
  return `<h1>Todos:</h1>
  <ul>
  ${todos.map((todo, idx) => `
    <li>
      ${todo} [${idx}]
      <form method='POST' action='/todos/${idx}'>
        <input name='todoText'>
        <button>✏️</button>
      </form>
      <form method='POST' action='/todos/${idx}/delete'>
          <button>🚮</button>
      </form>
    </li>
  `).join('\n')}
  </ul>
  <h2>Add Todo</h2>
  <form method='POST' action='/todos'>
    <input name='todoText'>
    <button>➕</button>
  </form>
  `;
}

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => { response.send(viewTodos()) });
// Edit
app.post('/todos/:id', (request, response) => {
  const { id } = request.params;
  const { todoText } = request.body;
  editTodo(id, todoText);
  response.redirect('/');
});

// Add
app.post('/todos', (request, response) => {
  const { todoText } = request.body;
  addTodo(todoText);
  response.redirect('/');
});

// Delete
app.post('/todos/:id/delete', (request, response) => {
  const { id } = request.params;
  deleteTodo(id);
  response.redirect('/');
});
app.listen(8080, () => console.log('Listening on 8080 👍'));
