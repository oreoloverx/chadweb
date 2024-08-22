
import round from '../assets/spinImg.png'
import './Overlay.css';


export default function Coming({ playAudio }) {

  return (
    <>
      <div
        className="overlay"
      >
        <div className="overlay-inside">
          <div className="imagesOverlay">
                <div className="spinBlock">
                    <img className="spinImg" alt="girl" src={round} />
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
