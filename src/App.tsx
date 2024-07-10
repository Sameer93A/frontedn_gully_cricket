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
      const randomPlayer = await axios.post(
        "https://my-app.sameer937655.workers.dev/api/v1/captain",
        data
      );
      setRandomPlayerData(randomPlayer.data);
    } catch (error) {
      console.error("Error fetching random player data:", error);
    }
  }
  return (
<<<<<<< HEAD
    <div className="">
=======
    <div>
>>>>>>> 79ea8880fd0af49e859c43b7208b9a9094462ca0
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
<<<<<<< HEAD
        placeholder="eg :- sohan,mohan"
=======
        placeholder="Enter player Name"
>>>>>>> 79ea8880fd0af49e859c43b7208b9a9094462ca0
      ></PlayerBox>
      <Submit onClick={handleSubmit}></Submit>
      {randomPlayerData && <TableRender randomPlayerData={randomPlayerData} />}
    </div>
  );
}

export default App;
