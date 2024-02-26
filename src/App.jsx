// Import hooks of react
import { useState } from "react";
// Import of components
import iLogo from "./assets/42ico.svg";
import LandingPage from "./components/LandingPage/LandingPage";
import TChallenge1 from "./components/TChallenge1/TChallenge1";
import TChallenge2 from "./components/TChallenge2/TChallenge2";
// Import styles css
import "./App.css";

function App() {
  // Intialize of local states for handler visibility of components
  const [buttonActive, setButtonActive] = useState({
    landing: true,
    buttonChallenge1: false,
    buttonChallenge2: false,
  });
  return (
    <div className="container">
      <nav className="containerNav">
        <div className="containerlogo">
          <img
            onClick={() => {
              setButtonActive({
                landing: true,
                buttonChallenge1: false,
                buttonChallenge2: false,
              });
            }}
            src={iLogo}
            alt="42i - logo"
            className={buttonActive.landing ? "imagenLogoActive" : "imagenLogo"}
          />
        </div>
        <div className="containerButton">
          <button
            className={
              buttonActive.buttonChallenge1 ? "buttonNavAcive" : "buttonNav"
            }
            onClick={() => {
              setButtonActive({
                landing: false,
                buttonChallenge1: true,
                buttonChallenge2: false,
              });
            }}
          >
            TWO NUMBER SUM
          </button>
          <button
            className={
              buttonActive.buttonChallenge2 ? "buttonNavAcive" : "buttonNav"
            }
            onClick={() => {
              setButtonActive({
                landing: false,
                buttonChallenge1: false,
                buttonChallenge2: true,
              });
            }}
          >
            NON-CONSTRUCTIBLE CHANGE
          </button>
        </div>
      </nav>
      {buttonActive.landing ? (
        <LandingPage />
      ) : buttonActive.buttonChallenge1 ? (
        <TChallenge1 />
      ) : buttonActive.buttonChallenge2 ? (
        <TChallenge2 />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
