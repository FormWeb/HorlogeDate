import logo from './logo.svg';
import './App.css';
import DateJour from './component/date/date';
import Horloge from './component/horloge/horloge';
import {useState} from "react"

function App() {

  const [showTime, setShowTime] = useState(true)

  const onClick = () => {
    setShowTime(previous => !previous)
  }

  return (
    <div className="App">
      <h1>Exo Date</h1>
      <button onClick={onClick}>Change</button>
      {showTime ? (
        <Horloge />
      ) : (
        <DateJour />
      )}
    </div>
  );
}

export default App;
