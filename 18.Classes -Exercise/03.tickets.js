function ticketSorter(tickets, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }
    let result = []
    // for (const line of tickets) {
    //     let [destination, price, status] = line.split('|');
    //     let ticket = new Ticket(destination, price, status)
    //     result.push(ticket)
    // }

   tickets.map((el) =>{
    let [destination, price, status] = el.split('|');
    price = Number(price);
    result.push(new Ticket(destination, price, status))
   
   })
 
  return result.sort((a,b) => {
    if(typeof a[criteria] === 'number') {
        return a[criteria] - b[criteria]
    } else {
        return a[criteria].localeCompare(b[criteria])
    }
  })  

}

ticketSorter(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')



