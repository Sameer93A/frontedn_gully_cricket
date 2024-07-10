import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/InputBox";
import { PlayerBox } from "./components/PlayerBox";
import { Submit } from "./components/Submit";
import axios from "axios";
import { TableRender } from "./components/TableRender";

function App() {
  const [firstCaptainName, setFirstCaptainName] = useState("");
  const [secondCaptainName, setSecondCaptainName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [randomPlayerData, setRandomPlayerData] = useState(null);

  async function handleSubmit() {
    // split take string convert them into an array
    const playerNamesArray = playerName.split(",").map((name) => name.trim());
    const data = {
      firstCaptain: firstCaptainName,
      secondCaptain: secondCaptainName,
      playerName: playerNamesArray,
    };

    try {
      const randomPlayer = await axios.post(process.env.BACKEND_URL, data);
      setRandomPlayerData(randomPlayer.data);
    } catch (error) {
      console.error("Error fetching random player data:", error);
    }
  }
  return (
    <div>
      <h1 className="flex justify-center text-xl pb-4 font-bold">
        Randomize Your Team
      </h1>
      <InputBox
        onChange={(e) => {
          setFirstCaptainName(e.target.value);
        }}
        Name="First Captain Name"
        placeholder="Enter Captain Name"
      />
      <InputBox
        onChange={(e) => {
          setSecondCaptainName(e.target.value);
        }}
        Name="Second Captain Name"
        placeholder="Enter Captain Name"
      />
      <PlayerBox
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
        Name="Player Name"
        placeholder="Enter player Name"
      ></PlayerBox>
      <Submit onClick={handleSubmit}></Submit>
      {randomPlayerData && <TableRender randomPlayerData={randomPlayerData} />}
    </div>
  );
}

export default App;
