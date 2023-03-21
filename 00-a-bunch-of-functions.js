const fs = require('fs');

function readCounter() { return Number(fs.readFileSync('./counter')); }
function writeCounter(value) { return fs.writeFileSync('./counter', String(value));  }

function increment() { writeCounter(readCounter() + 1); }
function decrement() { writeCounter(readCounter() - 1); }
function setTo(value) { writeCounter(Number(value)); }
function reset() { setTo(0); }

// Mapping between Javascript functions and command line interface
{
  // const [_interpreter, _file, operation, value] = process.argv;
  // if (operation === 'increment') { increment(); console.log(`After ${operation}: ${readCounter()}`)}
  // else if (operation === 'decrement') { decrement(); console.log(`After ${operation}: ${readCounter()}`)}
  // else if (operation === 'set') { setTo(value); console.log(`After ${operation}: ${readCounter()}`)}
  // else if (operation === 'reset') { reset(); console.log(`After ${operation}: ${readCounter()}`)}
  // else { console.log(`Count is: ${readCounter()}`) }
}

//Mapping between Javascript functions and HTTP interface
{
  const express = require('express');
  const app = express();
  const PORT = 3000;

  // MUST add this middleware for request.body to contain form values
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (request, response) => { response.send(`
    <h1>Count is: ${readCounter()}</h1>
    <a href='/increment'>Increment</a>
    <a href='/decrement'>Decrement</a>
    <form method='POST' action='/reset'>
      <button>Reset</button>
    </form>

    <h2>Set with GET</h2>
    <form method='GET' action='/set'>
      <input name='newCounterValue'>
      <button>Set</button>
    </form>

    <h2>Set with POST</h2>
    <form method='POST' action='/set'>
      <input name='newCounterValue'>
      <button>Set</button>
    </form>
  `)});

  app.get('/increment', (request, response) => { increment(); response.redirect('/') });
  app.get('/decrement', (request, response) => { decrement(); response.redirect('/') });
  app.post('/reset', (request, response) => { reset(); response.redirect('/') });
  app.get('/set', (request, response) => {
    /*
    Three places to get data from the request object:
    request.query -> The variables in the address bar, usually from a GET request
    request.body -> The variables (usually) from a POST request
    request.params -> The variables in the URL (e.g. /users/:id)
    */
    const { newCounterValue } = request.query;
    if (newCounterValue) setTo(newCounterValue);
    response.redirect('/');
  });

  app.post('/set', (request, response) => {
    const { newCounterValue } = request.body;
    if (newCounterValue) setTo(newCounterValue);
    response.redirect('/');
  });

  app.listen(PORT, () => { console.log(`Listening on ${PORT}!`)});
}
