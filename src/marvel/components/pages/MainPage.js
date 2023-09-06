import React, { useState } from "react";
import { CharInfo } from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import { RandomChar } from "../randomChar/RandomChar";
import decoration from "../../resource/img/vision.png";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

export const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div>
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};
