function displayTicket(){

    let km = document.getElementById("inputKm").value;
    
    let userAge = parseInt(document.getElementById("inputAge").value);

    const priceKm = 0.21;
    
    let ticketPrice = parseFloat(km * priceKm).toFixed(2);
    
    let ticketDiscount;
    
    if(userAge === 1){
        
        ticketDiscount = (ticketPrice / 100) * 20;
    
    }else if(userAge === 3){
        
        ticketDiscount = (ticketPrice / 100) * 40;
     
    }else{
        ticketDiscount = 0;
        
    }
    
    ticketDiscount = parseFloat(ticketDiscount).toFixed(2);
    
    let finalPrice = parseFloat(ticketPrice - ticketDiscount).toFixed(2);
    
    console.log(ticketDiscount)
    console.log(finalPrice)
    
    document.getElementById('displayTicket').innerHTML = `Il prezzo del biglietto è € ${finalPrice}`;

    console.log(ticketDiscount)

}