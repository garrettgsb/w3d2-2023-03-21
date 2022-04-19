const express = require('express');
const app = express();

let lightStatus = 'off';
let onCount = 0;
let offCount = 0;

const lights = [
  { status: 'off', onCount: 0, offCount: 0 },
  { status: 'off', onCount: 0, offCount: 0 },
  { status: 'off', onCount: 0, offCount: 0 },
]

const renderLight = (light) => `
  <figure>
    <div class='light ${light.status}'></div>
    <a href='/lights/${light.idx}/on'>On (${light.onCount})</a>
    <a href='/lights/${light.idx}/off'>Off (${light.offCount})</a>
  </figure>
`;

app.get('/', (request, response) => {
  response.send(`
    <h1>Hi there</h1>
    <p>Welcome to my website</p>
    <a href='/lights/new'>New</a>
    <main>
      ${lights.map((light, idx) => renderLight({...light, idx})).join('\n')}
    </main>
    <style>
      .light {
        width: 100px;
        height: 100px;
        background: #CCC;
        border-radius: 100%;
      }
      .light.on {
        background: orange;
        box-shadow: 0 0 16px orange;
      }

      .light.off {
        box-shadow: inset 2px 2px 4px #555;
      }

      main {
        display: flex;
        flex-wrap: wrap;
      }
    </style>
  `);
});

app.get('/lights/:idx/on', (request, response) => {
  lights[request.params.idx].status = 'on';
  lights[request.params.idx].onCount++;
  response.redirect('/');
});

app.get('/lights/:idx/off', (request, response) => {
  lights[request.params.idx].status = 'off';
  lights[request.params.idx].offCount++;
  response.redirect('/');
});

app.get('/lights/new', (request, response) => {
  lights.push({ status: 'off', onCount: 0, offCount: 0 });
  response.redirect('/');
});

app.listen(8080, () => console.log('App is listening 👍'));
