function displayTicket(){

    let km = document.getElementById("inputKm").value;
    
    let userAge = parseInt(document.getElementById("inputAge").value);


    // console.log(userAge, km)

    const priceKm = 0.21;
    
    let ticketPrice = parseFloat(km * priceKm).toFixed(2);
    
    let ticketDiscount;
    
    if(userAge === 1){
        ticketDiscount = (ticketPrice / 100) * 20;
    
        console.log("1")

    }else if(userAge === 3> 65){
        ticketDiscount = (ticketPrice / 100) * 40;
    
        console.log("3")

    }else{
        ticketDiscount = 0;

        console.log("2")
    }
    
    let ticketDiscountAlert = parseFloat(ticketDiscount).toFixed(2);
    
    let finalPrice = parseFloat(ticketPrice - ticketDiscount).toFixed(2);
    
    if(ticketDiscount !== 0){
    
        document.getElementById('ticketDiscountDisplay').innerHTML = `E' stato applicato uno sconto di € ${ticketDiscountAlert}`;
    }
    
    document.getElementById('displayTicket').innerHTML = `Il prezzo del biglietto è € ${finalPrice}`;

    // console.log(ticketDiscount)

}