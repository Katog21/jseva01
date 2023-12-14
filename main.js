// creamos la funcion para calcular el precio de cantidad de entradas
function buyTicket () {
    
    //creamos la constante para calcular el total a pagar
    const priceTicket = 9.99;
 
    //le pedimos cuantos tickets quiere comprar
    let numbTicket = Number(prompt("How many Tickets :) ?"));
    let nameTicket = prompt("do you want rename your tickets? Yes or No").toLowerCase();
    
    //condicional para decidir si renonmbra el ticket

    if (nameTicket === "yes"){
    //bucle por cantidad de ticket ingresados se solicita el nombre
    for ( let name = 1; name <= numbTicket; name++) {
        let nombre = prompt(`enter your Name for the ${name} ticket`);

        alert (`your ${name} ticket is assigned to ${nombre}`) 
    }
 }
    //calculamos el costo
    let totalCost = numbTicket * priceTicket;    
     // crear un condicional para limitar el costo y la entrada
     if (numbTicket && priceTicket > 0 ) {
        alert (`Your cost for ${numbTicket} tickets : $ ${totalCost}`)
     } 
     else{
        alert ("please enter valid keys");
     }

}
  buyTicket(); 
  

