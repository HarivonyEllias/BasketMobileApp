// Table.tsx

import React, { useEffect, useState } from 'react';
import '../styles/Table.css'; // Import CSS file for styling

interface Player {
  id: number;
  nom: string;
  prenom: string;
  idEquipe: number;
  equipe: { id: number; nom: string };
}

interface PlayerStats {
  joueur: Player;
  pointsParMatch: number;
  rebondParMatch: number;
  passeDecisiveParMatch: number;
  minuteParMatch: number;
  tir: number;
  tir3points: number;
  tirLancerFranc: number;
}

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10; // Number of items to display per page
  const [data, setData] = useState<PlayerStats[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://stat-basket.onrender.com/statistiques');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result); // Log the fetched data
        setData(result.Data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  // Pagination logic
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentPlayers: PlayerStats[] = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // {"joueur":{"id":1,"nom":"Smith","prenom":"John","idEquipe":1,"equipe":{"id":1,"nom":"Lions de la Ville"}},
  // "pointsParMatch":1.0,"rebondParMatch":1.0,"passeDecisiveParMatch":0.0,"minuteParMatch":60.0,"tir":0.0,"tir3points":0.0,"tirLancerFranc":0.0}
  return (
    <div className="table-container">
      <h2>NBA Players Stats</h2>
      <div className="table-scroll">
        <table className="custom-table">
          <thead>
            <tr>
            <th>Joueur</th>
            <th>Equipe</th>
            <th>Minutes</th>
            <th>PPM</th>
            <th>RPM</th>
            <th>PDPM</th>
            <th>MPM</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>LF%</th>
            </tr>
          </thead>
          <tbody>
            {currentPlayers.map((player, index) => (
              <tr key={index}>
                <td>{player.joueur.nom} {player.joueur.prenom}</td>
                <td>{player.joueur.equipe.nom}</td>
                <td>{player.minuteParMatch}</td>
                <td>{player.pointsParMatch}</td>
                <td>{player.rebondParMatch}</td>
                <td>{player.passeDecisiveParMatch}</td>
                <td>{player.minuteParMatch}</td>
                <td>{player.tir}</td>
                <td>{player.tir3points}</td>
                <td>{player.tirLancerFranc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= data.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
