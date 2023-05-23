import './App.css';


function Movie1(props) {
  return (
    <div>
      <h1>Filme 1</h1>
      <ul>
        <li>{props.title}</li>
        <li>{props.diretor}</li>
        <li>{props.ano}</li>
      </ul>
    </div>
  );
}
function Movie2(props) {
  return (
    <div>
      <h1>Filme 2</h1>
      <ul>
        <li>{props.title}</li>
        <li>{props.diretor}</li>
        <li>{props.ano}</li>
      </ul>
    </div>
  );
}
function Movie3(props) {
  return (
    <div>
      <h1>Filme 3</h1>
      <ul>
        <li>{props.title}</li>
        <li>{props.diretor}</li>
        <li>{props.ano}</li>
      </ul>
    </div>
  );
}

function Movie(props) {
  return (
    <div>
      <h1>{props.movies.text}</h1>
      <ul>
        <li>{props.movies.title}</li>
        <li>{props.movies.diretor}</li>
        <li>{props.movies.ano}</li>
      </ul>
    </div>
  );
}
const movies = [{
  text: 'Alien vs. Predador',
  title: 'Alien',
  diretor: 'Davis',
  ano: '2004'
},
{
  text: 'Duna',
  title: 'Ficção',
  diretor: 'Denis',
  ano: '2021'
},
{
  text: 'A Monster Calls',
  title: 'Calls',
  diretor: 'Juan',
  ano: '2016'
}];

function App() {
  return (
    <div>
      <Movie1 title='Alien vs. Predador' diretor='Davis Entertainm' ano='2004' />
      <Movie2 title='Duna' diretor='Denis Villeneuve' ano='2021' />
      <Movie3 title='A Monster Calls' diretor='Juan Antonio' ano='2016' />

      {movies.map((movie) => (
        <Movie movies={movie} />
      ))}
    </div>
  )
}

export default App;
