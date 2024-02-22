import { useState } from "react";
import iLogo from "./assets/42ico.svg";
import Landing from "./components/Landing/Landing";
import TChallenge1 from "./components/TChallenge1/TChallenge1";
import TChallenge2 from "./components/TChallenge2/TChallenge2";

import "./App.css";

function App() {
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
            className="imagenLogo"
          />
        </div>
        <div className="containerButton">
          <button
            className="buttonNav"
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
            className="buttonNav"
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
        <Landing />
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
