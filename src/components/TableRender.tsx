import React from "react";

interface PlayerData {
  [key: string]: string[];
}

interface TableRenderProps {
  randomPlayerData: PlayerData;
}

export const TableRender: React.FC<TableRenderProps> = ({
  randomPlayerData,
}) => {
  return (
    <div className="flex justify-center m-2">
      <div className="relative overflow-x-auto">
        <table className="text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {Object.keys(randomPlayerData).map((captain, index) => (
                <th key={index} className="pt-3 pb-3 pl-1 pr-10 border">
                  {captain}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(randomPlayerData).map((players, index) => (
                <td key={index} className="pr-1 pl-10 border">
                  <ul>
                    {players.map((player, idx) => (
                      <li key={idx}>{player}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
