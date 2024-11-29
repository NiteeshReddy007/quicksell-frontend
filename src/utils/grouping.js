export const groupTickets = (tickets, groupBy, users) => {
    if (!Array.isArray(tickets)) return {};
  
    return tickets.reduce((groups, ticket) => {
      let key = ticket[groupBy] || 'Unassigned';
      if (groupBy === 'user') {
        const user = users.find((user) => user.id === ticket.userId);
        key = user ? user.name : 'Unassigned';
      }
  
      (groups[key] = groups[key] || []).push(ticket);
      return groups;
    }, {});
  };
  