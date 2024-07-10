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
    <div className="mt-2">
      <div className="flex justify-center">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {Object.keys(randomPlayerData).map((captain, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {captain}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                {Object.values(randomPlayerData).map((players, index) => (
                  <td key={index} className="px-6 py-4">
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
    </div>
  );
};
