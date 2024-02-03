
import { useState } from 'react';
import './App.css';
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';


function App() {

  const [isGameStartted, setisGameStartted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStartted((prev) => !prev);
  };

  return (
    <div className="App">
      {isGameStartted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

export default App;
