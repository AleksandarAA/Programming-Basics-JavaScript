function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let studentTicketCount = 0;
  let standardTicketCount = 0;
  let kidTicketCount = 0;
  while (command !== "Finish") {
    let movieName = command;
    let freeSpace = Number(input[index]);
    index++;

    let temCommand = input[index];
    index++;

    let soldTicket = 0;
    while (temCommand !== "End") {
      let ticketType = temCommand;
      soldTicket++;

      switch (ticketType) {
        case "student":
          studentTicketCount++;
          break;
        case "standard":
          standardTicketCount++;
          break;
        case "kid":
          kidTicketCount++;
          break;
      }
      if (freeSpace <= soldTicket) {
        break;
      }
      temCommand = input[index];
      index++;
    }
    let totalFreeSpace = (soldTicket / freeSpace) * 100;
    console.log(`${movieName} - ${totalFreeSpace.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }
  let totalTickets = standardTicketCount + studentTicketCount + kidTicketCount;
  let studentPurcent = (studentTicketCount / totalTickets) * 100;
  let standardPurcent = (standardTicketCount / totalTickets) * 100;
  let kidPurcent = (kidTicketCount / totalTickets) * 100;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${studentPurcent.toFixed(2)}% student tickets.`);
  console.log(`${standardPurcent.toFixed(2)}% standard tickets.`);
  console.log(`${kidPurcent.toFixed(2)}% kids tickets.`);
}
cinemaTickets([""]);
