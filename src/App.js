// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { answer, sendQuestion } from './redux';
import Parent from './components/Parent';

function App() {
  const dispatch = useDispatch()
  const _answer = useSelector(answer)

  return (
    <div className="App">
      <header className="App-header" style={{ marginBottom: '100px' }}>
        <h1>APP</h1>
        <p>Réponse de l'enfant :  {_answer} </p>
        <button
          onClick={() => dispatch(sendQuestion("T'as vu mon message"))}
        >
          Message à l'enfant
        </button>
      </header>
      <Parent />
    </div>
  );
}

export default App;
