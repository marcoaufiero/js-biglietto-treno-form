function displayTicket(){

    let userName = document.getElementById("inputName").value;
    
    let km = document.getElementById("inputKm").value;
    
    let userAge = parseInt(document.getElementById("inputAge").value);

    const priceKm = 0.21;
    
    let ticketPrice = parseFloat(km * priceKm).toFixed(2);
    
    let ticketDiscount;
    
    let ticketType;

    let wagonNumber;

    if(userAge === 1){
        
        ticketDiscount = (ticketPrice / 100) * 20;
    
    }else if(userAge === 3){
        
        ticketDiscount = (ticketPrice / 100) * 40;
     
    }else{
        ticketDiscount = 0;
        
    }
    
    if(ticketDiscount !== 0){
        ticketType = "Bigletto ridotto"
    }else{
        ticketType = "Biglietto standard"
    }

    wagonNumber = Math.floor(Math.random() * 10) + 1;

    cpNumber = Math.floor(Math.random() * 9999) + 1;



    ticketDiscount = parseFloat(ticketDiscount).toFixed(2);
    
    let finalPrice = parseFloat(ticketPrice - ticketDiscount).toFixed(2);
    
    document.getElementById('yourTicket').innerHTML = `IL TUO BIGLIETTO`
    
    document.getElementById('details').innerHTML = `DETTAGLI PASSEGGERO`;

    document.getElementById('passengerTitle').innerHTML = `NOME PASSEGGERO`;
    document.getElementById('passengerName').innerHTML = `${userName}`;

    document.getElementById('offerTitle').innerHTML = `Offerta`;
    document.getElementById('ticketType').innerHTML = `${ticketType}`;

    document.getElementById('wagonTitle').innerHTML = `Carrozza`;
    document.getElementById('wagonNumber').innerHTML = `#${wagonNumber}`;

    document.getElementById('cpTitle').innerHTML = `Codice CP`;
    document.getElementById('cpNumber').innerHTML = `${cpNumber}`;

    document.getElementById('priceTitle').innerHTML = `Costo Biglietto`;
    document.getElementById('displayTicket').innerHTML = `${finalPrice}`;

    document.getElementById('ticket').classList.remove('d-none')

}