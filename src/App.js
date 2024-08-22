import './App.css';
import logo from "./assets/logo.png";
import chadText from "./assets/CHAD.png";
import chadDesc from "./assets/cocaine.png";
import dex from "./assets/dex.svg";
import tw from "./assets/tw.svg";
import tg from "./assets/tg.svg";
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
            <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" alt="telegram" src={tg} /></a>
            <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" alt="twitter" src={tw} /></a>
            <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" alt="dexscreener" src={dex} /></a>
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
        <h2 className="heading">Snort, Flip, Repeat.</h2>
        <p className="">Join the $CHAD cartel and ride the white line to financial freedom. Are you ready to get high?</p>
        <button className="btn">BUY $CHAD</button>
        <div className="socialBlock">
          <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" alt="telegram" src={tg} /></a>
          <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" alt="twitter" src={tw} /></a>
          <a href="https://t.me/_" target="_blank" rel="noopener noreferrer"><img className="social" alt="dexscreener" src={dex} /></a>
        </div>
        <p className="CR">© All Rights Reserved By CHAD, in case if you steal anything from him he will fuck you in the ass.</p>
      </div>
    </div>
  );
}

export default App;
