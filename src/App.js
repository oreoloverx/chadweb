import './App.css';
import logo from "./assets/logo.png";
import chadText from "./assets/CHAD.png";
import chadDesc from "./assets/cocaine.png";
import dex from "./assets/dex.png";
import tw from "./assets/tw.png";
import tg from "./assets/tg.png";
import chad from "./assets/mainchad.png";
import boat from "./assets/boat.png";

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
            <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" src={tg} /></a>
            <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" src={tw} /></a>
            <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" src={dex} /></a>
          </div>
          <img className="chad" alt="CHAD" src={chad}/>
        </div>
      </div>
      <div className="section2">
          <div className="section2-block">
            <div className="s2b-left">
              <h2 className="heading1">Utility: Farming Rewards Forever</h2>
              <p className="text">
                Top $CHAD holders farm massive TX fees—stack your bags and watch the rewards flow nonstop. The dev is all-in, reinvesting his 20% cut to keep the cartel growing stronger. Get in, hold tight, and let the narco profits roll in forever (DYOR: https://docs.moonshot.cc/faq)
              </p>
            </div>
            <div className="s2b-right">
              <img className="boat" alt="ChadsBoat" src={boat} />
            </div>
          </div>
        </div>
        <div className="section3">
          <p className="divider"></p>
        </div>
        <div className="section4">
          <div className="">
          <h2 className="heading">Snort, Flip, Repeat.</h2>
          <p className="">
        </div>
    </div>
  );
}

export default App;
