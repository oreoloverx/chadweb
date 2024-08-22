import './App.css';
import logo from "./assets/logo.png";
import chadText from "./assets/CHAD.png";
import chadDesc from "./assets/cocaine.png";
import chadMob from "./assets/cocainemob.png";
import dex from "./assets/dex.svg";
import tw from "./assets/tw.svg";
import tg from "./assets/tg.svg";
import chad from "./assets/mainchad.png";
import boat from "./assets/boat.png";
import sound from './assets/music/audio.mp3';
import Overlay from './components/Overlay';
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
