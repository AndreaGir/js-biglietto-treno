let numeroChilometri = prompt('Quanti chilometri devi fare?')

let eta = prompt('Quanti anni hai?')

let biglietto = 0.21

let prezzoPerChilometro = numeroChilometri * biglietto

let prezzoScontoRagazzi = 0.2

let prezzoScontoAnziani = 0.4





if ( eta < 18 ){
     
    var prezzo = prezzoPerChilometro - prezzoScontoRagazzi

}
else if (eta > 65){
    var prezzo = prezzoPerChilometro - prezzoScontoAnziani
}
else{

    var prezzo = prezzoPerChilometro

}

 document.getElementById('prezzoBiglietto').innerHTML = prezzo.toFixed(2) + '&euro;'




