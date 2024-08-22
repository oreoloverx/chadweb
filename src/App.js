import './App.css';
import logo from "./assets/logo.png";
import chadText from "./assets/CHAD.png";
import chadDesc from "./assets/cocaine.png";
import dex from "./assets/dex.png";
import tw from "./assets/tw.png";
import tg from "./assets/tg.png";
import chad from "./assets/mainchad.png"

function App() {
  let ca = "-TBA-";

  return (
    <div className="App">
      <div className="section1">
        <div className="section1-block">
          <img className="logo" alt="logoChad" src={logo}/>
          <img className="chadText" alt="$CHAD" src={chadText}/>
          <img className="chadDesc" alt="Cocaine High And Dominant" src={chadDesc}/>
          <div className="cabox">
            <p className="caText">CA: {ca}</p>
          </div>
          <div className="socialBlock">
            <img className="social" src={tg} />
            <img className="social" src={tw} />
            <img className="social" src={dex} />
          </div>
          <img className="chad" alt="CHAD" src={chad}/>
        </div>
      </div>
    </div>
  );
}

export default App;
