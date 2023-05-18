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
      <h1>Filme 4</h1>
      <ul>
        <li>{props.movie.text}</li>
        <li>{props.movie.title}</li>
        <li>{props.movie.diretor}</li>
      </ul>
    </div>
  );
}
const movie = [{
  text: '',
  title: '',
  diretor: ''
}];

function App() {
  return (
    <div>
      <Movie1 title='Alien vs. Predador' diretor='Davis Entertainm' ano='2004' />
      <Movie2 title='Duna' diretor='Denis Villeneuve' ano='2021' />
      <Movie3 title='A Monster Calls' diretor='Juan Antonio' ano='2016' />

      <Movie movie={{ text: 'Um belo filme', title: 'O Dev', diretor: 'Jorge H.' }} />
    </div>
  )
}

export default App;
