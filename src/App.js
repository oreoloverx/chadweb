import './App.css';
import Coming from './components/Coming';

function App() {
  let ca = "-TBA-";

  const playAudio = () => {
    const audio = document.querySelector('.audio');
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="App">
      <Coming playAudio={playAudio}/>
    </div>
  );
}

export default App;
