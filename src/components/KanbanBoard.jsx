import React from 'react';
import { groupTickets } from '../utils/grouping';
import { sortTickets } from '../utils/sorting';
import Card from './Card';
import '../styles/KanbanBoard.css';

function KanbanBoard({ tickets, groupBy, sortBy, users }) {
  const groupedTickets = groupTickets(tickets, groupBy, users);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h3>{group.toUpperCase()}</h3>
          {sortTickets(groupedTickets[group], sortBy).map((ticket) => (
            <Card key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
