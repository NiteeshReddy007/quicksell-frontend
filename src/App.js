import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import FilterMenu from './components/FilterMenu';
import { fetchTickets } from './utils/api';
import './styles/KanbanBoard.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const [userData,SetUserData]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets);
      SetUserData(data.users)
    };
    fetchData();
  }, []);



  return (
    <div className="App">
      <FilterMenu groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} users={userData} />
    </div>
  );
}

export default App;
