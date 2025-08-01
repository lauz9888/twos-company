import React, { useState } from "react";
import MenuScreen from "./MenuScreen";
import SeasonMenu from "./SeasonMenu";
import Season1Home from "./Season1Home";

function App() {
  const [screen, setScreen] = useState("main");

  return (
    <>
      {screen === "main" && (
        <MenuScreen onSeasonMenu={() => setScreen("season")} />
      )}
      {screen === "season" && (
        <SeasonMenu
          onHome={() => setScreen("main")}
          onSeason1={() => setScreen("season1home")}
        />
      )}
      {screen === "season1home" && (
        <Season1Home onHome={() => setScreen("main")} />
      )}
    </>
  );
}

export default App;